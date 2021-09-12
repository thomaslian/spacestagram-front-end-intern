import React, { ReactElement } from 'react';
import './App.css';

import Header from './components/header/Header';
import CardContainer from './components/card-container/CardContainer';

const nasaApiUrl: String = "https://api.nasa.gov/planetary/apod?count=10&api_key=" + process.env.NASA_API_KEY;

export default function App(): ReactElement {
  return (
    <div className="App">
      <Header />
      <CardContainer cardArray={[{ imageUrl: "hello2", date: "hello", title: "test", description: "testing" }]} />
    </div>
  );
}

