import React from 'react';
import {Link} from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import QuickAccess from '../QuickAccess/QuickAccess';
import Components from '../Components/Components';
import JetSki from '../JetSki/JetSki';
import Explore from '../Explore/Explore';




function HomePage() {
    return(
        <div>
        <Carousel /> 
        <QuickAccess />
        <Components />
        <JetSki />
        <Explore />
        </div>
    )
}


export default HomePage;