var bigZero = (rule, value, callback) => {
    if (value <= 0) {
        return callback(new Error("不是输入比0还小的数！"));
    } else {
        callback();
    }
};
var checkNum = (rule, value, callback) => {
    if (!value) {
        return callback(new Error("驳回原因不能为空"));
    } else {
        if (value.length <= 20) {
            callback();
        } else {
            return callback(new Error("驳回原因不能超过20个字符"));
        }
    }
};
var checkEn = (rule, value, callback) => {
    const reg = /^[a-zA-Z]+$/;
    if (!reg.test(value)) {
        return callback(new Error("必须是英文字符"));
    } else {
        callback();
    }

}
var CheckSocialCreditCode = (rule, value, callback) => {
    var patrn = /^[0-9A-Z]+$/; //18位校验及大写校验
    if (value.length != 18 || patrn.test(value) == false) {
        return callback(new Error("不是有效的统一社会信用编码！"));
    } else {
        callback();
    }
};
var checkPhone = (rule, value, callback) => {
    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
    if (reg.test(value) || value == "") {
        callback();
    } else {
        return callback(new Error("请输入正确的手机号"));
    }
};
export default {
    username: [
        { required: true, message: "请输入用户名", trigger: "blur" }
    ],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }
    ],
    multiple: [
        { required: true, message: "请输入次数优惠倍数", trigger: "blur" },
        { type: "number", message: "次数优惠倍数必须为数字值", trigger: "blur" }
    ],
    startTime: [
        { required: true, message: "请选择开始时间", trigger: "blur" }
    ],
    endTime: [
        { required: true, message: "请选择结束时间", trigger: "blur" }
    ],
    topic: [{ required: true, message: "请输入主题", trigger: "blur" }],
    fileName: [
        { required: true, message: "请上传审批单", trigger: "blur" }
    ],
    areaData: [
        { required: true, message: "请选择地区范围", trigger: "blur" }
    ],
    amount: [
        { required: true, message: "请输入到账金额", trigger: "blur" },
        { validator: bigZero, trigger: "change" },
        { type: "number", message: "到账金额必须为数字值", trigger: "blur" }
    ],
    enterpriseName: [
        { required: true, message: "请输入公司名称", trigger: "blur" },
        { min: 1, max: 50, message: '长度在 50 个字以内', trigger: 'blur' }
    ],
    type: [{ required: true, message: "请输入企业类型", trigger: "blur" },
    { min: 1, max: 20, message: '长度在 20 个字以内', trigger: 'blur' }],
    legalRepresentative: [
        { required: true, message: "请输入法定代表人", trigger: "blur" },
        { min: 1, max: 20, message: '长度在 30 个字以内', trigger: 'blur' }
    ],
    address: [
        { required: true, message: "请输入公司注册地址", trigger: "blur" },
        { min: 1, max: 50, message: '长度在 50 个字以内', trigger: 'blur' }
    ],
    uniformSocialCreditCode: [
        { required: true, message: "请输入统一社会信用代码", trigger: "blur" },
        { validator: CheckSocialCreditCode, trigger: "change" },
        { validator: CheckSocialCreditCode, trigger: "blur" },
    ],
    shortName: [
        { required: true, message: "请输入公司英文简称", trigger: "blur" },
        { validator: checkEn, trigger: "blur" }
    ],
    shortProv: [
        { required: true, message: "请输入公司所在省份简写", trigger: "blur" },
        { validator: checkEn, trigger: "blur" }

    ],
    other: [
        { required: true, message: "驳回原因不能为空", trigger: "blur" },
        { validator: checkNum, trigger: "change" }
    ],
    contactCellPhone: [{ validator: checkPhone, trigger: "change" }]


}