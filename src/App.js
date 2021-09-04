import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import HomePage from './Pages/HomePage';
import Sidebar from './Components/Sidebar';
import {Route,Switch as Switching} from 'react-router-dom'
import AboutPage from './Pages/AboutPage';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';
import PortfolioPage from './Pages/PortfolioPage';
import ResumePage from './Pages/ResumePage';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Switch from '@material-ui/core/Switch'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';

function App() {
  const [theme, setTheme] = useState('dark-theme')
  const [checked, setChecked] = useState(false)
  const [navToggle,setNavToggle]=useState(false)

  useEffect(() => {
    document.body.className=theme;
  }, [theme])

  
  const themeToggle=()=>{
    if(theme==='light-theme')
    {
      setTheme('dark-theme');
      setChecked(false);
    }
    else{
      setTheme('light-theme');
      setChecked(true);
    }
  }
  return (
    <div className="App">
      <Sidebar  navToggle={navToggle}/>
      <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon/>
          </div>
          <div className="right-content">
              <Switch
                value=""
                checked={checked}
                // onChange={}
                inputProps={{ 'aria-label': '' }}
                onClick={themeToggle}
                
              />
          </div>
        </div>
        <div className="ham-burger-menu">
          <IconButton className="butt">
            <MenuIcon onClick={() => setNavToggle(!navToggle)}/>
          </IconButton>
        </div>
        
      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
          {/* <div className="ham-burger-menu">
          <IconButton className="butt">
            <MenuIcon onClick={() => setNavToggle(!navToggle)}/>
          </IconButton>
        </div> */}
        </div>
        

        <Switching>
          <Route exact path="/Portfolio"> <HomePage/> </Route> 
          <Route exact path="/about"> <AboutPage/> </Route> 
          <Route exact path="/resume"> <ResumePage/> </Route> 
          <Route exact path="/portfolios"> <PortfolioPage/> </Route> 
          {/* <Route exact path="/blogs"> <BlogPage/> </Route>  */}
          <Route exact path="/contact"> <ContactPage/> </Route> 
        </Switching>


      </MainContentStyled>
    </div>
  )
}
const MainContentStyled = styled.main`
    position: relative;
    margin-left:16.3rem ;
    min-height: 100vh;
    /* background-color: red; */
    @media screen and (max-width:1200px){
      margin-left:0;
    

    }

    

    .lines{
      /* .ham-burger-menu{
        z-index: 15;
      } */
      z-index: -1;
      position: absolute;
      min-height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      /* flex-direction: column; */
      .line-1, .line-2, .line-3, .line-4{
        width: 1px;
        min-height: 100vh;
        background-color: var(--border-color);
      }
    }
`;



export default App;
