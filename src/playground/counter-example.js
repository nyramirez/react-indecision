class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('count');
            const count = parseInt(json, 10);

            if (!isNaN(count)) {
                this.setState(() => ({ count }))
            }

        } catch (e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
        }
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset() {
        // this is an example of the code below, but with a function
        this.setState(() => {
            return {
                count: 0
            };
        });
        // this is only an example of the same code up from here but with an object
        // this.setState({
        //     count:0
        // });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.handleAddOne} >+1</button>
                <button onClick={this.handleMinusOne} >-1</button>
                <button onClick={this.handleReset} >reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));