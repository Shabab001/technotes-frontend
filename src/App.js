import React,{Suspense,lazy} from 'react'
import GlobalStyle from "./utils/Global"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import { Spin } from "antd";
import "antd/dist/antd.css";
import Error from './pages/Error';


const Routes = lazy(()=>import("./Routes/Routes"))
const Auth =lazy(()=>import('./pages/Auth'))
const App = () => {
    return (
        <>
        <Router>
        <Suspense fallback={<StyledSuspense>
            <Spin
                  size="large"
                  style={{ color: "fff" }}
                  tip="Loading"
                  ></Spin>
        </StyledSuspense>
    }>          
  
               <Switch>
              <Route exact path="/" component={Auth} />
              <Route  path="/note" component={Routes} />
              <Route component={Error} />
            </Switch>
              
        </Suspense>


      </Router>
        <GlobalStyle/>
     
        </>
    )
}


 const StyledSuspense = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    justify-content: center;
    align-items:center;
    background-color: #fff;
 
 `;


export default App
