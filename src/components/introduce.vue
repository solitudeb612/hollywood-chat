<template>
    <div class="page">
        <div class="tittle">
            <span class="tittleWord">网站介绍</span>
        </div>
        <Navigation />
        <div class="mainContainer">
            <div class="introduceContainer">
                <div class="envelope"></div>
                <div class="introduceTittle">🌸本站信息</div>
                <div class="introduceMsg">
                    <div class="Msg-left"></div>
                    <div class="Msg-container">
                        <span>网站名称：Vuechat</span>
                        <span>网址：www..........</span>
                        <span>描述：这是一个基于Vue3的博客系统，里面有很多功能供给大家体验</span>
                        <span>网站封面：www.....</span>
                    </div>
                </div>
                <div class="introduceTittle">🌸申请方式</div>
                <div class="introduceMsg">
                    <div class="Msg-left"></div>
                    <div class="Msg-container">
                        <span>点击上方信封✨✨✨</span>
                        <span>不会添加带有广告营销和没有实质性内容的友链🚫🚫🚫</span>

                        <span>申请之前请将本网站添加为您的友链哦🎟️🎟️🎟️</span>
                    </div>
                </div>
                <div class="dashed-line"></div>
                <div class="introduceTittle">♥️青出于蓝</div>
                <div class="dashed-line"></div>
                <div class="introduceTittle">🥇友情链接</div>
            </div>
        </div>
        <!-- <div class="b"></div> -->
    </div>
</template>

<script>
import Navigation from './Navigation.vue'
export default {
    components: {
        Navigation
    },
    data() {
        return {}
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
    background: url("../assets/source/bcg2.png") no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
}

.tittle {
    width: 100%;
    height: 40vh;
    background-color: rgba(0, 0, 0, 0.35);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 50px;
    // position: absolute;
    // top: 13px;
    z-index: 1;
}

.tittleWord {
    font-family: 'navbarFont', sans-serif;
    letter-spacing: 4px;
    font-weight: 300;
    // font-style:oblique;
}

.mainContainer {
    width: 100%;
    height: 200vh;
    // background-color: aqua;
    margin-top: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.introduceContainer {
    width: 75vw;
    height: 180vh;
    background-color: rgba(255, 255, 255, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 50px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: 1;
}

.envelope {
    width: 35rem;
    height: 30rem;
    background-color: aqua;
    margin-top: 8vh;
    margin-bottom: 4vh;

}

.introduceTittle {
    width: 65rem;
    height: 3rem;
    margin-top: 4vh;

    // background-color: rgba(255, 230, 250, 0.85);
    font-size: 23px;
    color: rgb(10, 10, 10);
    display: flex;
    align-items: center;
    font-family: 'navbarFont', sans-serif;
    letter-spacing: 3px;
}

.introduceMsg {
    margin-top: 4px;
    width: 65rem;
    // height: 10rem;
    background-color: rgba(255, 230, 250, 0.85);
    border-radius: 0px 10px 10px 0px;
    color: white;
    font-size: 50px;
    z-index: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.Msg-left {
    width: 4px;
    height: 100%;
    background-color: rgba(165, 33, 33, 0.85);
    border-radius: 20px 10px 10px 20px;
}

.Msg-container {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 18px;
    color: rgb(10, 10, 10);
    font-family: 'navbarFont', sans-serif;
}

span {
    height: 38px;
    text-align: center;
    line-height: 45px;
    display: flex;
    justify-content: center;
}

hr {
    position: relative;
    margin: 40px auto;
    border: 2px dashed var(--lightGreen);
    overflow: visible;
}

hr:before {
    position: absolute;
    top: -14px;
    left: 5%;
    color: var(--lightGreen);
    content: '❄';
    font-size: 30px;
    line-height: 1;
    transition: all 1s ease-in-out;
}

hr:hover:before {
    left: calc(95% - 20px);
}

.introduceObj {
    margin-top: 60px;
    font-size: 18px;
    color: rgb(10, 10, 10);
}

.introduceLink {
    margin-top: 60px;
    margin-left: 10px;
    font-size: 18px;
    color: rgb(10, 10, 10);
}

.dashed-line {
    margin-top: 40px;
    border-top: 4px dashed #57c086;
    /* 设置虚线样式、颜色和宽度 */
    width: 90%;
    /* 设置虚线的宽度 */
}
</style>