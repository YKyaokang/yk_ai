import React, { useState } from 'react'
import { 
  Button, 
  Tabs, 
  Cell, 
  NavBar, 
  Search, 
  Toast,
  Dialog,
  Loading,
  Tag
} from 'react-vant'
import styles from './index.module.css'

const ThemeDemo = () => {
  const [activeTab, setActiveTab] = useState('theme')
  const [searchValue, setSearchValue] = useState('')

  const showToast = (message) => {
    Toast.info(message)
  }

  const showDialog = () => {
    Dialog.confirm({
      title: '主题定制演示',
      message: '这是使用了自定义主题的对话框',
    })
  }

  return (
    <div className={styles.container}>
      {/* 导航栏演示 */}
      <NavBar 
        title="主题定制演示" 
        leftText="返回"
        rightText="更多"
      />

      {/* 搜索框演示 */}
      <div className={styles.section}>
        <h3 className="title-secondary">搜索组件</h3>
        <Search
          value={searchValue}
          onChange={setSearchValue}
          placeholder="搜索内容"
          showAction
          onSearch={() => showToast(`搜索: ${searchValue}`)}
        />
      </div>

      {/* 标签页演示 */}
      <div className={styles.section}>
        <h3 className="title-secondary">标签页组件</h3>
        <Tabs active={activeTab} onChange={setActiveTab}>
          <Tabs.TabPane name="theme" title="主题色">
            <div className={styles.tabContent}>
              <p className="description">使用了自定义主题色的标签页</p>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane name="icons" title="图标">
            <div className={styles.tabContent}>
              <div className={styles.iconGrid}>
                <div className="icon-with-text">
                  <span className="icon icon-home icon-lg icon-primary"></span>
                  <span className="text-base">首页</span>
                </div>
                <div className="icon-with-text">
                  <span className="icon icon-plane icon-lg icon-success"></span>
                  <span className="text-base">航班</span>
                </div>
                <div className="icon-with-text">
                  <span className="icon icon-hotel icon-lg icon-warning"></span>
                  <span className="text-base">酒店</span>
                </div>
                <div className="icon-with-text">
                  <span className="icon icon-car icon-lg icon-danger"></span>
                  <span className="text-base">租车</span>
                </div>
              </div>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane name="typography" title="文字">
            <div className={styles.tabContent}>
              <div className={styles.textExamples}>
                <h4 className="text-2xl font-bold text-primary">主标题样式</h4>
                <h5 className="text-xl font-semibold text-gray-7">副标题样式</h5>
                <p className="text-base text-gray-6 leading-relaxed">正文内容样式，支持多行显示，行高适中便于阅读。</p>
                <p className="text-sm text-gray-5">小号文字说明</p>
                
                <div className={styles.priceDemo}>
                  <span className="price-text text-xl">
                    <span className="price-symbol">¥</span>2999
                  </span>
                  <span className="price-original text-sm">¥3999</span>
                </div>

                <div className={styles.tagsDemo}>
                  <span className="tag-text tag-hot">热门</span>
                  <span className="tag-text tag-new">最新</span>
                  <span className="tag-text tag-discount">特价</span>
                </div>
              </div>
            </div>
          </Tabs.TabPane>
        </Tabs>
      </div>

      {/* 按钮演示 */}
      <div className={styles.section}>
        <h3 className="title-secondary">按钮组件</h3>
        <div className={styles.buttonGrid}>
          <Button type="primary" onClick={() => showToast('主要按钮')}>
            主要按钮
          </Button>
          <Button type="success" onClick={() => showToast('成功按钮')}>
            成功按钮
          </Button>
          <Button type="warning" onClick={() => showToast('警告按钮')}>
            警告按钮
          </Button>
          <Button type="danger" onClick={() => showToast('危险按钮')}>
            危险按钮
          </Button>
        </div>
      </div>

      {/* 单元格演示 */}
      <div className={styles.section}>
        <h3 className="title-secondary">单元格组件</h3>
        <Cell.Group>
          <Cell 
            title="基础单元格" 
            value="内容" 
            icon={<span className="icon icon-setting icon-md icon-primary"></span>}
            isLink 
          />
          <Cell 
            title="带图标单元格" 
            value="查看详情"
            icon={<span className="icon icon-user icon-md icon-success"></span>}
            isLink 
          />
          <Cell 
            title="带徽章单元格" 
            value="3条新消息"
            icon={
              <div className="icon-with-badge">
                <span className="icon icon-message icon-md icon-info"></span>
                <span className="icon-badge">3</span>
              </div>
            }
            isLink 
          />
        </Cell.Group>
      </div>

      {/* 状态演示 */}
      <div className={styles.section}>
        <h3 className="title-secondary">状态样式</h3>
        <div className={styles.statusGrid}>
          <span className="status-success">成功状态</span>
          <span className="status-warning">警告状态</span>
          <span className="status-error">错误状态</span>
          <span className="status-info">信息状态</span>
        </div>
      </div>

      {/* 功能按钮 */}
      <div className={styles.section}>
        <h3 className="title-secondary">功能演示</h3>
        <div className={styles.buttonGrid}>
          <Button type="primary" onClick={showDialog}>
            显示对话框
          </Button>
          <Button type="default" onClick={() => showToast('这是一个Toast消息')}>
            显示Toast
          </Button>
        </div>
      </div>

      {/* 加载状态 */}
      <div className={styles.section}>
        <h3 className="title-secondary">加载组件</h3>
        <div className={styles.loadingDemo}>
          <Loading size="24" className="icon-primary">加载中...</Loading>
        </div>
      </div>
    </div>
  )
}

export default ThemeDemo