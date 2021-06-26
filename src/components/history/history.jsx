import React from "react";
class History extends React.Component{

    handleHistory=(e)=>{
        console.log('hhhhhhhhhhhhhhhhhhhhhhhhhh',this.props.h[e.target.value]);
        this.props.renderHistory(this.props.h[e.target.value]);
    }
    render(){
        return(
            <React.Fragment>
                <h2>History</h2>
                <ul>
                {this.props.h.map((item, idx) => {
                    if(item.config){
                            return(
                                    <li key={idx} value={idx} onClick={this.handleHistory}>
                                        {item.config.method} : {item.config.url}
                                    </li>
                            )
                        }
                })} 
                </ul>
            </React.Fragment>
        );
    };
};

export default History;