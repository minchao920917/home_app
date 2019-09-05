/**
 * @ Author: minchao
 * @ Create Time: 2019-07-17 14:15:11
 * @ Modified by: minchao
 * @ Modified time: 2019-09-05 16:21:25
 * @ Description: 过滤器集合
 */
//格式化金额
function outputdollars(number) {
  if (number.length <= 3)
    return (number == '' ? '0' : number);
  else {
    var mod = number.length % 3;
    var output = (mod == 0 ? '' : (number.substring(0, mod)));
    for (var i = 0; i < Math.floor(number.length / 3); i++) {
      if ((mod == 0) && (i == 0))
        output += number.substring(mod + 3 * i, mod + 3 * i + 3);
      else
        output += ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
    }
    return (output);
  }
}

function outputcents(amount) {
  amount = Math.round(((amount) - Math.floor(amount)) * 100);
  return (amount < 10 ? '.0' + amount : '.' + amount);
}

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
   * @ Description: yyyy-MM-dd HH:mm:ss
   * @param {*} date 
   */
  date2Str(date) {
    var date = new Date(date);
    return date.getFullYear() +
      '-' + ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) +
      '-' +((date.getDate() + 1) < 10 ? "0" + (date.getDate() + 1) : (date.getDate() + 1))+
      ' ' + date.getHours()+
      ':' + date.getMinutes() +
      ':'+date.getSeconds();
  },
  /**
   * @ Description: 时间过滤器
   * @param {*} date 
   */
  date2YearMonth(date) {
    var date = new Date(date);
    return date.getFullYear() +
      '年' + ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) +
      '月';
  },
  /**
   * @ Description: 时间yyyy-MM-dd
   * @param {*} date 
   */
  date2YMFormater(date) {
    var date = new Date(date);
    return date.getFullYear() +
      '-' + ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) +
      '-'+ ((date.getDate() + 1) < 10 ? "0" + (date.getDate() + 1) : (date.getDate() + 1));
  },

  /**
   * @ Description: 库存计算
   * @param {*} val 
   */
  inventory2Number(val) {
    if (val === '') {
      return ""
    } else if (val < 10000) {
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
  hideTel(val) {
    var reg = new RegExp("(\\d{3})(\\d{4})(\\d{4})");
    return val.replace(reg, "$1****$3");
  },
  /**
   *  乘客座位数险
   * @param {*} number 
   */
  outputmoney(number) {
    number = number.replace(/\,/g, "");
    if (isNaN(number) || number == "") return "";
    number = Math.round(number * 100) / 100;
    return outputdollars(Math.floor(number - 0) + '') + outputcents(number - 0);


  }

}
