// using react directly
import React from "react";
import ReactDOM from "react-dom/client"

// const element1=React.createElement("h1",{id:"first",className:"one",style:{backgroundColor:"black",color:"white"}},"hello world")
// const element= React.createElement("h1",{id:"first",className:"one",style:{backgroundColor:"black",color:"white"}},"hello tess")
// const element2= React.createElement("h1",{id:"first",className:"one",style:{backgroundColor:"black",color:"white"}},"hello tess")
// const div1=React.createElement('div',{},[element1,element,element2])

// const root=document.getElementById("root")
// const r=ReactDOM.createRoot(root)
// r.render(div1)



// we will be learning JSX meathod
const names="mohan";

const obj={
    backgroundColor:"black",
    color:"white",
    
}

const obj1={
    name:'mohit',
    age:23,
}

// react element

const  p= (
    <div>
    <h1 id="one">hello world {obj1.age}</h1>
       <h1 style={{backgroundColor:"orange",color:"brown"}} id="call">hello tess</h1>
       <p style={obj}>how are you</p>
       </div>

)

// function component

function quote(){
    return <h1>good work</h1>
}
function letter(){
    return <p>welcome to mine world</p>
}

const word=quote()
const para=letter()

const joint=(<div>
    {/* {word},{para} */} 
    {/* we can use this or */}
    {quote()}{letter()}
</div>)










const root=document.getElementById("root")
const r=ReactDOM.createRoot(root)
//r.render(p)
r.render(joint)

