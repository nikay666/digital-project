import React from 'react'
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainPage from './pages/MainPage';
import GalleryPage from './pages/GalleryPage';
import ProjectsPage from './pages/ProjectsPage';
import CertificatesPage from './pages/CertificatesPage';
import ContactsPage from './pages/ContactsPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faArrowRight, faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(faMapMarkerAlt, faPhone, faEnvelope, faFacebookF, faTwitter, faLinkedinIn, faPinterestP, faArrowRight, faArrowLeft )

const navList = [
  {
    id: 0,
    title: 'Главная',
    path:  '/'
  },
  {
    id: 1,
    title: 'Галерея',
    path: '/gallery'
  },
  {
    id: 2,
    title: 'Проекты',
    path: '/projects'
  },
  {
    id: 3,
    title: 'Сертификаты',
    path: '/certificates'
  },
  {
    id: 4,
    title: 'Контакты',
    path: '/contacts'
  },
]
const contactList = [
  {
    id: 0,
    icon: 'map-marker-alt',
    text: '100000, Республика  Казахстан, г. Караганда, ул. Телевизионная 10',
    link: 'map:Республика  Казахстан, г. Караганда, ул. Телевизионная 10',
  },
  {
    id: 1,
    icon: 'phone',
    text: '+7(701) 777 68 11',
    link: 'tel:+77017776811',
  },
  {
    id: 2,
    icon: 'envelope',
    text: 'Galym.sultanov@mail.ru',
    link: 'mailto:Galym.sultanov@mail.ru',
  }
]
const socialList = [
  { 
    id: 0,
    icon: ['fab','facebook-f'],
    link: 'htpps://facebook.com',
  },
  { 
    id: 1,
    icon: ['fab','twitter'],
    link: 'htpps://twitter.com'
  },
  { 
    id: 2,
    icon: ['fab', 'linkedin-in'],
    link: 'htpps://linkedin.com'
  },
  { 
    id: 3,
    icon: ['fab','pinterest-p'],
    link: 'htpps://pinterest.com'
  }

]


function App() {
  return (
    <Router>
      <div className="App">
        <Header list={navList} />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/gallery' component={GalleryPage} />
          <Route exact path='/projects' component={ProjectsPage} />
          <Route exact path='/certificates' component={CertificatesPage} />
          <Route exact path='/contacts' render={(props) => <ContactsPage contacts={contactList} />} />
        </Switch>
        <Footer 
        navList={navList}
        contactList={contactList}
        socialList={socialList}
      />
      </div>
    </Router>

  );
}

export default App;
