import React, { FC, useCallback, useEffect, useState } from 'react'
import { Table } from 'antd'
import { RechargeDetails, RechargeItem } from '~/interface/recharge/recharge.interface'
import { useLocale } from '~/locales'
import { ColumnProps } from 'antd/lib/table'
import { apiGetRechargeDetails } from '~/api/recharge/recharge.api'

const RechargeTable: FC = () => {
  const { formatMessage } = useLocale()
  // const { locale } = useSelector((state: AppState) => state.globalReducer)
  const columns: ColumnProps<RechargeItem>[] = [
    {
      title: formatMessage({ id: 'app.recharge.id' }),
      key: 'id',
      dataIndex: 'id'
    },
    {
      title: formatMessage({ id: 'app.recharge.cause' }),
      key: 'cause',
      dataIndex: 'cause'
    },
    {
      title: formatMessage({ id: 'app.recharge.pay.method' }),
      key: 'payMethod',
      dataIndex: 'payMethod'
    },
    {
      title: formatMessage({ id: 'app.recharge.pay.amount' }),
      key: 'amount',
      dataIndex: 'payAmount'
    },
    {
      title: formatMessage({ id: 'app.recharge.score' }),
      key: 'score',
      dataIndex: 'score'
    },
    {
      title: formatMessage({ id: 'app.recharge.balance' }),
      key: 'balance',
      dataIndex: 'balance'
    },
    {
      title: formatMessage({ id: 'app.recharge.status' }),
      key: 'status',
      dataIndex: 'status'
    },
    {
      title: formatMessage({ id: 'app.recharge.remark' }),
      key: 'remark',
      dataIndex: 'remark'
    },
    {
      title: formatMessage({ id: 'app.recharge.create.time' }),
      key: 'create.time',
      dataIndex: 'create.time'
    }
  ]
  const [tableData, setTableData] = useState<RechargeDetails>()
  const initData = useCallback(async () => {
    const { result, status } = await apiGetRechargeDetails()
    if (status) {
      setTableData(result)
    }
  }, [])

  useEffect(() => {
    initData()
  }, [initData])
  return <Table rowKey="id" columns={columns} dataSource={tableData?.rechargeList} />
}
export default RechargeTable
