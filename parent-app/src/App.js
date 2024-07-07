import './App.css';

function App() {


  // go to child-app build folder in terminal and run following commands
  // npm install -g http-server
  // http-server --cors -p 5173


  // Here we are accessing the RenderApp function which is being served from child-app through CDN passing the id of the div where
  // I need to deploy the child-app in my parent-app

  window.onload = ()=>{
    window.childComponent("child");
    const iframe = document.getElementById('child-app');
     // Access the child window
     const childWindow = iframe.contentWindow;
     // Call the RenderApp function exposed by the child app
     if (childWindow.childComponent) {
         childWindow.childComponent('root');
     }
  }

    // iframe.onload = function() {
    //     // Access the child window
    //     const childWindow = iframe.contentWindow;
    //     // Call the RenderApp function exposed by the child app
    //     if (childWindow.childComponent) {
    //         childWindow.childComponent('root');
    //     }
    // };

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>Calling the Child Component served on the CDN</p>
      <div id={"child"}>

      </div>
      <p>Integrating parent-app via i-frames</p>
      <iframe id='child-app' title="child-app" src="http://127.0.0.1:5173"></iframe>
    </div>
  );
}

export default App;
