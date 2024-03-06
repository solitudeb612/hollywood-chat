<template>
    <div>
        <ul class="navbar">
            <li>
                🏡
                <span v-on:click="clickHome"> 首页 </span>
            </li>
            <li>
                📒
                <span v-on:click="ClickBlog">博客</span>
            </li>
            <li>
                💋
                <span v-on:click="clickLoveSpace">情侣空间</span>
            </li>
            <li>
                🌏
                <span v-on:click="ClickAlbum">旅行日记</span>
            </li>
            <li>
                <span v-on:click="clickChest">百宝箱 </span>
            </li>
            <li>
                🧰
                <span v-on:click="ClickIntroduce">网站介绍</span>
            </li>
            <li>
                💃
                <span>聊天室</span>
            </li>
            <li>
                📪
                <span v-on:click="ClickTreeHole">留言板 </span>
            </li>
            <li>
                <el-dropdown style="border-width: 0;">
                    <span class="enter">
                        登录
                        <!-- <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon> -->
                    </span>
                    <template #dropdown style="border-width: 0;">
                        <el-dropdown-menu>
                            <el-dropdown-item>登录账号</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <!-- <el-tooltip content="Bottom center" effect="customized">
                    <span>登录</span>
                </el-tooltip> -->
            </li>
        </ul>
    </div>
</template>

<script>
import { ArrowDown } from '@element-plus/icons-vue'

export default {

    data() {
        return {}
    },

    computed: {

    },

    watch: {

    },

    created() {

    },

    mounted() {

    },

    methods: {
        clickLoveSpace() {
            this.$router.push('/loveSpace');
        },
        clickHome() {
            this.$router.push('/');
        },
        clickChest() {
            this.$router.push('/chest');
        },
        ClickTreeHole() {
            this.$router.push('/TreeHole');
        },
        ClickIntroduce() {
            this.$router.push('/introduce');
        },
        ClickAlbum() {
            this.$router.push('/Album');
        },
        ClickBlog() {
            this.$router.push('/blog');
        },
        handleClick() {
            // eslint-disable-next-line no-alert
            alert('button click')
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    // size: 100%;
    width: 99%;
    // background-color: black;
    font-family: 'navbarFont', sans-serif;
    // background-color: rgba(0, 0, 0, 0.5); /* 设置背景颜色为半透明黑色 */
    margin-right: 10px;
    margin-top: 0px;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
    /* 设置初始背景颜色为透明 */
    transition: background-color 0.5s ease;
    /* 使用过渡属性设置过渡效果 */
}

.navbar:hover {
    background-color: rgba(0, 0, 0, 0.5);
    /* 设置背景颜色为半透明黑色 */
}

.navbar li {
    margin: 0 8px;
    padding: 0 5px;
    font-size: 18px;
    height: 40px;
    line-height: 60px;
    position: relative;
    cursor: pointer;
    color: rgb(253, 246, 246);
    /* 设置导航链接文字颜色为白色 */
    text-decoration: none;
    /* 去除链接的下划线 */
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
}

.navbar li:hover {
    background-color: rgb(228, 236, 236);
    color: rgb(224, 180, 57);
}

span {
    margin-left: 4px;
}
.enter{
    font-size: 18px;
    height: 40px;
    line-height: 60px;
    position: relative;
    cursor: pointer;
    color: rgb(253, 246, 246);
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-width: 0;
}
.enter:hover {
    background-color: rgb(228, 236, 236);
    color: rgb(224, 180, 57);
}
</style>
