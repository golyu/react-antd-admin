import React, { FC } from 'react'
import { LogoutOutlined, UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Layout, Dropdown, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import HeaderNoticeComponent from './notice'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAsync } from '~/actions/user.action'
import Avator from '~/assets/header/avator.jpeg'
import { AppState } from '~/stores'
import { ReactComponent as LanguageSvg } from '~/assets/header/language.svg'
import { ReactComponent as ZhCnSvg } from '~/assets/header/zh_CN.svg'
import { ReactComponent as EnUsSvg } from '~/assets/header/en_US.svg'
import { setGlobalItem } from '~/actions/global.action'
import { LocaleFormatter, useLocale } from '~/locales'
import ReactSvg from '~/assets/logo/react.svg'
import AntdSvg from '~/assets/logo/antd.svg'

const { Header } = Layout

interface Props {
  collapsed: boolean
  toggle: () => void
}

type Action = 'userInfo' | 'userSetting' | 'logout'

const HeaderComponent: FC<Props> = ({ collapsed, toggle }) => {
  const { logged } = useSelector((state: AppState) => state.userReducer)
  const { locale, device } = useSelector((state: AppState) => state.globalReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { formatMessage } = useLocale()

  const onActionClick = async (action: Action) => {
    switch (action) {
      case 'userInfo':
        return
      case 'userSetting':
        return
      case 'logout':
        const res = Boolean(await dispatch(logoutAsync()))
        res && navigate('/login')
        return
    }
  }

  const toLogin = () => {
    navigate('/login')
  }

  const selectLocale = ({ key }: { key: any }) => {
    dispatch(setGlobalItem({ locale: key }))
    localStorage.setItem('locale', key)
  }
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <span>
          <UserOutlined />
          <span onClick={() => navigate('/dashboard')}>
            <LocaleFormatter id="header.avator.account" />
          </span>
        </span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">
        <span>
          <LogoutOutlined />
          <span onClick={() => onActionClick('logout')}>
            <LocaleFormatter id="header.avator.logout" />
          </span>
        </span>
      </Menu.Item>
    </Menu>
  )
  return (
    <Header className="layout-page-header">
      {device !== 'MOBILE' && (
        <div className="logo" style={{ width: collapsed ? 80 : 200 }}>
          <img src={ReactSvg} alt="" style={{ marginRight: collapsed ? '2px' : '20px' }} />
          <img src={AntdSvg} alt="" />
        </div>
      )}
      <div className="layout-page-header-main">
        <div onClick={toggle}>
          <span id="sidebar-trigger">{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</span>
        </div>
        <div style={{ width: '100%', textAlign: 'left' }}>
          <span style={{ marginLeft: '20px', fontSize: '26px' }}>邻派跨境仓储系统</span>
        </div>
        <div className="actions">
          <HeaderNoticeComponent />
          <Dropdown
            trigger={['click']}
            overlay={
              <Menu onClick={selectLocale}>
                <Menu.Item style={{ textAlign: 'left' }} disabled={locale === 'zh_CN'} key="zh_CN">
                  <ZhCnSvg /> 简体中文
                </Menu.Item>
                <Menu.Item style={{ textAlign: 'left' }} disabled={locale === 'en_US'} key="en_US">
                  <EnUsSvg /> English
                </Menu.Item>
              </Menu>
            }
          >
            <span>
              <LanguageSvg id="language-change" />
            </span>
          </Dropdown>
          {logged ? (
            <Dropdown overlay={menu} trigger={['click']}>
              <span className="user-action">
                <img src={Avator} className="user-avator" alt={''} />
              </span>
            </Dropdown>
          ) : (
            <span style={{ cursor: 'pointer' }} onClick={toLogin}>
              {formatMessage({ id: 'global.tips.login' })}
            </span>
          )}
        </div>
      </div>
    </Header>
  )
}

export default HeaderComponent
