import React from 'react';
import { Link } from "react-router-dom";
import './index.css'

class Footer extends React.Component {
    render() {
        return (
            <footer className='container footer'>
                <div className='col-xs-16'>
                    <Link to="hook">
                        <button>进入hook</button>
                    </Link>
                </div>
            </footer>
        );
    }
}

export default Footer;