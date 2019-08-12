<template>
  <div>成员管理</div>
</template>

<script>
import { createStore } from "../../../store";
import { mapState } from "vuex";
const store = createStore();
export default {
  data() {
    return {};
  },
  created() {
    store.state.top.isShowTop = true;
  }
};
</script>

<style>
</style>
