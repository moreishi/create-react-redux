import React from 'react';

const Application = () => {
    return (
        <div className="container">
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
                                        <p><small>Note: This is a side project and not for production mode.</small></p>
                                        <ul className='social-icons'>
                                            <li><h6><span className="badge badge-secondary badge-primary-light">javascript</span></h6></li>
                                            <li><h6><span className="badge badge-secondary badge-primary-light">react</span></h6></li>
                                            <li><h6><span className="badge badge-secondary badge-primary-light">css3</span></h6></li>
                                            <li><h6><span className="badge badge-secondary badge-primary-light">html5</span></h6></li>
                                            <li><a href="#" style={{fontSize:'12px',color:'#fff'}}>view demo</a></li>
                                        </ul>
                                        <ul className='social-icons'>
                                            <li><a href=""><i className="fab fa-github fa-2x primary-light"></i></a></li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Application;