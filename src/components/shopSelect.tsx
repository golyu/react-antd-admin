import React, { FC } from 'react'
import { Radio } from 'antd'
import { useSelector } from 'react-redux'
import { AppState } from '~/stores'
import { getTableSelectShopType } from '~/hooks/useTableSelectShopTypeLocale'

const ShopSelect: FC = () => {
  const { locale } = useSelector((state: AppState) => state.globalReducer)
  const selectShopType = getTableSelectShopType(locale)
  return (
    <div>
      <Radio.Group defaultValue={0} buttonStyle="solid">
        {selectShopType.map(value => (
          <Radio.Button key={value.code} value={value.code}>
            {value.icon}
            &nbsp;
            {value.text}
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  )
}
export default ShopSelect
