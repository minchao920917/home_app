<template>
  <header class="header" v-if="isShowTop">
    <div class="header-content" >
      <h5>{{title}}</h5>
      <span class="back" @click="go" v-show="isShowReturnIcon">
        <van-icon name="arrow-left"/>
      </span>

    </div>
  </header>
</template>
<script>
import Vue from "vue";
import { mapState } from "vuex";
import { createStore } from "../store";
import { Icon } from "vant";
import bus from "../utils/bus";
Vue.use(Icon);
const store = createStore();

export default {
  name: "top",
  props: [],
 data() {
    return {};
  },
  computed: mapState({
    isShowTop: state => state.top.isShowTop,
    title: state => state.top.title,
    isShowReturnIcon: state => state.top.isShowReturnIcon
  }),
  created() {
     
  },
  mounted() {},
  methods: {
    go() {
      history.go(-1);
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

.header {
  text-align: center;
  font-size: 0.17rem;
  height: 0.44rem;
  h5 {
    color: #030303;
    font-weight: 500;
  }
  .header-content {
    height: 0.44rem;
    position: fixed;
    top: 0px;
    left: 0px;
    line-height: 0.44rem;
    background: #ffffff;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.55);
    width: 100%;
    z-index: 12;
    // position:relative;
    .back {
      position: absolute;
      width: 0.3rem;
      top: 0.02rem;
      display: block;
    }
    .save {
      position: absolute;
      font-weight: 500;
      right: 0.15rem;
      top: 0rem;
      font-size: 0.14rem;
      color: #8d8d8d;
      letter-spacing: 0;
      color: #ff6f53;
    }
    .cancel {
      position: absolute;
      right: 0.15rem;
      top: 0.01rem;
      font-size: 0.14rem;
      color: #8d8d8d;
      letter-spacing: 0;
    }
    .tos {
      position: absolute;
      right: 0.15rem;
      top: 0.01rem;
      font-size: 0.14rem;
      color: #8d8d8d;
      letter-spacing: 0;
      .icon {
        font-size: 0.16rem;
        transform: translate(20%, 20%);
      }
    }
  }
}
</style>

