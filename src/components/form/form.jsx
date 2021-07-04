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
        let body = {
            userName:'Anwar',
            password:'1234',
        }
        let error;
        let result = await axios({
            method: (this.method)? this.method :'GET',
            url: e.target.api.value,
            data: body ? body:{},
        }).catch(e=>{
            error=e.message;
        });
        if(result){
        localStorage.setItem('history', JSON.stringify(result));
        this.setState({ 
            api: e.target.api.value,
            method: (this.method)? this.method:'GET',
            history:result
        });
        }
        
        else {
        //     console.log('else');
            this.setState({ 

             api: e.target.api.value,
                method: (this.method)? this.method:'GET',
             history:{
                config:{
                    url: e.target.api.value,
                    method: (this.method)? this.method:'GET',
                    },
                data:{count: -1,
                headers:null,
                results:(error)?error:'there something wrong in the URL',
            }}
            })
        }
        //         this.props.result([],0,{},this.state.history);
        // }
        this.props.result(this.state.history);

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