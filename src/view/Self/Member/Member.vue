<template>
  <div class="member">
    <div class="line-bottom" v-for="(member,index) in list" :key="index">
      <van-swipe-cell :on-close="onClose" :name="member.id">
        <template slot="left">
          <van-button square type="primary" text="修改" />
        </template>
        <van-cell :border="false" :title="getTitle(member)" :value="member.phone" />
        <template slot="right" :name="member.id">
          <van-button square type="danger" text="删除" :data="index" />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { createStore } from "../../../store";
import { mapState } from "vuex";
const store = createStore();
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
      role: localStorage.getItem("role"),
      pageSize: 9999,
      pageNum: 1,
      list: []
    };
  },
  mounted() {
    this.$store.state.top.isShowTop = true;
    this.$store.state.top.title = "成员管理";
    this.$store.state.top.rightText = this.role==1?"+":"";
    this.init(this.pageNum);
  },
  created() {
    // this.init(this.pageNum);
  },
  components: {
    buttonComponent
  },
  computed:{
    getTitle(){
      return function(member){
        return member.user_name +""+ (member.role==1?'(家主)':'') + (member.id == localStorage.getItem("accountId")?'(本人)':'')+"";
      }
  
    }
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
          this.list = res.data;
          console.log(this.list);
        } else {
          Toast({
            duration: 1000,
            message: res.msg
          });
        }
      });
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
    edit(instance, event) {
      if (localStorage.getItem("role") == 1) {
        this.$router.push({
          path: "/self/memberEdit",
          query: {
            id: event.name
          }
        });
      } else {
        Toast("您不是家主，没权限添加家庭成员!");
      }
    },
    delete(instance, event) {
      if (localStorage.getItem("role") == 1) {
        Dialog.confirm({
          message: "确定删除吗？"
        })
          .then(() => {
            instance.close();
            console.log(event.data);
            this.remove(event.name);
          })
          .catch(() => {
            // on cancel
          });
      } else {
        Toast("您不是家主，没权限编辑家庭成员!");
      }
    },
    remove(id) {
      const loadingToast = Toast.loading({
        duration: 0,
        mask: true,
        message: "提交中..."
      });
      this.reqPos(Url.deleteUser, {
        id: id
      }).then(res => {
        loadingToast.clear();
        if (res.status === "1") {
          Toast({
            duration: 1500,
            message: res.msg,
            onClose: () => {}
          });
          this.list = this.list.filter(function(item) {
            return item.id != id;
          });
        } else {
          Toast({
            duration: 1000,
            message: res.msg
          });
        }
      });
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

