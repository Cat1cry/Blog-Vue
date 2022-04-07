<template>
  <!-- 后台主页面 -->
  <div>
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-document-copy"></i>内容管理</template
            >
            <el-menu-item index="/admin-article/index">文章列表</el-menu-item>
            <el-menu-item index="/admin-article/message">留言列表</el-menu-item>
            <el-menu-item index="/admin-article/create">新建文章</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 20px">
          <el-button type="primary" size="default" @click="backIndex"
            >返回主页</el-button
          >
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
      token: ''
    }
  },
  methods: {
    backIndex () {
      this.$router.push('/')
    },
    tokenVar () {
      if (this.token !== this.$store.state.token) {
        this.$router.push('/admin-login')
      }
    }
  },
  created () {
    this.token = window.localStorage.getItem('token')
    this.tokenVar()
  }
}
</script>

<style>
.btnBack {
  background-color: rgb(22, 218, 236);
  border-radius: 20px;
  padding: 5px;
  margin-top: 10px;
  font-size: 13px;
  color: rgb(255, 255, 255);
  cursor: pointer;
}
</style>
