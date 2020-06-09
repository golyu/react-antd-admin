import { intercepter, mock } from '~/mock/config'
import { WarehouseService } from '~/interface/warehouse/warehouse'

const warehouseServiceList: WarehouseService[] = [
  {
    avgScanTime: 16.7,
    compensationPromise: '如仓库责任，错件按采购价赔付.',
    explanation: '微信号：Peter570129 打包价格：30.0积分/单 送仓次数：每天3-5次[15:00, 17:00, 18:00, 19:00, 20:00]',
    id: 1,
    monthFaultRate: 0,
    name: '易贸深圳仓',
    notice:
      '亲爱的卖家朋友，你好！\n' +
      '欢迎在易贸深圳仓下单发货。为了提高发货速度和准确性，请大家尽量在【打包备注】写清楚。以下场景请务必备注：\n' +
      '1.      分包，就是一个包裹发多个订单，或者一个包裹发一部分，暂存一部分。\n' +
      '备注示例如下\n' +
      '比如包裹75355874839958共有3个黑色鼠标，本单发2个，暂存1个。\n' +
      '比如包裹75355874839958共有3个黑色鼠标，本单发2个，另一个单发1个。\n' +
      '2.      其他情况\n' +
      '拆包验货，请备注验货内容，如外观是否破损、型号是否正确、功能是否可用\n' +
      '如果需要礼品，请备注是什么礼品，不备注默认发挂钩。',
    otherService:
      '台湾好评卡 5.00积分\n' +
      '气泡膜1米 10.00积分\n' +
      '气泡膜2米 20.00积分\n' +
      '气泡膜3米 30.00积分\n' +
      '拆包质检 20.00积分\n' +
      '大包裹额外运费(三边之和大于90cm为大包裹) 10.00积分',
    scanSpeed: 78,
    sku:
      '超过5个SKU，每个SKU收费5.0积分\n' +
      '其他服务：\t纸箱-小（小于45*30*30） 30.00积分\n' +
      '纸箱-大（大于45*30*30） 60.00积分\n' +
      '小礼品 10.00积分\n' +
      '蛇皮袋80cm*100cm 30.00积分\n' +
      '蛇皮袋60cm*80cm 20.00积分',
    threeDayScanTimes: [0.25, 0.558, 0.115, 0.038, 0.038],
    totalFaultRate: 0.000244456,
    verificationMethod: 1,
    address: '广东省深圳市宝安区黄田工业城杨北工业区后门原顺意驾校',
    phone: '15928687885',
    recipient: '途达1499'
  }
]

mock.mock('/warehouse/service', 'get', intercepter(warehouseServiceList))
