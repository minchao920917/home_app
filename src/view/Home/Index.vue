<template>
  <div id="index">
    <div class="container">
      <div class="img">
        <img :src="img">
      </div>

      <van-notice-bar
        class="notice"
        color="#1989fa"
        background="#ecf9ff"
        :speed="20"
        left-icon="info-o"
        mode="closeable"
      >足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。</van-notice-bar>
      <van-tabs v-model="active">
        <van-tab title="通知">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            :offset="10"
            direction="down"
            @load="onLoad"
            class="noticList"
          >
            <van-cell v-for="item in list" :key="item" :title="item"/>
          </van-list>
        </van-tab>
        <van-tab title="收入">内容 2</van-tab>
        <van-tab title="支出">内容 3</van-tab>
        <van-tab title="定位">内容 4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import Url from "../../utils/url";
import req from "../../http/req";

export default {
  name: "Index",
  data() {
    return {
      img:
        "https://qiniu.epipe.cn/5430983074181545984?imageslim&imageView2/1/w/750/h/360",
      active: 0,
      list: [],
      loading: false,
      finished: false
    };
  },
  components: {},
  mounted() {
    this.getSearch();
  },
  methods: {
    getNum(i) {
      // this.$toast(`==当前滑到了第${i}个`, 400)
      // console.log(i)
    },
    getSearch() {
      this.reqPos(Url.searchList, {}).then(res => {
        console.log(res);
      });
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 6; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 20) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>

<style scoped lang="less">
.container {
  background: #fff;
  /*height: 5.90rem;*/
  height: 85vh;
  .img {
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .notice {
    top: -5px;
  }
  .noticList {
    overflow-y: auto;
    height: 7rem;
    background: #fff;
  }
}
</style>
