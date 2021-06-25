import './result.scss';
import React from 'react';
import ReactJson from 'react-json-view';

class Result extends React.Component{
   render(){
       return(
           <React.Fragment>
               <section className="result">
               <ReactJson src={this.props.data}/>
               </section>
            </React.Fragment>
        );
   }
}

export default Result;