import React, { useEffect, useState } from 'react';
import KigaliData from './KigaliData';
import Gothenburg from './GothenData';
import GisenyiData from './GisenyiData'; 
import SthokData from './SthokData';

const WeatherCards = ({ theme, _kigaliData, sthokData, gotheniData }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="main-cards">
            <div class="projcard-container">
                <div class="projcard projcard-blue">
                    <div class="projcard-innerbox cond-box">
                        <KigaliData _kigaliData="_kigaliData" />
                    </div>
                </div>

                <div class="projcard projcard-blue">
                    <div class="projcard-innerbox cond-box">
                        <GisenyiData _gisenyiData="_gisenyiData" />
                    </div>
                </div>

                <div class="projcard projcard-red">
                    <div class="projcard-innerbox">
                        <SthokData />
                    </div>
                </div>

                <div class="projcard projcard-red">
                    <div class="projcard-innerbox">
                        <Gothenburg gotheniData="gotheniData" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCards;
