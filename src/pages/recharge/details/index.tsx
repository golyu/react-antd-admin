import React, { FC } from 'react'
import RechargeTable from '~/pages/recharge/details/rechargeTable'
import { Typography } from 'antd'
import './index.less'

const RechargeDetails: FC = () => {
  const { Title } = Typography
  const balance = 55
  return (
    <div>
      <div style={{ paddingLeft: '20px', paddingTop: '20px' }}>
        <Title level={4}>
          充值明细(当前积分:<span className="score">{balance}</span>)
        </Title>
      </div>
      <RechargeTable />
    </div>
  )
}
export default RechargeDetails
