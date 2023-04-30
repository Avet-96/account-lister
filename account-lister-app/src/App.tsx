import { Redirect, Route, Switch } from "react-router-dom";

import routers from './routes'

const App = () => (
  <Switch>
    {routers.map((
      {
        path,
        section,
        component: Component,
        ...rest
      },
      index
    ) => (
      <Route
        key={index}
        path={path}
        render={(props) => <Component {...props} {...rest} /> }
      />
    ))}
    <Redirect to='/accounts'/>
  </Switch>
)

export default App
