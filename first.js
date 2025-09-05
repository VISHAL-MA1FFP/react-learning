// creating the element by react

const element=React.createElement("h1",{id:"first",className:"one",style:{backgroundColor:"orange",fontSize:"30px"}},"hello tess")
const element1=React.createElement("h2",{id:"second",className:"one",style:{backgroundColor:"orange",fontSize:"30px"}},"let's do it")

// now we will put these two in a div and then push it
const div=React.createElement('div',{},[element,element1])
// now add in the dom

const root=document.getElementById('root')

const r=ReactDOM.createRoot(root)
//r.render(element)
// r.render(element1)

r.render(div)