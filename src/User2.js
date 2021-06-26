import React from 'react'
export default  class User2 extends React.Component
{   constructor()
    {
        super();
        this.state={
            data:10
        }
    }
    update()
    {   
        this.setState({data:this.state.data-1})
    }
    render()
    {
        return(
            <div>
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.update()}>update me</button>
            </div>
            
        )
    }
}