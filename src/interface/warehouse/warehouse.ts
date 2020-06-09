//仓库服务,例如易贸深圳仓
export interface WarehouseService {
  id: number //仓库id
  name: string // 仓库名
  verificationMethod: number // 认证方式
  scanSpeed: number //扫描速度
  explanation: string // 说明
  sku: string //过多SKU收费说明
  otherService: string //其他服务
  compensationPromise: string //赔付承诺
  notice: string //通知
  totalFaultRate: number //总容错率
  monthFaultRate: number //30天容错率
  avgScanTime: number //平均扫描时间
  threeDayScanTimes: number[] //过往三天扫描时间分布
  recipient: string //收件人
  address: string // 收件地址
  phone: string // 电话
}
