<template>
    <div class="page">
        <Navigation />
        <div class="TopBar">
            <div class="tittle">
                <span class="shuDong">树 洞</span>
                <input type="text" class="shuDongInput" placeholder="给树洞说说你的心事吧 ~">
            </div>
        </div>
        <div class="message-container">
            <div class="comment-container">
                <div class="comment-tittle">
                    <SvgIcon name="liuyanmoban" width="20px" height="20px"></SvgIcon>
                    <span class="comment-tittle-words">留 言</span>
                </div>
                <div class="comment-textarea">
                    <textarea name="comment" id="comment-text" cols="30" rows="10" placeholder="说点什么吧！"></textarea>
                </div>
                <div class="comment-button">
                    <div class="comment-svg">
                        <SvgIcon name="gailv" width="20px" height="20px"></SvgIcon>
                        <SvgIcon name="tuku" width="20px" height="20px"></SvgIcon>
                    </div>
                    <el-button type="success" :disabled>提交</el-button>
                </div>
                <div class="comment-word">
                    <span>你 来 第 一 个 发 言 啦 ~ ~ ~ ~</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from './Navigation.vue'
import SvgIcon from '../components/svg-icon/index.vue'

export default {
    components: {
        Navigation,
        SvgIcon,
    },
    data() {
        return {
            disabled: false,
        }
    },

    computed: {},

    watch: {},

    created() {

    },

    mounted() {

    },

    methods: {}
}
</script>

<style lang="scss" scoped>
.page {
    margin: -10px 0px 0px 0px;
    // margin-top: 0px;
    top:0px;
    background: url("../assets/source/bcg3.png") no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
}
.TopBar {
    width: 100%;
    // height: 57vh;
    height: 101vh;
    // background-image: url('../assets/source/bcg3.png');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    // position: absolute;
    // top: 0;
    // right: 0;
}

.topWrap {
    width: 98.7vw;
    height: 101vh;
}

.tittle {
    width: 40vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.shuDong {
    font-size: 30px;
    font-family: 'navbarFont', sans-serif;
    color: aliceblue;
    margin-bottom: 20px;
}

.shuDongInput {
    width: 18em;
    height: 3em;
    border-radius: 20px;
    border-color: rgb(255, 255, 255);
    background-color: transparent;
    color: rgb(255, 255, 255);

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

.message-container {
    width: 98.5vw;
    // height: 57vh;
    height: 65vh;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
}


.comment-container {
    width: 54em;
    // height: 57vh;
    height: 25em;
    // background-color: #c73030;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.comment-tittle {
    width: 48em;
    height: 2em;
    // background-color: aqua;
}

.comment-tittle-words {
    font-size: 20px;
    font-family: 'navbarFont', sans-serif;
    font-style: italic;
    color: #f8c149;
    margin-left: 5px;
    // margin-bottom: 10px;
}

#comment-text {
    width: 40em;
    height: 12em;
    border-color: #f8c149;
    border-radius: 8px;
    resize: none;
    font-size: 20px;
    background-image: url('../assets/source/comment.jpg');
    background-size: 35% 70%;
    background-repeat: no-repeat;
    background-position: 98% 95%;
    margin-bottom: 10px;
    
}

#comment-text::placeholder {
    font-size: 16px;
    font-style: italic;
    text-indent: 8px;
}

.comment-button {
    width: 50em;
    height: 2em;
    // background-color: #f8c149;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.comment-svg{
    width: 3.5em;
    height: 2em;
    // background-color: aqua;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.comment-word {
    width: 46em;
    height: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    /* 设置占位符字体大小为14像素 */
    font-style: italic;
    /* 设置占位符字体样式为斜体 */
    font-family: 'navbarFont', sans-serif;

}
</style>