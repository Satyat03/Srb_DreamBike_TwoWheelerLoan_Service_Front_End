import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function GenerateLedger() {
  const [customers, setCustomers] = useState([]);
  const [amounts, setAmounts] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:1003/loan/getAllCustomer/Disbursted')
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching customers:', error);
      });
  }, []);

  const handleInputChange = (e, customerId) => {
    setAmounts({
      ...amounts,
      [customerId]: e.target.value,
    });
  };

  const handleSubmitForm = (e, customerId) => {
    e.preventDefault();
    const amount = amounts[customerId];
    if (!amount) {
      alert('Please enter an amount.');
      return;
    }

    axios
      .get(`http://localhost:1006/accountHead/ledgerGeneration/${customerId}/${amount}`)
      .then(() => {
        alert('Ledger Successfully Created!');
        navigate('/dashboard');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Generate Sanction Letter</h2>

      {customers.length === 0 ? (
        <p className="text-center">No customer data available</p>
      ) : (
        customers.map((customer) => (
          <div className="card mb-4" key={customer.customerId}>
            <div className="card-header bg-dark text-white">
              <strong>Customer ID:</strong> {customer.customerId} &nbsp; | &nbsp;
              <strong>Name:</strong> {customer.customerName}
              <span className={`float-end badge ${
                customer.loanStatus === 'Sanctioned' ? 'bg-success' :
                customer.loanStatus === 'Pending' ? 'bg-warning text-dark' :
                'bg-secondary'
              }`}>
                {customer.loanStatus}
              </span>
            </div>

            <div className="card-body">
              {customer.ledger && customer.ledger.length > 0 ? (
                <div className="table-responsive">
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Ledger Date</th>
                        <th>Total Loan</th>
                        <th>Payable w/ Interest</th>
                        <th>Tenure</th>
                        <th>Monthly EMI</th>
                        <th>Paid Till Date</th>
                        <th>Remaining</th>
                        <th>Next EMI Start</th>
                        <th>Next EMI End</th>
                        <th>Defaulter Count</th>
                        <th>Previous EMI Status</th>
                        <th>Current EMI Status</th>
                        <th>Loan End Date</th>
                        <th>Loan Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customer.ledger.map((l, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{l.ledgerCreatedDate}</td>
                          <td>{l.totalLoanAmount}</td>
                          <td>{l.payableAmountwithInterest}</td>
                          <td>{l.tenure}</td>
                          <td>{l.monthlyEMI}</td>
                          <td>{l.amountPaidtillDate}</td>
                          <td>{l.remainingAmount}</td>
                          <td>{l.nextEmiDatestart}</td>
                          <td>{l.nextEmiDateEnd}</td>
                          <td>{l.defaulterCount}</td>
                          <td>{l.previousEmitStatus}</td>
                          <td>{l.currentMonthEmiStatus}</td>
                          <td>{l.loanEndDate}</td>
                          <td>{l.loanStatus}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-muted">No Ledger data available.</p>
              )}

              <form onSubmit={(e) => handleSubmitForm(e, customer.customerId)} className="mt-3 row g-2">
                <div className="col-md-6">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter amount"
                    value={amounts[customer.customerId] || ''}
                    onChange={(e) => handleInputChange(e, customer.customerId)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <button className="btn btn-primary w-100" type="submit">
                    Generate Ledger
                  </button>
                </div>
              </form>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default GenerateLedger;
