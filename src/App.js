

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from './comp/home'
// import SignIn from './comp/signIn';
import SignUp from "./comp/SignUp";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            {/*<Route exact path="/signin" element={<SignIn />}/>*/}
            <Route  exact path="/signup" element={<SignUp />}/>
            {/*<Route  exact path="/" element={<Home />}/>*/}
          {/*<Route path="contact" element={<Contact />} />*/}
          {/*<Route path="*" element={<NoPage />} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
