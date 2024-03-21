<template>
    <div class="postNewsDetail">
        <div class="postNewsDetail-header"></div>
        <div class="postNewsDetail-content">
            <div class="postNewsDetail-time">        
                <SvgIcon name="fabusekuai" width="14px" height="14px"></SvgIcon>
                <span >发布于 {{ time }}</span>
            </div>
            <strong>{{ tittle }}</strong>
            <div class="postNewsDetail-footer">
                <li>
                    <SvgIcon name="redu" width="14px" height="14px"></SvgIcon>
                    <span class="SvgIcon-text">{{ heat }} 热度</span>
                </li>
                <li>
                    <SvgIcon name="31pinglun" width="16px" height="16px"></SvgIcon>
                    <span>{{ commentNum }} 评论</span>
                </li>
                <li>
                    <SvgIcon name="dianzan" width="16px" height="16px"></SvgIcon>
                    <span>{{ likeNum }} 喜欢</span>
                </li>
            </div>
            <p class="text-content">{{ introText }}</p>
            <div class="tag-list">
                <div style="display: flex;align-items: center;">
                    <SvgIcon name="shenghuofuwu" width="16px" height="16px"></SvgIcon>
                    <span>生活倒影</span>
                </div>
                <div style="display: flex;align-items: center;">
                    <SvgIcon name="nianling" width="18px" height="18px"></SvgIcon>
                    <span>被偷走の那几年</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SvgIcon from '../svg-icon/index.vue'
export default {
    props: ['time', 'tittle', 'commentNum', 'likeNum', 'heat', 'introText'],
    components: {
        SvgIcon
    },
    data() {
        return {

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
.postNewsDetail {
    height: 50vh;
    width: 18vw;
    // background-color: #00FFFF;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    // margin-right: 20px;,
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    // font-family: 'navbarFont', sans-serif;

}

.postNewsDetail-header {
    height: 40%;
    width: 100%;
    background-color: #008B8B;
    border-radius: 20px 20px 0 0;
    // margin-top: 10px;
}

.postNewsDetail-content {
    height: 60%;
    width: 90%;
    // padding: 20px;
    // background-color: #1ec735;
    margin-left: 13px;
    display: flex;
    flex-direction: column;
    // padding-top: 10px;
    // text-align: center;

}

.postNewsDetail-time {
    font-size: 14px;
    margin-top: 10px;
    display: flex;
    align-items: center;
}
.postNewsDetail-time span {
    margin-left: 2px;
}


strong {
    font-size: 18px;
    margin-top: 4px;
    letter-spacing: 1px;

}

.postNewsDetail-footer {
    height: 2px;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 0;
    margin-top: 10px;
    color: #626363;
    font-size: 16px;
    // align-items: flex-start;
}

.postNewsDetail-footer li {
    margin-right: 10px;
    /* 设置列表项之间的间距 */
    display: flex;
    /* 将列表项设置为弹性盒子 */
    align-items: center;
    /* 垂直居中对齐 */
}
.postNewsDetail-footer li span {
    margin-left: 2px;
}

.text-content {
    // padding-top: 5px;
    // font-family: 'navbarFont', sans-serif;
    letter-spacing: 1px;
    font-size: 14px;
}

.tag-list {
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    padding: 0;
    margin-top: -5px;
    flex-wrap: wrap;
}

.tag-list div {
    height: 22px;
    background-color: #e9e9e9;
    margin-bottom: 5px;
    margin-right: 10px;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 2px;
    font-size: 14px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
}

// .SvgIcon-text{
//     padding-top: -3px;
// }</style>