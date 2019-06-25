import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Login from './container/login/login'
import Main from './container/main/main'
import Register from './container/register/register'

class App extends React.Component {
    render() {
        return (
                <div style={{width: '100%', height: '100%'}}>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/" component={Main}/>
                    </Switch>
                </div>
        )
    }
}

export default App
