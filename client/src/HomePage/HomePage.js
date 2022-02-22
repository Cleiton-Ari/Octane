import React from 'react';
import {Link} from 'react-router-dom';

import Carousel from '../Carousel/Carousel';

import QuickAccess from '../QuickAccess/QuickAccess';

import Explore from '../Explore/Explore';



function HomePage() {
    return(
        <div>
        <Carousel /> 
        <QuickAccess />
        <Explore />
         
        </div>
    )
}


export default HomePage;