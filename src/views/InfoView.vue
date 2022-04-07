<template>
  <!-- 个人信息 -->
  <div class="info-body">
    <div class="info-avatar">
      <img src="../assets/img/ava.jpeg" alt="" />
      <br />
      <h1>Me9um1</h1>
      <hr />
    </div>
    <div class="info-text">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          🐻目前为大三在校生，找实习工作中🐻
        </div>
        <div class="text">
          <div class="web">
            <p style="float: left">前端历程：</p>
            <br />
            <p>
              第一次接触到前端是初二的时候，那个时候特别喜欢研究网络安全方面的东西，就自然而然接触到了前端；但是但是并没有现如今这么多免费的资料,因为年纪小也没找到合适的学习方向，在我看了几天html标签之后就慢慢的放弃了。
            </p>
            <br />
            <p>
              到了后来，高中的时候成了声乐艺术特长生，然而艺考的时候发挥失利，得到了一个随便过线但是并不太好的成绩。填报志愿的时候挣扎很久，最后选择报了一所大专的计算机专业。说实话并不后悔，毕竟比起美声我还是更喜欢开发一点；转眼快毕业了，最大的愿望是找到一份自己喜欢的工作。
            </p>
          </div>
          <hr />
          <div class="blog">
            <p style="float: left">博客介绍：</p>
            <br />
            <p>
              自从寒假自学完Vue之后就想做一个小项目练练手，思来想去就准备做一个自己的博客。但是随即就遇到了第一个问题——————我不会后端啊，项目接口咋办啊。当然只能自己解决了，后面就想到了Node.js，然后就去学；学的时候发现了还有express这框架，然后又去看了Mongoose，又在B站和百度上看了很多的参考，终于能写自己的接口了。
            </p>
            <br />
            <p>
              整个博客前后端开发加起来用了一个多星期(本来能更快的，有事耽搁了几天)。前端采用了<b
                >Vue2 + VueX + VueRouter + ElementUi</b
              >,后端使用的是<b>Express + Mongoose</b
              >,其实页面还是很简陋的,功能也不算太多,个人开发水平有限，日后会随着开发水平的提升不断更新这个项目📃。
            </p>
            <br />
            <p>
              源码我已全部上传至Github，欢迎使用这个项目进行学习，如有不明白的地方可以联系我，我会抽空给大家解惑
            </p>
          </div>
          <hr />
          <div class="info">
            <p style="float: left">联系我：</p>
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
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>
.info-body {
  width: 100%;
  height: 100%;
}
.info-avatar {
  background-image: url("../assets/img/Nabaci3.jpeg");
  overflow: hidden;
  background-size: cover;
}
.info-avatar > img {
  margin-top: 100px;
  width: 180px;
  border-radius: 180px;
  border: 2px solid rgb(65, 226, 247);
  position: relative;
  left: 50%;
  transform: translate(-50%);
}
.info-avatar > h1 {
  text-align: center;
}
.info-text {
  text-align: center;
  margin-top: 50px;
}
.box-card {
  z-index: 1 !important;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin-top: 30px;
  margin-bottom: -150px;
  width: 1000px;
  height: 800px;
}
.clearfix {
  font-size: 25px;
}
.text {
  font-size: 18px;
  font-family: "Courier New", Courier, monospace;
}
.web {
  margin-bottom: 10px;
}
.blog {
  margin-top: 10px;
  margin-bottom: 30px;
}
.info {
  margin-top: 30px;
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
</style>
