<template>
  <div class="member">
    <van-cell-group>
      <van-field v-model="username" label="姓名" placeholder="请输入姓名" />
      <van-field v-model="phone" label="手机号" placeholder="请输入手机号" />
      <van-field v-model="nickname" label="昵称" placeholder="请输入昵称" />
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
import { Loading, Toast, SwipeCell, Button, Cell, Dialog } from "vant";

Vue.use(Loading);
Vue.use(Toast);
Vue.use(SwipeCell);
Vue.use(Button);
Vue.use(Cell);
Vue.use(Dialog);
import buttonComponent from "../../../components/common/Button";
export default {
  data() {
    return {
      username: "",
      phone: "",
      nickname: ""
    };
  },
  mounted() {
    this.$store.state.top.isShowTop = true;
    this.$store.state.top.title = "修改成员信息";
    this.$store.state.top.rightText = "";
    this.init();
  },
  created() {},
  components: {
    buttonComponent
  },
  methods: {
    init() {
      const loadingToast = Toast.loading({
        duration: 0,
        mask: true,
        message: "加载中..."
      });
      this.reqPos(Url.getUserInfoById, {
        id: this.$route.query.id
      }).then(res => {
        console.log(res);
        loadingToast.clear();
        if (res.status === "1") {
          this.username = res.data.user_name;
          this.phone = res.data.phone;
          this.nickname = res.data.nick_name;
        } else {
          Toast({
            duration: 1000,
            message: res.msg
          });
        }
      });
    },
    send() {
      if (this.checked()) {
        const loadingToast = Toast.loading({
          duration: 0,
          mask: true,
          message: "提交中..."
        });
        this.reqPos(Url.editUser, {
          id: this.$route.query.id,
          user_name: this.username,
          phone: this.phone,
          nick_name: this.nickname
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
              path: "/self/member"
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
      if (this.username == "") {
        Toast("姓名不能为空");
        return false;
      }
      if (!Rules.nameReg.test(this.username)) {
        Toast("姓名格式不正确");
        return false;
      }
      if (this.phone == "") {
        Toast("电话不能为空");
        return false;
      }
      if (!Rules.phoneReg.test(this.phone)) {
        Toast("电话格式不正确");
        return false;
      }
      return true;
    }
  }
};
</script>

<style lang="less" scoped>
.member {
  margin-top: 0.1rem;
  .line-bottom {
    border-bottom: 1px solid #eee;
  }
}
</style>

