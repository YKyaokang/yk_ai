# 旅行APP主题定制指南

## 概述

这个项目实现了完整的 react-vant 主题定制系统，包括颜色、字体、图标和组件样式的统一管理。

## 文件结构

```
src/styles/
├── theme.css      # React-Vant 主题定制
├── icons.css      # 图标样式管理
└── typography.css # 文字样式管理
```

## 主题定制

### 1. 颜色系统

```css
/* 主色调 */
--rv-primary-color: #1890ff;        /* 去哪儿蓝 */
--rv-success-color: #52c41a;        /* 成功绿 */
--rv-warning-color: #faad14;        /* 警告橙 */
--rv-danger-color: #ff4d4f;         /* 危险红 */
```

### 2. 字体大小（适配移动端）

```css
--rv-font-size-xs: 20px;
--rv-font-size-sm: 24px;
--rv-font-size-md: 28px;  /* 基础字体 */
--rv-font-size-lg: 32px;
--rv-font-size-xl: 36px;
```

## 图标使用

### 基础用法

```jsx
<span className="icon icon-home icon-lg icon-primary"></span>
```

### 图标尺寸

- `icon-xs` - 24px
- `icon-sm` - 28px
- `icon-md` - 32px（默认）
- `icon-lg` - 36px
- `icon-xl` - 40px
- `icon-xxl` - 48px

### 图标颜色

- `icon-primary` - 主色调
- `icon-success` - 成功色
- `icon-warning` - 警告色
- `icon-danger` - 危险色
- `icon-gray` - 灰色

### 常用图标

```jsx
{/* 旅行相关 */}
<span className="icon icon-plane"></span>     {/* ✈️ */}
<span className="icon icon-hotel"></span>     {/* 🏨 */}
<span className="icon icon-car"></span>       {/* 🚗 */}
<span className="icon icon-ticket"></span>    {/* 🎫 */}

{/* 功能图标 */}
<span className="icon icon-search"></span>    {/* 🔍 */}
<span className="icon icon-location"></span>  {/* 📍 */}
<span className="icon icon-phone"></span>     {/* 📞 */}
<span className="icon icon-message"></span>   {/* 💬 */}
```

### 图标组合

```jsx
{/* 带文字的图标 */}
<div className="icon-with-text">
  <span className="icon icon-home icon-lg icon-primary"></span>
  <span className="text-base">首页</span>
</div>

{/* 带徽章的图标 */}
<div className="icon-with-badge">
  <span className="icon icon-message icon-md"></span>
  <span className="icon-badge">3</span>
</div>
```

## 文字样式

### 字体大小

```jsx
<p className="text-xs">超小文字 (20px)</p>
<p className="text-sm">小文字 (24px)</p>
<p className="text-base">基础文字 (28px)</p>
<p className="text-lg">大文字 (32px)</p>
<p className="text-xl">超大文字 (36px)</p>
```

### 字体粗细

```jsx
<p className="font-light">细体</p>
<p className="font-normal">正常</p>
<p className="font-medium">中等</p>
<p className="font-semibold">半粗</p>
<p className="font-bold">粗体</p>
```

### 文字颜色

```jsx
<p className="text-primary">主色调文字</p>
<p className="text-success">成功色文字</p>
<p className="text-gray-6">灰色文字</p>
```

### 业务样式

```jsx
{/* 价格样式 */}
<span className="price-text">
  <span className="price-symbol">¥</span>2999
</span>
<span className="price-original">¥3999</span>

{/* 标签样式 */}
<span className="tag-text tag-hot">热门</span>
<span className="tag-text tag-new">最新</span>

{/* 状态样式 */}
<span className="status-success">已确认</span>
<span className="status-warning">待支付</span>
```

## React-Vant 组件定制

### Tabs 组件

```jsx
import { Tabs } from 'react-vant'

<Tabs active={activeTab} onChange={setActiveTab}>
  <Tabs.TabPane name="tab1" title="标签1">
    内容1
  </Tabs.TabPane>
  <Tabs.TabPane name="tab2" title="标签2">
    内容2
  </Tabs.TabPane>
</Tabs>
```

### Button 组件

```jsx
import { Button } from 'react-vant'

<Button type="primary">主要按钮</Button>
<Button type="success">成功按钮</Button>
<Button type="warning">警告按钮</Button>
<Button type="danger">危险按钮</Button>
```

### Cell 组件

```jsx
import { Cell } from 'react-vant'

<Cell.Group>
  <Cell 
    title="标题" 
    value="内容"
    icon={<span className="icon icon-setting icon-md icon-primary"></span>}
    isLink 
  />
</Cell.Group>
```

## 实际应用示例

### 首页头部

```jsx
<header className={styles.header}>
  <div className={styles.location}>
    <span className="icon icon-location icon-lg icon-white"></span>
    <span className="text-lg font-medium">南昌</span>
  </div>
  <div className={styles.headerRight}>
    <span className="icon icon-search icon-lg icon-white"></span>
    <span className="icon icon-phone icon-lg icon-white"></span>
  </div>
</header>
```

### 商品卡片

```jsx
<div className={styles.productCard}>
  <img src={image} alt={title} />
  <div className={styles.content}>
    <h3 className="text-lg font-medium line-clamp-2">{title}</h3>
    <div className={styles.price}>
      <span className="price-text text-xl">
        <span className="price-symbol">¥</span>{price}
      </span>
      <span className="price-original text-sm">¥{originalPrice}</span>
    </div>
    <div className={styles.tags}>
      <span className="tag-text tag-hot">热门</span>
      <span className="tag-text">亲子</span>
    </div>
  </div>
</div>
```

## 响应式设计

系统支持不同屏幕尺寸的响应式字体：

```jsx
<p className="text-responsive-base">响应式文字</p>
```

- 小屏（≤375px）：较小字体
- 中屏（376-414px）：标准字体
- 大屏（≥415px）：较大字体

## 自定义扩展

### 添加新图标

在 `icons.css` 中添加：

```css
.icon-custom::before { 
  content: '🎯'; 
}
```

### 添加新颜色

在 `theme.css` 中添加：

```css
:root {
  --rv-custom-color: #your-color;
}

.text-custom { 
  color: var(--rv-custom-color); 
}
```

### 添加新文字样式

在 `typography.css` 中添加：

```css
.text-custom-style {
  font-size: 30px;
  font-weight: 600;
  color: #333;
  line-height: 1.4;
}
```

这套主题系统提供了完整的设计规范，确保整个应用的视觉一致性和用户体验。