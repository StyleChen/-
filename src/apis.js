const apis = {
  Login: '/Sys/Logoff/Sys', // 登录
  VerifyCode: '/Sys/Logoff/VerifyCode', // 验证码
  UserList: '/Sys/User/UserList', //
  MessageAdd: '/Sys/Task/MessageAdd', //
  ChangePwd: '/Sys/User/ChangePwd', //
  UserAdd: '/Sys/User/UserAdd', //
  ResetPwd: '/Sys/User/ResetPwd', //
  UserCancel: '/Sys/User/UserCancel', //
  Log: '/Sys/Log/List', //
  UserinfoList: '/Sys/User/UserinfoList', //
  UserinfoDetail: '/p/User/Info', //
  CompayDetail: '/p/Compay/Detail', //
  assessSysList: '/p/Compay/assessSysList', //
  Compaylist: '/p/Compay/list', //
  UserCheck: '/Sys/User/Check', //
  TaskList: '/p/Task/List', //
  TaskDetail: '/p/task/Detail', //
  TaskDelete: '/Sys/Task/Delete', //
  TaskFinish: '/Sys/Task/Finish', //
  ChatDelete: '/p/Chat/Delete', //
  TaskCheck: '/Sys/Task/Check', //
  SysTaskList: '/Sys/Task/List', //
  ComplainList: '/Sys/Task/ComplainList', //
  ComplainSolve: '/Sys/Task/ComplainSolve', //
  modeList: '/p/Task/modeList', //
  modeAdd: '/Sys/Task/modeAdd', //
  modeDelete: '/Sys/Task/modeDelete', //
  FeeList: '/Sys/Task/FeeList', //
  moneyList: '/p/Wallet/moneyList', //
  rechargeList: '/p/Wallet/rechargeList', // 充值
  chargeCount: '/p/Wallet/chargeCount', // 充值
  CashList: '/p/Wallet/cashList', // 提现
  CashComfirm: '/sys/Cash/Comfirm', // 提现
  CashCount: '/p/Wallet/cashCount', // 提现
  AdvertsList: '/Sys/Adverts/List', // banner
  AdvertsUpload: '/Sys/Adverts/Upload', // banner
  DynamicEdit: '/p/Dynamic/Edit', // 资讯
  DynamicAdd: '/p/Dynamic/Add', // 资讯
  DynamicList: '/p/Dynamic/sysList', //
  DynamicDetail: '/p/Dynamic/sysDetail', //
  DynamicDelete: '/p/Dynamic/Delete', //
  MessageList: '/Sys/Message/List', // 系统消息
  MessageAddx: '/Sys/Message/Add', // 系统消息
  MessageDel: '/Sys/Message/Del', // 系统消息
  sadasdas: ''
}
if (process.env.NODE_ENV === 'development') {
  Object.keys(apis).forEach((key) => {
    if (key.includes('upload')) {
      apis[key] = apis[key].replace(/.*\//, 'http://192.168.2.178:8066/')
    } else {
      apis[key] = `/api${apis[key]}`
    }
  })
}

export default apis
