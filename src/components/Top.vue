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
  mounted() {

  },
  methods: {
    go() {
      this.$router.go(-1)
      
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
  font-size: 0.18rem;
  height: 0.8rem;
  h5 {
    color: #030303;
    font-weight: 500;
  }
  .header-content {
    height: 0.8rem;
    position: fixed;
    top: 0px;
    left: 0px;
    line-height: 0.8rem;
    background: #ffffff;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.55);
    width: 100%;
    z-index: 12;
    // position:relative;
    .back {
      position: absolute;
      width: 0.8rem;
      height: 0.8rem;
      top: 0;
      left: 0;
      
      display: block;
      i{
        font-size: .3rem;
        line-height: 0.8rem;
      }
    }
 
  }
}
</style>

