<template>
    <div>
        <!-- <div class="LoveBcg"></div> -->
        <div class="TopBar">
            <Navigation />
            <div class="love-container">
                <div class="love-word">
                    <span>和 X X 在 一 起 已 经</span>
                </div>
                <div class="love-time">
                    <span>0 天 了 !</span>
                </div>
                <div class="toLoveWall">
                    <div class="toLoveWall-Card">
                        <span class="toLoveWall-CardWords">开往表白墙</span>
                    </div>
                </div>
                <div class="love-cards">
                    <div class="love-card">
                        <div class="love-card-img1"></div>
                        <div class="love-card-container">
                            <div>
                                <span class="love-card-word1">点点滴滴</span>
                            </div>
                            <div>
                                <span class="love-card-word2">☀️欲穷千里目，更上一层楼</span>
                            </div>
                        </div>
                    </div>
                    <div class="love-card">
                        <div class="love-card-img2"></div>
                        <div class="love-card-container">
                            <div>
                                <span class="love-card-word1">时光相册</span>
                            </div>
                            <div>
                                <span class="love-card-word2">📸记录美好瞬间</span>
                            </div>
                        </div>
                    </div>
                    <div class="love-card">
                        <div class="love-card-img3"></div>
                        <div class="love-card-container">
                            <div>
                                <span class="love-card-word1">祝福板</span>
                            </div>
                            <div>
                                <span class="love-card-word2">📋写下对我们的祝福吧</span>
                            </div>
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
.TopBar {
    width: 98.7vw;
    // height: 57vh;
    height: 101vh;
    background-image: url('../assets/source/bcg4.png');
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
}

.love-container {
    width: 98.7vw;
    // height: 57vh;
    height: 81vh;
    margin-top: 85px;
    background-color: rgba(255, 255, 255, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.love-word {
    font-size: 2rem;
    margin-top: 50px;
    font-family: 'navbarFont', sans-serif;
}

.love-time {
    font-size: 2rem;
    margin-top: 30px;
    font-family: 'navbarFont', sans-serif;

}

.toLoveWall-Card {
    width: 300px;
    height: 100px;
    margin-top: 50px;
    background-color: rgb(255, 255, 255,0.9);
    border-radius: 25px;
    // background-image: url('../assets/source/loveCard.png');
    display: flex;
    flex-direction: column;
    // align-items: flex-end;
    justify-content: center;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.3);

}

.toLoveWall-CardWords {
    font-size: 1.5rem;
    color: rgb(192, 113, 124);
    margin-left: 40px;
    font-family: 'navbarFont', sans-serif;
}

.love-cards {
    width: 70vw;
    height: 57vh;
    margin-top: 85px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.love-card {
    height: 140px;
    width: 320px;
    background-color: rgb(255, 255, 255,0.9);

    border-radius: 25px;
    // background-image: url('../assets/source/loveCard.png');
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.3);

}

.love-card-img1 {
    height: 100px;
    width: 100px;
    border-radius: 50px;
    // background-color: aqua;
    background-image: url('../assets/source/love-card1.png');
    background-size: cover;
}
.love-card-img2 {
    height: 100px;
    width: 100px;
    border-radius: 50px;
    // background-color: aqua;
    background-image: url('../assets/source/love-card2.png');
    background-size: cover;
}.love-card-img3 {
    height: 100px;
    width: 100px;
    border-radius: 50px;
    // background-color: aqua;
    background-image: url('../assets/source/love-card3.png');
    background-size: cover;
}

.love-card-container {
    width: 190px;
    height: 100px;
    // background-color: aqua;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    // margin-left: 20px;
}

.love-card-word1 {
    font-size: 1.5rem;
    color: rgb(0, 0, 0);
    margin-bottom: 10px;
    font-family: 'navbarFont', sans-serif;
    letter-spacing: 2px;
}

.love-card-word2 {
    font-size: 1.0rem;
    color: rgb(0, 0, 0);
    margin-top: 10px;
    font-family: 'navbarFont', sans-serif;
    letter-spacing: 2px;
}
</style>