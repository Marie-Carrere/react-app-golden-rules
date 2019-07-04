import React from 'react';
import RuleList from './components/RuleListContainer'
import { Provider } from 'react-redux'
import store from './store/app-store'

function App() {
  return (
    <Provider store={store}>
      <RuleList />
    </Provider>
  );
}

export default App;
