import React, { FC, ReactNode } from 'react'
import { useLocale } from '~/locales'
import { Button, Col, DatePicker, Form, Row, Select, Tag } from 'antd'
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

  const onSearch = (values: any) => {
    console.log('点击搜索', values)
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
        <Item label={formatMessage({ id: 'app.recharge.cause' })} name="cause">
          <Select>{select}</Select>
        </Item>
      </Col>
    )
  }
  //支付方式搜索框
  const PayMethodItem: FC = () => {
    const select: Array<ReactNode> = []
    selectPayMethod.forEach(value => {
      select.push(
        <Select.Option key={value.code} value={value.code}>
          <Tag icon={value.icon} color={value.color}>
            {value.text}
          </Tag>
        </Select.Option>
      )
    })
    return (
      <Col span={4}>
        <Item label={formatMessage({ id: 'app.recharge.pay.method' })} name="payMethod">
          <Select>{select}</Select>
        </Item>
      </Col>
    )
  }
  //状态
  const StatusItem: FC = () => {
    const select: Array<ReactNode> = []
    selectStatus.forEach(value => {
      select.push(
        <Select.Option key={value.code} value={value.code}>
          <Tag color={value.color}>{value.text}</Tag>
        </Select.Option>
      )
    })
    return (
      <Col span={4}>
        <Item label={formatMessage({ id: 'app.permission.role.status' })} name="status">
          <Select>{select}</Select>
        </Item>
      </Col>
    )
  }
  //时间区间
  const TimeItem: FC = () => {
    return (
      <Col span={8}>
        <Item label={formatMessage({ id: 'global.tips.time' })} name="timeInterval">
          <RangePicker showTime />
        </Item>
      </Col>
    )
  }
  return (
    <Form layout="inline" form={form} onFinish={onSearch}>
      <Row gutter={24} style={{ width: '100%' }}>
        <TypeItem />
        <PayMethodItem />
        <StatusItem />
        <TimeItem />
        <Col span={3}>
          <Item>
            <Button type="primary" onClick={form.submit}>
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
