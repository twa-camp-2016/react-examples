const App = React.createClass({
    getInitialState: function () {
        return {
            name:'自增',
            result: 1
        }
    },
    add: function () {
        this.setState({result:this.state.result+1});
    },
    render: function () {
        return (
        <div> {this.state.name}
            <button onClick={this.add}>+</button>
            <div>
                <Show result={this.state.result}/>
            </div>
        </div>);
    }
})

const Show = React.createClass({
    render: function () {
        return <div> {this.props.result}</div>
    }
})

ReactDOM.render(<App />, document.getElementById('content'));