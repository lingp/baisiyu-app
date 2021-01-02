<template>
  <div class="login-form">
    <div class="login-form-header">
      登录/注册
    </div>
    <div class="login-form-content">
      <div>
        <label class="login-form-label"></label>
        <input type="text" name="username" placeholder="手机号" v-model="username" />
      </div>
      <div>
        <label class="login-form-label"></label>
        <input type="text" name="password" placeholder="密码" v-model="password"/>
      </div>
      <div>
        <label class="login-form-label"></label>
        <input type="text" name="captcha" placeholder="验证码" v-model="captcha" />
      </div>
    </div>
    <div class="login-form-footer">
      <input type="submit" name="登录" v-on:click="login" />
    </div>

  </div>
</template>

<script>
  import {loginByUsernamePwd} from '../../apis'

  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: '',
        captcha: ''
      }
    },
    computed: {
      rightPhone() {
        return /^1\d{10}$/.test(this.username)
      }
    },
    mounted() {
      this.username = ''
      this.password = ''
      this.captcha = ''
    },
    methods: {
      async login() {
        if (!this.username || !this.rightPhone) {
          this.toToast('手机号不能为空(暂时只支持手机号注册和登录)')
          return
        } else if (!this.password) {
          this.toToast('密码不能为空')
          return
        } else if (!this.captcha) {
          this.toToast('验证码不能为空')
          return
        }
        // 用户名/密码登录
        const result = await loginByUsernamePwd(this.username, this.password, this.captcha)
        console.log(result)
      },
      toToast(text) {
        const toast = this.$createToast({
          time: 1000,
          txt: text
        })
        toast.show()
      }
    }
  }
</script>

<style lang='less' rel='stylesheet/less'>
  .login-form {
    background-color: #5aadff;
    width: 100%;
    text-align: center;
    vertical-align: center;
    box-sizing: border-box;
    /*border: 1px solid #5aadff;*/
    .login-form-header {
      line-height: 100px;
      text-align: center;
      font-size: 30px;
      color: #FFFFFF;
      box-sizing: border-box;
    }
    .login-form-content {
      box-sizing: border-box;
      width: 100%;
      background-color: #ffffff;
      padding: 0px 10px;
      .login-form-label {
        display: inline-block;
        text-align: justify;
      }
      input {
        width: 100%;
        padding-left: 10px;
        /*margin: 20px 0px;*/
        font-size: 40px;
        /*color: #ffffff;*/
      }
    }
    .login-form-footer {
      box-sizing: border-box;
      padding: 40px;
      background-color: #ffffff;
      input {
        width: 100%;
        background-color: #5aadff;
        border-radius: 50px;
        padding: 20px;
        font-size: 40px;
        color: #ffffff;
      }
    }

  }
</style>
