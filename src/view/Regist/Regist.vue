<template>
  <div id="regist">
    <top :isShow="true" :title="'注册用户'"></top>

    <van-cell-group>
      <van-field v-model="name" clearable label="用户名" placeholder="请输入手机号" />
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
      <van-field v-model="rePassword" type="password" label="重复密码" placeholder="请重新输入密码" />

      <!-- <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>-->
    </van-cell-group>

    <ul class="nav">
      <li @click="regist">
        <button-component
          class="index-btn"
          :isactivited="true"
          :width="'5rem'"
          :height="'.8rem'"
          :lineHeight="'.8rem'"
          :btntext="'确定'"
        ></button-component>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import Url from "../../utils/url";
import req from "../../http/req";
import md5 from "js-md5"
import { Loading, Toast, Field } from "vant";
Vue.use(Loading);
Vue.use(Toast);
Vue.use(Field);

import top from "../../components/common/Header";
import buttonComponent from "../../components/common/Button";
export default {
  name: "modify",
  data() {
    return {
      name: "",
      password: "",
      rePassword: "",
      count: "",
      timer: null,
      sms: ""
    };
  },
  components: {
    top,
    buttonComponent
  },
  methods: {
    send() {
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
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
      if (this.rePassword == "") {
        Toast("重复密码不能为空");
        return false;
      }
      if (!/^1(3\d|4\d|5\d|6\d|7\d|8\d|9\d)\d{8}$/g.test(this.name)) {
        Toast("请填写正确的手机号码");
        return false;
      }
      if (this.rePassword !== this.password) {
        Toast("密码与重复密码不一致");
        return false;
      }
      return true;
    },
    regist() {
      if (this.checkedAll()) {
        const loadingToast = Toast.loading({
          duration: 0,
          mask: true,
          message: "提交中..."
        });
        this.reqPos(Url.regist, {
          phone: this.name,
          password: md5(this.password)
        }).then(res => {
          console.log(res);
          loadingToast.clear();
          if (res.status === "1") {
            Toast({
              duration: 1500,
              message: res.msg,
              onClose: () => {
                this.$router.push({
                  path: "/login"
                });
              }
            });
          } else {
            Toast({
              duration: 2000,
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
#regist {
  background: @whiteColor;
  width: 100%;
  max-width: 7.5rem;
  overflow: hidden;
  .nav {
    .marg(1rem);
    li {
      .mg(0.4rem);
    }
  }
}
</style>