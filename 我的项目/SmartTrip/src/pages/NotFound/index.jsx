import TodoPageComponents from '@/components/TodoPage'
import useTitle from '@/hooks/useTitle'
const NotFound = () => {
    useTitle("页面未找到")
    return (
        <TodoPageComponents title="页面未找到" />
    )
}

export default NotFound;