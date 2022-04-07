  <template>
  <!-- 回到顶部组件 -->
  <div id="goTop">
    <div
      class="el-backtop"
      style="right: 100px; bottom: 150px"
      v-show="goTopShow"
      @click="goTop"
    >
      <i class="el-icon-caret-top"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'goTop',
  data () {
    return {
      scrollTop: '',
      goTopShow: false
    }
  },
  watch: {
    scrollTop (val) {
      if (this.scrollTop > 500) {
        this.goTopShow = true
      } else {
        this.goTopShow = false
      }
    }
  },
  methods: {
    handleScroll () {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (this.scrollTop > 500) {
        this.goTopShow = true
      }
    },
    goTop () {
      let timer = null
      const _that = this
      cancelAnimationFrame(timer)
      timer = requestAnimationFrame(function fn () {
        if (_that.scrollTop > 0) {
          _that.scrollTop -= 250
          document.body.scrollTop = document.documentElement.scrollTop =
            _that.scrollTop
          timer = requestAnimationFrame(fn)
        } else {
          cancelAnimationFrame(timer)
          _that.goTopShow = false
        }
      })
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

 <style scoped>
.goTop {
  position: fixed;
  right: 40px;
  bottom: 60px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  padding: 10px;
  cursor: pointer;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
}
.goTop:hover .goTopIcon {
  color: rgba(51, 153, 255, 1);
}
.goTopIcon {
  font-size: 20px;
  color: rgba(51, 153, 255, 0.8);
}
.el-backtop {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  position: fixed;
  background-color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #409eff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  z-index: 5;
  right: 100px;
  bottom: 150px;
}
</style>
