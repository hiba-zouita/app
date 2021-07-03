import React , { Component } from 'react';
import Fragment from './fragment';
import Includeimg from './includeimg';
const Home=()=>{
    return(
        <div>
            <h2>home</h2>
            <p>this home section</p>
            <Fragment/>
            <Includeimg/>
        </div>
    )
}
export default Home;