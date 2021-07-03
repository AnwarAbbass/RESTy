import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import Result from "./components/result/result";
import React from "react";
import History  from "./components/history/history";
import'./App.scss';
import { BrowserRouter as Router} from 'react-router-dom';
// import Main from "./components/main/main";
import { Route, Switch } from "react-router-dom";
import Help from './components/Help/Help';
import Historypage from "./components/history";

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

  updateState =(history)=>{

    
    // this.historyStorage.push(JSON.parse( localStorage.getItem('history')))
    this.historyStorage.push(history);
    
    localStorage.setItem('history',JSON.stringify(this.historyStorage));
    
      this.setState({
        data:{count: history.data.count,
        headers:history.headers,
        results:history.data.results,
        },
        history : this.historyStorage,
      })
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

refillTheForm = (method, url) => {
  this.setState({ formMethod: method, formURL: url });
};
  render(){
  return (
    <div className="App">
      {/* <Router>
      <Header />
      <Main />
      <Help/>
      </Router>
      <div className="history-dev">
      <History h={this.state.history} renderHistory={this.updateHistory}/>
      </div>
      <Form result={this.updateState} loading={this.loading.bind(this)}/>
      <Result data ={this.state.data} loading={this.state.loading}/>
      

      <Footer/> */}
    <Router>
      <Switch>
            <Route exact path="/">
            <Header/>
            <div className="history-dev">
              <History h={this.state.history} renderHistory={this.updateHistory}/>
            </div>
            <Form result={this.updateState} loading={this.loading.bind(this)}/>
             <Result data ={this.state.data} loading={this.state.loading}/>
              
            </Route>
            
            <Route exact path="/history">
              <Header/>
             <Historypage  history={this.state.history} renderHistory={this.updateHistory} />
            </Route>

            <Route exact path="/help">
            <Header/>
              <Help />
            </Route>
      </Switch>
    </Router>
    <Footer/>
    </div>
  );
  }
}

export default App;
