import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import loveSpaceVue from '../components/loveSpace.vue'
import file1 from '../components/file1.vue'
import chestVue from '../components/chest.vue'
import TreeHoleVue from '../components/TreeHole.vue'
import IntroduceVue from '../components/introduce.vue'
import AlbumVue from '../components/Album.vue'
import BlogVue from '../components/blog.vue'
import BlogDetailVue from '../components/admin/markdown.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/loveSpace',
      name: 'loveSpace',
      component: loveSpaceVue
    },
    {
      path: '/chest',
      name: 'chest',
      component: chestVue
    },
    {
      path: '/TreeHole',
      name: 'TreeHole',
      component: TreeHoleVue
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: IntroduceVue
    },
    {
      path: '/Album',
      name: 'Album',
      component: AlbumVue
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogVue,
      children: [
        {
          path: '/markdown',
          name: 'markdown',
          component:BlogDetailVue,
        }
      ],
    },
    {
      path: '/file1',
      name: 'file1',
      component: file1
    },

  ]
})

export default router
