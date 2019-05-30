<template>
  <div id="index">
    <img class="logo" src="../../assets/logo.png">
    <p class="title">{{msg}}</p>
    <ul class="nav">
      <li>
        <router-link class="btn btn-reg" to="/login">登陆/注册</router-link>
      </li>
      <li>
        <router-link class="btn btn-feel" to="/home/index">立即体验</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: '爱赞家'
    }
  }
}
</script>

<style scoped>
  .title{
    margin-top: .24rem;
  }
</style>
