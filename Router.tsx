import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./src/App";

function RouterAppProvider() {
  return (
    <BrowserRouter basename="/advocacia">
    <Routes>
      <Route path="/" element={<App />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default RouterAppProvider;