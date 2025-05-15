import React from 'react';

function Contact() {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h1 className="card-title text-center mb-4">Contact Us</h1>
          <p className="card-text text-center">
            We’re here to help! Reach out to us with any questions about your bike loan application.
          </p>
          
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>

            <div className="col-md-6">
              <h5 className="mt-4 mt-md-0">Our Contact Details</h5>
              <p><strong>Address:</strong> 123 Main Street, City, Country</p>
              <p><strong>Phone:</strong> +1 234 567 890</p>
              <p><strong>Email:</strong> support@bikeloanapp.com</p>
              <p><strong>Working Hours:</strong> Mon - Fri, 9 AM - 6 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
