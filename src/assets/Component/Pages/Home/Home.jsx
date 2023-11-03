import React from 'react';
import { Outlet } from 'react-router-dom';
import Front from '../Front/Front';
import Skils from '../Skils/Skils';

const Home = () => {
    return (
        <div>
            <Front></Front>
            <Skils></Skils>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;