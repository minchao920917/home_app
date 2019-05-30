<template>
  <div id="index">
    <div class="container">
      <img :src="img">
    </div>
  </div>
</template>
<script>
import Url from "../../utils/url";
import req from "../../http/req";
import { Loading, Toast } from "vant";
export default {
  name: "Index",
  data() {
    return {
      img:
        "https://qiniu.epipe.cn/5430983074181545984?imageslim&imageView2/1/w/750/h/360"
    };
  },
  components: {},
  mounted(){
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
    }
  }
};
</script>

<style scoped lang="less">
.container {
  background: #f3f3f3;
  /*height: 5.90rem;*/
  overflow-x: hidden;
  overflow-y: auto;
  img {
    width: 100%;
  }
}
</style>
