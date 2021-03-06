import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0,
    }

    makeIncrementer = amount => () => {
        this.setState(prevState =>({
                count: prevState.count + amount,
            }))
    }

    // makeIncrementer = amount => () => {
    //     this.setState(prevState =>{
    //         return {
    //             count: prevState.count + amount,
    //         }
    //     })
    // }

    increment = this.makeIncrementer(1)
    decrement = this.makeIncrementer(-1)


// increment = () =>
//     this.setState(prevState =>{
//         return{
//             count: prevState.count + 1,
//         }
//     })

    // decrement = () =>
    // this.setState(prevState =>{
    //     return{
    //         count: prevState.count -1,
    //     }
    // })


render(){
    return(
        <div>
            <p>Current count: {this.state.count}</p>
            <button className='increment' onClick={this.increment}>+++</button>
            <button className='decrement' onClick={this.decrement}>---</button>
        </div>
    )
}
}


export default Counter;