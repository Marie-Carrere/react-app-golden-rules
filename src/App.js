import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import RuleListContainer from './components/RuleListContainer'
import RuleForm from './components/RuleForm'
import store from './store/app-store'
import Header from './components/Header'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route exact path="/" component={RuleListContainer} />
        <Route path="/new" component={RuleForm} />
      </Router>
    </Provider>
  );
}

export default App;
