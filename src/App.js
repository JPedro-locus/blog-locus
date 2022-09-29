import Error404 from "./containers/errors/Error404";
import Home from "./containers/pages/Home";
import store from "./store";

import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* tela de erro !*/}
          <Route path="*" element={<Error404/>}/>
          {/* tela de inicial !*/}
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
