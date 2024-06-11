import React from "react";

const QuoteCard = ({quote, onSave}) => {
  return (
    <div style={styles.card}>
      <p>{quote}</p>
      <button onClick={ () => onSave(quote)}>Save to List</button>
    </div>
  )
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

export default QuoteCard;