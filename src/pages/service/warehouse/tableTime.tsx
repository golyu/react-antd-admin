import React, { FC } from 'react'
import { Button, Table, Tooltip } from 'antd'
import { ColumnProps } from 'antd/lib/table'
import { toPercent4 } from '~/utils/float'

interface Props {
  times: number[]
  themeColor: string
}
const TableTime: FC<Props> = ({ times, themeColor }) => {
  const timeTitles: string[] = ['<4小时', '4-8小时', '8-12小时', '12-24小时', '>24小时']
  const columns: ColumnProps<any>[] = []
  timeTitles.forEach((value, index) => {
    columns.push({
      title: value,
      dataIndex: 'a' + index,
      align: 'center',
      render: value => {
        return <span style={{ fontFamily: 'lcdFamily', color: themeColor }}>{value}</span>
      }
    })
  })
  const data = [
    {
      key: '1',
      a0: toPercent4(times[0]),
      a1: toPercent4(times[1]),
      a2: toPercent4(times[2]),
      a3: toPercent4(times[3]),
      a4: toPercent4(times[4])
    }
  ]

  return (
    <Table
      columns={columns}
      size="small"
      dataSource={data}
      bordered
      title={() => {
        return (
          <div>
            <span>过往三天扫描时间分布:</span>
            <Tooltip title="过去三天扫描时间分布，体现仓库繁忙程度。">
              <Button type="dashed" style={{ marginLeft: '15px' }} size={'small'}>
                如何计算?
              </Button>
            </Tooltip>
          </div>
        )
      }}
      pagination={false}
    />
  )
}
export default TableTime
