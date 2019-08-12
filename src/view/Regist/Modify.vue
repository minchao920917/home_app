<template>
  <div id="modify">
    <top :isShow="true" :title="'修改密码'"></top>

    <van-cell-group>
      <van-field v-model="name" clearable label="用户名" placeholder="请输入手机号" />
      <van-field v-model="password" type="password" label="旧密码" placeholder="请输入旧密码" />
      <van-field v-model="newPassword" type="password" label="新密码" placeholder="请输入新密码" />

      <!-- <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>-->
    </van-cell-group>

    <ul class="nav">
      <li>
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
      newPassword: "",
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
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="less">
@import "../../less/home.less";
#modify {
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
