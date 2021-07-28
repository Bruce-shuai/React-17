import React from 'react';
import { sideMenuList } from './mockdata';
import { Menu } from 'antd';
import { CarOutlined } from '@ant-design/icons';
export const SideMenu:React.FC = () => {
  return <>
    <Menu mode="vertical">
      {
        sideMenuList.map((menu, index) => {
         return <Menu.SubMenu key={`key-${index}`} icon={<CarOutlined />} title={menu.title}>
            {
              menu.subMenu.map((smenu, sindex) => {
                return <Menu.SubMenu key={`${smenu.title}-${sindex}`} title={smenu.title}>
                  {
                    smenu.subMenu.map((place, ssindex) => {
                      return <Menu.Item key={`${place}-${ssindex}`}>{place}</Menu.Item>
                    })
                  }
                </Menu.SubMenu>
              })
            }
          </Menu.SubMenu>
        })
      }
    </Menu>
  </>
}

