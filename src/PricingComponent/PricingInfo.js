import React from 'react';
import './PricingInfo.css';

const PricingInfo = () => {
  return (
    <div className="pricing-info">
      <h1>Prices</h1>
      <h3 className="intro">
        Welcome to the HelpHub Assignments online writing service! 
      </h3>
      <p className="intro">
        Welcome to the HelpHub Assignments online writing service! Providing you with the well researched and written academic projects has been our main goal and greatest pleasure over the past years. Digging in numerous articles and books to get the data necessary for your papers, finding writers who have background in your subject matter, constantly improving our plagiarism scanning tools – this is job that we do daily and that we are very proud of.
      </p>
      <p className="intro">
        Just like many other e-commerce companies, we want to ensure that we meet your expectations in the world of online shopping. Flexibility of pricing might not be our own invention or the most recent innovation, but we strongly believe that our customers benefit from this opportunity every single day.
      </p>
      <p className="intro">
        As you are placing an order, you always have a chance to adjust the cost of your paper based on the three factors:
      </p>
      <ul className="factors">
        <li>Academic level</li>
        <li>Due date</li>
        <li>Scope of work</li>
      </ul>
      <p className="details">
        The academic level plays a major role in the price calculation, and this is quite self-explanatory: the more complex the level of your paper is, the more experienced the writer should be and the more time and effort will he/ she spend on delivering an impeccable product.
      </p>
      <p className="details">
        The due date is another important factor as the close the due date is to the order placement date, the higher will be the final cost of the paper. Urgent requests are more expensive because they require writers to work extra hours to submit on time all of the projects they work on. We recommend placing an order in advance because this is a good way to spend less on you professionally written paper.
      </p>
      <p className="details">
        The scope of work is primarily the required length of your paper. Long papers require a more extensive research and more hours of work, this is why this factor affects the final cost as well. As we charge our customers per page of work, please take a look at the format to set your expectation:
      </p>
      <ul className="format">
        <li>Times New Roman, 12 pt;</li>
        <li>Single-sided page;</li>
        <li>Double spacing;</li>
        <li>1-inch margins.</li>
      </ul>
      <p className="details">
        Please note that one single-spaced page will be priced as 2 double-spaced pages because of the default format.
      </p>
      <p className="details">
        When you purchase a paper, you receive a document that contains unique, custom-made content that has no copies and belongs to you only. This content is edited and scanned for plagiarism before it is released to the customer; therefore, you can be confident using it as a reference paper for your academic project. It will never be published on our website as our services are totally confidential.
      </p>
      <p className="details">
        All our prices are displayed on the homepage and can be calculated before you place an order. If you have any additional questions regarding our Pricing Policy, please contact our Customer Support team at your earliest convenience.
      </p>
    </div>
  );
};

export default PricingInfo;
