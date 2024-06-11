import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCards';
import SavedQuotes from './components/SavedQuotes';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching the quote', error);
    }
  };

  const saveQuote = (quote) => {
    setSavedQuotes((prevQuotes) => [...prevQuotes, quote]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <h1>Random Ron Swanson Quotes</h1>
      {quote && <QuoteCard quote={quote} onSave={saveQuote} />}
      <button onClick={fetchQuote}>New Quote</button>
      <SavedQuotes quotes={savedQuotes} />
    </div>
  );
};

export default App;