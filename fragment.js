import React , { Component } from 'react';
import Col from './col';
class Fragment extends Component{
    render(){
        return(
            <table>
               <tbody>
               <tr>
                    <Col/>
                </tr>
               </tbody>
            </table>
        )
    }
}
export default Fragment;