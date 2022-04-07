<template>
  <!-- 导航栏组件 -->
  <el-header class="navigation" id="header">
    <el-menu router class="el-menu-demo" mode="horizontal">
      <router-link to="/admin-login">
        <img class="logo" src="../assets/img/1000.jpg" alt="" />
      </router-link>
      <el-menu-item class="el-icon-s-home" index="/index">首页</el-menu-item>
      <el-menu-item class="el-icon-reading" index="/webposts"
        >前端</el-menu-item
      >
      <el-menu-item class="el-icon-notebook-2" index="/noteposts"
        >随笔</el-menu-item
      >
      <el-menu-item class="el-icon-chat-dot-round" index="/message"
        >留言板</el-menu-item
      >
      <el-menu-item class="el-icon-info" index="/info">关于</el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
export default {

}
</script>

<style scoped>
.el-menu-demo {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
}
.search {
  width: 20%;
}
.logo {
  position: relative;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  border: 2px solid #eee;
  text-decoration: none;
  font-size: 2em;
  letter-spacing: 2px;
  transition: 0.6s;
}

.el-menu-item {
  font-size: 17px;
}
#header {
  position: fixed;
  z-index: 999;
}
</style>
