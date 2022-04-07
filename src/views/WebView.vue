<template>
  <!-- 前端 -->
  <el-container>
    <div class="body">
      <div>
        <div class="body-text" id="nva">
          <h1 class="title">前端</h1>
        </div>
        <div class="SearchText" v-show="isSearch">
          <b>未找到搜索文章</b>
          <br />
          <el-button type="primary" size="default" @click="returnIndex"
            >返回文章列表</el-button
          >
        </div>
        <div class="el-icon-loading loding" v-show="isShow"></div>
        <div
          v-for="a in article.slice(
            (currentPage1 - 1) * pageSize,
            currentPage1 * pageSize
          )"
          :key="a.id"
          class="posts"
        >
          <p class="posts-title" @click="articleVist(a._id)">
            {{ a.title }}
          </p>
          <br />
          <p class="posts-body">
            <mavon-editor
              class="md"
              :value="a.body"
              :subfield="prop.subfield"
              :defaultOpen="prop.defaultOpen"
              :toolbarsFlag="prop.toolbarsFlag"
              :editable="prop.editable"
              :scrollStyle="prop.scrollStyle"
            />
          </p>
          <br />
          <p class="el-icon-time posts-time">{{ a.time }}</p>
          <p
            class="posts-article el-icon-s-promotion"
            @click="articleVist(a._id)"
          >
            阅读全文
          </p>
        </div>
        <div class="block">
          <el-pagination
            background
            layout="prev, pager, next, jumper "
            :total="total"
            :current-Page="currentPage1"
            :page-size="pageSize"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </el-container>
</template>

<script>

export default {
  data () {
    return {
      article: [],
      isShow: false, // 是否显示正在加载
      search: '',
      isSearch: false, // 分页配置文件
      currentPage1: 1,
      total: 1,
      pageSize: 5,
      class: 1
    }
  },
  methods: {
    getArticle () {
      this.$http.get(`articles/class/${this.class}`).then(res => {
        this.article = res.data
        this.total = this.article.length
        if (!this.article.length) {
          this.$message({
            message: '这里还没有文章哦',
            type: 'info',
            offset: 100
          })
        }
        console.log(res)
      }).catch((err) => {
        this.isShow = true
        this.$message({
          message: '请求超时，请稍后重试',
          type: 'error',
          offset: 100
        })
        console.log(err)
      })
    },
    returnIndex () {
      this.isSearch = false
      this.getArticle()
    },
    handleSizeChange (val) {
      // this.pageSize = val
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.currentPage1 = val
      console.log(`当前页: ${val}`)
    },
    articleVist (id) {
      this.$router.push(`webposts/${id}`)
      console.log(id)
      this.$store.commit('ID', id)
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
    this.getArticle()
  }
}

</script>

<style scoped>
.title {
  background-image: url("../assets/img/bacc3.jpeg");
  background-size: cover;
  font-size: 40px;
  padding-top: 100px;
  padding-bottom: 100px;
}
.title > img {
  width: 100%;
}
.loding {
  margin: 30%;
  font-size: 50px;
}
.posts {
  font-family: Optima-Regular, Optima, -apple-system, system-ui, Segoe UI,
    Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
    Helvetica Neue, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial;
  position: relative;
  padding: 28px;
  border-radius: 5px;
  box-sizing: border-box;
  background: var(--background-color);
  margin-bottom: 38px;
  box-shadow: 2px 2px 5px var(--shadow-color);
  transition-property: color, background, box-shadow, border-color, transform;
  transition-delay: 0s, 0s, 0s, 0s, 0s;
  transition-duration: 0.2s, 0.2s, 0.2s, 0.2s, 0.2s;
  transition-timing-function: ease, ease, ease, ease, linear;
}
.md {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 23px;
  max-height: 46px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.posts:hover {
  transform: scaleX(1.015) scaleY(1.015);
  box-shadow: 2px 2px 10px rgb(175, 175, 175);
}
.posts-title {
  font-weight: 400;
  font-size: 30px;
  padding-left: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
}
.posts-title > a {
  text-decoration: none;
  color: var(--default-text-color);
}
.posts-title:hover {
  color: #0083b0;
}
.posts-body {
  font-weight: 400;
  font-size: 15.2px;
  line-height: 22px;
  margin: 5px 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.posts-time {
  float: left;
  padding-left: 20%;
  font-size: 15.5px;
}
.posts-article {
  cursor: pointer;
  text-decoration: none;
  color: rgb(114, 112, 112);
}
.body {
  height: 100vh;
  width: 100%;
  text-align: center;
  justify-content: center;
}
.block {
  margin: 50px;
  text-align: center;
}
</style>
