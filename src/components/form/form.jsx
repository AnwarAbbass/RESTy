import './form.scss';
import React from 'react';
import axios from 'axios';

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            api:'',
            method:''
        };
        this.method='';
        this.api='';
    }

     handleForm = async(e) => {
        e.preventDefault();
        this.setState({ 
            api: e.target.api.value,
            method: (this.method)? this.method:'GET',
        });
        let result = await axios({
            method: (this.method)? this.method:'GET',
            url: e.target.api.value,
        });
        const data = result.data.results;
        const count =  result.data.count;
        const headers = result.headers;
        this.props.result(data,count,headers);
    }

    methodHandler = (e) => {
        e.preventDefault();
        this.method=e.target.value;
    }

    render(){
        return(
            <div>
            <form onSubmit={this.handleForm}>
                <label>URL</label>
                <input type="text" name="api"/>
                <button type="submit" className="go">GO</button>
                <br></br>
                <button id="btn" className="get" value={`GET`} onClick={this.methodHandler}>GET</button>
                <button id="btn" value={`POST`} onClick={this.methodHandler}>POST</button>
                <button id="btn" value={`PUT`} onClick={this.methodHandler}>PUT</button>
                <button id="btn" value={`DELETE`} onClick={this.methodHandler}>DELETE</button>
            </form>
            <div className="result1">
                {this.state.method} &nbsp;

                {this.state.api}
            </div>
            </div>
        )
    }
}

export default Form;