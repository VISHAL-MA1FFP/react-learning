const element1=React.createElement("h1",{id:"first",className:"one",style:{backgroundColor:"black",color:"white"}},"hello world")
const element= React.createElement("h1",{id:"first",className:"one",style:{backgroundColor:"black",color:"white"}},"hello tess")
const div=React.createElement('div',{},[element1,element])

const root=document.getElementById("root")
const r=ReactDOM.createRoot(root)
r.render(div)