import Routes from './components/pages'
import RouteContextProvider from './route_context';

import "./App.css";

function App() {
  return (
    <>
      <RouteContextProvider>
        <Routes />
      </RouteContextProvider>
    </>
  )
}

export default App
