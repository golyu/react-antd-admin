import { PageMeta } from '~/interface/page/page.interface'

export interface RechargeItem {
  id: number // 流水
  cause: number // 类型
  payMethod: number // 支付方式
  payAmount: number // 支付金额
  score: number // 积分变化
  balance: number // 剩余积分
  status: number // 状态
  remark: string // 备注
  createdAt: number // 操作时间
}

// 充值明细
export interface RechargeDetails {
  rechargeList: RechargeItem[]
  pageMeta: PageMeta
}
