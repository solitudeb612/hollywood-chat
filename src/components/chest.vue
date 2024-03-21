<template>
    <div class="page">
        <div class="topWrap">
            <Navigation class="navigation" />
            <div class="Container">
                <div class="chest-container">
                    <div class="chest-words">
                        <span class="words-1"> 记 录 </span>
                        <span class="words-2"> 百 宝 箱</span>
                    </div>
                    <div class="chest-card-container">
                        <div class="card-container1" v-on:click="ischestOpen = !ischestOpen">
                            <span class="Favorites">收藏夹</span>
                            <span class="Favorites-1"> 将 poetize.cn 添加到您的收藏夹吧 </span>
                        </div>
                        <div class="card-container2">
                            <span class="music">曲乐</span>
                            <span class="music-1"> 一曲肝肠断，天涯何处觅知音 </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="ischestOpen" class="chestContainer">
            <div class="codeTool">
                <span class="ToolTittle">代码工具</span>
                <div class="ToolsContainer">
                    <div v-for="(item, index) in ToolDetials.code.tittle">
                        <ChestTools :tittle="ToolDetials.code.tittle[index]" :content="ToolDetials.code.content[index]"></ChestTools>
                    </div>
                </div>
            </div>
            <div class="dashed-line"></div>
            <div class="blogTool">
                <span class="ToolTittle">博客</span>
                <div class="ToolsContainer">
                    <div v-for="(item, index) in ToolDetials.blog.tittle">
                        <ChestTools :tittle="ToolDetials.blog.tittle[index]" :content="ToolDetials.blog.content[index]"></ChestTools>
                    </div>
                </div>
            </div>
            <div class="dashed-line"></div>
            <div class="FrontTool">
                <span class="ToolTittle">前端</span>
                <div class="ToolsContainer">
                    <div v-for="(item, index) in ToolDetials.Front.tittle">
                        <ChestTools :tittle="ToolDetials.Front.tittle[index]" :content="ToolDetials.Front.content[index]"></ChestTools>
                    </div>
                </div>
            </div>
            <div class="dashed-line"></div>
            <div class="FrontTool">
                <span class="ToolTittle">后端</span>
                <div class="ToolsContainer">
                    <div v-for="(item, index) in ToolDetials.Rearend.tittle">
                        <ChestTools :tittle="ToolDetials.Rearend.tittle[index]" :content="ToolDetials.Rearend.content[index]"></ChestTools>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from './Navigation.vue'
import ChestTools from './admin/chestTools.vue'
export default {
    components: {
        Navigation,
        ChestTools
    },
    data() {
        return {
            ToolDetials: {
                code: {
                    tittle: ['MyTool', 'Road to coding', '不求人导航'],
                    content: [
                        '程序员的代码在线工具箱',
                        'poetize开发者总结的工具和经验网站',
                        '各种前端导航框架工具',
                    ]
                },
                blog: {
                    tittle: ['CSDN', 'Gitee 仓库', '稀土掘金', 'Github 仓库', '博客园'],
                    content: [
                        'CSDN. 中国专业IT社区CSDN',
                        '这是我的Gitee仓库',
                        '面向全球中文开发者的技术内容分享与交流平台',
                        '这是我的Github仓库',
                        '开发者的网上家园'
                    ]
                },
                Front: {
                    tittle: [
                        'Animate中文网', 'Ant Design of Vue',
                        'BootCDN-CDN', 'cdnjs-CDN',
                        'Editor.md', 'Element',
                        'Element Plus', 'Emoji 百科全书',
                        'Fontawesome中文网', 'iconfont',
                        'Javscript 教程', 'markdown-it',
                        'Naive UI', 'Vue3 官网'
                    ],
                    content: [
                        '强大的跨平台的预设CSS动画库',
                        '一套基于Vue的企业级UI组件库',
                        '快速、免费的前端开源项目CDN服务',
                        'cdnjs-CDN是一款免费的公共CDN服务',
                        '开源的在线Markdown编辑器',
                        '饿了么前端开源的UI组件库',
                        '一套开源的前端图标解决方案',
                        '一套开源的前端Emoji表情解决方案',
                        '大量免费图标',
                        '一套开源的前端字体解决方案',
                        '一套开源的前端动画解决方案',
                        '一套开源的前端Markdown解析器',
                        '一套基于Vue3的UI组件库',
                        'Vue3 官方文档中文版',
                    ]
                },
                Rearend: {
                    tittle: [
                        'Apache APISIX', 'hUTOOL 官网',
                        'Maven 公共仓库', 'Mybatis-plus',
                        'PowerJob 官网', 'Spring Boot',
                        'Redis 中文网', 'Spring Cloud Alibaba',
                        'Spring Cloud 文档', 'Spring Cloud 学习资料',
                    ],
                    content: [
                        '全生命周期API管理',
                        '一个开源的分布式任务调度平台',
                        'Maven 官方仓库',
                        '为简化开发、提高效率而生的MyBatis增强工具',
                        '全新一代分布式任务调度产品',
                        'Spring Boot 官方文档',
                        '开源的数据结构储存系统',
                        '阿里巴巴开源的微服务框架',
                        'Spring Cloud 官方文档',
                        '由Spring Cloud中文社区翻译的学习资料'
                    ]
                }
            },
            ischestOpen: false,


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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'navbarFont', sans-serif;

}

.navigation {
    background-color: rgba(0, 0, 0, 0.5);
}

.topWrap {
    width: 98vw;
    height: 101vh;
    background-image: url('../assets/source/chest.png');
    background-size: cover;
    // background-color: #e41212;
}

.Container {
    width: 98.7vw;
    // height: 57vh;
    height: 81vh;
    background-color: rgba(215, 215, 233, 0.15);
    display: flex;
    justify-content: flex-start;
}

.chest-container {
    width: 45vw;
    height: 61vh;
    margin-top: 40px;
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
}

.chest-words {
    width: 40vw;
    height: 21vh;
    display: flex;
    flex-direction: column;
}

.words-1 {
    width: 40vw;
    height: 10vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 25px;
    color: rgb(221, 216, 216);
    font-family: 'navbarFont', sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.words-2 {
    width: 40vw;
    height: 10vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 35px;
    color: rgb(221, 216, 216);
    font-family: 'navbarFont', sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

}

.chest-card-container {
    width: 40vw;
    height: 30vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-container1 {
    width: 18vw;
    height: 20vh;
    background-color: rgb(190, 190, 190);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding-left: 16px;
    color: aliceblue;
    font-style: italic;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

}

.Favorites {
    font-size: 28px;
    font-family: 'navbarFont', sans-serif;
    margin-top: 25px;
    text-decoration: underline;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.Favorites-1 {
    font-size: 22px;
    font-family: 'navbarFont', sans-serif;
    margin-bottom: 25px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.card-container2 {
    width: 18vw;
    height: 20vh;
    background-color: rgb(190, 190, 190);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding-left: 16px;
    color: aliceblue;
    font-style: italic;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

}

.music {
    font-size: 28px;
    font-family: 'navbarFont', sans-serif;
    margin-top: 25px;
    text-decoration: underline;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

}

.music-1 {
    font-size: 22px;
    margin-bottom: 25px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

}

.chestContainer {
    width: 80vw;
    // height: 30vh;
    // background-color: aqua;
    border-radius: 10px;
    box-shadow: 0 1px 20px -6px rgb(85, 82, 82);
}

.ToolTittle {
    margin-top: 10px;
    margin-left: 10px;
}

.codeTool {
    width: 100%;
    // height: 30vh;
    // background-color: rgb(42, 216, 50);
    font-size: 22px;
    display: flex;
    flex-direction: column;

}

.ToolsContainer {
    display: flex;
    flex-direction: row;
    margin-left: 20px;
    margin-top: 10px;
    flex-wrap: wrap;
    // justify-content: flex-start;
    // padding-left: 10px;
}

.ToolsContainer>* {
    margin-right: 18px;
    margin-bottom: 18px;

}

.ToolsContainer>*:last-child {
    margin-right: 0;
}

.blogTool {
    width: 100%;
    // height: 30vh;
    // background-color: rgb(196, 218, 197);
    font-size: 22px;
    // flex-direction: column;


}

.FrontTool {
    width: 100%;
    font-size: 22px;

}

.PartingLine {
    display: flex;
    justify-content: center;
    align-items: center;
}

.dashed-line {
    height: 10px;
    display: flex;
    margin-left: 30px;

    justify-content: center;
    align-items: center;
    // margin-top: 40px;
    border-top: 4px dashed #57c086;
    /* 设置虚线样式、颜色和宽度 */
    width: 90%;
    /* 设置虚线的宽度 */
}
</style>