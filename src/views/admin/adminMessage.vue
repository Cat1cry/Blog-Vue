<template>
  <!-- 留言管理页 -->
  <div>
    <el-table :data="message">
      <el-table-column prop="name" label="名称" width="300"> </el-table-column>
      <el-table-column prop="email" label="邮箱" width="300"> </el-table-column>
      <el-table-column prop="text" label="内容" width="500"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
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
      message: []
    }
  },
  methods: {
    fetch () {
      this.$http.get('message/find').then(res => {
        this.message = res.data
      })
    },
    remove (id) {
      this.$http.delete(`message/del/${id}`).then(res => {
        this.$message({
          message: '留言删除成功',
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
