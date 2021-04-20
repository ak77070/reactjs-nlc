import React, { useEffect }  from 'react'
import Navbar from './nav';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

import Footer from '../Footer/footer';

import Home from '../../Pages/Home/home';
import About from '../../Pages/About/about';
import Games from '../../Pages/Games/games';
import Staking from '../../Pages/Staking/staking';
// import Socials from '../../Pages/Socials/socials';

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

import PrivacyPolicy from '../../Pages/TermsAndPolicy/pp';
import TermsOfServices from '../../Pages/TermsAndPolicy/tos';

import UserAccount from '../../Pages/User/Account/account';
import UserAchievement from '../../Pages/User/Achievements/achievement';

// import 'bootstrap/dist/css/bootstrap.min.css';


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
                        <Route path='/nlc' exact component={Home} />
                        <Route path='/nlc/About' component={About} />
                        <Route path='/nlc/Games' component={Games} />
                        <Route path='/nlc/Staking' component={Staking} />
                        {/* <Route path='/nlc/socials' component={Socials} /> */}
                        <Route path='/nlc/Register' component={Register} />
                        <Route path='/nlc/RegisterOrImport' component={RegorImp} />
                        <Route path='/nlc/GenerateSeed' component={GenerateSeed} />
                        <Route path='/nlc/ImportSeed' component={ImportSeed} />
                        <Route path='/nlc/CreatePassword' component={CreatePassword} />
                        <Route path='/nlc/Login' component={Login} />
                        <Route path='/nlc/Blackjack' component={Blackjack} />
                        <Route path='/nlc/CarribeanStudPoker' component={CarribeanStudPoker} />
                        <Route path='/nlc/Craps' component={Craps} />
                        <Route path='/nlc/Roulette' component={Roulette} />
                        <Route path='/nlc/Slots' component={Slots} />
                        <Route path='/nlc/PrivacyPolicy' component={PrivacyPolicy} />
                        <Route path='/nlc/TermsOfServices' component={TermsOfServices} />
                        <Route path='/nlc/UserAccount' component={UserAccount} />
                        <Route path='/nlc/UserAchievement' component={UserAchievement} />
                        <Route render={() => <h1>404: page not found</h1>} />
                    </Switch>
                </div>
                <Footer />
            </Router>
        </>
    );
}

export default Routes
