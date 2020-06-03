import { Action } from 'redux'
import { Device } from '~/interface/layout/index.interface'

export interface GlobalState {
  /** user's device */
  device: Device

  /** menu collapsed status */
  collapsed: boolean

  /** notification count */
  noticeCount: number

  /** user's language */
  locale: 'zh_CN' | 'en_US'

  /** Is first time to view the site ? */
  newUser: boolean

  /** Is 主题颜色  */
  themeColor: string
}

const SET_GLOBAL_ITEM = 'SET_GLOBAL_ITEM'

type SET_GLOBAL_ITEM = typeof SET_GLOBAL_ITEM

interface SetGlobalItem extends Action<SET_GLOBAL_ITEM> {
  payload: Partial<GlobalState>
}

export const setGlobalItem = (payload: Partial<GlobalState>): SetGlobalItem => ({
  type: 'SET_GLOBAL_ITEM',
  payload
})

export type GlobalActions = SetGlobalItem
