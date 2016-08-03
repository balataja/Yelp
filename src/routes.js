import React from 'react'
import { browserHistory, Router, Route, Redirect} from 'react-router'

import makeMainRoutes from './views/Main/routes'

const Home = React.createClass({
  render: function() {
    return (<div>Hello world</div>)
  }
})

export const makeRoutes = () => {
  const main = makeMainRoutes();

  return (
    <Router>
      {main}
    </Router>
  )
}

export default makeRoutes;
