import React, { Component } from 'react';
import Div from './elementComponents/Div.jsx';
import Link from './elementComponents/Link.jsx';

export default class Footer extends Component {
  footerContent() {
    return (
      <div id="footer-div" className="row align-items-center bg-success" >
        <Div
        divClass="col-6 offset-5 col-md-2 offset-md-3 pl-0 pr-0"
        id=""
        content={ <Link href="#" linkClass="text-white" linkText="Contact us" />}
        />
        <Div
        divClass="col-6 offset-5 col-md-2 offset-md-0 pl-0 pr-0"
        id=""
        content={<Link href="#" linkClass="text-white" linkText="About us" />}
        />
        <Div
        divClass="col-6 offset-5 col-md-2 offset-md-0 pl-0 pr-0"
        id=""
        content={<Link href="#" linkClass="text-white" linkText="Term of Use" />}
        />
      </div>
    );
  }

  render() {
    return this.footerContent();
  }
}