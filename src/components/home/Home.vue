<template>
    <div id="home">
      <section class="contain" >
        <transition :name="transitionName">
          <router-view ></router-view>
        </transition>
      </section>
      <footer>
        <div class="bottom">
            <ul class="navbar">
              <li :class="{act:$route.meta.index == 1}">
                <router-link to="/home/index">
                  <i class="icon icon-home"></i>
                  <p>首页</p>
                </router-link>
              </li>
              <li :class="{act:$route.meta.index == 2}">
                <router-link to="/home/news" >
                  <i class="icon icon-news"></i>
                  <p>聊天</p>
                </router-link>
              </li>
              <li :class="{act:$route.meta.index == 3}">
                <router-link to="/home/faq">
                  <i class="icon icon-faq"></i>
                  <p>家信</p>
                </router-link>
              </li>
              <li :class="{act:$route.meta.index == 4}" >
                <router-link to="/home/pro">
                  <i class="icon icon-pro"></i>
                  <p>我的</p>
                </router-link>
              </li>
            </ul>
        </div>
      </footer>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      transitionName: '',
      active: 1
    }
  },
  methods: {

  },
  watch: {// 使用watch 监听$router的变化
    $route (to, from) {
      // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        // 设置动画名称
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
    }
  }
}
</script>

<style scoped>
  #home{
    margin:0 auto;
    overflow-x: hidden;
  }
  .contain{
      background: #eeeeee;
      width: 100%;
      height: 60rem;
      overflow: hidden;
  }
.bottom{
  display: block;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 750px;
  height: 1.5rem;
  overflow: hidden;
  border-top: 1px solid #f3f3f3;
  background: #fff;
  overflow: hidden;
}
  .navbar{
    display: flex;
    justify-content: space-around;
    align-items:stretch;
  }
  .navbar li{
    flex-grow: 1;
    height: 1.5rem;
    align-self:center;

  }
.navbar li a{
  width: 100%;
  display: block;
  text-align: center;
}
.navbar li a .icon{
  display: block;
  width: .48rem;
  height: .48rem;
  margin:.21rem auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.icon-home{
  background: url(./../../../static/images/home.png);
}
.act .icon-home{
  background: url(./../../../static/images/home_act.png);
}
.icon-faq{
  background: url(./../../../static/images/faq.png);
}
.act .icon-faq{
  background: url(./../../../static/images/faq_act.png);
}
.icon-news{
  background: url(./../../../static/images/news.png);
}
.act .icon-news{
  background: url(./../../../static/images/news_act.png);
}
.icon-pro{
  background: url(./../../../static/images/pro.png);
}
.act .icon-pro{
  background: url(./../../../static/images/pro_act.png);
}
.navbar li a p{
  width: 100%;
  height: .6rem;
  font-size: .2rem;
  text-align: center;
}
.act a p{
  color: #D1141B;
}
</style>
