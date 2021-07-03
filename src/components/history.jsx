import React from "react";

class history extends React.Component {

  render() {
    return(
        <React.Fragment>
        {this.props.history.map((item, idx) => {
            if(item.config){
                    return(
                            <li key={idx} value={idx} onClick={this.handleHistory}>
                                {item.config.method} : {item.config.url}
                                <br></br>
                                <button
              onClick={(e) => {
                  e.preventDefault();
                  this.props.renderHistory(item);
                }}
            >
              {" "}
              Request Again
            </button>
            <hr />
                            </li>
                    )
                }
        })}
        </React.Fragment>
    )
  }
}

export default history;