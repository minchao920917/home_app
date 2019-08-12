<!--
 * @ Author: minchao
 * @ Create Time: 2019-08-12 11:21:07
 * @ Modified by: minchao
 * @ Modified time: 2019-08-12 11:31:24
 * @ Description: 输入框组件
 -->
 <template>
  <div class="input-field" >
    <span>{{title}}</span>
    <input :type="type" :placeholder="placeholder" name="" :value="value" />
  </div>
</template>
 <script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  }
};
</script>
 <style scoped lang="less">
@import "../../less/home.less";
.input-field{

}
</style>
 

