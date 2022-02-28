import menuIcon from './images/menu-top-xs.png';
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import logo from './images/ironhack-logo-xs.png'

import './App.css';


function Page(){
  return(
    <div className="App">
    <div className="section">
        <div className="top">
            <img src={logo} className="app-logo" alt={"logo"}/>
            <img src={menuIcon} className="menu-icon" alt={"menu icon"}/>
        </div>
        <div className="texts">
            <h1>Say hello to ReactJS </h1>
            <p>You will learn how to use <br/> the most popular frontend library, <br/> and become a super Ninja developer</p>
        <a href="https://www.reactjs.org">Awesome!</a>
        </div>
      </div>
      <div className="icon-list">
      <div className="icon-box">
          <img src={icon1} alt={"logo"}/>
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs</p>
      </div>
      <div className="icon-box">
          <img src={icon2} alt={"logo"}/>
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="icon-box">
          <img src={icon3} alt={"logo"}/>
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
      </div>         
      <div className="icon-box">
          <img src={icon4} alt={"logo"}/>
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
      </div>         </div>

    </div>
  )

}


function App() {
  return (
   <Page/>
  );
}
export default App;