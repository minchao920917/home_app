<template>
  <div id="self">
    <div class="">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <van-cell-group title="常用">
      <van-cell title="成员管理" is-link to="/self/member" />
      <van-cell title="通知管理" is-link to="/self/notice" />
      <van-cell title="记账管理" is-link to="index" />
    </van-cell-group>
    <van-cell-group title="个人">
      <van-cell title="地址管理" is-link to="index" />
      <van-cell title="名片夹管理" is-link to="index" />
    </van-cell-group>
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
    store.state.top.isShowTop = false;
  }
};
</script>

<style lang="less" scoped>
</style>

