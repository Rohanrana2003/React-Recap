import "./App.css";
import Body from "./components/Body";
import appStore from "./utils/Redux/appstore";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appStore} className="App">
      <Body />
    </Provider>
  );
}

export default App;
