
import './App.css'
import Login from './components/Form/Login'
import { useDispatch, useSelector } from 'react-redux'
import {logout} from './redux/authslice'

function App() {
const dispatch = useDispatch();
const userToken =useSelector((state) => state.auth.token);
const handleLogout = () => {
  dispatch(logout());
};
  return (
    <div>
      {userToken ? (
        <div>
          <h2>Welcome, User!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Login />  
      )}
    </div>
  );
};


export default App
