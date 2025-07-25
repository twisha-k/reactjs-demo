import Header from "./Header";

import wp from './tutu.jpg'
function Home()
{
    var a = 10
    var b = 20
    var mycolor = {color: 'white', backgroundColor: 'green'}
    return (
    <> 
        
        <h1>Home</h1>
        A value is (a) <br />
        B value is (b)
        <p style = {{color: 'red', background: 'black'}}>Hello I am P tag</p>
        <p style = {{color: 'red', background: 'black'}}>Hello I am P tag</p>
        <p style = {mycolor}>I am P again</p>
        <p style = {mycolor}>I am P again</p>
        <p style = {mycolor}>I am P again</p>
        <img src = {wp}/>
        
    </>)
}
export default Home