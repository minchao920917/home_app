<!--
 * @ Author: minchao
 * @ Create Time: 2019-06-20 11:13:25
 * @ Modified by: minchao
 * @ Modified time: 2019-08-27 16:16:33
 * @ Description: 账单管理 account
 -->

<template>
  <div class="account">
    <div class="tops">
      <div class="left">
        <van-button color="#09aeaf" size="small" plain @click="selectTime">{{currentDate | date2YearMonth}} <van-icon name="arrow-down"></van-icon></van-button>
      </div>
      <div class="right">
          <p class="">支出 ￥ {{disburse | outputmoney}}</p>
          <p class="">收入 ￥ {{income| outputmoney}}</p>
      </div>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-datetime-picker v-model="currentDate" type="year-month" :formatter="formatter" @confirm="confirm" @cancel="cancel" />
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { createStore } from "../../../store";
import { mapState } from "vuex";
const store = createStore();
import Url from "../../../utils/url";
import req from "../../../http/req";
import Filters from "../../../utils/filters";
import { Loading, Toast, SwipeCell, Button, Cell, Dialog, Popup } from "vant";

import { Tab, Tabs } from "vant";

Vue.use(Tab).use(Tabs);
Vue.use(Loading);
Vue.use(Toast);
Vue.use(SwipeCell);
Vue.use(Button);
Vue.use(Cell);
Vue.use(Dialog);
Vue.use(Popup);
import buttonComponent from "../../../components/common/Button";
export default {
  data() {
    return {
      currentDate: new Date(),
      show: false,
      list:[],
      disburse:"8822.22",
      income:"7212.33"
    };
  },
  mounted() {
    this.$store.state.top.isShowTop = true;
    this.$store.state.top.title = "账单管理";
    this.$store.state.top.rightText = "+";
  },
  created() {},
  components: {
    buttonComponent
  },
  filters:Filters,
  computed: {
    //   disburse(){//支出
    //     var disburse = 0;

    //       return 
    //   }
  },
  methods: {
    selectTime() {
      this.show = true;
    },
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      }
      return value;
    },
    confirm(value){
        this.currentDate = value;
        this.show = false;
    },
    cancel(){
        this.show= false;
    }
  }
};
</script>

<style lang="less" scoped>
.account {
  margin-top: 0.1rem;
  background: #fff;
  .tops {
      padding: 0 0 0 20px;
    background: #eee;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    .right{
        padding: 10px;
        p{
            height: 20px;
            line-height: 20px;
            font-size: 10px;
            color: #999;
        }
    }
  }
}
</style>

