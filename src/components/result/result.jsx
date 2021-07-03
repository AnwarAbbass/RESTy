import './result.scss';
import React from 'react';
import ReactJson from 'react-json-view';
import {IF,ELSE,If} from '../if/if';

class Result extends React.Component{

   render(){
       return(
           <React.Fragment>
               {console.log('dddddddd',this.props.loading)}
               <IF condition={this.props.loading}>
                   <div className="load">
                       
                   </div>
               </IF>
               <ELSE condition={this.props.loading}>
                   {console.log(this.props.data)}
                   <If condition={this.props.data.count }>
                        <section className="result">
                        <ReactJson src={this.props.data}/>
                        </section>
                   </If>
               </ELSE>
            </React.Fragment>
        );
   }
}

export default Result;