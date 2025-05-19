import React from 'react';
import Navbar from './global-components/newNavbar';
import PageHeader from './global-components/page-header';
import MyAccount from './shop-components/my-account';
import Footer from './global-components/newFooter';

const MyaccountV1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="My Account" />
        <MyAccount />
        <Footer />
    </div>
}

export default MyaccountV1

