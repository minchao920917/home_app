<template>
  <div id="index">
    <div class="container">
      <div>首页</div>
    </div>
  </div>
</template>
<script>
import Url from "../../utils/url";
import req from "../../http/req";
import { createStore } from "../../store";
import { mapState } from "vuex";
const store = createStore();
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
  created() {
    store.state.top.title = "首页";
    store.state.top.isShowTop = false;
    store.state.top.isShowReturnIcon = true;
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
    getSearch() {},
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

}
</style>
