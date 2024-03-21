<template>
    <div class="page">
        <Navigation />
        <div class="topWrap">
            <div class="topBarTittleContainer">
                <span>{{ blogTittle }}</span>
                <div class="topBarTittleContainerList">
                    <li>
                        <SvgIcon name="redu" width="14px" height="14px"></SvgIcon>
                        <span class="SvgIcon-text">{{ username }}</span>
                    </li>
                    <li>
                        <SvgIcon name="redu" width="14px" height="14px"></SvgIcon>
                        <span class="SvgIcon-text">{{ blogTime }}</span>
                    </li>
                    <li>
                        <SvgIcon name="redu" width="14px" height="14px"></SvgIcon>
                        <span class="SvgIcon-text">0热度</span>
                    </li>
                    <li>
                        <SvgIcon name="redu" width="14px" height="14px"></SvgIcon>
                        <span class="SvgIcon-text">0评论</span>
                    </li>
                    <li>
                        <SvgIcon name="redu" width="14px" height="14px"></SvgIcon>
                        <span class="SvgIcon-text">0喜欢</span>
                    </li>
                </div>
            </div>
        </div>
        <div class="contentWrap">
            <div>
                <MdPreview :editorId="PreviewId" :modelValue="text" />
            </div>
            <CustomModal class="CustomModal" />

        </div>
    </div>
</template>

<script setup>
import { watchEffect, ref } from 'vue';
import { MdPreview } from 'md-editor-v3';
import Navigation from "./Navigation.vue"
import CustomModal from './admin/comment.vue';
import { useRoute } from 'vue-router'; 
import axios from 'axios';

import 'md-editor-v3/lib/preview.css';
import 'md-editor-v3/lib/style.css';

const PreviewId = 'preview-only';
const id = ref('');
let blogText = ref('');
let textDet = ref('');
let text = ref('');
let username = ref('');
let blogTime = ref('');
let blogTittle = ref('');
const route = useRoute();
watchEffect(() => {
    // textDet = ref(localStorage.getItem('text'))
    console.log('getArticle');
    console.log('route.params.id',route.params.id);
    id.value=route.params.id;
    console.log('id.value',id.value);
    axios.get('http://8.130.77.84:8088/article/getArticleById?' +
        'id=' + id.value
    ).then(response => {
        console.log('登录成功', response);
        // 在这里处理登录成功后的逻辑
        textDet = ref(response.data.data.articleContent);
        text.value = textDet.value;
        username = ref(response.data.data.username);
        blogTime = ref(response.data.data.createTime);
        blogTittle = ref(response.data.data.articleTitle);
        // console.log(text.value);
        // this.$router.push({path: '/'});
    })
        .catch(error => {
            console.error('登录失败:', error);
            // 在这里处理登录失败后的逻辑
        }
        );
})
</script>

<style lang="scss" scoped>
.page {
    margin: -10px 0px 0px 0px;
    z-index: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.topWrap {
    width: 100%;
    height: 40vh;
    // background-color: aqua;
    background: url("../assets/source/blog/TopBar3.png") no-repeat;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    font-family: 'navbarFont', sans-serif;
    font-size: 26px;
    letter-spacing: 3px;
}

.topBarTittleContainer {
    width: 28vw;
    height: 10vh;
    // background-color: aqua;
    margin-bottom: 26px;
    margin-left: 17vw;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: rgb(255, 255, 255);
    // align-items:space-evenly;

}

.topBarTittleContainerList {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.topBarTittleContainerList li {
    margin-right: 2px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
}

.contentWrap {
    width: 70%;
    // height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background-color: aqua;
}
</style>