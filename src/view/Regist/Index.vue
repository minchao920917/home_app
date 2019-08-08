<template>
  <div id="index">
    <img class="logo" src="../../assets/logo.png" />
    <p class="title">{{msg}}</p>
    <ul class="nav">
      <li class="nav-li">
        <router-link class="btn btn-reg" to="/login">
          <button-component class="index-btn" :isactivited="true" :width="'6rem'" :btntext="'登录/注册'"></button-component>
        </router-link>
      </li>
      <li class="nav-li">
        <router-link class="btn btn-feel" to="/main/index">
          <button-component class="index-btn" :width="'6rem'" :btntext="'立即体验'"></button-component>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import buttonComponent from "../../components/common/Button";
export default {
  name: "Index",
  data() {
    return {
      msg: "爱赞家"
    };
  },
  components: {
    buttonComponent
  }
};
</script>

<style scoped lang="less">
@import "../../less/home.less";
#index {
  text-align: center;
  .logo {
    width: 2rem;
    height: 2rem;
    margin-top: 3rem;
  }
  .title {
    margin-top: 0.24rem;
    color: @homeColor;
    .fontSize(@value:.32rem);
  }
  .nav {
    margin-top: 3rem;
    .nav-li{
      margin-top:.5rem;
    }
  }
}
</style>
