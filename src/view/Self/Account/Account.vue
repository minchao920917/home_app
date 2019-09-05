<!--
 * @ Author: minchao
 * @ Create Time: 2019-06-20 11:13:25
 * @ Modified by: minchao
 * @ Modified time: 2019-09-05 16:22:32
 * @ Description: 账单管理 account
 -->

<template>
  <div class="account">
    <div class="tops">
      <div class="left">
        <van-button color="#09aeaf" size="small" plain @click="selectTime">
          {{currentDate | date2YearMonth}}
          <van-icon name="arrow-down"></van-icon>
        </van-button>
      </div>
      <div class="right">
        <p class>支出 ￥ {{disburse | outputmoney}}</p>
        <p class>收入 ￥ {{income| outputmoney}}</p>
      </div>
    </div>
    <div class="account-list">
      <div class="line-bottom" v-for="(account,index) in list" :key="index">
        <van-swipe-cell :on-close="onClose" :name="account.id">
          <template slot="left">
            <van-button square type="primary" text="修改" />
          </template>
          <van-cell
            :border="false"
            :title="account.reason"
            :value="getDate2Str(account.create_time)"
          />
          <template slot="right" :name="account.id">
            <van-button square type="danger" text="删除" :data="index" />
          </template>
        </van-swipe-cell>
      </div>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        :formatter="formatter"
        @confirm="confirm"
        @cancel="cancel"
      />
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
      list: [],
      disburse: "0",
      income: "0"
    };
  },
  mounted() {
    this.$store.state.top.isShowTop = true;
    this.$store.state.top.title = "账单管理";
    this.$store.state.top.rightText = "+";
  },
  created() {
    this.getFinacialList();
  },
  components: {
    buttonComponent
  },
  filters: Filters,
  computed: {
    getDate2Str() {
      return function(date) {
        return Filters.date2Str(date);
      };
    }
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
    confirm(value) {
      this.currentDate = value;
      this.show = false;
      this.getFinacialList();
    },
    getFinacialList() {
      const loadingToast = Toast.loading({
        duration: 0,
        mask: true,
        message: "提交中..."
      });
      this.reqPos(Url.getFinacialList, {
        home_id: localStorage.getItem("home_id"),
        pageSize: 999,
        pageNum: 1,
        dateString: Filters.date2YMFormater(this.currentDate)
      }).then(res => {
        loadingToast.clear();
        if (res.status === "1") {
          this.list = res.data;
          this.getTotal();
        } else {
          Toast({
            duration: 1000,
            message: res.msg
          });
        }
      });
    },
    cancel() {
      this.show = false;
    },
    // clickPosition 表示关闭时点击的位置
    onClose(clickPosition, instance, event) {
      switch (clickPosition) {
        case "left":
          this.edit(instance, event);
          break;
        case "cell":
        case "outside":
          instance.close();
          break;
        case "right":
          this.delete(instance, event);
          break;
      }
    },
    getTotal() {
      var disburse = 0,
      income = 0;
      this.list.map(function(item, index, arr) {
        if (item.type === 0) {
          //支出
          disburse += item.figure_number;
        } else {
          //收入
          income += item.figure_number;
        }
      });
      this.disburse = disburse+"";
      this.income = income+"";
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
    .right {
      padding: 10px;
      p {
        height: 20px;
        line-height: 20px;
        font-size: 10px;
        color: #999;
      }
    }
  }
}
</style>

