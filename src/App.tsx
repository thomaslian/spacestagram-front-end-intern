import React from 'react';
import './App.css';

import Header from './components/header/Header';
import CardContainer from './components/card-container/CardContainer';
import CardConfig from './interfaces/CardConfig';

type Props = {};
type State = {};

const nasaApiUrl: RequestInfo = "https://api.nasa.gov/planetary/apod?count=10&api_key=" + process.env.REACT_APP_NASA_API_KEY;
let nasaData: Array<CardConfig> = [];

export default class App extends React.Component<Props, State> {

  componentDidMount(): void {
    fetch(nasaApiUrl)
      .then((res: any) => res.json())
      .then((apiData: Array<object>) => {
        apiData.forEach((data: any) => {
          nasaData.push({ imageUrl: data.url, date: data.date, title: data.title, description: data.explanation })
        })
      });
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <Header />
        <CardContainer cardArray={nasaData} />
      </div>
    );
  }
}

