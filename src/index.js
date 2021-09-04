import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

ReactDom.render(
  <App />
  , document.getElementById('root')
)

// Export default --> we can name it as we want when importing
// Export const --> we have to name the import same as export
// We can rename some imports (import Hello as hi from './Hello')
// if the file is from 3rd party or dependencies we dont have to
// specify path otherwise we have to