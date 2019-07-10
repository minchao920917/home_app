<template>
  <div id="index">
    <img class="logo" src="../../assets/logo.png" />
    <p class="title">{{msg}}</p>
    <ul class="nav">
      <li>
        <router-link class="btn btn-reg" to="/login">
          <button-component :isactivited="true"  :width="'6rem'" :btntext="'登录/注册'"></button-component>
        </router-link>
      </li>
      <li>
        <router-link class="btn btn-feel" to="/main/index">
        <button-component :width="'6rem'" :btntext="'立即体验'"></button-component>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import buttonComponent from '../../components/Button'
export default {
  name: "Index",
  data() {
    return {
      msg: "爱赞家"
    };
  },
  components:{
    buttonComponent
  }
};
</script>

<style scoped lang="less">
@import "../../less/home.less";
#index {
  text-align: center;
  .logo {
    width: 1.32rem;
    height: 1.31rem;
    margin-top: 3.45rem;
  }
  .title {
    margin-top: 0.24rem;
    color:@homeColor;
    font-size: .32rem;
  }
}
</style>
