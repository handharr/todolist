import "./style/App.css";
import "antd/dist/antd.css";
import { Home } from "./pages";
import { Provider } from "react-redux";
import store from "./config/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
