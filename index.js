//1 render
//ReactDOM.render(
//    <h1>Hello World !</h1>, document.getElementById('root')
//);

// 2 JSX  converts HTML tags into react elements.
 //const myelement=<h1>Hello World !</h1>;
 //ReactDOM.render(
   //  myelement, document.getElementById('root')
 //);

// 3  Expressions in JSX
 //const myelement = <h1>React is {5 + 5} times better with JSX</h1>;
   //ReactDOM.render(myelement, document.getElementById('root'));

//4  Inserting a Large Block of HTML
// const myelement = (
//     <ul>
//       <li>Apples</li>
//       <li>Bananas</li>
//       <li>Cherries</li>
//     </ul>
//   );
//   ReactDOM.render(myelement, document.getElementById('root'));

// 5 One Top Level Element
 //const myelement = (
   //  <div>
     //  <h1>I am a Header.</h1>
     //  <h1>I am a Header too.</h1>
     //</div>
   //);
  
//ReactDOM.render(myelement, document.getElementById('root'));

//6  Elements Must be Closed
 const myelement = <input type="text" />;

  ReactDOM.render(myelement, document.getElementById('root'));


  
  
