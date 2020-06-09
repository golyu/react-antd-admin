import React, { FC } from 'react'
import { Steps } from 'antd'
import { useSelector } from 'react-redux'
import { AppState } from '~/stores'

const { Step } = Steps

const TryCreate: FC = () => {
  const { themeColor } = useSelector((state: AppState) => state.globalReducer)
  return (
    <div>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <span style={{ color: themeColor, fontSize: 'larger' }}>专线小包订单流程为:</span>
      </div>

      <Steps progressDot current={5}>
        <Step subTitle="创建订单" />
        <Step subTitle="等待审核商品" />
        <Step subTitle="寄送到国内仓" />
        <Step subTitle="确认重量、最终价格" />
        <Step subTitle="付款" />
        <Step subTitle="等待寄往目的地" />
      </Steps>
    </div>
  )
}
export default TryCreate
