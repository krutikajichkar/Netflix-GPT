
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Login from './components/Login';
import Browse from './components/Browse';



function App() {
  return (
    <div className="App">
    <Body/>
    </div>
  );
}

export const appRouter = createBrowserRouter([
{
  path:'/',
  element : <App/>,
  children : [
   {
    path:'/',
    element : <Login/>,
   },
   {
    path : "/browse",
    element : <Browse/>,
   }

  ]
}
])


