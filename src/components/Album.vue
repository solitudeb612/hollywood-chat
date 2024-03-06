<template>
    <div class="page">
        <Navigation />
        <div class="Container">
            <div class="AlbumContainer">
                <div class="PhotoAlbum">
                    <span class="word1">旅拍集</span>
                    <span class="word2">这里的都是我的旅拍啦~</span>
                    <div class="PhotoContainer"></div>
                    <span class="word3">每一张照片都是人生的一次相遇。</span>
                </div>
                <div class="BottomWord">
                    <span>~~~到底啦~~~</span>
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
.page {
    margin: -10px 0px 0px 0px;
    background: url("../assets/source/bcg2.png") no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
    // display: flex;
    // justify-content: center;
}

.Container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.AlbumContainer {
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(254, 255, 255, 0.2);
    // margin-top: 20vh;
}
.PhotoAlbum {
    width: 65vw;
    height: 20em;
    background-color: rgb(75, 219, 210,0.9);
    border-radius: 20px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    padding-left: 20px;
    // padding-top: 10px;
}
.word1{
    font-family: 'navbarFont', sans-serif;
    font-size: 20px;
    letter-spacing: 3px;
    color: rgb(255, 255, 255);
    font-weight: 600;
}
.word2{
    font-family: 'navbarFont', sans-serif;
    font-size: 30px;
    letter-spacing: 3px;
    color: rgb(255, 255, 255);
    font-weight: 600;

}
.PhotoContainer{
    width: 30vw;
    height: 10em;
}
.word3{
    font-family: 'navbarFont', sans-serif;
    font-size: 20px;
    letter-spacing: 3px;
    color: rgb(255, 255, 255);
    font-weight: 600;

}
.BottomWord{
    width: 70vw;
    height: 10vh;
    // background-color: rgb(35, 47, 224);
    margin-top: 10px;
    display: flex;
    justify-content: center;
    // text-align: center;
    align-items: center;
    font-size: 17px;
    letter-spacing: 3px;
    font-family: 'navbarFont', sans-serif;
}
</style>