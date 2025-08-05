import { useEffect, useRef } from 'react'

/**
 * 无限滚动自定义 Hook
 * 这个 Hook 封装了无限滚动的所有逻辑，让组件可以复用
 * @param {Function} onLoadMore - 加载更多数据的回调函数（比如 fetchArticles）
 * @param {boolean} loading - 是否正在加载中，防止重复请求
 * @returns {Object} - 返回 loader ref，需要绑定到触发加载的元素上
 */
export const useInfiniteScroll = (onLoadMore, loading) => {
    // 创建一个 ref 来引用触发加载的 DOM 元素（通常是页面底部的加载器）
    const loader = useRef(null)
    useEffect(() => {
        // 创建交叉观察者（IntersectionObserver）
        // 当 loader 元素进入视口时，会触发回调函数
        const observer = new IntersectionObserver(([entry]) => {
            // entry.isIntersecting 表示元素是否进入了视口
            // !loading 确保不在加载状态时才触发新的加载
            if (entry.isIntersecting && !loading) {
                onLoadMore() // 调用传入的加载更多函数
            }
        })
        
        // 如果 loader 元素存在，开始观察它
        if (loader.current) {
            observer.observe(loader.current)
        }
        
        // 清理函数：组件卸载或依赖变化时，停止观察，防止内存泄漏
        return () => observer.disconnect()
    }, [loading, onLoadMore]) // 当 loading 或 onLoadMore 变化时重新执行
    
    // 返回 loader ref，组件需要将它绑定到触发元素上
    return { loader }
}