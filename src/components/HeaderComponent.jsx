import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div><a href='https://google.com' className='navbar-brand'>Employee Management App</a></div>
                </nav>
            </div>
        );
    }
}

export default HeaderComponent;
