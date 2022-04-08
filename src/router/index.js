import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import IndexView from '../views/IndexView.vue'
import WebView from '../views/WebView.vue'
import NoteView from '../views/NoteView.vue'
import ArticleView from '../views/ArticleView.vue'
import adminLogin from '../views/admin/adminLogin.vue'
import adminReg from '../views/admin/adminReg.vue'
import adminArticle from '../views/admin/adminArticle.vue'
import CreateArticle from '../views/admin/CreateArticle.vue'
import ListArticle from '../views/admin/ListArticle.vue'
import EditArticle from '../views/admin/EditArticle.vue'
import MsgView from '../views/MsgView.vue'
import adminMessage from '../views/admin/adminMessage.vue'
import Info from '../views/InfoView.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    name: 'index',
    redirect: '/index'
  }, {
    path: '/index',
    component: IndexView,
    meta: {
      headerAlive: false,
      keepAlive: false
    }
  }, {
    path: '/webposts',
    name: 'webposts',
    component: WebView,
    meta: {
      headerAlive: true,
      keepAlive: true
    }
  }, {
    path: '/message',
    name: 'message',
    component: MsgView,
    meta: {
      headerAlive: true,
      keepAlive: true
    }
  }, {
    path: '/noteposts',
    name: 'noteposts',
    component: NoteView,
    meta: {
      headerAlive: true,
      keepAlive: true
    }
  }, {
    path: '/webposts/:id',
    component: ArticleView,
    meta: {
      headerAlive: true,
      keepAlive: false
    }
  }, {
    path: '/info',
    name: 'info',
    component: Info,
    meta: {
      headerAlive: true,
      keepAlive: true
    }
  }, {
    path: '/admin-login',
    name: 'login',
    component: adminLogin,
    meta: {
      keepAlive: false
    }
  }, {
    path: '/admin-reg',
    name: 'reg',
    component: adminReg,
    meta: {
      keepAlive: false
    }
  }, {
    path: '/admin-article',
    component: adminArticle,
    children: [{
      path: '',
      redirect: 'index'
    }, {
      path: 'create',
      name: 'create-article',
      component: CreateArticle
    }, {
      path: 'index',
      name: 'list-article',
      component: ListArticle
    }, {
      path: ':id/edit',
      name: 'edit-article',
      component: EditArticle
    }, {
      path: 'message',
      name: 'message',
      component: adminMessage
    }]
  }]
})
