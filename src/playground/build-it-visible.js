class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility () {
        this.setState((prevState) => {
            return{
                visibility: !prevState.visibility
            };
        });
        // console.log(this.state.visibility);
    }
    render() {
        return(
            <div>
                <h1  >Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility} > { (this.state.visibility === false ? 'Show details' : 'Hide Details')} </button>
                <p> { (this.state.visibility === false ? ' ' : 'Hey. These are some details you can now see!')} </p>
            </div>
        );
    }
} 

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));