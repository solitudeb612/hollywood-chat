<template>
    <div>
        <div class="topWrap">
            <Navigation class="navigation"/>
            <div class="Container">
                <div class="chest-container">
                    <div class="chest-words">
                        <span class="words-1"> 记 录 </span>
                        <span class="words-2"> 百 宝 箱</span>
                    </div>
                    <div class="chest-card-container">
                        <div class="card-container1">
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
    </div>
</template>

<script>
import Navigation from './Navigation.vue'
export default {
    components: {
        Navigation
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
.navigation{
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
    background-color: rgb(139, 141, 139);
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
    background-color: rgb(139, 141, 139);
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
    font-family: 'navbarFont', sans-serif;
    margin-bottom: 25px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

}
</style>