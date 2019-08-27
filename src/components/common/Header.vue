<!--
 * @ Author: minchao
 * @ Create Time: 2019-05-24 11:30:48
 * @ Modified by: minchao
 * @ Modified time: 2019-08-27 16:21:53
 * @ Description: 头部组件 header
 -->

<template>
  <header class="header" v-if="isShowTop">
    <van-nav-bar
      :title="title"
      :fixed="true"
      left-text
      :right-text="rightText"
      left-arrow
      @click-left="go"
      @click-right="onClickRight"
    />
    <div class="header-gap"></div>
  </header>
</template>
<script>
import Vue from "vue";
import { mapState } from "vuex";
import { createStore } from "../../store";
import { Icon, NavBar } from "vant";
import bus from "../../utils/bus";
Vue.use(Icon);
Vue.use(NavBar);
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
    rightText: state => state.top.rightText,
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
    onClickRight() {
     if(this.$route.path == "/self/notice"){
       this.$router.push({
         path:"/self/noticeAdd"
       })
     }
     if(this.$route.path == "/self/member"){
       this.$router.push({
         path:"/self/memberAdd"
       })
     }
     if(this.$route.path == "/self/account"){
       this.$router.push({
         path:"/self/accountAdd"
       })
     }
     
    }
  }
};
</script>

<style scoped lang="less">
@import "../../less/home.less";
.header {
  background: @whiteColor;
  text-align: center;
  color: @baseFontColor;
  .boxShadow();
  .fontSize();
  .header-content {
    display: flex;

    .back {
      width: 0.8rem;
      height: 0.8rem;
      line-height: 1rem;
      color: @baseFontColor;
      flex-grow: 1;
    }
    p {
      flex-grow: 11;
      padding-right: 0.8rem;
    }
  }
  .header-gap {
    height: 46px;
  }
}
</style>

