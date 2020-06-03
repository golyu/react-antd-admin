import React, { FC } from 'react'
import { timeFormat } from '~/utils/time'
import { Radio } from 'antd'
import { useSelector } from 'react-redux'
import { AppState } from '~/stores'

interface Props {
  timestamp: number
}

const LcdTime: FC<Props> = ({ timestamp }) => {
  const [ymd, hms] = timeFormat(timestamp)
  const { themeColor } = useSelector((state: AppState) => state.globalReducer)
  return (
    <div>
      <Radio.Group defaultValue="b" buttonStyle="solid" size={'small'} style={{ pointerEvents: 'none' }}>
        <Radio.Button value="a" style={{ borderColor: themeColor, color: themeColor }}>
          {ymd}
        </Radio.Button>
        <Radio.Button value="b">
          <span style={{ fontFamily: 'lcdFamily' }}>{hms}</span>
        </Radio.Button>
      </Radio.Group>
    </div>
  )
}
export default LcdTime
