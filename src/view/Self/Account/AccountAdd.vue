<template>
  
  <div class="account">
    <van-cell-group>
      <van-field v-model="figure_number" label="金额" placeholder="请输入金额" />
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="content" label="原因" placeholder="请选择账单发生原因" autosize />
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
    <van-popup v-model="show" position="bottom">
      <van-picker :columns="columns" @change="onChange" />
    </van-popup>
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
import { Loading, Toast, SwipeCell, Button, Cell, Dialog,Popup } from "vant";

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
      columns: [{
          
      }]
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
      console.log(this.username);
      console.log(this.phone);
      console.log(this.nickname);

      if (this.checked()) {
        const loadingToast = Toast.loading({
          duration: 0,
          mask: true,
          message: "提交中..."
        });
        this.reqPos(Url.addNotifies, {
          type: this.type ? 1 : 0,
          figure_number: this.figure_number,
          content: this.content,
          person_id: localStorage.getItem("accountId"),
          home_id: localStorage.getItem("home_id")
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
              path: "/self/notice"
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
      console.log(this.type);
    }
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

