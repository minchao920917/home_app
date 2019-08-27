<template>
  <div id="self">
    <div class="user-info">
      <div class="left">
        <img :src="head_url != ''?head_url:default_head_url" alt />
      </div>
      <div class="right">
        <p class="nick-name">{{nick_name}} <span>{{role == 1?"(家主)":"成员"}}</span></p>
        <p class="tel">{{tel}}</p>
      </div>
    </div>
    <p class="remarks">{{remarks!=""?remarks:"个性签名:   无"}}</p>
    <van-cell-group class="cell-group first" title>
      <van-cell title="成员管理" is-link to="/self/member" />
      <van-cell title="通知管理" is-link to="/self/notice" />
      <van-cell title="记账管理" is-link to="/self/account" />
    </van-cell-group>
    <van-cell-group class="cell-group" title>
      <van-cell title="地址管理" is-link to="index" />
      <van-cell title="名片夹管理" is-link to="index" />
    </van-cell-group>
    <van-cell-group class="cell-group" title>
      <van-cell title="设置" is-link to="index" />
    </van-cell-group>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
import { createStore } from "../../store";
import { mapState } from "vuex";
const store = createStore();
export default {
  name: "self",
  data() {
    return {
      default_head_url:"../../../static/images/head_url.png",
      head_url: localStorage.getItem("head_url")||"",
      nick_name: localStorage.getItem("nick_name")||"",
      tel: localStorage.getItem("phone")||"",
      role: localStorage.getItem("role")||"",
      remarks: localStorage.getItem("remarks")||""
    };
  },
  created() {
    store.state.top.isShowTop = false;
    store.state.top.title = "我的";
  }
};
</script>

<style lang="less" scoped>
@import "../../less/home.less";
#self {
  .user-info {
    height: 3rem;
    background: @homeColor;
    .flexbox();
    .pd(0rem, 0.6rem);
    .left {
       width: 1.5rem;
        height: 1.5rem;
        border-radius: 1.5rem;
        background: @whiteColor;
      img {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 1.5rem;
      }
    }
    .right {
      flex-grow: 111;
      padding-left: 0.3rem;
      p {
        color: @whiteColor;
      }
      .nick-name {
        .fontSize(0.4rem);
        .mg(0.1rem, 0);
        font-weight: bolder;
      }
    }
  }
  .remarks {
    .padd(0,.6rem,0.6rem,0.6rem);
    background: @homeColor;
    color: @whiteColor;
    .fontSize(0.2rem);
  }
  .cell-group {
    margin-top: 0.17rem;
    &.first {
      margin-top: 0;
    }
  }
}
</style>

