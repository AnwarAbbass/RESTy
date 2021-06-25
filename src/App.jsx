import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import Result from "./components/result/result";
import React from "react";
import'./App.scss'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      count : 0,
      headers:{},
      results :[],
    }
  }

  updateState =(result,count,headers)=>{
    this.setState({
      results:result,
      count: count,
      headers:headers
    })
  }

  render(){
  return (
    <div className="App">
      <Header/>
      <Form result={this.updateState}/>
      <Result data ={this.state}/>
      <Footer/>
    </div>
  );
  }
}

export default App;
