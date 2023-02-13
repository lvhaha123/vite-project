import Mock from 'mockjs'
import { ResponseWarpper } from './_utils';

Mock.mock('/admin/user/login', ResponseWarpper.success({
    "token": "abc",
    "authority": [
      {
        "path": "/order",
        "name": "Order",
        "meta": {
          "title": "订单列表",
          "isShow": true
        }
      },
      {
        "path": "/userList",
        "name": "UserList",
        "meta": {
          "title": "用户列表",
          "isShow": true
        }
      },
      {
        "path": "/roleList",
        "name": "RoleList",
        "meta": {
          "title": "角色列表",
          "isShow": true
        }
      },
      {
        "path": "/tauthority",
        "name": "Tauthority",
        "meta": {
          "title": "权限列表",
          "isShow": false
        }
      }
    ]
}))