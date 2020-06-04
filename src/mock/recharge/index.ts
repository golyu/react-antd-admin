import { mock, intercepter } from '../config'
import { RechargeDetails } from '~/interface/recharge/recharge.interface'

const rechargeDetails: RechargeDetails = {
  pageMeta: {
    currentPage: 2,
    pageSize: 2,
    total: 5
  },
  rechargeList: [
    {
      id: 0, // 流水
      cause: 1, // 类型
      payMethod: 1, // 支付方式
      payAmount: 5, // 支付金额
      score: 5, // 积分变化
      balance: 100, // 剩余积分
      status: 1, // 状态
      remark: '备注', // 备注
      createdAt: 1591008148 // 操作时间
    },
    {
      id: 0, // 流水
      cause: 1, // 类型
      payMethod: 1, // 支付方式
      payAmount: 5, // 支付金额
      score: 5, // 积分变化
      balance: 100, // 剩余积分
      status: 3, // 状态
      remark: '备注', // 备注
      createdAt: 1591008148 // 操作时间
    },
    {
      id: 0, // 流水
      cause: 1, // 类型
      payMethod: 2, // 支付方式
      payAmount: 5, // 支付金额
      score: 5, // 积分变化
      balance: 100, // 剩余积分
      status: 2, // 状态
      remark: '备注', // 备注
      createdAt: 1591008148 // 操作时间
    },
    {
      id: 0, // 流水
      cause: 1, // 类型
      payMethod: 3, // 支付方式
      payAmount: 5, // 支付金额
      score: 5, // 积分变化
      balance: 100, // 剩余积分
      status: 2, // 状态
      remark: '备注', // 备注
      createdAt: 1591008148 // 操作时间
    },
    {
      id: 0, // 流水
      cause: 1, // 类型
      payMethod: 3, // 支付方式
      payAmount: 5, // 支付金额
      score: 5, // 积分变化
      balance: 100, // 剩余积分
      status: 1, // 状态
      remark: '备注', // 备注
      createdAt: 1591008148 // 操作时间
    }
  ]
}

mock.mock('/recharge/details', 'get', intercepter(rechargeDetails))
