import React, { FC, useCallback, useEffect, useState } from 'react'
import { getTableSelectShopType } from '~/hooks/useTableSelectShopTypeLocale'
import { useSelector } from 'react-redux'
import { AppState } from '~/stores'
import { Radio } from 'antd'
import { WarehouseService } from '~/interface/warehouse/warehouse'
import SingleWarehouse from '~/pages/service/warehouse/singleWarehouse'
import { apiGetWarehouseServices } from '~/api/services/warehouse.api'
import useTableSelectVerificationMethodLocale from '~/hooks/useTableSelectVerificationMethodLocale'

const WarehouseServiceInfo: FC = () => {
  const { locale } = useSelector((state: AppState) => state.globalReducer)
  const selectVerificationMethodLocale = useTableSelectVerificationMethodLocale(locale)
  const selectShopType = getTableSelectShopType(locale)
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
      <Radio.Group defaultValue={0} buttonStyle="solid">
        {selectShopType.map(value => (
          <Radio.Button key={value.code} value={value.code}>
            {value.icon}
            &nbsp;
            {value.text}
          </Radio.Button>
        ))}
      </Radio.Group>
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
