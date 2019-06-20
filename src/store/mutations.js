const GET_WATERDATA = 'GET_WATERDATA'
const SHOW_CANCELTOAST = 'SHOW_CANCELTOAST' //全局toast展示控制
const SETCARINFOR_DATA = 'SETCARINFOR_DATA' //设置车辆信息数据
const SETCAROWNER = 'SETCAROWNER' //设置同车主信息
const PROPOSER = 'PROPOSER' //设置投保人同车主
const INSURANCEOWNER = 'INSURANCEOWNER' //被保险人同车主
const BENEFICIARY = 'BENEFICIARY' //设置指定收益人
const SAVE_ORDER = 'SAVE_ORDER'
const SETCARINFOR_SEARCHDATA = 'SETCARINFOR_SEARCHDATA' //设置车型data
const DELCARINFOR_SEARCHDATA = 'DELCARINFOR_SEARCHDATA'
export default {
  [GET_WATERDATA](state, payload) {
    if (payload.res.code == 200) {
      state.wateritem = payload.res.msg.records;
      if (payload.res.msg.records.length < state.pageSize) {
        state.indexEnd = true;
      }
    }
  },

  //全局toast展示控制
  [SHOW_CANCELTOAST](state, payload) {
    state.showCancelToast = payload || false
  },
  //保存订单
  [SAVE_ORDER](state, payload) {
    state.showOrderSucess = payload || false
  },
  //车辆信息车型搜索页设置
  [SETCARINFOR_SEARCHDATA](state, payload) {
    state.carInfor.carModels = payload.moldName || "" //车辆型号（传给后台）
    state.carInfor.carModel = (payload.vehicleAlias || "") + (payload.yearPattern ? `${payload.yearPattern}款` : "") + (payload.yearPattern || "") +
      (payload.seatCount ? `${payload.seatCount}座` : "") + (payload.purchasePrice ? `(${payload.purchasePrice}元)` : "") //车辆型号
    // console.log(state.carInfor.carModel);
    state.carInfor.brandName = payload.familyName || "" //品牌名称
    state.carInfor.description = payload.remark || "" //车型描述
    state.carInfor.exhaustMeasure = payload.engineCapacity || "" //排量
    state.carInfor.marketDate = payload.yearPattern || "" //年款
    state.carInfor.modelCode = payload.moldCharacterCode || "" //车型编码
    state.carInfor.modelName = payload.moldName || "" //车型名称
    state.carInfor.price = payload.purchasePrice || "" //新车购置价
    state.carInfor.carPrice = payload.purchasePrice || "" //车的价格
    state.carInfor.seats = payload.seatCount || 0 //座位数
    if (!state.carInfor.carSeats) {
      state.carInfor.carSeats = payload.seatCount || 0 //车座位数

    }
    state.carInfor.curbWeight = payload.emptyWeight / 1000 || "" //整车质量
  },
  [DELCARINFOR_SEARCHDATA](state) {
    state.carInfor.carModel = "" //车辆型号（传给后台）
    state.carInfor.carModels = "" //车辆型号（传给后台）
    state.carInfor.brandName = "" //品牌名称
    state.carInfor.description = "" //车型描述
    state.carInfor.exhaustMeasure = "" //排量
    state.carInfor.marketDate = "" //年款
    state.carInfor.modelCode = "" //车型编码
    state.carInfor.modelName = "" //车型名称
    state.carInfor.price = "" //新车购置价
    state.carInfor.carPrice = "" //车的价格
    state.carInfor.seats = 0 //座位数
    state.carInfor.carSeats = 0 //车座位数
    state.carInfor.curbWeight = "" //整车质量
  },
  //暂存信息
  [SETCARINFOR_DATA](state, payload) {
    state.carInfor.carPrice = payload.carPrice,
      state.carInfor.carProperty = payload.carProperty,
      state.carInfor.carPlateNo = payload.carPlateNo,
      state.carInfor.vin = payload.vin,
      state.carInfor.engineNo = payload.engineNo,
      state.carInfor.purchaseDate = payload.purchaseDate,
      state.carInfor.invoiceDate = payload.invoiceDate,
      state.carInfor.carModel = payload.carModel,
      state.carInfor.brandName = payload.brandName,
      state.carInfor.description = payload.description,
      state.carInfor.exhaustMeasure = payload.exhaustMeasure,
      state.carInfor.marketDate = payload.marketDate,
      state.carInfor.modelCode = payload.modelCode,
      state.carInfor.modelName = payload.modelName,
      state.carInfor.franchiserCode = payload.franchiserCode,
      state.carInfor.price = payload.price,
      state.carInfor.seats = payload.seats,
      state.carInfor.carSeats = payload.carSeats,
      state.carInfor.evidenceNum = payload.vehicleCertiNo,
      state.carInfor.fuelType = payload.fuelType,
      state.carInfor.troop = payload.emptyWeight,
      state.carInfor.gas = payload.exhaustMeasure,
      state.carInfor.carPlateNo = payload.carPlateNo,//车牌号码
      // state.carInfor.emptyWeight:this.curbWeight * 1000,
      state.carInfor.isLoan = payload.isLoan,
      state.searchValue = payload.carModel,
      //投保人信息
      state.inputsVal.proposerName = payload.proposerName;
    state.inputsVal.proposerCardNo = payload.proposerCardNo;
    state.inputsVal.proposerAddress = payload.proposerAddress;
    state.inputsVal.proposerTel = payload.proposerTel;
    state.inputsVal.bizFormatType = payload.bizFormatType;
    state.inputsVal.bizFormatText = payload.bizFormatType ? "电子保单" : "纸质保单";
    state.inputsVal.forceFormatType = payload.forceFormatType;
    state.inputsVal.forceFormatText = payload.forceFormatType ? "电子保单" : "纸质保单";
    state.inputsVal.invoiceType = payload.invoiceType;
    state.inputsVal.invoiceText = payload.invoiceType ? "电子发票" : "纸质发票";
    state.inputsVal.emailVal = payload.email;

    state.inputsVal.carOwnerName = payload.carOwnerName;
    state.inputsVal.carOwnerCardNo = payload.carOwnerCardNo;
    state.inputsVal.carOwnerAddress = payload.carOwnerAddress;
    state.inputsVal.carOwnerTel = payload.carOwnerTel;
    state.inputsVal.areaAddress = payload.areaAddress;

    state.inputsVal.insuranceOwnerName =
      payload.insuranceOwnerName || "";
    state.inputsVal.insuranceOwnerCardNo =
      payload.insuranceOwnerCardNo || "";
    state.inputsVal.insuranceOwnerTel = payload.insuranceOwnerTel;
    state.inputsVal.insuranceOwnerAddress =
      payload.insuranceOwnerAddress || "";
    //车主
    state.inputsVal.certificate =
      payload.carOwnerIssuer || "";
    state.inputsVal.national = payload.carOwnerNation
    state.inputsVal.certificateLifeType =
      payload.carOwnerCertiType || 0;
    state.inputsVal.certificateLifeText = payload.carOwnerCertiType ? "长期" : '短期';
    state.inputsVal.startDate = payload.carOwnerCertiStartDate;
    state.inputsVal.endDate = payload.carOwnerCertiEndDate;
    //投保人
    state.inputsVal.proposerCertificate =
      payload.proposerIssuer || "";
    state.inputsVal.proposerNational = payload.proposerNation
    state.inputsVal.proposerCertificateLifeType =
      payload.proposerCertiType || 0;
    state.inputsVal.proposerCertificateLifeText = payload.proposerCertiType ? "长期" : '短期';
    state.inputsVal.proposerStartDate = payload.proposerCertiStartDate;
    state.inputsVal.proposerEndDate = payload.proposerCertiEndDate;
    //被保人
    state.inputsVal.insuranceCertificate =
      payload.insuranceOwnerIssuer || "";
    state.inputsVal.insuranceNational = payload.insuranceOwnerNation
    state.inputsVal.insuranceCertificateLifeType =
      payload.insuranceOwnerCertiType || 0;
    state.inputsVal.insuranceCertificateLifeText = payload.insuranceOwnerCertiType ? "长期" : '短期';
    state.inputsVal.insuranceStartDate = payload.insuranceOwnerCertiStartDate;
    state.inputsVal.insuranceEndDate = payload.insuranceOwnerCertiEndDate;






  },
  //设置车主信息
  [SETCAROWNER](state, payload) {
    state.inputsVal.carOwnerName = payload.name || ""
    state.inputsVal.carOwnerCardNo = payload.cardNo || ""
    state.inputsVal.carOwnerAddress = payload.address || ""
  },
  //设置投保人同车主
  [PROPOSER](state, payload) {
    state.inputsVal.proposerName = payload.name || ""
    state.inputsVal.proposerCardNo = payload.cardNo || ""
    state.inputsVal.proposerAddress = payload.address || ""
  },
  //设置被保险人同车主
  [INSURANCEOWNER](state, payload) {

    state.inputsVal.insuranceOwnerName = payload.name || ""
    state.inputsVal.insuranceOwnerCardNo = payload.cardNo || ""
    state.inputsVal.insuranceOwnerAddress = payload.address || ""
  },
  //设置指定收益人
  [BENEFICIARY](state, payload) {
    state.inputsVal.beneficiaryName = payload.name || ""
    state.inputsVal.beneficiaryCardNo = payload.cardNo || ""
    state.inputsVal.beneficiaryAddress = payload.address || ""
  }

}
