import {BrowserRouter,Routes,Route} from "react-router-dom"
import Form1 from "./pages/form1";


function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route element={<Form1></Form1>} path="/form1"></Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
