import './App.css';

function App() {


  // Here we are accessing the RenderApp function which is being served from child-app through CDN passing the id of the div where
  // I need to deploy the child-app in my parent-app

  window.onload = ()=>{
    window.childComponent("child");
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>Calling the Child Component served on the CDN</p>
      <div id={"child"}>

      </div>
    </div>
  );
}

export default App;
