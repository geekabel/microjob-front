import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';
import Signin from '../Auth/Signin';
import Signup from '../Auth/Signup';
import Search from '../Search';
import Contact from '../Contact/Contact';
import Application from '../App/Application';
import Navbar from '../Menu/Navbar';
import Footer from '../Footer/Footer';
import Accueil from './Accueil/Accueil';
import Error404 from  '../Error404/Error404'

class Site extends Component {
    render() {
        return (
          <>
            <div className="site">
              <Navbar />
              <Switch>
                <Route  path="/signin" exact render={() => <Signin />}/>
                <Route  path="/signup" exact render={() => <Signup />}/>
                <Route  path="/search" exact render={() => <Search />}/>
                <Route path="/microjob" exact render={() => <Application />} />
                <Route path="/contact" exact render={() => <Contact />} />
                <Route path="/" exact render={() => <Accueil />} />
                <Route
                  render={() => (
                    <Error404 type="404">
                      La page que tu cherches n'existe pas
                    </Error404>
                  )}
                />
              </Switch>
            </div>
            <div className="minSite"></div>
            <Footer />
          </>
        );
    }
}
export default Site;