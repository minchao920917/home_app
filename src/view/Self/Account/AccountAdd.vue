<template>
  <div class="account">
    <van-cell-group>
      <van-field v-model="figure_number" label="金额" placeholder="请输入金额" />
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="content" label="原因" placeholder="请输入账单发生原因" autosize />
    </van-cell-group>
    <van-cell-group>
      <van-switch-cell
        v-model="type"
        @change="typeClick"
        :title="typeText"
        active-color="#09aeaf"
        inactive-color="#fff"
      />
    </van-cell-group>
    <van-cell-group v-if="!type">
      <van-dropdown-menu>
        <van-dropdown-item v-model="user_type" :options="option"/>
      </van-dropdown-menu>
    </van-cell-group>

    <button-component
      class="index-btn"
      :isactivited="true"
      :width="'100%'"
      :height="'.8rem'"
      :isRadius="false"
      :lineHeight="'.8rem'"
      :btntext="'确认添加'"
      @send="send"
    ></button-component>
  </div>
</template>

<script>
import Vue from "vue";
import { createStore } from "../../../store";
import { mapState } from "vuex";
const store = createStore();
import Rules from "../../../utils/rules";
import Url from "../../../utils/url";
import req from "../../../http/req";
import { Loading, Toast, SwipeCell, Button, Cell, Dialog, Popup } from "vant";
import { DropdownMenu, DropdownItem } from "vant";

Vue.use(DropdownMenu).use(DropdownItem);
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
      figure_number: "",
      content: "",
      type: false,
      typeText: "支出",
      user_type: 1,
      option: [
        { text: "餐饮美食", value: 1 },
        { text: "服饰美容", value: 2 },
        { text: "生活用品", value: 3 },
        { text: "日常缴费", value: 4 },
        { text: "交通出行", value: 5 },
        { text: "休闲娱乐", value: 6 },
        { text: "医疗保健", value: 7 },
        { text: "住房物业", value: 8 },
        { text: "文体教育", value: 9 },
        { text: "其他消费", value: 10 }
      ]
    };
  },
  mounted() {
    this.$store.state.top.isShowTop = true;
    this.$store.state.top.title = "新增账单";
    this.$store.state.top.rightText = "";
  },
  created() {},
  components: {
    buttonComponent
  },
  methods: {
    send() {
      if (this.checked()) {
        const loadingToast = Toast.loading({
          duration: 0,
          mask: true,
          message: "提交中..."
        });
        this.reqPos(Url.addFinacial, {
          type: this.type ? 1 : 0,
          figure_number: this.figure_number,
          reason: this.content,
          person_id: localStorage.getItem("accountId"),
          home_id: localStorage.getItem("home_id"),
          user_type: this.user_type
        }).then(res => {
          console.log(res);
          loadingToast.clear();
          if (res.status === "1") {
            Toast({
              duration: 1500,
              message: res.msg,
              onClose: () => {}
            });
            this.$router.push({
              path: "/self/account"
            });
          } else {
            Toast({
              duration: 1000,
              message: res.msg
            });
          }
        });
      } else {
        return;
      }
    },
    checked() {
      if (this.title == "") {
        Toast("标题不能为空");
        return false;
      }

      if (this.content == "") {
        Toast("内容不能为空");
        return false;
      }
      return true;
    },
    typeClick(checked) {
      checked ? (this.type = true) : this.type == false;
      checked ? (this.typeText = "收入") : (this.typeText = "支出");
      checked ? (this.user_type = 0) : (this.user_type = 1);
    },
  
  }
};
</script>

<style lang="less" scoped>
.account {
  margin-top: 0.1rem;
  .line-bottom {
    border-bottom: 1px solid #eee;
  }
}
</style>

