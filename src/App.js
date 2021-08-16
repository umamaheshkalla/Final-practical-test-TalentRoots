import {BrowserRouter, Route, Switch} from 'react-router-dom'

import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm'
import Overview from './components/Overview'
import AddPolicy from './components/AddPolicy'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={RegistrationForm} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/overview" component={Overview} />
      <Route exact path="/addPolicy" component={AddPolicy} />
    </Switch>
  </BrowserRouter>
)

export default App
