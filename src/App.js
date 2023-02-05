import Header from "./header.js";
import SearchBar from "./searchbar.js";
import Router from "./router.js";

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{width: "100%"}}>
        <SearchBar />
        <Router />
      </div>
    </div>
  );
}

export default App;
