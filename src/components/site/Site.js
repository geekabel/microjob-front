import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';
import Signin from '../Auth/Signin';
import Signup from '../Auth/Signup';
import Search from '../Search';
import Contact from '../Contact/Contact';
//import Application from '../App/Application';
import Navbar from '../Menu/Navbar';
import Footer from '../Footer/Footer';
import Accueil from './Accueil/Accueil';
import Error404 from  '../Error404/Error404'
import Useraccount from '../Auth/usersaccount/Useraccount';
import Category from '../App/Category';
import microjobsLists from '../App/microjobsList';
import Devenirvendeur from '../Contact/Devenirvendeur';
import Microjob from '../App/Microjob';
import DetailsMicrojobs from "../App/DetailsMicrojobs";
class Site extends Component {




    render() {
        return (
          <>
            <div className="site">
              <Navbar />
              <Switch>
                <Route  path="/myaccount" exact render={() => <Useraccount />}/>
                <Route  path="/signin" exact component={Signin}/>
                <Route  path="/signup" exact render={Signup}/>
                <Route path="/categorie" exact component={Category} />
                <Route path="/categorie/:id" exact component={microjobsLists} />
                <Route  path="/search" exact  component={Search}/>
                <Route path="/microjob" exact component={Microjob}/>
                <Route path="/microjob/:id" exact component={DetailsMicrojobs}/>
                <Route path="/contact" exact component={Contact} />
                <Route path="/devenirvendeur" exact component={Devenirvendeur} />
                <Route path="/" exact component={Accueil}/>
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