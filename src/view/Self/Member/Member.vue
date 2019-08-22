<template>
  <div class="member">
 
      <van-swipe-cell v-for="(member,index) in list" :key="index">
        <van-cell :border="false" :title="member.user_name" :value="member.phone" />

        <template slot="right">
          <van-button square type="danger" text="删除" />
        </template>
      </van-swipe-cell>
   
  </div>
</template>

<script>
import Vue from "vue";
import { createStore } from "../../../store";
import { mapState } from "vuex";
const store = createStore();
import Url from "../../../utils/url";
import req from "../../../http/req";
import { Loading, Toast, SwipeCell,Button  } from "vant";

Vue.use(Loading);
Vue.use(Toast);
Vue.use(SwipeCell);
Vue.use(Button);

export default {
  data() {
    return {
      pageSize: 9999,
      pageNum: 1,
      list: []
    };
  },
  created() {
    store.state.top.isShowTop = true;
    store.state.top.title = "成员管理";
    this.init(this.pageNum);
  },
  methods: {
    init(pageNum) {
      const loadingToast = Toast.loading({
        duration: 0,
        mask: true,
        message: "加载中..."
      });
      this.reqPos(Url.getUserList, {
        pageSize: this.pageSize,
        pageNum: pageNum,
        home_id: localStorage.getItem("home_id") || ""
      }).then(res => {
        loadingToast.clear();
        if (res.status === "1") {
          console.log(res.data);
          this.list=res.data;
          console.log(this.list);
        } else {
          Toast({
            duration: 1000,
            message: res.msg
          });
        }
      });
    },
   
  }
};
</script>

<style>
</style>
