<template>
  <!-- 留言板 -->
  <div class="body">
    <div class="body_input">
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="您可爱的昵称" prop="name">
          <el-input autofocus clearable v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="您神秘的邮箱" prop="email">
          <el-input clearable v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="留言" prop="text">
          <el-input
            rows="4"
            resize="none"
            type="textarea"
            maxlength="80"
            v-model="form.text"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('form')"
            >发布留言</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <hr />
    <div class="message-body" v-for="m in message" :key="m._id">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span
            ><img class="avatar" src="../assets/img/1000.jpg" alt=""
          /></span>
          <span>{{ m.name }}</span>
          <p class="time">{{ m.time }}</p>
        </div>
        <div class="text item">
          {{ m.text }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rules: {
        name: [
          { required: true, message: '请输入您的名称', trigger: 'blur' },
          { min: 4, max: 12, message: '长度在 4 到 12 个字符', trigger: 'blur' }],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        text: [
          { required: true, message: '请输入留言内容', trigger: 'blur' },
          { min: 2, max: 148, message: '长度在 2 到 80 个字符', trigger: 'blur' }]
      },
      message: [],
      form: {
        name: '',
        email: '',
        text: '',
        time: ''
      }
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.nowDate()
          this.$http.post('message/add', this.form).then(res => {
            console.log(res)
            this.findMessage()
            this.form.name = ''
            this.form.email = ''
            this.form.text = ''
          })
        }
      })
    },
    nowDate () {
      this.form.time =
        this.dayjs().format('YYYY-MM-DD HH:mm')
      console.log(this.confirmTime)
    },
    findMessage () {
      this.$http.get('message/find').then(res => {
        this.message = res.data
        console.log(this.message)
      })
    }
  },
  created () {
    this.findMessage()
  }
}
</script>

<style>
.body_input {
  z-index: 1 !important;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  width: 500px;
  margin-top: 80px;
}
.message-body {
  z-index: 1 !important;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin-top: 30px;
  margin-bottom: -150px;
  width: 800px;
  height: 300px;
}
.time {
  font-size: 15px;
  color: rgb(142, 141, 141);
}
.avatar {
  width: 50px;
  margin-right: 10px;
  border: 3 solid rgb(28, 216, 241);
  border-radius: 50px;
}
</style>
