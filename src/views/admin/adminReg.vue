<template>
  <!-- 注册页，由于没有做权限管理，所以并不建议开放 -->
  <div class="container">
    <div class="login-wrapper">
      <img src="@/assets/img/1000.jpg" alt="" class="login-avatar" />
      <div class="form-wrapper">
        <input
          type="text"
          name="username"
          placeholder="username"
          class="input-item"
          v-model="user.username"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          class="input-item"
          v-model="user.password"
        />
        <!-- <div class="btn">Login</div> -->
        <button class="btn" @click="sendReg">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    sendReg () {
      this.$http.post('reg', this.user).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
* {
  user-select: none;
  margin: 0;
  padding: 0;
  font-family: "Times New Roman", Times, serif;
}
html {
  height: 100%;
}

body {
  height: 100%;
}
.container {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right, #fc00ff, #00dbde);
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrapper {
  background-color: #fff;
  width: 250px;
  height: 500px;
  border-radius: 15px;
  padding: 0 50px;
}
.login-avatar {
  width: 90px;
  height: 90px;
  position: relative;
  left: 50%;
  top: 20px;
  transform: translate(-50%);
  border-radius: 90px;
  border: 2px solid #00dbde;
  margin-top: 100px;
  margin-bottom: 30px;
}
.login-wrapper .form-wrapper .input-item {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 0;
  padding: 10px;
  border-bottom: 1px solid rgb(110, 108, 108);
  font-size: 12px;
  outline: none;
}

.login-wrapper .form-wrapper .input-item::placeholder {
  text-transform: uppercase;
}

.login-wrapper .form-wrapper .btn {
  text-align: center;
  padding: 10px;
  width: 100%;
  border: 0;
  margin-top: 40px;
  background-image: linear-gradient(to right, #fc00ff, #00dbde);
  color: #fff;
  cursor: pointer;
}

.login-wrapper .form-wrapper .btn:hover {
  background-image: linear-gradient(to right, #eb8eed, #90ecee);
}
</style>
