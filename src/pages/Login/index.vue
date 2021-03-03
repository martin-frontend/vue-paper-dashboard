<template>
    <!-- <div>
        <input v-model="account" type="text">
        <input v-model="password" type="text">
        <button @click="login">登入</button>
    </div> -->
    <div class="bg">
      <div class="login-box">
        <h2>Welcome</h2>
        <form>
          <div class="user-box">
            <input v-model="account" type="text" name="" required="">
            <label>account</label>
          </div>
          <div class="user-box">
            <input v-model="password" type="password" name="" required="">
            <label>password</label>
          </div>
          <a class="enter-btn" @click="login" href="#">
            Enter
          </a>
        </form>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                account: 'admin',
                password: '123456'
            }
        },
        methods: {
            login() {
                const { account, password } = this
                this.$store.dispatch('user/login', {account,password}).then(() => {
                    this.$router.push({ path: '/' })
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
.bg {
  width: 100vw;
  height: 100vh;
  background-color: #f4f3ef;
}
.login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,.3);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0 ,0 ,0 , .6);
    border-radius: 10px;
    h2 {
      margin: 0 0 30px;
      padding: 0;
      color: #fff;
      text-align: center;
    }
    form {
      text-align: center;
    }
    .user-box {
      position: relative;
      input {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;
      }
      label {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: .5s;
      }
      input:focus ~ label,input:valid ~ label {
        top: -20px;
        left: 0;
        color: #66615B;
        font-size: 14px;
      }
    }
    .enter-btn {
      padding: .7em 8em;
      background: #66615B;
      border-radius: 15px;
      color: #fff;
      font-size: 14px;
      &:hover {
        transition: all .3s;
        background: rgba(#66615B,.7);
      }
    }
}
</style>