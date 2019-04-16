import React from 'react';
import Tags from '../common/Tags';

const Application = () => {
    return (
        <div className="container mb-8">
            <div className="row">
                <div className="col-md-8 offset-2 mt-5">
                    <h1>Applications</h1>
                    <div className="row">
                        <div className="col-md-12 mt-5 bb-primary">
                            <div className="media">
                                <img width="110px" src="https://scontent.fmnl6-2.fna.fbcdn.net/v/t1.0-1/p320x320/19989418_280397779103104_30105891001568524_n.jpg?_nc_cat=106&_nc_eui2=AeEyQjTVaNljVRbUNcvQ7R68GRlrWoV8wf1bVLRgsVHSx9D5FaGTePMc6LC04XTMHGjjNkzUSUX5zwF7paFd1-5m96HzOrE48IAVcKlcs-DMwA&_nc_pt=1&_nc_ht=scontent.fmnl6-2.fna&oh=d73c43a1bb381b6d925bedd824ffe644&oe=5D4AEAC4" className="mr-3" alt="" />
                                    <div className="media-body">
                                        <h5 className="mt-0">Remittance</h5>
                                        <p><small>What this application does is that it allows you to send money to anyone to any location. It calculates from the base currency to the currency of your choice.</small></p>
                                        <Tags tags={['javascript','html5','css3','react']} link={'remittance'} />
                                        <ul className='social-icons'>
                                            <li><p><i className="fab fa-github fa-2x primary-light"></i></p></li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-5 bb-primary">
                            <div className="media">
                                <img width="110px" src="https://scontent.fmnl6-2.fna.fbcdn.net/v/t1.0-1/p320x320/19989418_280397779103104_30105891001568524_n.jpg?_nc_cat=106&_nc_eui2=AeEyQjTVaNljVRbUNcvQ7R68GRlrWoV8wf1bVLRgsVHSx9D5FaGTePMc6LC04XTMHGjjNkzUSUX5zwF7paFd1-5m96HzOrE48IAVcKlcs-DMwA&_nc_pt=1&_nc_ht=scontent.fmnl6-2.fna&oh=d73c43a1bb381b6d925bedd824ffe644&oe=5D4AEAC4" className="mr-3" alt="" />
                                <div className="media-body">
                                    <h5 className="mt-0">Splash Image</h5>
                                    <p><small>This application allows you to search a free high-resolution photos. You can download any images in high resolution. All images downloaded are free of charge and you can use any any means you like.</small></p>
                                    <Tags tags={['javascript','html5','css3','react','restful api','web service','ajax']} link={'splash'} />
                                    <ul className='social-icons'>
                                        <li><p><i className="fab fa-github fa-2x primary-light"></i></p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-5 bb-primary">
                            <div className="media">
                                <img width="110px" src="https://scontent.fmnl6-2.fna.fbcdn.net/v/t1.0-1/p320x320/19989418_280397779103104_30105891001568524_n.jpg?_nc_cat=106&_nc_eui2=AeEyQjTVaNljVRbUNcvQ7R68GRlrWoV8wf1bVLRgsVHSx9D5FaGTePMc6LC04XTMHGjjNkzUSUX5zwF7paFd1-5m96HzOrE48IAVcKlcs-DMwA&_nc_pt=1&_nc_ht=scontent.fmnl6-2.fna&oh=d73c43a1bb381b6d925bedd824ffe644&oe=5D4AEAC4" className="mr-3" alt="" />
                                <div className="media-body">
                                    <h5 className="mt-0">Quote2Text</h5>
                                    <p><small>This application allows you to send quote sms to your friends mobile phones. This is to show that the portfolio uses third-party API web service. To avoid misuse of the application, you can enjoy upto 3 sms credits.</small></p>
                                    <Tags tags={['javascript','react','css3','html5','nodejs']} link={'quote2text'} ></Tags>
                                    <ul className='social-icons'>
                                        <li><p><i className="fab fa-github fa-2x primary-light"></i></p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:'4rem',marginBottom:'2rem'}}>
                        <div className="col-md-12">
                            <p className='text-center' style={{color:'#ffffff'}}><small>© Copyright 2019 All Rights Reserved</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Application;