<!-- CustomModal.vue -->
<template>
    <div class="message-container">
        <div class="comment-container">
            <div class="comment-tittle">
                <SvgIcon name="liuyanmoban" width="20px" height="20px"></SvgIcon>
                <span class="comment-tittle-words">留 言</span>
            </div>
            <div class="comment-textarea">
                <textarea v-model="commentInfo.comment" id="comment-text" cols="30" rows="10"
                    placeholder="说点什么吧！"></textarea>
            </div>
            <div class="comment-button">
                <div class="comment-svg">
                    <SvgIcon name="gailv" width="20px" height="20px"></SvgIcon>
                    <SvgIcon name="tuku" width="20px" height="20px"></SvgIcon>
                </div>
                <el-button type="success" :disabled @click="submit">提交</el-button>
            </div>
            <div class="comment-word">
                <span>你 来 第 一 个 发 言 啦 ~ ~ ~ ~</span>
            </div>
        </div>
        <p>----------------------------------------------------------------</p>
        <li v-for="(item, index) in commentWord" :key="index" class="commentDetail">
            <p>{{ index + 1 }}楼，{{ item.commentData }}</p>
            <p>评论是：{{ item.comment }}</p>
            <button>回复</button>
        </li>
    </div>

    <!-- </div> -->
</template>

<script>
import SvgIcon from '../svg-icon/index.vue'

export default {
    components: {
        SvgIcon
    },
    data() {
        return {
            disabled: false,
            commentInfo: {
                comment: '',
                commentData: '',

            }
        };
    },
    props: {
        commentWord: Array
    },
    methods: {
        submit() {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth() + 1; 
            const currentDay = currentDate.getDate();
            const currentHour = currentDate.getHours(); 
            const currentMinute = currentDate.getMinutes(); 

            this.commentInfo.commentData = `${currentYear}-${currentMonth}-${currentDay} ${currentHour}:${currentMinute}`; // 格式化为自定义的时间字符串
            // this.commentInfo.commentData = Date.now();
            this.$emit('submit', this.commentInfo);

            this.commentInfo.comment = '';
            // console.log(this.comment);
        },
        close() {
            this.$emit('close');
        },
    },
};
</script>

<style scoped>
/* 样式可以根据需要进行定制 */
.message-container {
    width: 98.5vw;
    /* height: 65vh; */
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.comment-container {
    width: 54em;
    height: 25em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.comment-tittle {
    width: 48em;
    height: 2em;
}

.comment-tittle-words {
    font-size: 20px;
    font-family: 'navbarFont', sans-serif;
    font-style: italic;
    color: #f8c149;
    margin-left: 5px;
}

#comment-text {
    width: 40em;
    height: 12em;
    border-color: #f8c149;
    border-radius: 8px;
    resize: none;
    font-size: 20px;
    background-image: url('/src/assets/source/comment.jpg');
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.comment-svg {
    width: 3.5em;
    height: 2em;
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

.commentDetail {
    /* z-index: 5; */
    list-style-type: none;
    border: 1px solid #f8c149;
    /* border-color: #f8c149; */
    font-family: 'navbarFont', sans-serif;

    width: 48em;
    border-radius: 15px;
    padding-left: 30px;
    letter-spacing: 3px;
    margin-bottom: 2em;
}


button {
    margin: 0 5px;
}
</style>