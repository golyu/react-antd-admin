import { request } from '~/api/request'
import { RechargeDetails } from '~/interface/recharge/recharge.interface'

/** get recharge details api */
export const apiGetRechargeDetails = () => request<RechargeDetails>('get', '/recharge/details')
