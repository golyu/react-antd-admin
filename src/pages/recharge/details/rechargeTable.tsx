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
import LcdTime from '~/components/lcdTime'
import { PageMeta } from '~/interface/page/page.interface'

const RechargeTable: FC = () => {
  const { formatMessage } = useLocale()
  const { locale } = useSelector((state: AppState) => state.globalReducer)
  const selectStatus = useTableSelectStatusLocale(locale)
  const selectType = useTableSelectTypeLocale(locale)
  const selectPayMethod = useTableSelectPayMethodLocale(locale)
  const [loading, setLoading] = useState<boolean>(false)
  const [pageMeta, setPageMeta] = useState<PageMeta>({ pageSize: 20, currentPage: 1, total: 0 })
  const [tableData, setTableData] = useState<RechargeDetails>({
    rechargeList: [],
    pageMeta: { total: 0, pageSize: 0, currentPage: 1 }
  })
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

  const initData = useCallback(() => {
    setLoading(true)
    apiGetRechargeDetails()
      .then(value => {
        setPageMeta(value.result.pageMeta)
        setTableData(value.result)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    initData()
  }, [initData])

  return (
    <Table
      rowKey="id"
      loading={loading}
      columns={columns}
      dataSource={tableData?.rechargeList}
      pagination={{
        position: ['bottomLeft'],
        showSizeChanger: true,
        defaultPageSize: pageMeta.pageSize,
        total: pageMeta.total,
        defaultCurrent: pageMeta.currentPage,
        onShowSizeChange: (current: number, size: number) => {
          // 如果当前table已经显示了有数据,更改默认的每页条数,就重新发起api请求
          if (tableData?.rechargeList.length > 0) {
            initData()
            console.log('页面有数据,重新发起请求', 'current:', current, 'size:', size)
          }
        },
        onChange: (page: number, pageSize: number | undefined) => {
          if (tableData?.rechargeList.length > 0) {
            initData()
            console.log('页面有数据,重新发起请求', 'page:', pageSize, 'pageSize:', pageSize)
          }
        }
      }}
    />
  )
}
export default RechargeTable
