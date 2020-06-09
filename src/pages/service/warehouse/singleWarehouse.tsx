import React, { CSSProperties, FC, useEffect, useState } from 'react'
import { WarehouseService } from '~/interface/warehouse/warehouse'
import { VerificationMethod } from '~/hooks/useTableSelectVerificationMethodLocale'
import { Button, Col, Collapse, Divider, Row, Tag, Tooltip } from 'antd'
import TableTime from '~/pages/service/warehouse/tableTime'
import { toPercent4 } from '~/utils/float'
import { useSelector } from 'react-redux'
import { AppState } from '~/stores'
import CopyButton from '~/components/copyButton'

const { Panel } = Collapse

interface Props {
  singleWarehouse: WarehouseService
  selectVerificationMethodLocale: (key: number) => VerificationMethod
}

const subTitle: CSSProperties = {
  fontWeight: 'bold'
}
const subText: CSSProperties = {
  color: 'rgba(0,0,0,.65)'
}
const divider: CSSProperties = {
  marginTop: '15px'
}
type Rate = {
  title: string
  value: string
}

const SingleWarehouse: FC<Props> = ({ singleWarehouse, selectVerificationMethodLocale }) => {
  const { themeColor } = useSelector((state: AppState) => state.globalReducer)
  const verificationMethod = selectVerificationMethodLocale(singleWarehouse.verificationMethod)
  const [rate, setRate] = useState<Rate[]>([])
  useEffect(() => {
    setRate([
      { title: '近30天错单率：', value: toPercent4(singleWarehouse.monthFaultRate) },
      { title: '总错单率：', value: toPercent4(singleWarehouse.totalFaultRate) },
      { title: '平均扫描时间：', value: singleWarehouse.avgScanTime + ' 小时' }
    ])
  }, [singleWarehouse])

  return (
    <div>
      <div
        style={{
          borderTop: '1px solid #d9d9d9',
          borderLeft: '1px solid #d9d9d9',
          borderRight: '1px solid #d9d9d9',
          borderRadius: '5px 5px 0px 0px',
          padding: '10px'
        }}
      >
        <Row align="bottom" style={{ verticalAlign: 'bottom' }}>
          <span style={{ fontSize: '25px' }}>{singleWarehouse.name}</span>
          <Tag
            style={{ marginBottom: '7px', marginLeft: '20px' }}
            icon={verificationMethod.icon}
            color={verificationMethod.color}
          >
            {verificationMethod.text}
          </Tag>
          <div style={{ marginBottom: '4px', marginLeft: '10px' }}>
            <span style={subTitle}>扫描速度:</span>
            <span>{singleWarehouse.scanSpeed}</span>
            <span>分</span>
          </div>
        </Row>
        <Row style={{ marginTop: '10px' }}>
          <span style={subText}>{singleWarehouse.explanation}</span>
        </Row>
        <Divider />
        {/*sku*/}
        <Row gutter={16}>
          <Col span={2}>
            <span style={subTitle}>过多SKU收费:</span>
          </Col>
          <Col span={14}>
            <span style={subText}>{singleWarehouse.sku}</span>
          </Col>
          <Col span={8}>
            {rate.map((value, index) => (
              <div key={index} style={{ marginLeft: '12px' }}>
                <Row>
                  <Col span={8}>
                    <span style={subTitle}>{value.title}</span>
                  </Col>
                  <Col span={16}>
                    <span style={{ fontFamily: 'lcdFamily', color: themeColor }}>{value.value}</span>
                    {index === rate?.length - 1 && (
                      <Tooltip title="平台根据订单在分拣中心扫描时间和相应包裹到达仓库签收时间相减计算而出，客观反映仓库送件到分拣中心的速度。">
                        <Button type="dashed" style={{ marginLeft: '15px' }} size={'small'}>
                          如何计算?
                        </Button>
                      </Tooltip>
                    )}
                  </Col>
                </Row>
              </div>
            ))}
          </Col>
        </Row>
        {/*其他服务*/}
        <Row gutter={16} style={divider}>
          <Col span={2}>
            <span style={subTitle}>其他服务：</span>
          </Col>
          <Col span={14}>
            <span style={subText}>{singleWarehouse.otherService}</span>
          </Col>
          <Col span={8}>
            <TableTime themeColor={themeColor} times={singleWarehouse.threeDayScanTimes} />
          </Col>
        </Row>
        {/*  赔付承诺*/}
        <Row style={divider}>
          <Col span={2}>
            <span style={subTitle}>赔付承诺：</span>
          </Col>
          <Col span={22}>
            <span style={subText}>{singleWarehouse.compensationPromise}</span>
          </Col>
        </Row>
        {/*  通知*/}
        <Row style={divider}>
          <Col span={2}>
            <span style={subTitle}>通知：</span>
          </Col>
          <Col span={22}>
            <span style={subText}>{singleWarehouse.notice}</span>
          </Col>
        </Row>
      </div>
      <Collapse>
        <Panel header="收件人" key="1">
          <p>
            <span style={subTitle}>地 址:</span>
            {singleWarehouse.address}
            <CopyButton text={singleWarehouse.address} />
          </p>
          <p>
            <span style={subTitle}>收件人:</span>
            {singleWarehouse.recipient}
            <CopyButton text={singleWarehouse.recipient} />
          </p>
          <p>
            <span style={subTitle}>号 码:</span>
            {singleWarehouse.phone}
            <CopyButton text={singleWarehouse.phone} />
          </p>
        </Panel>
      </Collapse>
    </div>
  )
}
export default SingleWarehouse
