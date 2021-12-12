import Navigation from "./navigation";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// Add Item To Cart
// Check Authenticated User
// Create Order
// Favorite Page

// -----

// Edit Navbar  
// User Pages 
// Admin Pages



// Create ORDER --> {----------Information--------} backend Required 

// address
// ;;;;;;

// information --> {redux : userInfo {frontend _presist}}  -- {redux : user {backend}}
// 2- drop down in Navbar isAdmin = {---Users ---Orders-- products-- } --->isUser   {---User ---Orders-- } 
// 3- user Page  tabs => userProfile :  userInfo {frontend _presist}}  -- {redux : user {backend}}, tab EditProfile ---> {From: email, name}--- userInfo {frontend}}
// :PUT -->users/profile
// OrdersPage [] GET -->orders/myOrders


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
