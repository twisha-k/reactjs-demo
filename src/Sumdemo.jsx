import React from 'react'
class Sumdemo extends React.Component{
    constructor(props){
        super(props)
        this.state = {errmsg: {} };
    }
    // mydata(e){
    //     this.setState({no1:e.target.value})
    // }
    doValidation(){
            const {no1 , no2} = this.state
            var temperr = {}
            var isValid = true

            if (!no1){
                temperr.tt1 = "Enter No1"
                isValid = false
            }
            if(isNaN(no1)){
                temperr.txt1 = "Enter Only Digits in No1"
                isValid = false
            }
            if (!no2){
                temperr.txt2 = "Enter No2"
                isValid = false
            }
            this .setState({ errmsg: temperr})
            return isValid
        }

    doSum(){
        var ans = this.doValidation()
        if (ans == true){
            var c = parseInt(this.state.no1) + parseInt(this.state.no2)
            this.setState({msg: c })
        }
        var no1 = parseInt(this.state.txt1)
        var no2 = parseInt(this.state.txt2)
        var c = no1 + no2
        this.setState({ans:"Sum is "+c})
    }
    render(){
        return(<>
        <h1>Sum Demo</h1>
        No1 : <input type='text' 
        onChange={(e)=>this.setState({txt1:e.target.value})}/>
        No2 : <input type='text' 
        onChange={(e)=>this.setState({txt2:e.target.value})}/>

        <input type='button' value="+" onClick={this.doSum.bind(this)}/>
        {this.state.ans}
        </>)
    }
}
export default Sumdemo
