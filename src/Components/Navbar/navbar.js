import React, { useEffect, Suspense, lazy }  from 'react'
import Navbar from './nav';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

// import Footer from '../Footer/footer';

import Home from '../../Pages/Home/home';
import About from '../../Pages/About/about';
import Games from '../../Pages/Games/games';
import Staking from '../../Pages/Staking/staking';
// import Socials from '../../Pages/Socials/socials';
import PageNotFound from '../../Pages/404/404';

import Register from '../../Pages/Register/register';
import RegorImp from '../../Pages/Register/NlifeUser/regorimp';
import GenerateSeed from '../../Pages/Register/NlifeUser/generateseed';
import ImportSeed from '../../Pages/Register/NlifeUser/importseed';
import CreatePassword from '../../Pages/Register/Anonymous/createpassword';
import Login from '../../Pages/Register/Anonymous/login';

import Blackjack from '../../Pages/Games/CasinoGames/Blackjack';
import CarribeanStudPoker from '../../Pages/Games/CasinoGames/CarribeanStudPoker';
import Craps from '../../Pages/Games/CasinoGames/Craps';
import Roulette from '../../Pages/Games/CasinoGames/Roulette';
import Slots from '../../Pages/Games/CasinoGames/Slots';
import WebGLGame from '../../Pages/Games/WebGLGame';

import PrivacyPolicy from '../../Pages/TermsAndPolicy/pp';
import TermsOfServices from '../../Pages/TermsAndPolicy/tos';

import UserAccount from '../../Pages/User/Account/account';
import UserAchievement from '../../Pages/User/Achievements/achievement';

const Footer = lazy(() => import('../Footer/footer'));

function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
}


function Routes() {
    return (
        <>
            <Router>
            <ScrollToTop/>
                <Navbar />
                <div className="pages">
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/About' exact component={About} />
                        <Route path='/Games' exact component={Games} />
                        <Route path='/Staking' exact component={Staking} />
                        {/* <Route path='/socials' exact component={Socials} /> */}
                        <Route path='/Register' exact component={Register} />
                        <Route path='/RegisterOrImport' exact component={RegorImp} />
                        <Route path='/GenerateSeed' exact component={GenerateSeed} />
                        <Route path='/ImportSeed' exact component={ImportSeed} />
                        <Route path='/CreatePassword' exact component={CreatePassword} />
                        <Route path='/Login' exact component={Login} />
                        <Route path='/Blackjack' exact component={Blackjack} />
                        <Route path='/CarribeanStudPoker' exact component={CarribeanStudPoker} />
                        <Route path='/Craps' exact component={Craps} />
                        <Route path='/Roulette' exact component={Roulette} />
                        <Route path='/Slots' exact component={Slots} />
                        <Route path='/PrivacyPolicy' exact component={PrivacyPolicy} />
                        <Route path='/TermsOfServices' exact component={TermsOfServices} />
                        <Route path='/UserAccount' exact component={UserAccount} />
                        <Route path='/UserAchievement' exact component={UserAchievement} />
                        <Route path='/nlc/WebGLGame' exact component={WebGLGame} />
                        <Route render={() => <PageNotFound/>} />
                    </Switch>
                </div>
                <Suspense fallback={<div/>}>
                    <Footer />
                </Suspense>
            </Router>
        </>
    );
}

export default Routes
