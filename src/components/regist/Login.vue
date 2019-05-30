<template>
  <div id="login">
    <div class="header">
      <i class="icon icon-back" v-on:click="goBack"></i>
    </div>
    <p class="title">{{msg}}</p>
    <div class="form">
      <div class="form-group">
        <i class="i i-phone"></i>
        <input type="text" name="phone" v-model="name" placeholder="请输入手机号码">
      </div>
      <div class="form-group two">
        <i class="i i-lock"></i>
        <input type="password" name="password" v-model="password" placeholder="请输入密码">
      </div>

        <router-link class="modify" to="/modify">
            <span class="bran">?</span>忘记密码
        </router-link>
    </div>
    <!-- <van-loading type="spinner" color="#1989fa" size="24px" vertical /> -->
    <ul class="nav">
      <li>
        <!-- <router-link class="btn btn-reg" to="/login">登 录</router-link> -->
        <a href="javascript:void(0)" class="btn btn-reg" @click="login">登 录</a>
      </li>
      <li>
        <router-link class="btn btn-feel" to="/regist">没有账号 点击注册</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import Url from '../../utils/url';
import req from '../../http/req';
import { Loading,Toast} from "vant";
Vue.use(Loading);
export default {
  name: 'Login',
  data () {
    return {
      name:"",
      password:"",
      msg: '登陆'
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    login(){

      this.reqPos(Url.login, {
        phone:this.name,
        password:this.password
      }).then(res => {
        console.log(res);
        if (res.status === "1") {
    
          Toast({
            duration:1500,
            message:res.msg,
            onClose:()=>{
              this.$router.push({
                path:"/home/index"
            })
            }
          });

        } else {
          Toast({
            duration:2000,
            message:res.msg,
          });
        }
      });
    }
  }
}
</script>

<style scoped>
  .btn-reg {
    margin-top: 2.39rem;
  }
  .modify{
    font-size: .24rem;
    color: #D1141B;
    letter-spacing: 0;
    float: right;
    margin-top: .32rem;
  }
  .modify span{
    width: .24rem;
    height: .24rem;
    color:#fff;
    background-color: #D1141B;
    border-radius: 50%;
    padding: 0.02rem .1rem;
    margin-right: .11rem;
  }
</style>
