<template>
  <div id="pro">
    <div class="container">
      <h3 class="title">常用功能</h3>
      <van-cell title="成员管理" is-link to=""/>
      <van-cell title="发布通知" is-link to=""/>
      <van-cell title="今日记账" is-link to=""/>
      <h3 class="title">附加功能</h3>
      <van-cell title="名片夹管理" is-link/>
      <van-cell title="地址管理" is-link/>
      <van-cell title="亲戚计算器" is-link/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pro"
};
</script>

<style lang="less" scoped>
.container {
  background: #fff;
  /*height: 5.90rem;*/
  height: 85vh;
  text-align:left;
}
</style>

