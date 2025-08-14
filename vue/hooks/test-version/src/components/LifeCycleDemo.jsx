import { Component } from "react";
import Child from './child.jsx'
class LifeCycleDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }
    }

    doIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentDidUpdate() {
        console.log('组件更新了')
    }

    componentDidMount() {
        console.log('组件要卸载了')
    }

    // 状态 生命周期+

    // JSX
    render() {
        return (
            <>
                <h1>LifecycleDemo </h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.doIncrement.bind(this)}> Increment </button>
                <Child title={"hello"}/>
            </>
        )
    }
}

export default LifeCycleDemo;