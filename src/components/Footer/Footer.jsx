import React, { Component } from 'react';
import Setting from 'components/Setting/Setting.jsx';

class Footer extends Component {
    render(){
        return (
            <footer className={"footer" + (this.props.transparent !== undefined ? " footer-transparent":"")}>
                <Setting />
                <div className={"container" + (this.props.fluid !== undefined ? "-fluid":"")}>
                    <nav className="pull-left">
                        <ul>
                            <li>
                                <a href="#pablo">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#pablo">
                                    Company
                                </a>
                            </li>
                            <li>
                                <a href="#pablo">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#pablo">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <p className="copyright pull-right">
                        &copy; {1900 + (new Date()).getYear()} <a href="http://www.creative-tim.com">Creative Tim</a>, made with <i className="fa fa-heart heart"></i> for a better web
                    </p>
                </div>
            </footer>
        );
    }
}
export default Footer;
