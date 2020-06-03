import React, { FC, useCallback, useEffect, useState } from 'react'
import { Table, Tag } from 'antd'
import { RechargeDetails, RechargeItem } from '~/interface/recharge/recharge.interface'
import { useLocale } from '~/locales'
import { ColumnProps } from 'antd/lib/table'
import { apiGetRechargeDetails } from '~/api/recharge/recharge.api'
import useTableSelectStatusLocale from '~/hooks/useTableSelectStatusLocale'
import { useSelector } from 'react-redux'
import { AppState } from '~/stores'
import useTableSelectTypeLocale from '~/hooks/useTableSelectTypeLocale'
import useTableSelectPayMethodLocale from '~/hooks/useTableSelectPayMethodLocale'
import './index.less'
import LcdTime from '~/components/lcdTime'

const RechargeTable: FC = () => {
  const { formatMessage } = useLocale()
  const { locale } = useSelector((state: AppState) => state.globalReducer)
  const selectStatus = useTableSelectStatusLocale(locale)
  const selectType = useTableSelectTypeLocale(locale)
  const selectPayMethod = useTableSelectPayMethodLocale(locale)
  const columns: ColumnProps<RechargeItem>[] = [
    {
      title: formatMessage({ id: 'app.recharge.id' }),
      key: 'id',
      dataIndex: 'id'
    },
    {
      title: formatMessage({ id: 'app.recharge.cause' }),
      key: 'cause',
      dataIndex: 'cause',
      render: causeIndex => <span>{selectType(causeIndex).text}</span>
    },
    {
      title: formatMessage({ id: 'app.recharge.pay.method' }),
      key: 'payMethod',
      dataIndex: 'payMethod',
      render: payMethodIndex => {
        const payMethod = selectPayMethod(payMethodIndex)
        return (
          <Tag icon={payMethod.icon} color={payMethod.color}>
            {payMethod.text}
          </Tag>
        )
      }
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
      dataIndex: 'status',
      render: statusIndex => {
        const status = selectStatus(statusIndex)
        return <Tag color={status.color}>{status.text}</Tag>
      }
    },
    {
      title: formatMessage({ id: 'app.recharge.remark' }),
      key: 'remark',
      dataIndex: 'remark'
    },
    {
      title: formatMessage({ id: 'app.recharge.create.time' }),
      key: 'create.time',
      dataIndex: 'createdAt',
      render: createdAt => <LcdTime timestamp={createdAt} />
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
