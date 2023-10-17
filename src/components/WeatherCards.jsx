import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const WeatherCards = ({ theme }) => {
  return (
    <div className="main-cards">
        <div class="projcard-container">
            <div class="projcard projcard-blue">
                <div class="projcard-innerbox">
                    {/* <img class="projcard-img" src="https://picsum.photos/800/600?image=1041" /> */}
                    <div className="main-title projcard-img">
                        <div className="main">
                            <span className="number"><b>22°</b>C</span>
                            <div id="sunny_weather" class="grid__item">
                                <div id="sun"></div>
                            </div>
                            <div id="sunny_cloudy_weather" class="grid__item">
                                <div id="cloud" class="cloud_top cloud_regular"></div>
                                <div id="sun"></div>
                                <div id="cloud" class="cloud_bottom cloud_regular"></div>
                            </div>
                        </div>
                        <div className="fter">
                            <small className="description">RAINNY DAY</small>
                            <small><b>Precipitation: </b>14</small>
                            <small><b>Himidity: </b>120</small>
                            <small><b>Windy: </b>90</small>
                        </div>
                    </div>
                    <div class="projcard-textbox">
                        <div class="projcard-title">RWANDA</div>
                        <div class="projcard-subtitle">Monday, 12-04-2014</div>
                        <div class="projcard-bar"></div>
                        <div class="projcard-description">
                            <small className="header-desc">Full day | Full week</small>
                            <div className="details-content">
                                <div className="hour-details">
                                    <div className="x-card">
                                        <small className="x-time">Tue</small>
                                        <small className="x-temp">26*</small>
                                        <small className="x-icn">img</small>
                                    </div>
                                    <div className="x-card">
                                        <small className="x-time">Wed</small>
                                        <small className="x-temp">26*</small>
                                        <small className="x-icn">img</small>
                                    </div>
                                    <div className="x-card">
                                        <small className="x-time">Thu</small>
                                        <small className="x-temp">26*</small>
                                        <small className="x-icn">img</small>
                                    </div>
                                    <div className="x-card">
                                        <small className="x-time">Fri</small>
                                        <small className="x-temp">26*</small>
                                        <small className="x-icn">img</small>
                                    </div>
                                    <div className="x-card">
                                        <small className="x-time">Sat</small>
                                        <small className="x-temp">26*</small>
                                        <small className="x-icn">img</small>
                                    </div>
                                    <div className="x-card">
                                        <small className="x-time">Sun</small>
                                        <small className="x-temp">26*</small>
                                        <small className="x-icn">img</small>
                                    </div>
                                </div>
                                <div className="more-details">
                                    <div className="x-card">
                                        <small><AiOutlinePlus /><br/> View More</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="projcard projcard-red inactive">
                <div class="projcard-innerbox">
                    <img class="projcard-img" src="https://picsum.photos/800/600?image=1080" />
                    <div class="projcard-textbox">
                        <div class="projcard-title">SWEDEN</div>
                        <div class="projcard-subtitle">Monday, 12-04-2014</div>
                        <div class="projcard-bar"></div>
                        <div class="projcard-description">
                            <small className="header-desc">Full day | Full week</small>
                            <div className="details-content">
                                <div className="hour-details">
                                    <div className="x-card">
                                        <small className="x-time">Tue</small>
                                        <small className="x-temp">26*</small>
                                        <small className="x-icn">img</small>
                                    </div>
                                    <div className="x-card">
                                        <small className="x-time">Wed</small>
                                        <small className="x-temp">26*</small>
                                        <small className="x-icn">img</small>
                                    </div>
                                    <div className="x-card">
                                        <small className="x-time">Thu</small>
                                        <small className="x-temp">26*</small>
                                        <small className="x-icn">img</small>
                                    </div>
                                    <div className="x-card">
                                        <small className="x-time">Fri</small>
                                        <small className="x-temp">26*</small>
                                        <small className="x-icn">img</small>
                                    </div>
                                    <div className="x-card">
                                        <small className="x-time">Sat</small>
                                        <small className="x-temp">26*</small>
                                        <small className="x-icn">img</small>
                                    </div>
                                    <div className="x-card">
                                        <small className="x-time">Sun</small>
                                        <small className="x-temp">26*</small>
                                        <small className="x-icn">img</small>
                                    </div>
                                </div>
                                <div className="more-details">
                                    <div className="x-card">
                                        <small><AiOutlinePlus /><br/> View More</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherCards