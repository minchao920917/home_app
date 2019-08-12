<template>
  <div id="home">
    <section class="contain">
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </section>
    <van-tabbar route v-model="active">
      <van-tabbar-item  to="/main/index" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item  to="/main/news"  icon="chat-o">聊天</van-tabbar-item>
      <van-tabbar-item  to="/main/letter" icon="search">提问</van-tabbar-item>
      <van-tabbar-item  to="/main/self"  icon="edit">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { createStore } from '../../store';
import { mapState } from 'vuex';
const store = createStore();
export default {
  name: "Home",
  data() {
    return {
      transitionName: "",
      active: 0
    };
  },
  computed: mapState({
  }),
  created() {
    
  },
  components:{

  },
  methods: {},

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
  
}
</style>
