import React from 'react';
import './form.scss';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            api: '',
            method: '',
        };
    }

    handleInput = (e) => {
        e.preventDefault();
        this.setState({ api: e.target.value });
    }

    handleClick = (e) => {
        e.preventDefault();
        let api = e.target.api.value;
        let method = e.target.method.value;
        const data = {
            api: api,
            method: method
        }
        this.setState(data);
    }

    methodHandler = (e) => {
        e.preventDefault();
        this.setState({ method: e.target.value });
    }

    render() {
        return (
            <div>
                <form>
                    <input onChange={this.handleInput} />

                    <button onClick={this.handleClick} >GO</button>
                    <br></br>
                    <button value={`GET`} onClick={this.methodHandler}>GET</button>
                    <button value={`POST`} onClick={this.methodHandler}>POST</button>
                    <button value={`PUT`} onClick={this.methodHandler}>PUT</button>
                    <button value={`DELETE`} onClick={this.methodHandler}>DELETE</button>
                </form>

                <br></br>
                <div>
                    <p>
                        {this.state.method} &nbsp;

                        {this.state.api}
                    </p>
                </div>
            </div>
        );
    }
}

export default Form;