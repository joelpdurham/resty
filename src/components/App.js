import React from 'react';
import RestBody from '../containers/RestBody';

const Header = () => (
  <header>
    <h1>RESTy</h1>
  </header>
);

const Footer = () => (
  <footer>
    <p>2020 Alchemy Code Lab</p>
  </footer>
);

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <RestBody />
      <Footer />
    </React.Fragment>);
}
