<template>
  <!-- 主页面 -->
  <div>
    <div class="welShow">
      <img
        class="avatar"
        src="../assets/img/9086df31395ae8736bf1d512ccf73d9d0a18e240.jpg"
      />
      <br />
      <p class="text"><a href="">Me9um1</a></p>
      <br />
      <div class="link-icon">
        <li>
          <el-tooltip
            effect="light"
            class="item"
            content="我的Githubヾ(≧▽≦*)o"
            placement="bottom"
          >
            <a href="https://github.com/Cat1cry" target="_blank"
              ><img src="../assets/img/github.png" alt=""
            /></a>
          </el-tooltip>
        </li>
        <li>
          <el-tooltip
            effect="light"
            class="item"
            content="我的知乎ヾ(≧▽≦*)o"
            placement="bottom"
          >
            <a
              href="https://www.zhihu.com/people/liu-qing-shu-65"
              target="_blank"
              ><img src="../assets/img/zhihu.png" alt=""
            /></a>
          </el-tooltip>
        </li>
        <li>
          <el-tooltip
            effect="light"
            class="item"
            content="我的B站ヾ(≧▽≦*)o"
            placement="bottom"
          >
            <a href="https://space.bilibili.com/12153562" target="_blank"
              ><img src="../assets/img/Bili.png" alt=""
            /></a>
          </el-tooltip>
        </li>
        <li>
          <el-tooltip
            effect="light"
            class="item"
            content="我的微博ヾ(≧▽≦*)o"
            placement="bottom"
          >
            <a href="https://www.weibo.com/u/5285438322" target="_blank"
              ><img src="../assets/img/weibo.png" alt=""
            /></a>
          </el-tooltip>
        </li>
      </div>
      <a href="#nva" class="el-icon-arrow-down"></a>
    </div>
    <div class="pageShow">
      <el-container>
        <el-header class="navigation" id="header">
          <el-menu router class="el-menu-demo" mode="horizontal">
            <router-link to="/admin-login">
              <img class="logo" src="../assets/img/1000.jpg" alt="" />
            </router-link>
            <el-menu-item class="el-icon-s-home" index="/index"
              >首页</el-menu-item
            >
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
            <el-input
              class="search"
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="search"
            >
            </el-input>
            <el-button
              class="searchBtn"
              type="primary"
              size="small"
              @click="Search"
              >搜索</el-button
            >
          </el-menu>
        </el-header>
        <el-container>
          <div class="body">
            <div>
              <div class="body-text" id="nva">
                <h1 class="title">所有文章</h1>
              </div>
              <div class="SearchText" v-show="isSearch">
                <b>未找到搜索文章</b>
                <br />
                <el-button type="primary" size="default" @click="returnIndex"
                  >返回文章列表</el-button
                >
              </div>
              <div class="el-icon-loading loding" v-show="isShow"></div>
              <el-table
                v-show="isShow"
                v-loading="isShow"
                style="width: 100%"
              ></el-table>
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
            <div class="footer"><FooterVue></FooterVue></div>
          </div>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import FooterVue from '../components/FooterVue'
export default {
  components: { FooterVue },
  data () {
    return {
      article: [],
      isShow: false, // 控制加载是否显示
      search: '',
      isSearch: false,
      currentPage1: 1,
      total: 1,
      pageSize: 5
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
  methods: {
    nvaEvent () {
      window.addEventListener('scroll', function () {
        const header = document.getElementById('header')
        const opa = window.screen.availHeight - 205
        header.classList.toggle('sticky', window.scrollY > opa)
      })
    },
    Search () {
      this.$http.get(`articles/search/${this.search}`).then(res => {
        if (res.data.length === 0) {
          this.$message({
            message: '文章不存在',
            type: 'warning',
            offset: 10
          })
          this.isSearch = true
          this.article = res.data
        } else {
          this.isSearch = false
          this.article = res.data
        }
      })
    },
    returnIndex () {
      this.isSearch = false
      this.getArticle()
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.currentPage1 = val
      console.log(`当前页: ${val}`)
    },
    articleVist (id) {
      this.$router.push(`webposts/${id}`)
      this.$store.commit('ID', id)
    },
    getArticle () {
      this.$http.get('articles').then(res => {
        this.article = res.data
        this.total = this.article.length
      }).catch((err) => {
        this.isShow = true
        this.$message({
          message: '请求超时，请稍后重试',
          type: 'error',
          offset: 100
        })
        console.log(err)
      })
    }
  },
  created () {
    this.nvaEvent()
    this.getArticle()
  }
}
</script>

<style scoped>
.welShow {
  background-image: linear-gradient(to right, #dd3e54, #0083b0);
  width: 100%;
  height: 100vh;
}
.avatar {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 200px;
  border-radius: 180px;
  border: 4px solid rgb(104, 195, 228);
}
.text {
  padding-top: 10px;
  text-align: center;
  position: relative;
  top: 35%;
}
.text > a {
  font-size: 7vh;
  text-decoration: none;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: to right, linear-gradient(to right, #dd3e54, #0083b0);
}
.text > a:hover {
  font-size: 50px;
  color: #85d6f1;
}
.link-icon {
  position: absolute;
  left: 50%;
  top: 78%;
  transform: translate(-50%);
}
.link-icon > li {
  float: left;
  list-style-type: none;
}
.link-icon > li > a > img {
  padding-top: 10px;
  margin-left: 30px;
  margin-top: 20px;
  width: 50px;
  height: 50px;
}

.el-icon-arrow-down {
  cursor: pointer;
  font-size: 45px;
  color: #85d6f1;
  position: relative;
  top: 53%;
  left: 50%;
  transform: translate(-50%);
  animation-name: light;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

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
header {
  opacity: 0;
  width: 100%;
}
.sticky {
  opacity: 1 !important;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-120px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes light {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
}
.search {
  width: 20%;
}
.searchBtn {
  margin-left: -80px;
}
.SearchText {
  font-size: 50px;
  margin-top: 200px;
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

.el-icon-arrow-down {
  text-decoration: none;
}
.navigation {
  width: 100%;
  position: fixed;
  z-index: 9999;
  top: 0;
}
.nva-avatar {
  margin-top: 5px;
}
.main-body {
  position: relative;
  left: 50%;
}
.body-text {
  padding: 0;
}
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
.footer {
  margin-bottom: 0;
}
</style>
