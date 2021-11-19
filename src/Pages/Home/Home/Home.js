import React from 'react';
import Explore from '../../Services/Explore/Explore';
import Explores from '../../Services/Explores/Explores';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Explores></Explores>
            <Reviews></Reviews>
            <Blogs></Blogs>
            <Footer></Footer>

        </div>
    );
};

export default Home;