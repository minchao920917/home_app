
let DomainName,DomainT,DomainOld,DomainAll,DomainW;


if (process.env.NODE_ENV === "development") {
    DomainName = 'http://localhost:3000'
  } else {
    DomainName = ''
  }

export default {
    
    login:DomainName + "/users/login",//登录接口

    

    

    
}

