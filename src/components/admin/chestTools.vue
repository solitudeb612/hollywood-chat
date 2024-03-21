<template>
    <div class="container">
        <div class="portrait"></div>
        <div class="Tools">
            <span class="toolTittle">{{ tittle }}</span>
            <span> {{ content }} </span>
        </div>
    </div>
</template>

<script>
export default {
    props:['tittle', 'content'],
    components: {
        
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
.container {
    width: 20vw;
    height: 15vh;
    // background-color: aqua;
    border-radius: 20px;
    box-shadow: 0 1px 20px -6px rgb(85, 82, 82);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: 'navbarFont', sans-serif;
}

.portrait {
    height: 5vw;
    width: 5vw;
    background-color: aqua;
    border-radius: 50%;
    margin-left: 10px;
}

.Tools {
    width: 14vw;
    height: 15vh;
    // background-color: bisque;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    justify-content: center;
    
    margin-right: 5px;
    font-size: 17px;
    font-weight: 100;
    // align-items: center;

}

.toolTittle {
    font-size: 26px;
    font-weight:500;

    // border-bottom: 10px;
    margin-bottom: 10px;
}
</style>