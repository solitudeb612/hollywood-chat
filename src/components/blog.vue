<template>
    <div class="page">
        <Navigation />
        <div class="topWrap">
            <button v-on:click="ClickBlog">enter</button>
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

    methods: {
        ClickBlog() {
            this.$router.push('/markdown')
        }
    }
}
</script>

<style lang="scss" scoped>
.page {
    margin: 0px;
    background: url("../assets/source/bcg2.png") no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
    z-index: -1;
}

.topWrap {
    width: 100%;
    height: 97.9vh;
    display: flex;
    justify-content: center;
}
</style>