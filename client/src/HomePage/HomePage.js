import React from 'react';
import {Link} from 'react-router-dom';

import Carousel from '../Carousel/Carousel';

import QuickAccess from '../QuickAccess/QuickAccess';

import Components from '../Components/Components';

import JetSki from '../JetSki/JetSki';

function HomePage() {
    return(
        <div>
        <Carousel /> 
        <QuickAccess />
        <Components />
        <JetSki />
         
        </div>
    )
}


export default HomePage;