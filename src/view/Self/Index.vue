<template>
  <div id="self">
    <div>我的</div>
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

