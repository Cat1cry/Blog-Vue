<template>
  <!-- 文章显示页 -->
  <div>
    <BackTop></BackTop>
    <div class="HeaderBaci">
      <h1>
        {{ body.title }}
        <p class="time">{{ body.time }}</p>
      </h1>
    </div>
    <div class="posts">
      <el-table
        v-show="isShow"
        v-loading="isShow"
        style="width: 100%"
      ></el-table>
      <mavon-editor
        class="md"
        :ishljs="true"
        :value="body.body"
        :subfield="prop.subfield"
        :defaultOpen="prop.defaultOpen"
        :toolbarsFlag="prop.toolbarsFlag"
        :editable="prop.editable"
        :scrollStyle="prop.scrollStyle"
      />
    </div>
  </div>
</template>

<script>
import BackTop from '../components/BackTop'
export default {
  components: { BackTop },
  data () {
    return {
      id: '',
      body: {
        title: '',
        body: ''
      },
      isShow: false
    }
  },
  computed: {
    // 解析器配置
    prop () {
      const data = {
        subfield: false,
        defaultOpen: 'preview',
        editable: false,
        toolbarsFlag: false,
        scrollStyle: true
      }
      return data
    }
  },

  created () {
    window.scrollTo(0, 0)
    this.$http.get(`/articles/${this.$route.params.id}`).then(res => {
      this.body = res.data
      this.isShow = false
    }).catch(err => {
      this.isShow = true
      console.log(err)
    })
  }

}
</script>

<style scoped>
.posts {
  text-align: center;
  margin: 0 60px;
  height: 100vh;
  border-radius: 30px;
}
.posts > h4 {
  margin-top: 30px;
}
.HeaderBaci {
  width: 100%;
  background-image: url("../assets/img/ArticleBaci2.jpeg");
  background-size: cover;
}
.HeaderBaci > h1 {
  padding-top: 20%;
  padding-bottom: 20px;
  padding-left: 10%;
  text-align: left;
  color: #fff;
  font-size: 40px;
}
.md {
  z-index: -1;
}
.time {
  font-size: 25px;
}
</style>
