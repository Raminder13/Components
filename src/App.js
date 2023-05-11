import React from 'react';
import './styles/index.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Button from './components/Button';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const images = [
    'https://picsum.photos/id/20/200/300',
    'https://picsum.photos/id/48/200/300',
    'https://picsum.photos/id/60/200/300',
    'https://picsum.photos/id/94/200/300',
  ];

  return (
    <div className="app">
      <Header />
      <Banner
        primaryButton={<Button type="primary-btn" text="Click me" />}
        secondaryButton={<Button type="secondary-btn" text="Learn More" />}
      />
      <div className="container">
        <Gallery images={images} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
