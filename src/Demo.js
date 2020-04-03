import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Map from './Map'
class Demo extends Component {
    render(){
        return (
            <div style={{margin:'50px'}}>
                <Map
                    google={this.props.google}
                    center={{lat:22.8046, lng:86.2029}}
                    height='300px'
                    zoom={15}
                >
                </Map>
            </div>
        );
    }
}

export  default Demo
