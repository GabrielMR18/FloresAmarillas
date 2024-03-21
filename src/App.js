import GlobalStyles from "./GlobalStyles";
import FlorAmarilla from "./Paginas/FlorAmarilla/FlorAmarilla";
import { Routes, Route, BrowserRouter, redirect, Navigate} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FlorAmarilla/>}/>
          <Route path="*" element={<Navigate to={"/"}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
