import React from "react";

const SavedQuotes = ({ quotes }) => {
  return (
    <div>
      <h2>Saved Quotes</h2>
      {quotes.map((quote, index) => (
        <div key={index} style={styles.card}>
          <p>{quote}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
  },
};

export default SavedQuotes;