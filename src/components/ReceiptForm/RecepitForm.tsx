import React from 'react';
import { Link } from 'react-router-dom';

export const ReceiptForm = () => (
  <>
    <h1>Enter details in the form below</h1>
    <Link to={'/review-details'}>Review Details</Link>
  </>
);
