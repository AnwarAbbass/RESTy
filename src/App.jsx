import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import Result from "./components/result/result";
import React from "react";
import History  from "./components/history/history";
import'./App.scss'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      loading:false,
      data:{
        count : 0,
        headers:{},
        results :[],
      },
      history : (localStorage.getItem('history'))?JSON.parse( localStorage.getItem('history')):[],
    }
    this.historyStorage=[];
  }

  updateState =(result,count,headers,history)=>{

    
    // this.historyStorage.push(JSON.parse( localStorage.getItem('history')))
    console.log('1',history);
    this.historyStorage.push(history);
    console.log('2',this.historyStorage);
    
    localStorage.setItem('history',JSON.stringify(this.historyStorage));
    
    if(count>0){
      this.setState({
        data:{count: count,
        headers:headers,
        results:result.data.results,
        },
        history : this.historyStorage,
      })
    }
    else {
      this.setState({
        data:{count: count,
        headers:headers,
        results:result,
        },
        history : this.historyStorage,
      })
    }
  }

  updateHistory =(data)=>{

    this.setState({
      data:{count: data.data.count,
        headers:data.headers,
        results:data.data.results,
      },
    })
  }

  loading(bl){
    // <IF condition={bl}>
    //     {console.log(bl)}
    //     <img alt="load" src="https://assets.materialup.com/uploads/d897134f-48d1-4302-b3fd-ea045f3d4151/preview.gif"/>
    // </IF>;
    // else console.log(bl);
    this.setState({loading:bl});
}

  render(){
  return (
    <div className="App">
      <Header/>
      <div className="history-dev">
      <History h={this.state.history} renderHistory={this.updateHistory}/>
      </div>
      <Form result={this.updateState} loading={this.loading.bind(this)}/>
      <Result data ={this.state.data} loading={this.state.loading}/>
      <Footer/>
    </div>
  );
  }
}

export default App;
