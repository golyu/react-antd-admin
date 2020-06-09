import { request } from '~/api/request'
import { WarehouseService } from '~/interface/warehouse/warehouse'

/** get warehouse services api */
export const apiGetWarehouseServices = () => request<WarehouseService[]>('get', '/warehouse/service')
