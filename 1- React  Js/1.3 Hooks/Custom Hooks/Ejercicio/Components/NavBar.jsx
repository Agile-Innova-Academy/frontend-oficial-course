import React from 'react'
import {  Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';

function NavBar() {

   const navigate = useNavigate() 

  const items = [
  {
    key: 1,      
    label: 'Registro',
    pathname: '/',
    onClick: ()=> navigate('/')
  },
    {
    key: 2,      
    label: 'Listar',
    pathname: '/list',
    onClick: ()=> navigate('/list')
  },
     {
    key: 3,      
    label: 'Otras',
    pathname: '/list',
    onClick: ()=> navigate('/list')
  }
]

  return (
    <Header >    
      <Menu     
        mode="horizontal"
        theme="dark"
        // inlineCollapsed={collapsed}
        items={items}
      />
    </Header>
  );
}

export default NavBar
