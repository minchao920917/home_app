<template>
  <div id="regist">
    <div class="header">
      <i class="icon icon-back" v-on:click="goBack"></i>
    </div>
    <p class="title">{{msg}}</p>
    <div class="form">
      <div class="form-group">
        <i class="i i-phone"></i>
        <input type="text" name="phone" placeholder="请输入手机号">
        <a class="send"  v-on:click="send" href="javascript:void(0);">发送验证码</a>
      </div>
      <div class="form-group two">
        <i class="i i-lock"></i>
        <input type="password" name="password" placeholder="请输入密码">
        <p v-if="count" class="time">重新发送({{count}})</p>
      </div>

      <router-link class="modify" to="/modify">
      </router-link>
    </div>
    <ul class="nav">
      <li>
        <router-link class="btn btn-reg" to="/setpass">下一步</router-link>
      </li>
      <li>
        <p class="agree-tip">点击按钮即表示您已同意<router-link class="agree" to="/agree">《爱赞家使用协议》</router-link></p>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Regist',
  data () {
    return {
      msg: '注册',
      count: '',
      timer: null
    }
  },
  methods: {
    send () {
      const TIME_COUNT = 60
      if (!this.timer) {
        this.count = TIME_COUNT
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    },
    goBack () {
      this.$router.go(-1)
    }
  }

}
</script>

<style scoped>
.send{
  width: 1.6rem;
  height: .43rem;
  line-height: .43rem;
  padding: .06rem .23rem;
  background: #D1141B;
  border-radius: 21rem;
  font-size: .22rem;
  color: #FFFFFF;
  letter-spacing: 1px;
}
  .time{
    width: 1.74rem;
    height: .35rem;
    line-height: .35rem;
    font-size: .24rem;
    color: #D1141B;
    letter-spacing: 0;
  }
  .agree-tip{
    font-size: .24rem;
    color: #8B8B8B;
    letter-spacing: 0;
    margin-top: .24rem;
  }
  .agree-tip a{
    color:#D1141B;
  }
</style>
