<template>
  <!-- 文章列表 -->
  <div>
    <el-table :data="articles">
      <el-table-column prop="title" label="标题" width="300"> </el-table-column>
      <el-table-column prop="body" label="内容" width="800"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row._id)" type="text" size="big"
            >编辑</el-button
          >
          <el-button @click="remove(scope.row._id)" type="text" size="big"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articles: []
    }
  },
  methods: {
    fetch () {
      this.$http.get('articles').then(res => {
        this.articles = res.data
      })
    },
    edit (id) {
      this.$router.push(`${id}/edit`)
    },
    remove (id) {
      this.$http.delete(`articles/${id}`).then(res => {
        this.$message({
          message: '文章删除成功',
          type: 'success'
        })
        this.fetch()
        console.log(res)
      })
    }
  },
  created () {
    this.fetch()
  }
}
</script>
<style>
.cell {
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  -webkit-line-clamp: 2 !important;
}
</style>
