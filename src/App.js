import "./App.css";
import Footers from "./component/footer/Footers";
import Header from "./component/head/Header";

import Screens from "./screen/Screens";

function App() {
  return (
    <div>
      <Header />
      <Screens />
      <Footers />
    </div>
  );
}

export default App;
