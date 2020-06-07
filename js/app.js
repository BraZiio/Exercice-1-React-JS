
class App extends React.Component {
    state = {
        name: "",
        comment: "",
    }

    handleName = event => {
        console.log(event.target.value);
        this.setState({
            name: event.target.value
        })
    }

    handleComment = event => {
        console.log(event.target.value);
        this.setState({
            comment: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
             <form onSubmit={this.handleSubmit} class="container">
                    <h3>Say Something</h3>
                    <input type="text" name="name" id="name" class="name"
                    placeholder="Your Name" 
                    value={this.state.name} 
                    onChange={this.handleName} />

                    <input type="text" name="comment" id="comment" class="comment" 
                    placeholder="Your Comment" 
                    value={this.state.comment}
                    onChange={this.handleComment} />

                 <input type="submit" value="Comment" class="submit"/>
             </form>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById("app"));