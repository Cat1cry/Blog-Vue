<template>
  <!-- 文章编辑 -->
  <el-form
    @submit.native.prevent="saveArticle"
    ref="form"
    :model="article"
    label-width="80px"
  >
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    <el-form-item label="文章内容">
      <mavon-editor :toolbars="markdownOption" v-model="article.body" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">保存</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data () {
    return {
      article: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    saveArticle () {
      this.$http.put(`/articles/${this.$route.params.id}`, this.article).then(res => {
        this.$message({
          message: '文章修改成功',
          type: 'success'
        })
        this.$router.push('/admin-article/index')
        console.log(res)
      })
    },
    fetch () {
      this.$http.get(`articles/${this.$route.params.id}`).then(res => {
        this.article = res.data
      })
    },
    cancel () {
      this.$router.push('/admin-article/index')
    }
  },
  created () {
    this.fetch()
  }
}
</script>

<style scoped>
</style>
