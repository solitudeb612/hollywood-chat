<template>
    <div class="page">
        <Navigation />
        <div class="TopBar">
            <!-- 弹幕 -->
            <div class="bullet-wrap">
                <div class="bullet-item bullet-animation" :class="{ 'bullet-item--c': item.isLoginUser }"
                    :data-line="item.line" v-for="item in bulletlist" @animationend="animationend" :key="item.id">
                    {{ item.name }}
                </div>
            </div>
            <div class="tittle">
                <span class="shuDong">树 洞</span>
                <div class="inputContainer">
                    <input type="text" class="shuDongInput" placeholder="给树洞说说你的心事吧 ~" ref="input" v-model="value">
                    <button class="InputButton" @click="sendBullet">发射~</button>
                </div>
            </div>
        </div>
        <!-- <CustomModal :commentWord="this.replyInfo" ref="customModal" @submit="submitComment" /> -->
        <CustomModal :commentWord="replyInfo" ref="customModal" @submit="submitComment" />
    </div>
</template>

<script>
import Navigation from './Navigation.vue'
import SvgIcon from '../components/svg-icon/index.vue'
import CustomModal from './admin/comment.vue';

import { ref } from 'vue';
import { onMounted } from 'vue';

export default {
    components: {
        Navigation,
        SvgIcon,
        CustomModal
    },
    data() {
        return {

            //弹幕
            list: [
                { id: this.getUUID, name: '好喜欢这个blog啊', isLoginUser: false, line: 0 },
                { id: this.getUUID, name: '终于完成了吗', isLoginUser: false, line: 0 },
                { id: this.getUUID, name: '呜呜呜，没开播很久了', isLoginUser: false, line: 0 },
                { id: this.getUUID, name: '哈哈哈哈哈哈哈哈', isLoginUser: false, line: 0 },
                { id: this.getUUID, name: '来了来了来了', isLoginUser: false, line: 0 },
                { id: this.getUUID, name: '看你吃东西真的很香', isLoginUser: false, line: 0 },
                { id: this.getUUID, name: '我去，你终于回来开播了', isLoginUser: false, line: 0 },
                { id: this.getUUID, name: '哈哈哈哈', isLoginUser: false, line: 0 },
                { id: this.getUUID, name: '我晕，好喜欢', isLoginUser: false, line: 0 }
            ], // 普通的弹幕队列
            clist: [], // c位的弹幕队列
            bulletlist: [], // 当前正在执行的
            value: '',
            idx: 3,
            radomNum: Date.now() + Math.random(),

            //评论区
            // isModalOpen: false,
            replyInfo: []

        }
    },
    props: {
        commentWord: Array
    },
    computed: {},

    watch: {},

    created() {

    },

    mounted() {
        setInterval(() => {
            var item = null;
            if (this.idx == 3) {
                item = this.clist.shift();
            }
            if (!item) {
                item = this.list.shift();
            }
            if (item) {
                item.line = this.idx;
                this.idx = (this.idx % 5 + 1);
                this.bulletlist.push(item)
            } else {
                if (this.clist.length) {
                    item = this.clist.shift();
                    item.line = 3;
                    this.idx = 3;
                    this.bulletlist.push(item)
                }
            }
        }, 1000)
    },

    methods: {
        animationend() {
            this.list.push(this.bulletlist.shift())
        },
        sendBullet() {
            if (this.value) {
                this.clist.push({
                    id: this.getUUID(),
                    name: this.value,
                    isLoginUser: true,
                    line: 0
                })
                this.value = ''
                this.$nextTick(v => {
                    this.$refs.input.focus()
                })
            }
        },
        getUUID() {
            return Date.now() + Math.random()
        },

        //评论区
        submitComment(commentInfo) {
            console.log('提交评论:', commentInfo);
            const newComment = {
                comment: commentInfo.comment,
                commentData: commentInfo.commentData
            };
            this.replyInfo.push(newComment);
            console.log('回复信息:', this.replyInfo);
            this.$refs.customModal.commentInfo.comment = ''; // 清空文本区域的内容
        }

    }
}
</script>

<style lang="scss" scoped>
.page {
    margin: -10px 0px 0px 0px;
    // margin-top: 0px;
    top: 0px;
    background: url("../assets/source/bcg3.png") no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}


.TopBar {
    width: 100%;
    height: 101vh;
    margin-bottom: 10px;
}

.topWrap {
    width: 98.7vw;
    height: 101vh;
}


.tittle {
    position: absolute;
    margin-left: 30vw;
    bottom: 40%;
    // margin-bottom: 200vh;
    width: 40vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 3;
}

.shuDong {
    font-size: 30px;
    font-family: 'navbarFont', sans-serif;
    color: aliceblue;
    margin-bottom: 20px;
}

.inputContainer {
    width: 18em;
    height: 3em;
    // background-color: rgb(21, 241, 241);
    display: flex;
    justify-content: center;
}

.shuDongInput {
    width: 18em;
    height: 92%;
    border-radius: 20px;
    border-color: rgb(255, 255, 255);
    background-color: transparent;
    color: rgb(255, 255, 255);

}

.InputButton {
    width: 4em;
    height: 100%;
    border-radius: 20px;
    border-color: rgb(255, 255, 255);
    background-color: transparent;
    color: rgb(255, 255, 255);
    margin-left: 10px;
    font-family: 'navbarFont', sans-serif;
    font-size: 17px;
    letter-spacing: 2px;
}

.shuDongInput:focus {
    border-color: red;
}

.shuDongInput::placeholder {
    color: rgb(255, 255, 255);
    /* 设置占位符字体颜色为灰色 */
    font-size: 16px;
    /* 设置占位符字体大小为14像素 */
    font-style: italic;
    /* 设置占位符字体样式为斜体 */
    text-indent: 20px;
}



* {
    padding: 0;
    margin: 0;
}

[v-cloak] {
    display: none !important;
}

.bullet-wrap {
    height: 400px;
    position: relative;
    overflow: hidden;
    font-size: 20px;
    background-size: cover;
    z-index: 1;
}

.bullet-item {
    text-shadow: 1px 1px #000;
    color: #000000;
    white-space: nowrap;
    user-select: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    border: 2px solid #4d4a4a;
    border-radius: 25px;
    padding: 10px;
    // background-color: #4d4a4a;
}

.bullet-item--c {
    border: 1px solid #ff000082;
}

.bullet-item[data-line="1"] {
    top: 40px
}

.bullet-item[data-line="2"] {
    top: 120px
}

.bullet-item[data-line="3"] {
    top: 200px
}

.bullet-item[data-line="4"] {
    top: 280px
}

.bullet-item[data-line="5"] {
    top: 360px
}

.bullet-animation {
    animation: right2left 4s linear both;
}

@keyframes right2left {
    0% {
        transform: translate(100vw)
    }

    100% {
        transform: translate(-100%);
    }
}
</style>