import React, {Component} from 'react';
import sidebar_1 from 'assets/img/full-screen-image-1.jpg';
import sidebar_2 from 'assets/img/full-screen-image-2.jpg';
import sidebar_3 from 'assets/img/full-screen-image-3.jpg';
import sidebar_4 from 'assets/img/full-screen-image-4.jpg';
const fb = "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z";
const tw = "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z";
const switchOn = "bootstrap-switch wrapper bootstrap-switch-on bootstrap-switch-animate";
const switchOff = "bootstrap-switch wrapper bootstrap-switch-off bootstrap-switch-animate";
 class Setting extends Component {
     constructor(props){
        super(props);
        this.state = {
            switchBackground: true,
            switchSidebarMini: false,
            switchFixedNavbar: false
        };
     }
     toogleConfig(){
       document.getElementById('fixedPluginClasses').classList.toggle('open');
      
     }
     toggleSwitch(switchName){
        this.setState({[switchName]:  !this.state[switchName]});
     }
     render(){
         return(
             <div className="fixed-plugin">
             <div id="fixedPluginClasses" className="dropdown show-dropdown open">
                <div><i onClick={()=>this.toogleConfig()} className="fa fa-cog fa-2x" /></div>
                <ul className="dropdown-menu">
                    <li className="header-title">Configuration
                    </li>
                    <li className="adjustments-line">
                        <p className="pull-left">Background Image</p>
                        <div className="pull-right">
                            <div className={this.state.switchBackground ? switchOn : switchOff} onClick={()=>this.toggleSwitch("switchBackground")} tabIndex={0} style={{width: '100px'}}>
                                    <div className="bootstrap-switch-container" style={{width: '150px', marginLeft: '0px'}}>
                                        <span className="bootstrap-switch-handle-on bootstrap-switch-primary" style={{width: '50px'}}>ON</span>
                                        <span className="bootstrap-switch-label" style={{width: '50px'}}> </span>
                                        <span className="bootstrap-switch-handle-off bootstrap-switch-default" style={{width: '50px'}}>OFF</span>
                                    </div>
                            </div>
                        </div>
                        <div className="clearfix" />
                    </li>
                    <li className="adjustments-line">
                        <p className="pull-left">Sidebar Mini</p>
                        <div className="pull-right">
                            <div className={this.state.switchSidebarMini ? switchOn : switchOff} onClick={()=>this.toggleSwitch("switchSidebarMini")} tabIndex={0} style={{width: '100px'}}>
                                <div className="bootstrap-switch-container" style={{width: '150px', marginLeft: '-50px'}}>
                                    <span className="bootstrap-switch-handle-on bootstrap-switch-primary" style={{width: '50px'}}>ON</span>
                                    <span className="bootstrap-switch-label" style={{width: '50px'}}> </span>
                                    <span className="bootstrap-switch-handle-off bootstrap-switch-default" style={{width: '50px'}}>OFF</span>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix" />
                    </li>
                    <li className="adjustments-line"><p className="pull-left">Fixed Navbar</p>
                        <div className="pull-right">
                            <div className={this.state.switchFixedNavbar ? switchOn : switchOff} onClick = {()=>this.toggleSwitch('switchFixedNavbar')} tabIndex={0} style={{width: '100px'}}>
                                <div className="bootstrap-switch-container" style={{width: '150px', marginLeft: '-50px'}}>
                                    <span className="bootstrap-switch-handle-on bootstrap-switch-primary" style={{width: '50px'}}>ON</span>
                                    <span className="bootstrap-switch-label" style={{width: '50px'}}> </span>
                                    <span className="bootstrap-switch-handle-off bootstrap-switch-default" style={{width: '50px'}}>OFF</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="adjustments-line">
                        <a className="switch-trigger">
                            <p>Filters</p>
                            <div className="pull-right">
                                <span className="badge filter active" data-color="black" />
                                <span className="badge filter badge-azure" data-color="azure" />
                                <span className="badge filter badge-green" data-color="green" />
                                <span className="badge filter badge-orange" data-color="orange" />
                                <span className="badge filter badge-red" data-color="red" />
                                <span className="badge filter badge-purple" data-color="purple" />
                            </div>
                            <div className="clearfix" />
                        </a>
                    </li>
                    <li className="header-title">Sidebar Images
                    </li>
                    <li>
                        <a className="img-holder switch-trigger">
                            <img src={sidebar_1} alt="..." />
                        </a>
                    </li>
                    <li>
                        <a className="img-holder switch-trigger">
                            <img src={sidebar_2} alt="..." />
                        </a>
                    </li>
                    <li className="active">
                        <a className="img-holder switch-trigger">
                            <img src={sidebar_3} alt="..." />
                        </a>
                    </li>
                    <li>
                        <a className="img-holder switch-trigger">
                            <img src={sidebar_4} alt="..." />
                        </a>
                    </li>
                    <li className="button-container">
                        <div>
                            <a href="#" target="_blank" className="btn btn-success btn-block btn-fill">Download free!
                            </a>
                        </div>
                    </li>
                    <li className="button-container">
                        <div>
                            <a href="#" target="_blank" className="btn btn-warning btn-block btn-fill">Buy Pro</a>
                        </div>
                    </li>
                    <li className="button-container">
                        <a className="btn btn-fill btn-info" aria-current="false" href="#/documentation">Documentation</a>
                    </li>
                    <li className="header-title" id="sharrreTitle">Thank you for sharing!
                    </li>
                    <li className="button-container">
                        <div role="button" tabIndex={0} className="SocialMediaShareButton SocialMediaShareButton--facebook">
                            <div style={{width: '32px', height: '32px'}}>
                                <svg viewBox="0 0 64 64" width={32} height={32} className="social-icon social-icon--facebook ">
                                    <g><circle cx={32} cy={32} r={31} fill="#3b5998" /></g>
                                    <g><path d={fb} fill="white" /></g>
                                </svg>
                            </div>
                        </div>
                        <div role="button" tabIndex={0} className="SocialMediaShareButton SocialMediaShareButton--twitter">
                            <div style={{width: '32px', height: '32px'}}> 
                                <svg viewBox="0 0 64 64" width={32} height={32} className="social-icon social-icon--twitter ">
                                    <g><circle cx={32} cy={32} r={31} fill="#00aced" /></g>
                                    <g><path d={tw} fill="white" /></g>
                                </svg>
                            </div>
                        </div>
                    </li>
                    </ul>
                </div>
             </div>
         );
     }
 }
 export default Setting;