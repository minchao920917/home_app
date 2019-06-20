<template>
  <div id="self">
    <div class="container">
      <h3 class="title">常用功能</h3>
      <van-cell title="成员管理" is-link to="/main/member"/>
      <van-cell title="通知管理" is-link to="/main/member"/>
      <van-cell title="记账管理" is-link to/>
      <h3 class="title">附加功能</h3>
      <van-cell title="名片夹管理" is-link/>
      <van-cell title="地址管理" is-link/>
      <van-cell title="亲戚计算器" is-link/>
    </div>
  </div>
</template>

<script>
import { createStore } from "../../store";
import { mapState } from "vuex";
const store = createStore();
export default {
  name: "self",
  data() {
    return {};
  },
  computed: mapState({
    // wateritem: state => state.wateritem,
  }),
  created() {
    store.state.top.title = "我的";
    store.state.top.isShowTop = true;
    store.state.top.isShowReturnIcon = true;
  }
};
</script>

<style lang="less" scoped>
.container {
  background: #fff;
  /*height: 5.90rem;*/
  height: 85vh;
  text-align: left;
}
</style>

