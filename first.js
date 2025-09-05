// creating the element by react

const element=React.createElement("h1",{},"hello tess")
const element1=React.createElement("h2",{id:"first",className:"one",style:{backgroundColor:"orange",fontsize:"30px"}},"let's do it")
// now add in the dom
const root=document.getElementById('root')

const r=ReactDOM.createRoot(root)
r.render(element)