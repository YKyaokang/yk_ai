import React, { Suspense } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import TabBar from '../components/TabBar'
import { HomeSkeleton, StrategySkeleton } from '../components/Skeleton'

// 懒加载页面组件
const Home = React.lazy(() => import('../pages/Home'))
const Strategy = React.lazy(() => import('../pages/Strategy'))
const Service = React.lazy(() => import('../pages/Service'))
const Profile = React.lazy(() => import('../pages/Profile'))

// 主布局组件
const Layout = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Outlet />
      <TabBar />
    </div>
  )
}

// 创建路由配置
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<HomeSkeleton />}>
            <Home />
          </Suspense>
        )
      },
      {
        path: '/strategy',
        element: (
          <Suspense fallback={<StrategySkeleton />}>
            <Strategy />
          </Suspense>
        )
      },
      {
        path: '/service',
        element: (
          <Suspense fallback={<div>加载中...</div>}>
            <Service />
          </Suspense>
        )
      },
      {
        path: '/profile',
        element: (
          <Suspense fallback={<div>加载中...</div>}>
            <Profile />
          </Suspense>
        )
      }
    ]
  }
])

export default router