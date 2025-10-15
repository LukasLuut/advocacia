import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./src/pages/Home";
import App from "./src/App";

function RouterAppProvider() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default RouterAppProvider;