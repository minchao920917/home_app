<template>
  <transition :name="transitionName">
    <router-view></router-view>
  </transition>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
export default {
  name: "App",
  data() {
    return {
      transitionName: ""
    };
  },
  created(){
    //  this.isLogin();
  },
  watch: {
    //使用watch 监听$router的变化

    $route(to, from) {
      document.title = to.meta.title;
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
     
    }
  },
  methods: {
    isLogin() {
      if ((localStorage.getItem("token") || "") == "") {
        Toast("您尚未登录,请登录");
        this.$router.push({
          path: "/login"
        });
      }
    }
  }
};
</script>

<style>
@import "./less/reset.less";
/* 过渡动画 */
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 100ms linear;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
