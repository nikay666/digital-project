import React from 'react'
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom'
import { useFirebase } from './hooks'
import MainPage from './pages/MainPage';
import GalleryPage from './pages/GalleryPage';
import ProjectsPage from './pages/ProjectsPage';
import CertificatesPage from './pages/CertificatesPage';
import ContactsPage from './pages/ContactsPage';
import SinglePage from './pages/SinglePage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.scss';
import './iconLiberary'
 

function App() {
  const navList =  useFirebase('/nav')
  const socialList =  useFirebase('/socials')
  const contactList =  useFirebase('/contacts')

  return (
    <Router >
      <HashRouter hashType="noslash">
      <div className="App">
        <Header list={navList} />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/gallery' component={GalleryPage} />
          <Route exact path='/projects' component={ProjectsPage} />
          <Route exact path='/certificates' component={CertificatesPage} />
          <Route exact path='/contacts' render={(props) => <ContactsPage contacts={contactList} />} />
          <Route exact path='/singlepage' component={SinglePage} />
          <Route exact path="/projects/:link" component={SinglePage} />
        </Switch>
        <Footer 
          navList={navList}
          contactList={contactList}
          socialList={socialList}
        />
      </div>
      </HashRouter>
    </Router>

  );
}

export default App;
