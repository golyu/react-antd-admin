import React, { FC, ReactNode } from 'react'
import { useLocale } from '~/locales'
import { Button, Col, DatePicker, Form, Row, Select } from 'antd'
import { getTableSelectStatusLocale } from '~/hooks/useTableSelectStatusLocale'
import { useSelector } from 'react-redux'
import { AppState } from '~/stores'
import { getTableSelectTypeLocale } from '~/hooks/useTableSelectTypeLocale'
import { getTableSelectPayMethodLocale } from '~/hooks/useTableSelectPayMethodLocale'

const Item = Form.Item
const { RangePicker } = DatePicker

const RechargeSearch: FC = () => {
  const [form] = Form.useForm()
  const { formatMessage } = useLocale()
  const { locale } = useSelector((state: AppState) => state.globalReducer)
  const selectStatus = getTableSelectStatusLocale(locale)
  const selectType = getTableSelectTypeLocale(locale)
  const selectPayMethod = getTableSelectPayMethodLocale(locale)

  const onSearch = () => {
    console.log('点击搜索')
  }
  //类型搜索框
  const TypeItem: FC = () => {
    const select: Array<ReactNode> = []
    selectType.forEach((value, key) => {
      select.push(
        <Select.Option key={value} value={value}>
          {key}
        </Select.Option>
      )
    })
    return (
      <Col span={4}>
        <Item label={formatMessage({ id: 'app.recharge.cause' })} name="xx">
          <Select>{select}</Select>
        </Item>
      </Col>
    )
  }
  //支付方式搜索框
  const PayMethodItem: FC = () => {
    const select: Array<ReactNode> = []
    selectPayMethod.forEach((value, key) => {
      select.push(
        <Select.Option key={value} value={value}>
          {key}
        </Select.Option>
      )
    })
    return (
      <Col span={4}>
        <Item label={formatMessage({ id: 'app.recharge.pay.method' })} name="xx2">
          <Select>{select}</Select>
        </Item>
      </Col>
    )
  }
  //状态
  const StatusItem: FC = () => {
    const select: Array<ReactNode> = []
    selectStatus.forEach((value, key) => {
      select.push(
        <Select.Option key={value} value={value}>
          {key}
        </Select.Option>
      )
    })
    return (
      <Col span={4}>
        <Item label={formatMessage({ id: 'app.permission.role.status' })} name="x3">
          <Select>{select}</Select>
        </Item>
      </Col>
    )
  }
  //时间区间
  const TimeItem: FC = () => {
    return (
      <Col span={8}>
        <Item label={formatMessage({ id: 'global.tips.time' })} name="x4">
          <RangePicker showTime />
        </Item>
      </Col>
    )
  }

  return (
    <Form layout="inline" form={form}>
      <Row gutter={24} style={{ width: '100%' }}>
        <TypeItem />
        <PayMethodItem />
        <StatusItem />
        <TimeItem />
        <Col span={3}>
          <Item>
            <Button type="primary" onClick={onSearch}>
              {formatMessage({ id: 'global.tips.search' })}
            </Button>
            <Button style={{ marginLeft: '10px' }} onClick={() => form.resetFields()}>
              {formatMessage({ id: 'global.tips.reset' })}
            </Button>
          </Item>
        </Col>
      </Row>
    </Form>
  )
}
export default RechargeSearch
