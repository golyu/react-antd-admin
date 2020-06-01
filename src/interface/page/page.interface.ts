//分页信息
export interface PageMeta {
  currentPage: number // 当前第几页
  total: number // 数据总数
  pageSize: number // 每页数据量
}

// 分页请求
export interface PageParams {
  currentPage: number //当前页
  pageSize: number //每页数据量
  limit: number[] //分页
  orderBy: string //排序字段
  asc: boolean //排序顺序 默认为false,也就是默认倒序
}
