import React, { FC } from 'react'
import RechargeTable from '~/pages/recharge/details/rechargeTable'
import RechargeSearch from '~/pages/recharge/details/rechargeSearch'

const RechargeDetails: FC = () => {
  return (
    <div>
      <RechargeSearch />
      <RechargeTable />
    </div>
  )
}
export default RechargeDetails
