import thunkMiddleware from 'redux-thunk'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import combinedReducers from 'reducers/combinedReducers'
import App from 'components/App'
import Home from 'components/Home'
import ExamplePage from 'components/ExamplePage'



const store = createStore(
  combinedReducers,
  applyMiddleware(
    thunkMiddleware
  )
)

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/example" component={ExamplePage} />

          </Route>
        </Router>
    </Provider>
), document.getElementById('container'))
