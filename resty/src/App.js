import React from 'react';
import Header from './components/header/header.js';
import Form from './components/form/form.js';
import Footer from './components/footer/footer.js';
import Result from './components/results/results.js';
// import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      result : [],
      count : 0,
      headers:{}
    }
  }

  handleForm = (result,count,headers)=>{
    this.setState({result,count,headers});
  }

  render(){
    return (
      <React.Fragment>
      <Header/>
      <Form handler={this.handleForm}/>
      <Result test ={this.state} />
      <Footer/>
      </React.Fragment>
    );
  }
}


export default App;
