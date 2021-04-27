import logo from './logo.svg';
import './App.css';
import Menu from './Menu.js';
// import Registration from './Registration.js';
import Footer from './Footer.js';
// import Marquee from './Marquee.js';
// import Findfib from './Findfib';
// import Findprime from './Findprime.js';
import Calculator from './Calculator.js'
import Reg from './Reg.js';
import Primesum from './Primesum.js';
import Reverse from './Reverse.js';
import Pallindrome from './Pallindrome.js';
import Randomnum from './Randomnum.js';
import Hobbies from './Hobbies.js';
import Clearhobbies from './Clearhobbies.js';
import Immutableunderstand from './Immutableunderstand.js';
import Todoassign from './Todoassign.js';
import Immutable from './Immutable.js';
import Todoapp from './Todoapp.js';
import Todoobj from './Todoobj.js';
import Ecommerce from './Ecommerce.js';
import Addnum from './Addnum.js';
import Practice from './Practice.js';
import TodoInLocalstorage from './TodoInLocalstorage.js';
import RandomPrime from './RandomPrime.js';
import LibraryManagement from './LibraryManagement.js';
import ProductDetails from './ProductDetails.js';
import ProductNamesInfo from './ProductNamesInfo.js';
import ProductsFullData from './ProductsFullData.js';
import UserReg from './UserReg.js';
import UserProfile from './UserProfile.js';
import UserInfo from './UserInfo.js';
import Studentdetails from './Studentdetails.js';
import HowPropWorks from './HowPropWorks.js';
import HideImage from './HideImage.js';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import CarRental from './CarRental';
import About from './About';
import Employee from './Employee';
import Contact from './Contact';
import GoogleMap from './GoogleMap';
import CommentComponent from './CommentComponent';
import TodoContainer from './TodoContainer';
import ForumComponent from './ForumComponent';
import Blog from './mainblog';
import ClassComponentTodoContainer from './ClassComponentTodoContainer';
import BlogMainComponent from './BlogMainComponent';
import ProductMainComponent from "./April/ProductMainComponent"
import HobbyComponent from './April/HobbyComponent';
import DidMountAndWillMount from './April/DidMountAndWillMount';
import SetState from './April/SetState';
import MainBlogComponent from './BlogRoute/MainBlogComponent';
import CreateCarousel from './April21/CreateCarousel';
import CommentBox from './April21/CommentBox';
import UserRegistrationComponent from './April21/UserRegistrationComponent';
import WebsiteUsingRouting from './April21/WebsiteUsingRouting';
import DisableButton from './April21/DisableButton';
import Photography from './April22/PhotoGallery';
import store from './stores/store';
import ReduxCounter from './ReduxCounter.js';
import BarChart_show from './BarChart.js'
import LineChart_show from './LineChart.js';
import TodoApp from './April27/TodoApp.js'
import ForumApp from './April27/ForumApp.js'
store.subscribe(function(){
  const currentState = store.getState();
  console.log('the current count value is '+currentState.count);

})
store.dispatch({type: 'counter/increase'});
store.dispatch({type: 'counter/increase'});
store.dispatch({type: 'counter/increase'});
store.dispatch({type: 'counter/decrease'});
store.dispatch({type: 'counter/square'});
store.dispatch({type: 'counter/squareroot'});












function App() 
{
  return (
            <div className="App">
            <ForumApp/>
            
          
           
            
{/*
  <TodoApp/>
  <ReduxCounter/>
         <BarChart_show/>
           <LineChart_show/>
   <Photography/>
     <MainBlogComponent/>
            <CreateCarousel/>
            <CommentBox/>
            <UserRegistrationComponent/>
            <WebsiteUsingRouting/>
            <DisableButton/>
   <ProductMainComponent/>  
            <HobbyComponent/>     
            <BlogMainComponent/>
            <DidMountAndWillMount/>
            <SetState/>






            
            <ClassComponentTodoContainer/>
            <Blog/> 
            <CarRental/>
             <BrowserRouter>
             <Link to="/about">About</Link><br/>
             <Link to="/contact">Contact</Link><br/>
             <Link to="/employee">Employee</Link><br/>

             <Route path="/about">
             <About/>
             </Route>

             <Route path="/contact">
             <Contact/>
             <Link to="/map">See in Map</Link><br/>
             </Route>

             <Route path="/map">
             <GoogleMap/>
             </Route>

             <Route path="/employee">
             <Employee/>
             </Route>

             </BrowserRouter> 

             <TodoContainer/>
             <CommentComponent/>
             <ForumComponent/>

          */} 





















              <Footer></Footer>
              <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                   Learn React
              </a>
              </header>
            </div>
          );
}

export default App;
