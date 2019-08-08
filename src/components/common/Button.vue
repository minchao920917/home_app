<template>
  <div class="home-btn">
     <div class="btn" :class="{'btn-active':isactivited}" :style="{'width':width,'height':height,'line-height':lineHeight}" @click="send">{{btntext}}</div>
  </div>
</template>

<script>
export default {
  name:'homeBtn',
  data(){
    return {
      
    }
  },
  props:{
    btntext:{
      type:String,
      default:'按钮'
    },
    width:{
      type:String,
      default:'2.83rem'
    },
    height:{
      type:String,
      default:'1rem'
    },
    lineHeight:{
      type:String,
      default:'1rem'
    },
    isactivited:{
      type:Boolean,
      default:false
    }
  },
  mounted (){
    
  },
  methods:{
      send(){
        this.$emit('send')
      }
  },
  components:{
    
  }
}
</script>
<style scoped lang="less">
@import "../../less/home.less";

.home-btn{
  .btn{
    // width: 2.83rem;
    height: 0.44rem;
    margin:0 auto;
    text-align: center;
    line-height: 0.44rem;
    box-shadow: -2px 2px 6px 0 rgba(217,217,217,0.48);
    border-radius: .45rem;
  }
}
.btn-active{
  background: @homeColor ;
  color: @whiteColor;
}
</style>
