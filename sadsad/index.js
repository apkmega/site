import React from 'react';

const FeaturedApps = () => {
  return (
    <>
      <header>
        <div id="header-particles"></div>
      </header>
      <section className="featured-section">
        <div className="container">
          <div className="section-title-wrapper">
            <h3>Featured Apps</h3>
          </div>
          <div className="featured-apps-content">
            <div className="featured-apps-slider">
              <div
                className="featured-app-slider-item lit lit-t"
                data-lrurl="https://bigappboi.com/cl/i/x6x449"
              >
                <img
                  src="assets/img/app_images/GNzlZ4u/cashapp.png"
                  className="featured-app-slider-item-img liti img-fluid"
                  alt="Cash App Logo"
                />
                <div className="featured-app-slider-item-name litn">Cash App</div>
                <div className="listing-item-rating">
                  <span className="listing-item-rating-separator"></span>
                  <span className="material-icons-two-tone">star</span>
                  <span className="listing-item-rating-val">4.9</span>
                </div>
                <div className="featued-app-slider-item-hidden-meta">
                  <div className="listing-item-by">
                    Author: <span className="listing-item-by-val">Tommy</span>
                  </div>
                  <div className="listing-item-os">
                    <i className="fab fa-android imr"></i>
                    <i className="fab fa-apple"></i>
                  </div>
                  <div className="listing-item-about">
                    Inject $300 to your cash app using this modded cash app
                  </div>
                  <div className="listing-item-downloads-val">120K+</div>
                  <div className="listing-item-short-name litsn">Cash App</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedApps;
