import { Language } from '~/interface'
import { LiteralUnion } from 'antd/lib/_util/type'
import { PresetColorType, PresetStatusColorType } from 'antd/lib/_util/colors'
import { genSelect } from '~/utils/select'

interface Type {
  color: LiteralUnion<PresetColorType | PresetStatusColorType, string>
  text: string
}

const en_US = new Map<number, Type>()
  .set(1, { color: '', text: 'Top up' })
  .set(1, { color: '', text: 'Withdraw' })
  .set(2, { color: '', text: 'Subscription Consumption' })
  .set(3, { color: '', text: 'Registration Rewards' })

const zh_CN = new Map<number, Type>()
  .set(1, { color: '', text: '充值' })
  .set(2, { color: '', text: '撤回' })
  .set(3, { color: '', text: '代贴单消费' })
  .set(3, { color: '', text: '注册奖励' })

export default function useTableSelectTypeLocale(lang: Language) {
  const def = { color: 'red', text: 'Not Found' }
  if (lang === 'en_US') return genSelect(en_US, def)
  return genSelect(zh_CN, def)
}

export function getTableSelectTypeLocale(lang: Language) {
  const newMap = new Map<string, number>()
  let temp = zh_CN
  if (lang === 'en_US') {
    temp = en_US
  }
  temp.forEach((value, key) => {
    newMap.set(value.text, key)
  })
  return newMap
}
