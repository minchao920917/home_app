const formatter = (val) => {
  let year, month, date;
  if (!!val) {
    year = val.getFullYear();
    month = val.getMonth() + 1 > 9 ? val.getMonth() + 1 : `0${val.getMonth()+1}`;
    date = val.getDate() > 9 ? val.getDate() : `0${val.getDate()}`;
  } else {
    return
  }
  return `${year}-${month}-${date}`;
}

const formatterTime = (val) => {
  let year, month, date, hour, minutes
  if (!!val) {
    year = val.getFullYear();
    month = val.getMonth() + 1 > 9 ? val.getMonth() + 1 : `0${val.getMonth()+1}`;
    date = val.getDate() > 9 ? val.getDate() : `0${val.getDate()}`;
    minutes = val.getMinutes() > 9 ? val.getMinutes() : `0${val.getMinutes()}`;
    if (minutes > 0) {
      hour = val.getHours() > 9 ? val.getHours() + 1 : `0${val.getHours()+1}`;
    } else {
      hour = val.getHours() > 9 ? val.getHours() : `0${val.getHours()}`;
    }
    if (hour == 24) {
      date = val.getDate() > 9 ? val.getDate() + 1 : `0${val.getDate() +1}`;
      hour = '00'
    }
  } else {
    let text = '传入时间不合法'
    return text
  }
  return `${year}-${month}-${date} ${hour}:00`
}

const formatterHourTime = (val) => {
  let year, month, date, hour, minutes
  if (!!val) {
    year = val.getFullYear();
    month = val.getMonth() + 1 > 9 ? val.getMonth() + 1 : `0${val.getMonth()+1}`;
    date = val.getDate() > 9 ? val.getDate() : `0${val.getDate()}`;
    hour = val.getHours() > 9 ? val.getHours() : `0${val.getHours()}`;
  } else {
    let text = '传入时间不合法'
    return text
  }
  return `${year}-${month}-${date} ${hour}:00`
  //  console.log(`${year}-${month}-${date} ${hour}:00`)
}
const formatterMonth = (val) => {
  let year, month, date;
  if (!!val) {
    year = val.getFullYear();
    month = val.getMonth() + 1 > 9 ? val.getMonth() + 1 : `0${val.getMonth()+1}`;
    //date = val.getDate() > 9 ? val.getDate() : `0${val.getDate()}`;
  } else {
    return
  }
  //return `${year}-${month}-${date}`;
  return `${year}${month}`;
}

const formatterHourTimes = (val) => {
  let year, month, date, hour, minutes
  if (!!val) {
    year = val.getFullYear();
    month = val.getMonth() + 1 > 9 ? val.getMonth() + 1 : `0${val.getMonth()+1}`;
    date = val.getDate() > 9 ? val.getDate() : `0${val.getDate()}`;
    hour = val.getHours() > 9 ? val.getHours() : `0${val.getHours()}`;
  } else {
    let text = '传入时间不合法'
    return text
  }
  return `${year}/${month}/${date} ${hour}:00`
  //  console.log(`${year}-${month}-${date} ${hour}:00`)
}

export {
  formatter,
  formatterTime,
  formatterHourTime,
  formatterMonth,
  formatterHourTimes
}
