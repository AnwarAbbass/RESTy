import './form.scss';
import React from 'react';
import axios from 'axios';

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            api:'',
            method:'',
            history :(localStorage.getItem('history'))?JSON.parse( localStorage.getItem('history')):[]
        };
        this.method='';
        this.api='';
    }

     handleForm = async(e) => {
        e.preventDefault();
        this.props.loading(true)
        let data = {
            userName:'Anwar',
            password:'1234',
        }
        let result = await axios({
            method: (this.method)? this.method :'GET',
            url: e.target.api.value,
            data: data ? data:{},
        }).catch(e=>{console.log(e.messeg);});
        console.log('ffffffffff',result);
        if(result){
        localStorage.setItem('history', JSON.stringify(result));
        this.setState({ 
            api: e.target.api.value,
            method: (this.method)? this.method:'GET',
            history:result
        });
        const data = result;
        const count =  result.data.count;
        const headers = result.headers;
        
        this.props.result(data,count,headers,this.state.history);}
        else {
            console.log('else');
            this.setState({ 

                api: e.target.api.value,
                method: (this.method)? this.method:'GET',
                history:{
                    config:{
                        url: e.target.api.value,
                         method: (this.method)? this.method:'GET',
                    },
                    data:{count: 0,
                    headers:{},
                    results:[],
                  }}
            })
                this.props.result([],0,{},this.state.history);
        }
        this.props.loading(false)
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