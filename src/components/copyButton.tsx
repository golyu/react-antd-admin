import React, { FC, useState } from 'react'
import './copyButton.less'
import { CopyOutlined } from '@ant-design/icons'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Tooltip } from 'antd'

interface Props {
  text: string
}

const CopyButton: FC<Props> = ({ text }) => {
  const [state, setState] = useState({
    hint: '点击复制',
    copied: false
  })
  const onCopy = () => {
    setState({ hint: '复制成功', copied: true })
  }
  const onTouchCancel = () => {
    setState({ hint: '点击复制', copied: false })
  }

  return (
    <CopyToClipboard text={text}>
      <Tooltip title={state.hint}>
        <CopyOutlined className="code-box-code-copy" onClick={onCopy} onMouseOut={onTouchCancel} />
      </Tooltip>
    </CopyToClipboard>
  )
}
export default CopyButton
