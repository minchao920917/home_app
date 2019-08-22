<!--
 * @ Author: minchao
 * @ Create Time: 2019-05-24 11:30:48
 * @ Modified by: minchao
 * @ Modified time: 2019-08-23 16:49:51
 * @ Description: 头部组件 header
 -->

<template>
  <header class="header" v-if="isShowTop">
    <div class="header-content"  >
      <p>{{title}}</p>
      <span class="back" @click="go" v-show="isShowReturnIcon">
        <van-icon name="arrow-left" />
      </span>
    </div>
    <div class="header-gap"></div>
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
    isShowReturnIcon: {
      type: Boolean,
      default: true
    }
  },
  computed: mapState({
    isShowTop: state => state.top.isShowTop,
    title: state => state.top.title,
  }),
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
  height: 1rem;
  line-height: 1rem;
  background: @whiteColor;
  text-align: center;
  color: @baseFontColor;
  .boxShadow();
  .fontSize();
  .back {
    width: 0.8rem;
    height: 0.8rem;
    line-height: 1rem;
    color: @baseFontColor;
  }
  .header-gap{
    height: 1rem;
  }
}
</style>

