import Navigation from "./navigation";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


console.log('Hello,')


function App() {
  return (
    <div>
      <ToastContainer
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
      />
      <NavBar />
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
