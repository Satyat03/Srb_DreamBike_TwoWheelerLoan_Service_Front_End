import React from 'react';

function About() {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h1 className="card-title text-center mb-4">About Our Bike Loan Application</h1>
          <p className="card-text">
            Welcome to the Bike Loan Application! Our platform helps you easily apply for bike loans with minimal documentation and quick approvals.
          </p>
          <p className="card-text">
            We are committed to making two-wheeler ownership affordable and hassle-free. Whether you're buying your first bike or upgrading to a new model, we offer competitive interest rates, flexible repayment options, and fast processing.
          </p>
          <p className="card-text">
            <strong>Key Features:</strong>
            <ul>
              <li>Simple online application process</li>
              <li>Instant CIBIL score check</li>
              <li>Secure document upload</li>
              <li>Real-time loan status tracking</li>
            </ul>
          </p>
          <p className="card-text">
            Thank you for choosing us to be part of your journey!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
