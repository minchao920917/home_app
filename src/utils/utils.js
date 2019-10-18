/**
 * Author: minchao
 * Date: 2019.05.24
 * Version: 1.3.3
 * Description: 公共方法合集
 * Function List: 1.新建/编辑/删除/同步/搜索笔记;2.设置字体大小/设置笔记列表排序方式/设置快捷删除方式;
 * History:
 * Others:
**/

export default{
    /**
     * @function 时间转化为字符串
     * @param {时间} dataTime 
     */
    toDataString(dataTime) {
      if(dataTime===""){
        return ""
      }else{
        var unixtimestamp = new Date(dataTime);
        var year = 1900 + unixtimestamp.getYear();
        var month = "0" + (unixtimestamp.getMonth() + 1);
        var date = "0" + unixtimestamp.getDate();
        var hour = "0" + unixtimestamp.getHours();
        var minute = "0" + unixtimestamp.getMinutes();
        var second = "0" + unixtimestamp.getSeconds();
        return (
          year +
          "-" +
          month.substring(month.length - 2, month.length) +
          "-" +
          date.substring(date.length - 2, date.length) +
          " " +
          hour.substring(hour.length - 2, hour.length) +
          ":" +
          minute.substring(minute.length - 2, minute.length) +
          ":" +
          second.substring(second.length - 2, second.length)
        );
      }
    }
}
