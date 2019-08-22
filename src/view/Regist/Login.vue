<!--
 * @ Author: minchao
 * @ Create Time: 2019-06-10 16:51:47
 * @ Modified by: minchao
 * @ Modified time: 2019-08-23 11:44:40
 * @ Description: 登录页面
 -->
<template>
  <div id="login">
    <top :isShow="true" :title="'登录'"></top>

    <van-cell-group>
      <van-field v-model="name" clearable label="用户名" placeholder="请输入手机号" />
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
    </van-cell-group>

    <!-- <router-link class="modify" to="/modify">
      <span class="bran">?</span>忘记密码
    </router-link>   -->

    <ul class="nav">
      <li @click="login">
        <button-component
          class="index-btn"
          :isactivited="true"
          :width="'5rem'"
          :height="'.8rem'"
          :lineHeight="'.8rem'"
          :btntext="'登 录'"
        ></button-component>
      </li>
      <li>
        <router-link class="btn btn-feel" to="/regist">
          <button-component
            class="index-btn"
            :width="'5rem'"
            :height="'.8rem'"
            :lineHeight="'.8rem'"
            :btntext="'还未注册 点击注册'"
          ></button-component>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import { createStore } from "../../store";
import { mapState } from "vuex";
const store = createStore();
import Url from "../../utils/url";
import req from "../../http/req";
import { Loading, Toast, Field } from "vant";
Vue.use(Loading);
Vue.use(Toast);
Vue.use(Field);
import md5 from 'js-md5';
import top from "../../components/common/Header";
import inputField from "../../components/common/InputField";
import buttonComponent from "../../components/common/Button";
export default {
  name: "Login",
  data() {
    return {
      name: "",
      password: "",
      msg: "登陆"
    };
  },
    created() {
    store.state.top.isShowTop = false;
  },
  components: {
    top,
    inputField,
    buttonComponent
  },
  methods: {
    getOS() {
      var userAgent =
        ("navigator" in window &&
          "userAgent" in navigator &&
          navigator.userAgent.toLowerCase()) ||
        "";
      var vendor =
        ("navigator" in window &&
          "vendor" in navigator &&
          navigator.vendor.toLowerCase()) ||
        "";
      var appVersion =
        ("navigator" in window &&
          "appVersion" in navigator &&
          navigator.appVersion.toLowerCase()) ||
        "";
      if (/mac/i.test(appVersion)) return "MacOSX";
      if (/win/i.test(appVersion)) return "windows";
      if (/linux/i.test(appVersion)) return "linux";
      if (
        /iphone/i.test(userAgent) ||
        /ipad/i.test(userAgent) ||
        /ipod/i.test(userAgent)
      )
        return "ios";
      if (/android/i.test(userAgent)) return "android";
      if (/win/i.test(appVersion) && /phone/i.test(userAgent))
        return "windowsPhone";
    },
    checkedAll() {
      if (this.name == "") {
        Toast("手机号码不能为空");
        return false;
      }
      if (this.password == "") {
        Toast("密码不能为空");
        return false;
      }
      if (!/^1(3\d|4\d|5\d|6\d|7\d|8\d|9\d)\d{8}$/g.test(this.name)) {
        Toast("请填写正确的手机号码");
        return false;
      }
      return true;
    },
    login() {
      if (this.checkedAll()) {
        const loadingToast = Toast.loading({
          duration: 0,
          mask: true,
          message: "提交中..."
        });
        this.reqPos(Url.login, {
          phone: this.name,
          password: md5(this.password),
          equipment: this.getOS()
        }).then(res => {
          console.log(res);
          loadingToast.clear();
          if (res.status === "1") {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("home_id", res.data.home_id);
            localStorage.setItem("accountId", res.data.id);
            localStorage.setItem("nick_name", res.data.nick_name);
            localStorage.setItem("head_url", res.data.head_url);
            localStorage.setItem("phone", res.data.phone);
            localStorage.setItem("remarks", res.data.remarks);
            Toast({
              duration: 1500,
              message: res.msg,
              onClose: () => {
                this.$router.push({
                  path: "/main/index"
                });
              }
            });
          } else {
            Toast({
              duration: 1000,
              message: res.msg
            });
          }
        });
      } else {
        return;
      }
    }
  }
};
</script>

<style scoped lang="less">
@import "../../less/home.less";
#login {
  background: @whiteColor;
  width: 100%;
  max-width: 7.5rem;
  overflow: hidden;
  .modify{
    display: block;
    text-align: right;
    color:@homeColor;
    .pd();
    .bran{
      display: inline-block;
      width: .3rem;
      height: .3rem;
      text-align: center;
      line-height: .3rem;
      border-radius: .3rem;
      color: @whiteColor;
      background: @homeColor;
      .fontSize(.12rem);
    }
  }
  .nav {
    .marg(1rem);
    li {
      .mg(.4rem);
    }
  }
}
</style>
