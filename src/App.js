import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Pages/Layout/Layout';
import NotFound from './Pages/NotFound/NotFound';
import Signup from './Pages/signUp/Signup';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Forget from './Pages/forgetPassword/Forget';
import OTPCode from './Pages/forgetPassword/OTPCode';
import ResetPassword from './Pages/forgetPassword/ResetPassword';
import Store from './Pages/store/Store';
import Product from './Pages/Product/Product';
import Filter from './Pages/Filter/Filter';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/checkout/Checkout';
import Account from './Pages/account/Account';
import Address from './Pages/account/Address';
import General from './Pages/account/General';
import Password from './Pages/account/Password';
import AddAddress from './Pages/account/AddAddress';
import Orders from './Pages/Orders/Orders';
import Policies from './Pages/policies/Policies';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Success from './Pages/Success/Success';


function App() {
  const routes = createBrowserRouter([{
    path: '', element: <Layout></Layout>, children: [
      { index: true, element: <Home></Home> },
      { path: 'signup', element: <Signup></Signup> },
      { path: 'login', element: <Login></Login> },
      { path: 'signup', element: <Signup></Signup> },
      { path: 'forget', element: <Forget></Forget> },
      { path: 'OTPCode', element: <OTPCode></OTPCode> },
      { path: 'reset', element: <ResetPassword></ResetPassword> },
      { path: 'store', element: <Store></Store> },
      { path: 'product', element: <Product></Product> },
      { path: 'filter', element: <Filter></Filter> },
      { path: 'cart', element: <Cart></Cart> },
      { path: 'orders/*', element: <Orders></Orders> },
      { path: 'checkout', element: <Checkout></Checkout> },
      { path: 'policies', element: <Policies></Policies> },
      { path: 'details', element: <ProductDetails></ProductDetails> },
      { path: 'success', element: <Success></Success> },
      {
        path: 'account', element: <Account></Account>, children: [
          { path: 'general', element: <General></General> },
          { path: 'address', element: <Address></Address> },
          { path: 'password', element: <Password></Password> },
          { path: 'addAddress', element: <AddAddress></AddAddress> },
        ]
      },
      { path: '*', element: <NotFound></NotFound> },
    ]
  }
  ])

  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
