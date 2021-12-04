import Navigation from "./navigation";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";

import "react-toastify/dist/ReactToastify.css";
import { useToastContainer } from "react-toastify";

// Redux-thunk
// Redux-presist
// token

function App() {
  return (
    <div>
      <NavBar />
      {/* <useToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
        pauseOnHover
      /> */}
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
