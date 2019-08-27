<!--
 * @ Author: minchao
 * @ Create Time: 2019-06-20 11:13:25
 * @ Modified by: minchao
 * @ Modified time: 2019-08-27 10:57:17
 * @ Description: 通知管理 notice
 -->

<template>
  <div class="notice">
    <van-tabs v-model="active" animated type="card" color="#09aeaf">
      <van-tab title="我发布">
        <van-list
          v-model="myLoading"
          class="mylist"
          :finished="myFinished"
          finished-text="没有更多了"
          @load="onLoadMyList"
          :offset="300"
        >
          <div class="line-bottom" v-for="(notice,index) in mylist" :key="index">
            <van-swipe-cell
              :on-close="onClose"
              :name="index"
              :data-index="index"
              :data-id="notice.id"
            >
              <template slot="left">
                <van-button square type="primary" text="修改" />
              </template>
              <van-cell :border="false" :title="getTitle(notice)" :value="formatPassTime(notice)" />
              <template slot="right">
                <van-button square type="danger" text="删除" />
              </template>
            </van-swipe-cell>
          </div>
        </van-list>
      </van-tab>
      <van-tab title="其他人发布">
        <van-list
          v-model="otherLoading"
          class="mylist"
          :finished="otherFinished"
          finished-text="没有更多了"
          @load="onLoadOtherList"
          :offset="300"
        >
          <div class="line-bottom" v-for="(notice,index) in otherlist" :key="index">
            <van-swipe-cell :on-close="onClose" :name="index ">
              <van-cell :border="false" :title="getTitle(notice)" :value="formatPassTime(notice)" />
            </van-swipe-cell>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
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

import { Tab, Tabs } from "vant";

Vue.use(Tab).use(Tabs);
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
      active: 0,
      role: localStorage.getItem("role"),
      id: localStorage.getItem("accountId"),
      pageSize: 4,
      myPageNum: 1,
      otherPageNum: 1,
      mylist: [],
      otherlist: [],
      myLoading: false,
      myFinished: false,
      otherLoading: false,
      otherFinished: false
    };
  },
  mounted() {
    this.$store.state.top.isShowTop = true;
    this.$store.state.top.title = "通知管理";
    this.$store.state.top.rightText = "+";
  },
  created() {},
  components: {
    buttonComponent
  },
  computed: {
    getTitle() {
      return function(notice) {
        return notice.title;
      };
    },
    formatPassTime() {
      return function(notice) {
        //有更新时间用更新时间，没有用创建时间
        var startTime = Date.parse(new Date(notice.update_time==""?notice.create_time:notice.update_time));
        var currentTime = Date.parse(new Date()),
          time = currentTime - startTime,
          day = parseInt(time / (1000 * 60 * 60 * 24)),
          hour = parseInt(time / (1000 * 60 * 60)),
          min = parseInt(time / (1000 * 60)),
          month = parseInt(day / 30),
          year = parseInt(month / 12);
        if (year) return year + "年前";
        if (month) return month + "个月前";
        if (day) return day + "天前";
        if (hour) return hour + "小时前";
        if (min) return min + "分钟前";
        else return "刚刚";
      };
    }
  },
  methods: {
    onLoadMyList() {
      this.initMyList(this.myPageNum++, this.id);
    },
    initMyList(pageNum, id) {
      this.reqPos(Url.getMyNotifyList, {
        pageSize: this.pageSize,
        pageNum: pageNum,
        id: id,
        home_id: localStorage.getItem("home_id") || ""
      }).then(res => {
        if (res.status === "1") {
          if (res.data.length == 0) {
            this.myFinished = true;
          }
          res.data.forEach(v => {
            this.mylist.push(v);
          });
          this.myLoading = false;
        } else {
          Toast({
            duration: 1000,
            message: res.msg
          });
        }
      });
    },
    onLoadOtherList() {
      this.initOtherList(this.otherPageNum++, this.id);
    },
    initOtherList(pageNum, id) {
      this.reqPos(Url.getOtherNotifyList, {
        pageSize: this.pageSize,
        pageNum: pageNum,
        id: id,
        home_id: localStorage.getItem("home_id") || ""
      }).then(res => {
        if (res.status === "1") {
          if (res.data.length == 0) {
            this.otherFinished = true;
          }
          res.data.forEach(v => {
            this.otherlist.push(v);
          });
          this.otherLoading = false;
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
      var index = event.name;
      var noticeIndex = this.mylist[index];
      if (localStorage.getItem("role") == 1) {
        this.$router.push({
          path: "/self/noticeEdit",
          query: {
            id: noticeIndex.id
          }
        });
      } else {
        Toast("您不是家主，没权限添加家庭成员!");
      }
    },
    delete(instance, event) {
      var index = event.name;
      var noticeIndex = this.mylist[index];
      if (localStorage.getItem("accountId") == noticeIndex.person_id) {
        Dialog.confirm({
          message: "确定删除吗？"
        })
          .then(() => {
            instance.close();
            this.remove(noticeIndex);
          })
          .catch(() => {
            // on cancel
          });
      } else {
        Toast("你不能修改別人发布的通知");
      }
    },
    remove(noticeIndex) {
      const loadingToast = Toast.loading({
        duration: 0,
        mask: true,
        message: "提交中..."
      });
      this.reqPos(Url.removeNotify, {
        id: noticeIndex.id,
        accountId: noticeIndex.person_id
      }).then(res => {
        loadingToast.clear();
        if (res.status === "1") {
          Toast({
            duration: 1500,
            message: res.msg,
            onClose: () => {}
          });
          this.mylist = this.mylist.filter(function(item) {
            return item.id != noticeIndex.id;
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
.notice {
  margin-top: 0.1rem;
  background: #fff;
  .van-tabs--card {
    padding-top: 10px;
  }
  .line-bottom {
    border-bottom: 1px solid #eee;
  }
  .mylist {
    height: 60vh;
    overflow-y: auto;
    margin-top: 20px;
  }
  .btn-feel {
    display: block;
    margin-top: 0.5rem;
  }
}
</style>

