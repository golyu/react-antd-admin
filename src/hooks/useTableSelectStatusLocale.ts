import { Language } from '~/interface'
import { LiteralUnion } from 'antd/lib/_util/type'
import { PresetColorType, PresetStatusColorType } from 'antd/lib/_util/colors'
import { genSelect } from '~/utils/select'

interface Status {
  color: LiteralUnion<PresetColorType | PresetStatusColorType, string>
  text: string
}

const en_US = new Map<number, Status>()
  .set(1, { color: 'purple', text: 'processing' })
  .set(2, { color: 'green', text: 'success' })
  .set(3, { color: 'volcano', text: 'failure' })

const zh_CN = new Map<number, Status>()
  .set(1, { color: 'purple', text: '进行中' })
  .set(2, { color: 'green', text: '成功' })
  .set(3, { color: 'volcano', text: '失败' })

export default function useTableSelectStatusLocale(lang: Language) {
  const def = { color: 'red', text: 'Not Found' }
  if (lang === 'en_US') return genSelect(en_US, def)
  return genSelect(zh_CN, def)
}
