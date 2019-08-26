<template>
  <div id="home">
    <top></top>
    <section class="contain">
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </section>
    <div class="bottom-gap"></div>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" to="/main/index" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="news" to="/main/news" icon="chat-o">聊天</van-tabbar-item>
      <van-tabbar-item name="letter" to="/main/letter" icon="search">提问</van-tabbar-item>
      <van-tabbar-item name="self" to="/main/self" icon="edit">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { createStore } from "../../store";
import { mapState } from "vuex";
import { Toast } from "vant";
import top from "../../components/common/Header";
const store = createStore();
export default {
  name: "Home",
  data() {
    return {
      transitionName: "",
      active: "home"
    };
  },
  computed: mapState({}),
  created() {},
  mounted() {},
  components: {
    top
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      this.isLogin();
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

<style lang="less">
@import "../../less/reset.less";
@import "../../less/home.less";
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
#home {
  margin: 0 auto;
  overflow-x: hidden;
}
.contain {
  background: #eeeeee;
  width: 100%;
}
.bottom-gap {
  height: 100px;
}
// .bottom{
//   bottom: .5rem;
// }
.van-tabbar-item--active {
  color: @homeColor;
}
.van-nav-bar__text {
  color: @homeColor;
}
.van-nav-bar .van-icon {
  color: @homeColor;
}
.van-nav-bar__title {
  .fontSize(13px);
  color: @homeColor;
}
.van-nav-bar__text{
  font-weight: bold;
}
</style>
