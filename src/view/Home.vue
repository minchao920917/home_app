<template>
  <div id="home">
    <section class="contain">
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </section>

    <van-tabbar route v-model="active">
      <van-tabbar-item replace to="/home/index"  icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/news/index" info="2" icon="chat-o">聊天</van-tabbar-item>
      <van-tabbar-item replace to="/letter/index" icon="search">家信</van-tabbar-item>
      <van-tabbar-item replace to="/self/index" dot icon="edit">我的</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      transitionName: "",
      active: 1
    };
  },
  methods: {},
  watch: {
    // 使用watch 监听$router的变化
    $route(to, from) {
      // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        // 设置动画名称
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    }
  }
};
</script>

<style scoped>
#home {
  margin: 0 auto;
  overflow-x: hidden;
}
.contain {
  background: #eeeeee;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

</style>
