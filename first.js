const element1=React.createElement("h1",{id:"first",className:"one",style:{backgroundColor:"black",color:"white"}},"hello world")

const root=document.getElementById("root")
const r=ReactDOM.createRoot(root)
r.render(element1)