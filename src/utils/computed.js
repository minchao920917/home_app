/**
 * @ Author: minchao
 * @ Create Time: 2019-07-17 14:15:11
 * @ Modified by: minchao
 * @ Modified time: 2019-08-26 15:55:29
 * @ Description: 计算属性合集
 */

export default {
    /**
     * @ Description: 时间过滤器
     * @param {*} date 
     */
    date2String(date) {
      var date = new Date(date);
      return date.getFullYear() +
        '年' + (date.getMonth() + 1) +
        '月' + date.getDate() +
        '日' + date.getHours() +
        '点';
    },
    /**
     * @ Description: 保费计算
     * @param {*} val 
     */
    insurancePrice2Number(val) {
      if (val === '') {
        return ""
      } else {
        return "(" + (Math.floor(val) / 10000) + "万)"
      }
    },
    /**
     * @ Description: 库存计算
     * @param {*} val 
     */
    inventory2Number(val) {
      if (val === '') {
        return ""
      } else if(val < 10000){
        return val
      } else {
        return (Math.floor(val) / 10000) + "万"
      }
    },
    /**
     * @ Description: 横岗变斜杠
     * @param {*} val 
     */
    sprit2across(val) {
      return val.replace(/\-/g, '/')
    },
    /**
     * @ Description: 保留两位小数
     * @param {*} val 
     */
    keepTwo(val) {
      return val.toFixed(2);
    },
    /**
     * @ Description: 保留两位小数
     * @param {*} val 
     */
    toDecimal2(val) {
      var f = parseFloat(val);
      if (isNaN(f)) {
        return false;
      }
      var f = Math.round(val * 100) / 100;
      var s = f.toString();
      var rs = s.indexOf('.');
      if (rs < 0) {
        rs = s.length;
        s += '.';
      }
      while (s.length <= rs + 2) {
        s += '0';
      }
      return s;
    },
    /**
     * 隐藏手机号正则
     * @param {*} val 
     */
    hideTel(val){
      var reg = new RegExp("(\\d{3})(\\d{4})(\\d{4})");
      return val.replace(reg, "$1****$3");
    },
    /**
     * 计算距离当前多久
     * @param {*} val 
     */
    formatPassTime(val) {
        var startTime = Date.parse(new Date(val));
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
       
      }
  }
  