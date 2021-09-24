import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import PortfliosPage from './Pages/PortfoliosPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import { useState } from 'react';
// import React from 'react';
// import Sidebar from 'react-sidebar';

// const mql = window.matchMedia(`(min-width: 800px)`);

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sidebarDocked: mql.matches,
//       sidebarOpen: false,
//     };

//     this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
//     this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
//   }

//   componentWillMount() {
//     mql.addListener(this.mediaQueryChanged);
//   }

//   componentWillUnmount() {
//     this.state.mql.removeListener(this.mediaQueryChanged);
//   }

//   onSetSidebarOpen(open) {
//     this.setState({ sidebarOpen: open });
//   }

//   mediaQueryChanged() {
//     this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
//   }

//   render() {
//     return (
//       <div className="App">
//         <Sidebar
//           sidebar={<NavBar />}
//           open={this.state.sidebarOpen}
//           docked={this.state.sidebarDocked}
//           onSetOpen={this.onSetSidebarOpen}
//         ></Sidebar>
//       </div>
//     );
//   }
// }
function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/portfolios" exact>
              <PortfliosPage />
            </Route>
            <Route path="/blogs" exact>
              <BlogsPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
