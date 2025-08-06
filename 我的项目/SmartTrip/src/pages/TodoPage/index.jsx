import TodoPageComponents from '@/components/TodoPage'
import useTitle from '@/hooks/useTitle'
const TodoPage = () => {
    useTitle("页面待开发")
    return (
        <TodoPageComponents title="页面待开发" />
    )
}
export default TodoPage
