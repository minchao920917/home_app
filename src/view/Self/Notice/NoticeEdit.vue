<template>
  <div class="member">
    <van-cell-group>
      <van-field v-model="title" label="标题" placeholder="请输入标题" />
    </van-cell-group>
    <van-cell-group>
      <van-field
        v-model="content"
        label="内容"
        type="textarea"
        placeholder="请输入内容"
        rows="1"
        autosize
      />
    </van-cell-group>
    <van-cell-group>
      <van-switch-cell
        v-model="authority"
        @change="authorityClick"
        :title="authorityText"
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
      :btntext="'确认修改'"
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
      title: "",
      content: "",
      authority: false,
      authorityText: "一般"
    };
  },
  mounted() {
    this.$store.state.top.isShowTop = true;
    this.$store.state.top.title = "修改通知";
    this.$store.state.top.rightText = "";
    this.init();
  },
  created() {},
  components: {
    buttonComponent
  },
  methods: {
    init() {
      this.reqPos(Url.getNotifyById, {
        id: this.$route.query.id
      }).then(res => {
        console.log(res);
        if (res.status === "1") {
          this.authority = res.data.authority ? true : false;
          res.data.authority
            ? (this.authorityText = "重要")
            : (this.authorityText = "一般");
          this.title = res.data.title;
          this.content = res.data.content;
        } else {
          Toast({
            duration: 1000,
            message: res.msg
          });
        }
      });
    },
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
        this.reqPos(Url.editNotify, {
          id: this.$route.query.id,
          authority: this.authority ? 1 : 0,
          title: this.title,
          content: this.content
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
    authorityClick(checked) {
      checked ? (this.authority = true) : this.authority == false;
      checked ? (this.authorityText = "重要") : (this.authorityText = "一般");
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

