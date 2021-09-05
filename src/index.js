import React from 'react'
import ReactDom from 'react-dom'
// import App2 from './App2'
import App from './App'

// const data = {
//   age: 20,
//   address: "bagar",
// }

// const someArr = ['foo', 'bar']

ReactDom.render(
  // when sending props we have to include "" or ''
  // except when they are js objects we use {}
  // <App2 
  //   name="Alson" 
  //   data={data} 
  //   meta={ {desc:"Hello world"} } 
  //   arr={someArr}
  // />
  // spread operator ... => sends the object by destructuring
  // <App 
  //   name="Alson"  
  //   meta={ {desc:"Hello world"} } 
  //   arr={someArr}
  //   {...data}
  // />
  <App name="Alson" />
  , document.getElementById('root')
)

// Export default --> we can name it as we want when importing
// Export const --> we have to name the import same as export
// We can rename some imports (import Hello as hi from './Hello')
// if the file is from 3rd party or dependencies we dont have to
// specify path otherwise we have to