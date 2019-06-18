<template>
    <div id="setpass">
      <div class="header">
        <i class="icon icon-back" v-on:click="goBack"></i>
      </div>
      <p class="title">{{msg}}</p>
      <div class="form">
        <div class="form-group">
          <i class="i i-lock"></i>
          <input type="password" name="password" placeholder="请输入密码">
        </div>
        <div class="form-group two">
          <i class="i i-lock"></i>
          <input type="password" name="password1" placeholder="请确认密码">
        </div>
      </div>
      <ul class="nav">
        <li>
          <router-link class="btn btn-reg" to="">确认</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'SetPass',
  data () {
    return {
      msg: '设置密码'
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
