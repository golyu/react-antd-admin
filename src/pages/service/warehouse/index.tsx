import React, { FC, useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '~/stores'
import { WarehouseService } from '~/interface/warehouse/warehouse'
import SingleWarehouse from '~/pages/service/warehouse/singleWarehouse'
import { apiGetWarehouseServices } from '~/api/services/warehouse.api'
import useTableSelectVerificationMethodLocale from '~/hooks/useTableSelectVerificationMethodLocale'
import ShopSelect from '~/components/shopSelect'

const WarehouseServiceInfo: FC = () => {
  const { locale } = useSelector((state: AppState) => state.globalReducer)
  const selectVerificationMethodLocale = useTableSelectVerificationMethodLocale(locale)
  const [tableData, setTableData] = useState<WarehouseService[]>([])

  const initData = useCallback(() => {
    apiGetWarehouseServices().then(value => {
      setTableData(value.result)
    })
  }, [])

  useEffect(() => {
    initData()
  }, [initData])
  return (
    <div style={{ padding: '15px' }}>
      <span>仓库服务信息</span>
      <br />
      <ShopSelect />
      {tableData.map(value => {
        return (
          <SingleWarehouse
            singleWarehouse={value}
            selectVerificationMethodLocale={selectVerificationMethodLocale}
            key={value.id}
          />
        )
      })}
    </div>
  )
}
export default WarehouseServiceInfo
