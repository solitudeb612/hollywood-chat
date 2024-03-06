<template>
    <div class="page">
        <Navigation />
        <div class="topWrap">
            <span style="color: #ffffff;">welcome to jin's blog</span>
            <span class="wrapWord">life like a demo with many bugs, let's debug !</span>
        </div>
        <div id="bannerWave1"></div>
        <div id="bannerWave2"></div>
        <div class="contanier">
            <div class="page-container">
                <div class="aside-container">
                    <div class="headPortrait">
                        <div class="Portrait">
                            暂无头像
                        </div>
                        <div class="UserDetial">
                            <div class="UserDetial_1">
                                <span>文章</span>
                                <span class="UserDetial_num">0</span>
                            </div>
                            <div class="UserDetial_1">
                                <span>分类</span>
                                <span class="UserDetial_num">0</span>
                            </div>
                            <div class="UserDetial_1">
                                <span>浏览量</span>
                                <span class="UserDetial_num">0</span>
                            </div>
                        </div>
                        <div class="friendCircle">朋友圈</div>
                    </div>
                    <div class="searchContainer">
                        <div class="searchDIV">搜 索</div>
                        <input type="text" placeholder="搜索文章" id="SearchInput">
                    </div>
                    <div class="classifyContainer">
                        <img src="./../assets/source/svg/sort.svg" alt="SVG Image" class="sort-icon">
                        <div class="sortDIV">分 类</div>
                    </div>
                </div>
                <div class="postNews">
                    <div class="message">
                        <img src="./../assets/source/svg/message.svg" alt="SVG Image" class="MSG-icon">
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import Navigation from "./Navigation.vue"
export default {
    components: {
        Navigation
    },
    data() {
        return {

        }
    },
    mounted() {
        // 获取图标元素
        var icon = document.querySelector('.MSG-icon');

        // 定义定时器
        var timer = setInterval(function () {
            // 移除动画类名
            icon.classList.remove('scale-animation');
            // 强制重新计算样式，触发浏览器重新渲染
            void icon.offsetWidth;
            // 添加动画类名
            icon.classList.add('scale-animation');
        }, 1000); // 每隔5秒执行一次
        // 清除定时器
        // clearInterval(timer);
    }
}
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'navbarFont';

    src: url('../assets/source/front/ZCOOLQingKeHuangYou-Regular.ttf') format('truetype');
}

.page {
    margin: -10px 0px 0px 0px;
    // margin-top: 0px;
    top: 0px;
    background: url("../assets/source/bcg2.png") no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
}

.topWrap {
    width: 100%;
    height: 97.9vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: #ffffff;
    font-family: 'BCGFont', sans-serif;

}

.wrapWord {
    font-size: 24px;
    margin-top: 10px;
    background-image: -webkit-linear-gradient(left, blue, #66ffff 10%, #cc00ff 20%, #CC00CC 30%, #CCCCFF 40%, #00FFFF 50%, #CCCCFF 60%, #CC00CC 70%, #CC00FF 80%, #66FFFF 90%, blue 100%);
    -webkit-text-fill-color: transparent;
    /* 字体设置成透明色 */
    -webkit-background-clip: text;
    /* 裁剪背景，使文字作为裁剪区域向外裁剪 */
    -webkit-background-size: 200% 100%;
    -webkit-animation: masked-animation 4s linear infinite;
}

#bannerWave1 {
    height: 84px;
    background: url(../assets/source/file1/bannerwave1.png) repeat-x;
    position: absolute;
    width: 200%;
    bottom: 0;
    z-index: 1;
    animation: gradientBG 120s linear infinite;
}

#bannerWave2 {
    height: 100px;
    background: url(../assets/source/file1/bannerwave2.png) repeat-x;
    position: absolute;
    width: 400%;
    bottom: 0;
    z-index: 2;
    animation: gradientBG 120s linear infinite;
    // margin-bottom: 0px;
}

.contanier {
    height: 60vh;
    width: 100%;
    background-color: rgb(255, 255, 255);
}

//buttom
.page-container {
    height: 60vh;
    width: 80vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
}

.aside-container {
    height: 60vh;
    width: 16vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    // margin-bottom: 10px;
    // background-color: aqua;
}

.aside-container>div:not(:last-child) {
    margin-bottom: 25px;
}

.headPortrait {
    position: relative;
    z-index: 1;
    height: 33vh;
    width: 16vw;
    background-image: linear-gradient(100deg, #90d1b3, #db79df, #f3c83b);
    background-size: 800%;
    animation: zi 105s infinite;
    border-radius: 15px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

// .headPortrait{
//     z-index: 10;
// }
.Portrait {
    height: 50%;
    width: 50%;
    border-radius: 50%;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    background-color: rgb(163, 161, 161);
}

.UserDetial {
    height: 7.5vh;
    width: 12vw;
    // background-color: rgb(138, 171, 171);
    border-radius: 15px;
    // box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 14px;
    // margin-top: 10px;
}

.UserDetial_1 {
    // background-color:#28c2b7;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-family: 'navbarFont', sans-serif;
}

.UserDetial_num {
    display: flex;
    justify-content: center;
}

.friendCircle {
    height: 3.5vh;
    width: 10vw;
    background-color: rgb(37, 219, 219);
    border-radius: 15px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'navbarFont', sans-serif;
    letter-spacing: 3px;
}

//背景颜色的动态改变 
@keyframes zi {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.text {
    color: white;
    text-align: center;
    text-transform: uppercase;
    margin: 350px 0;
    font-size: 22px;
}

.searchContainer {
    height: 10vh;
    width: 16vw;
    // background-color: #3498db;
    border-radius: 15px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
}

.searchDIV {
    color: #28c2b7;
    font-size: 20px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-top: 10px;
    font-family: 'navbarFont', sans-serif;

}

#SearchInput {
    /* 在这里设置样式 */
    border: 2px solid #39c5bb;
    border-radius: 40px 40px 40px 40px;
    width: calc(100% - 35px);
    height: 30px;
    display: flex;
    margin: 0 auto;
    text-indent: 20px;
    /* 将光标位置向右移动10像素 */
    font-size: 15px;
}

// ::placeholder {
//     /* 将 placeholder 内容向右移动 20px */
//     padding-left: 15px;
// }

.classifyContainer {
    height: 10vh;
    width: 16vw;
    // background-color: #d35400;
    border-radius: 15px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: row;
}

.sort-icon {
    width: 35px;
    height: 35px;
    margin-top: 15px;
    margin-left: 10px;
}

.sortDIV {
    margin-top: 20px;
    margin-left: 5px;
    font-family: 'navbarFont', sans-serif;
    font-size: 20px;
}

.postNews {
    height: 60vh;
    width: 54vw;
    // background-color: black;
}

.message {
    height: 10vh;
    width: 54vw;
    // background-color: #f39c12;
    border: 1px dashed #bcb6b6;
    margin-top: 10px;
    border-radius: 20px 20px 20px 20px;
    display: flex;
    // justify-content: center;
    align-items: center;
}

.MSG-icon {
    width: 50px;
    height: 50px;
    background-color: #ccc;
    animation: scaleAnimation 2s infinite;
    border-radius: 40px;
    margin-left: 10px;

}

@keyframes scaleAnimation {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}

@keyframes masked-animation {
    0% {
        background-position: 0 0;
    }

    100% {
        background-position: -100% 0;
    }
}
</style>