import React , { Component } from 'react';
import './item.css';
class Items extends Component{

    render(){
        const items = this.props.items;
        const theItems = items.map( item => {
            return(
                <div key ={item.id} className="item">
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <p>{item.age}</p>
                </div>
            )
        }

        )
        return(
                <div>
                {theItems} 
                </div>
        )
    }
}


export default Items;