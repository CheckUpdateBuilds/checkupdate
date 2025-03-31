// AnalyticsCard.js
import React from 'react';

const AnalyticsCard = ({ title, count, children, description }) => {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        {count && <h2>{count}</h2>}
        {description && <p>{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default AnalyticsCard;