import React from 'react';
// *******************************
import './Layout.scss';

const Layout = ({children}) => {

    return (
        <div className='view-wrapper'>
                <div className="container">
                    <div className="row main">
                        <main className='col main-content'>
                            {children}
                        </main>
                        <aside className='col sidebar'>
                            Sidebar
                        </aside>
                    </div>
                </div>
        </div>
    );
};

export default Layout;
