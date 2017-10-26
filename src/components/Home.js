import React from 'react';

export class Home extends React.Component{
    render(){
        return(
            <div>
                <p> Home Component. </p>
                <p> Your name is <b> {this.props.name} </b> and your age <i> {this.props.age} </i></p>
            </div>
        );
    }
}
