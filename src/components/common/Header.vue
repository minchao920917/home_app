<!--
 * @ Author: minchao
 * @ Create Time: 2019-05-24 11:30:48
 * @ Modified by: minchao
 * @ Modified time: 2019-08-12 11:04:46
 * @ Description: 头部组件 header
 -->

<template>
  <header class="header">
    <div class="header-content" v-if="isShow">
      <p>{{title}}</p>
      <span class="back" @click="go" v-show="isShowReturnIcon">
        <van-icon name="arrow-left" />
      </span>
    </div>
    <div class="header-gap" v-if="false"></div>
  </header>
</template>
<script>
import Vue from "vue";
import { mapState } from "vuex";
import { createStore } from "../../store";
import { Icon } from "vant";
import bus from "../../utils/bus";
Vue.use(Icon);
const store = createStore();

export default {
  name: "top",
  props: [],
  data() {
    return {};
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    isShowReturnIcon: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ""
    }
  },
  created() {},
  mounted() {},
  methods: {
    go() {
      this.$router.go(-1);
    },
    generate() {
      bus.$emit("generate");
    },
    cancel() {
      store.dispatch("showCancelToast", true);
    }
  }
};
</script>

<style scoped lang="less">
@import "../../less/home.less";
.header {
  position: relative;
  height: 0.6rem;
  line-height: 0.6rem;
  background: @whiteColor;
  text-align: center;
  color: @baseFontColor;
  .boxShadow();
  .fontSize();
  .back {
    position: absolute;
    width: 0.6rem;
    height: 0.6rem;
    line-height: 0.6rem;
    top: 0;
    left: 0.1rem;
    color: @baseFontColor;
  }
}
</style>

