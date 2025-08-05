import { useMemo } from 'react'

/**
 * 瀑布流布局自定义 Hook
 * 这个 Hook 将文章数组分成两列，用于瀑布流布局
 * @param {Array} data - 需要分组的数据数组（比如 articles 文章列表）
 * @returns {Object} - 返回分组后的数据 { leftColumn, rightColumn }
 */
export const useWaterfallLayout = (data) => {
    // 使用 useMemo 优化性能，只有当 data 变化时才重新计算分组
    const { leftColumn, rightColumn } = useMemo(() => {
        // 左列：取数组中索引为偶数的元素（0, 2, 4, 6...）
        const left = data.filter((_, index) => index % 2 === 0)
        // 右列：取数组中索引为奇数的元素（1, 3, 5, 7...）
        const right = data.filter((_, index) => index % 2 !== 0)
        
        return {
            leftColumn: left,   // 左列数据
            rightColumn: right  // 右列数据
        }
    }, [data]) // 依赖数组：只有当 data 变化时才重新计算
    
    // 返回分组后的数据，供组件使用
    return { leftColumn, rightColumn }
}