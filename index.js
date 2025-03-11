import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/Components/Header.jsx';
import Body from './src/Components/Body.jsx';
import Footer from './src/Components/Footer.jsx';





   // let element=React.createElement('h1', {id:"mahika"}, "Hello, world!");
  // let elementJSX = <h1 id="mahika">Hello, worldXXX!</h1>;  // JSX Element

let root =ReactDOM.createRoot(document.getElementById('root'));

function App(){
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    

    </div>

  );
}






root.render(<App></App>);

