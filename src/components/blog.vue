<template>
    <div class="page">
        <Navigation />
        <div class="topWrap">
            <!-- <button v-on:click="ClickBlog">enter</button> -->
            <span>路漫漫其修远兮，吾将上下而求索</span>
        </div>
        <div class="BlogContainer">
            <div class="labelContainer">
                <span class="labelBar">标签</span>
                <div class="labels">
                    <span class="aLabel">🔖 java</span>
                    <span class="aLabel">🔖 SpringBoot</span>
                    <span class="aLabel">🔖 Vue</span>
                    <span class="aLabel">🔖 React</span>



                </div>
            </div>
            <div class="articleContainer">1212</div>
        </div>
        <div class="check-container" v-show="isShowCheck">
            <div>
                <!-- 图形校验区域 -->
                <div class="check">
                    <!-- 被校验区域 -->
                    <div class="check-child"></div>
                </div>
                <!-- 拖动条 -->
                <div class="drag">
                    <!-- 操作说明 -->
                    <div class="drag-tips">
                        <span>按住左边按钮向右拖动完成上方图像验证</span>
                    </div>
                    <!-- 可拖动的盒子 -->
                    <div class="drag-child"></div>
                </div>
            </div>
        </div>
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
    created() { },
    mounted() {
        //随机颜色
        // 获取所有aLabel元素
        var aLabelElements = document.getElementsByClassName("aLabel");
        // 定义背景颜色的数组
        var backgroundColors = ["mySpanColor1", "mySpanColor2", "mySpanColor3", "mySpanColor4", "mySpanColor5", "mySpanColor6"];
        var previousColor = ''; // 用于存储前一个颜色

        // 遍历每个aLabel元素，为它们添加随机背景颜色类
        for (var i = 0; i < aLabelElements.length; i++) {
            var randomColor = previousColor; // 默认与前一个颜色相同

            while (randomColor === previousColor) {
                randomColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
            }

            aLabelElements[i].classList.add(randomColor);
            previousColor = randomColor;
        }
    },
    methods: {
        // ClickBlog() {
        //     this.$router.push('/markdown')
        // }
    }
}
</script>

<style lang="scss" scoped>
.page {
    margin: -10px 0px 0px 0px;
    z-index: -1;
}

.topWrap {
    width: 100%;
    height: 40vh;
    // background-color: aqua;
    background: url("../assets/source/blog/TopBar2.png") no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'navbarFont', sans-serif;
    font-size: 30px;
    letter-spacing: 3px;
}

.BlogContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.labelContainer {
    width: 60vw;
    height: 25vh;
    background-color: rgb(255, 255, 255);
    margin-top: 7vh;
    margin-bottom: 7vh;
    box-shadow: 0 1px 20px -6px rgb(85, 82, 82);
    border-radius: 20px;

}

.labelBar {
    width: 100%;
    // height: 40px;
    margin-left: 15px;
    margin-top: 20px;
    font-family: 'navbarFont', sans-serif;
    letter-spacing: 3px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-image: -webkit-linear-gradient(left, blue, #66ffff 10%, #cc00ff 20%, #CC00CC 30%, #CCCCFF 40%, #00FFFF 50%, #CCCCFF 60%, #CC00CC 70%, #CC00FF 80%, #66FFFF 90%, blue 100%);
    -webkit-text-fill-color: transparent;
    /* 字体设置成透明色 */
    -webkit-background-clip: text;
    /* 裁剪背景，使文字作为裁剪区域向外裁剪 */
    -webkit-background-size: 200% 100%;
    -webkit-animation: masked-animation 4s linear infinite;
    transition: background-color 0.3s ease;
}
.labelBar:hover {
    background-image: linear-gradient(to right, orange, red);
}

.labels {
    width: 90%;
    height: 80%;
    // background-color: aqua;
    margin-left: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 20px;
    padding-left: 20px;
}

.aLabel {
    // width: 90px;
    // height: 40px;
    // background-color: rgb(235, 88, 161);
    border-radius: 6px;
    // text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 20px;
    line-height: 40px;
    font-size: 18px;
    color: rgb(255, 255, 255);
    font-family: 'BCGFont', sans-serif;
    letter-spacing: 1px;
    box-shadow: 2px 2px 2px 2px rgb(189, 187, 187);
    cursor: pointer;
}

.mySpanColor1 {
    background-color: rgb(235, 88, 161);
}

.mySpanColor2 {
    background-color: rgb(13, 13, 14);
}

.mySpanColor3 {
    background-color: rgb(100, 183, 250);
}

.mySpanColor4 {
    background-color: rgb(91, 250, 189);
}

.mySpanColor5 {
    background-color: rgb(240, 170, 79);
}

.mySpanColor6 {
    background-color: rgb(77, 238, 216);
}

.articleContainer {
    width: 60vw;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 1px 20px -6px rgb(85, 82, 82);
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