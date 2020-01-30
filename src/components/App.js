import React from 'react';
import HistoryBar from '../containers/HistoryBar';

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
      <HistoryBar />
      <Footer />
    </React.Fragment>);
}
