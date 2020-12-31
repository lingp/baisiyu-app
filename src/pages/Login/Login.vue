<template>
  <div class="login-form">
    <div class="login-form-header">
      登录/注册
    </div>
    <div class="login-form-content">
      <div>
        <label class="login-form-label"></label>
        <input type="text" name="username" placeholder="用户名" />
      </div>
      <div>
        <label class="login-form-label"></label>
        <input type="text" name="password" placeholder="密码" />
      </div>
      <div>
        <label class="login-form-label"></label>
        <input type="text" name="password" placeholder="验证码" />
      </div>
    </div>
    <div class="login-form-footer">
      <input type="submit" name="登录" />
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Login'
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
