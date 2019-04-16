import React from 'react';
import {Link} from "react-router-dom";

const Tags = (props) => {

    const tags = props.tags.map(tag => (
        <li><h6><span className="badge badge-secondary badge-primary-light">{tag}</span></h6></li>
    ));

    return (
        <div style={{ position:'relative',minHeight:'40px' }}>
            <ul className='social-icons' style={{position:'absolute'}}>
                {tags}
                <li><small><Link className='view-demo text-sm' to={props.link}>view demo</Link></small></li>
            </ul>
        </div>
    );
}

export default Tags;