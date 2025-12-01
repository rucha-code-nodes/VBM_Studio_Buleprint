/* src/components/QuickCard.js */
import React from 'react';
import './QuickCard.css';

const QuickCard = ({ title, value, icon, className }) => {
  return (
    <div className={`quick-card ${className}`}>
      <div className="card-icon">{icon}</div>
      <div className="card-info">
        <p className="card-title">{title}</p>
        <h3 className="card-value">{value}</h3>
      </div>
    </div>
  );
};

export default QuickCard;