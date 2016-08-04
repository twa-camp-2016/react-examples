const App = React.createClass({
    getInitialState: function () {
        return {
            result: "hello"
        }
    },
    render: function () {
        return <div> {this.state.result}
            <div>
                <Show outPut="world"/>
            </div>
        </div>
    }
})

const Show = React.createClass({
    render: function () {
        return <div> {this.props.outPut}</div>
    }
})

ReactDOM.render(<App />, document.getElementById('content'));