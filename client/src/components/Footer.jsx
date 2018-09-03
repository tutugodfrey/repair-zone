import React, { Component } from 'react';
import Div from './elementComponents/Div.jsx';
import Link from './elementComponents/Link.jsx';

export default class Footer extends Component {
  footerContent() {
    return (
      <div className="row bg-success" >
        <Div divClass="col-6 offset-5 col-md-2 offset-md-3 pl-0 pr-0" id="" content={ <Link href="#" linkText="Contact us" />} />
        <Div divClass="col-6 offset-5 col-md-2 offset-md-0 pl-0 pr-0" id="" content={<Link href="#" linkText="About us" />} />
        <Div divClass="col-6 offset-5 col-md-2  offset-md-0 pl-0 pr-0" id="" content={<Link href="#" linkText="Term of Use" />} />
      </div>
    )
  }

  render() {
    return this.footerContent()
  }
}