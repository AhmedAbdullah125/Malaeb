import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Pages/Layout/Layout';
import NotFound from './Pages/NotFound/NotFound';
import Signup from './Pages/signUp/Signup';
import Home from './Pages/Home/Home';
import SignIn from './Pages/signIn/SignIn';
import Login from './Pages/Login/Login';
import Forget from './Pages/forgetPassword/Forget';
import OTPCode from './Pages/forgetPassword/OTPCode';
import ResetPassword from './Pages/forgetPassword/ResetPassword';
import Store from './Pages/store/Store';
import Product from './Pages/Product/Product';
import Filter from './Pages/Filter/Filter';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/checkout/Checkout';


function App() {
  const routes = createBrowserRouter([{
    path: '', element: <Layout></Layout>, children: [
      { index: true, element: <Home></Home> },
      { path: 'signup', element: <Signup></Signup> },
      { path: 'signin', element: <SignIn></SignIn> },
      { path: 'login', element: <Login></Login> },
      { path: 'signup', element: <Signup></Signup> },
      { path: 'forget', element: <Forget></Forget> },
      { path: 'OTPCode', element: <OTPCode></OTPCode> },
      { path: 'reset', element: <ResetPassword></ResetPassword> },
      { path: 'store', element: <Store></Store> },
      { path: 'product', element: <Product></Product> },
      { path: 'filter', element: <Filter></Filter> },
      { path: 'cart', element: <Cart></Cart> },
      { path: 'checkout', element: <Checkout></Checkout> },
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
