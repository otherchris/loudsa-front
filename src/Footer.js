import React from 'react';
import Menu from './Menu.js';

const Footer = () => (
  <div className="footer-container">
    <div className="contact-column footer-column">
      <div className="social-icons">
        <a href="https://www.facebook.com/dsalouisville/">
          <img src="facebook.svg" alt="facebook link" />
        </a>
        <a href="https://twitter.com/dsa_louisville">
          <img src="twitter.svg" alt="twitter link" />
        </a>
        <a href="mailto:dsalouisville@gmail.com">
          <img src="gmail.svg" alt="gmail link" />
        </a>
      </div>
      <div className="footer-address">
        Louisville DSA<br/>
        PO Box 406769 <br/>
        Louisville, KY 40204<br/>
        <br/>
        (502) 309-4493
      </div>
    </div>
    <div className="menu-column footer-column">
      <Menu className="footer-menu" />
    </div>
    <div className="message-column footer-column">
      <p>
        <a href="https://dsausa.org">Democratic Socialists</a> believe that both
        the economy and society should be run democratically to meet human needs,
        not to make profits for a few. We are a political and activist organization,
        not a party; through campus and community-based chapters DSA members use a
        variety of tactics, from legislative to direct action, to fight for reforms
        that empower working people.
      </p>
      <br />
      <a href="https://act.dsausa.org/donate/membership/">Join DSA!</a>
    </div>
  </div>
);

export default Footer;
