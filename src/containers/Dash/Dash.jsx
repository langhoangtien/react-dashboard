import React, {Component} from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
// backgroundImage for Sidebar
import image from 'assets/img/full-screen-image-3.jpg';
// this is used to create scrollbars on windows devices like the ones from apple devices
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
// react component that creates notifications (like some alerts with messages)
import NotificationSystem from 'react-notification-system';

import Sidebar from 'components/Sidebar/Sidebar.jsx';
import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer.jsx';

// dinamically create dashboard routes
import dashRoutes from 'routes/dash.jsx';

// style for notifications
import { style } from "variables/Variables.jsx";

class Dash extends Component{
    constructor(props){
        super(props);
        this.handleNotificationClick = this.handleNotificationClick.bind(this);
        this.state = {
            _notificationSystem: null,
            background:true,
            color: "black",
            image: image,
        };
    }
    componentDidMount(){
        this.setState({_notificationSystem: this.refs.notificationSystem});
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            new PerfectScrollbar(this.refs.mainPanel, { wheelSpeed: 2, suppressScrollX: true });
        }
    }
    // function that shows/hides notifications - it was put here, because the wrapper div has to be outside the main-panel class div
    handleNotificationClick(position){
        var color = Math.floor((Math.random() * 4) + 1);
        var level;
        let icon;
        switch (color) {
            case 1:
                level = 'success';
                icon = 'pe-7s-check';
                break;
            case 2:
                level = 'warning';
                icon = 'pe-7s-attention';
                break;
            case 3:
                level = 'error';
                icon = 'pe-7s-help1';
                break;
            case 4:
                level = 'info';
                icon= 'pe-7s-info';
                break;
            default:
                break;
        }
        this.state._notificationSystem.addNotification({
            title: (<span data-notify="icon" className={icon}></span>),
            message: (
                <div>
                    Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer.
                </div>
            ),
            level: level,
            position: position,
            autoDismiss: 15,
        });
    }
    changeBackground(value){
        this.setState({image: value});
    }
    // function that creates perfect scroll bar for windows users (it creates a scrollbar that looks like the one from apple devices)
    isMac(){
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
    componentDidUpdate(e){
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            setTimeout(() => { new PerfectScrollbar(this.refs.mainPanel) }, 350);
        }
        if(e.history.action === "PUSH"){
            this.refs.mainPanel.scrollTop = 0;
        }
    }
    componentWillMount(){
        if(document.documentElement.className.indexOf('nav-open') !== -1){
            document.documentElement.classList.toggle('nav-open');
        }
    }
    render(){
        return (
            <div className="wrapper">
                <NotificationSystem ref="notificationSystem" style={style}/>
                <Sidebar {...this.state} {...this.props} />
                <div className={"main-panel"+(this.props.location.pathname === "/maps/full-screen-maps" ? " main-panel-maps":"")} ref="mainPanel">
                    <Header {...this.props}/>
                        <Switch>
                            {
                                dashRoutes.map((prop,key) => {
                                    if(prop.collapse){
                                        return prop.views.map((prop,key) => {
                                            if(prop.name === "Notifications"){
                                                return (
                                                    <Route
                                                        path={prop.path}
                                                        key={key}
                                                        render={routeProps =>
                                                           <prop.component
                                                               {...routeProps}
                                                               handleClick={this.handleNotificationClick}
                                                           />}
                                                    />
                                                );
                                            } else {
                                                return (
                                                    <Route path={prop.path} component={prop.component} key={key}/>
                                                );
                                            }
                                        })
                                    } else {
                                        if(prop.redirect)
                                            return (
                                                <Redirect from={prop.path} to={prop.pathTo} key={key}/>
                                            );
                                        else
                                            return (
                                                <Route path={prop.path} component={prop.component} key={key}/>
                                            );
                                    }
                                })
                            }
                        </Switch>
                    <Footer changeImage={value =>this.setState({image:value})} color ={value=>this.setState({color:value})} background={value=>this.setState({background:value})} fluid/>
                </div>
            </div>
        );
    }
}

export default Dash;