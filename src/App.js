import React from 'react'
import logo from './logo.svg';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainPage from './pages/MainPage';
import GalleryPage from './pages/GalleryPage';
import ProjectsPage from './pages/ProjectsPage';
import CertificatesPage from './pages/CertificatesPage';
import ContactsPage from './pages/ContactsPage';
import { Header } from './components/Header';


const menuList = [
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


function App() {
  return (
    <Router>
      <div className="App">
        <Header list={menuList} />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/gallery' component={GalleryPage} />
          <Route exact path='/projects' component={ProjectsPage} />
          <Route exact path='/certificates' component={CertificatesPage} />
          <Route exact path='/contacts' component={ContactsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
