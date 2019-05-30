<template>
    <div id="index">
      <div class="container">
        <img :src="img" />
      </div>
    </div>
</template>
<script>
export default {
  name: 'Index',
  data () {
    return {
       img: 'https://qiniu.epipe.cn/5430983074181545984?imageslim&imageView2/1/w/750/h/360',
    }
  },
  components: {
 
  },
  methods: {
    getNum (i) {
      // this.$toast(`==当前滑到了第${i}个`, 400)
      // console.log(i)
    }
  }
}
</script>

<style scoped lang="less">
  
  .container{
    background: #f3f3f3;
    /*height: 5.90rem;*/
    overflow-x: hidden;
    overflow-y: auto;
    img{
      width: 100%;
    }
  }
  
  
</style>
