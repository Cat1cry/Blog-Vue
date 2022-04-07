<template>
  <!-- 页脚组件 -->
  <div>
    <div style="height: 60px"></div>
    <el-footer class="footer">
      ©2022 <b>Me9um1</b>
      <br />
      <div>
        <a class="beian" href="http://beian.miit.gov.cn/" target="_blank"
          >黔ICP备2021006302号</a
        >
      </div>
    </el-footer>
  </div>
</template>

<script>
export default {
  created () {
  }

}
</script>

<style scoped>
.footer {
  margin-top: 50px;
  padding-bottom: 10px;
  text-align: center;
  user-select: none;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 50px;
  z-index: 9999;
}
.beian {
  text-decoration: none;
  color: var(--default-text-color);
}
</style>
