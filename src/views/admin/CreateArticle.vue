<template>
  <!-- 创建文章 -->
  <el-form
    @submit.native.prevent="saveArticle"
    ref="form"
    :model="article"
    label-width="80px"
  >
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    <el-form-item label="分类" size="normal">
      <el-select label="请选择" v-model="article.class" placeholder="分类">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>

    <el-button slot="append" icon="el-icon-search"></el-button>
    <el-form-item label="文章内容">
      <mavon-editor
        ref="md"
        @imgAdd="$imgAdd"
        @imgDel="$imgDel"
        autofocus
        class="md"
        :ishljs="true"
        v-model="article.body"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data () {
    return {
      confirmTime: '',
      img_file: [],
      article: {
        title: '',
        body: '',
        time: '',
        class: ''
      },
      options: [{ // 分类值
        value: '1',
        label: '前端'
      }, {
        value: '2',
        label: '随笔'
      }],
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      }

    }
  },
  methods: {
    saveArticle () {
      this.nowDate()
      console.log(this.article.time)
      this.$http.post('/articles', this.article).then(res => {
        this.$message({
          message: '文章创建成功',
          type: 'success'
        })
        this.$router.push('/admin-article/index')
        console.log(res)
      })
    },
    nowDate () {
      this.article.time =
        this.dayjs().format('YYYY-MM-DD HH:mm')
      console.log(this.confirmTime)
    },
    $imgAdd (pos, $file) {
      console.log('!!!!!!!!!!')
      // 第一步.将图片上传到服务器.
      const formdata = new FormData()
      formdata.append('imgFile', $file)
      this.img_file[pos] = $file
      this.$http({
        url: '/upload_images',
        method: 'post',
        data: formdata
      }).then((res) => {
        const _res = res.data
        // 第二步.将返回的url替换到文本原位置[外链图片转存失败(img-v2eG7egk-1562220599730)(0)] -> [外链图片转存失败(img-RmlJ1kIp-1562220599733)(url)]
        this.$refs.md.$img2Url(pos, _res.url)
      })
    },
    $imgDel (pos) {
      delete this.img_file[pos]
    }
  },
  created () {
    this.nowDate()
  }
}
</script>

<style scoped>
.md {
  height: 600px;
}
.markdown-body pre code {
  color: #fff;
}
.markdown-body pre {
  background-color: #282c34;
}
</style>
