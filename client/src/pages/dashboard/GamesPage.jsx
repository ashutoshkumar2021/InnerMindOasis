import React from 'react';
import one from "../../assets/1.jpg"
import two from "../../assets/2.jpg"
import three from "../../assets/3.png"
import four from "../../assets/4.png"
import five from "../../assets/5.png"
import six from "../../assets/6.png"
import seven from "../../assets/7.jpg"
import eight from "../../assets/8.png"
import nine from "../../assets/9.jpg"
import './GamesPage.css';
import DashboardLayout from '../../components/DashboardLayout';

const GamesPage = () => {
    return (
        <DashboardLayout>
        <div>
            <header>
                <nav className="navbar  navbar-fixed-top navbar-default">
                    <div className="container">
                        {/* Navbar content */}
                    </div>
                </nav>
            </header>
            <div className="section-container">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="card-container">
                                <div className="text-center">
                                    <h1 className="h2">Games</h1>
                                </div>
                                <p>Here we have brought you a variety of single-player and multiplayer fun games to play anytime, anywhere and, with anyone. It could be your friends or random people from around the world.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Game cards */}
                        <div className="col-sm-4">
                            <img src={one} alt="" className="img-responsive" />
                            <div className="card-container card-container-lg">
                                <h3>1. Agar</h3>
                                <button onClick={() => window.open("https://agar.io/", "_blank")} title="" className="btn btn-default">Play</button>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <img src={two} alt="" className="img-responsive" />
                            <div className="card-container card-container-lg">
                                <h3>2. Flappy</h3>
                                <button onClick={() => window.open("https://flappyroyale.io/", "_blank")} title="" className="btn btn-default">Play</button>
                            </div>
                        </div>
                        <div className="col-sm-4">
                                <img src={three} alt="" className="img-responsive" />
                            <div className="card-container card-container-lg">
                                <h3>3. Slither</h3>
                                <button onClick={() => window.open("http://slither.io/", "_blank")} title="" className="btn btn-default">Play</button>
                            </div>
                        </div>
                        <div className="col-sm-4">

                                <img src={four} alt="" className="img-responsive" />

                            <div className="card-container card-container-lg">
                                <h3>4. Diep</h3>
                                <button onClick={() => window.open("https://diep.io/", "_blank")} title="" className="btn btn-default">Play</button>
                            </div>
                        </div>
                        <div className="col-sm-4">

                                <img src={five} alt="" className="img-responsive" />

                            <div className="card-container card-container-lg">
                                <h3>5. Tetr</h3>
                                <button onClick={() => window.open("https://tetr.io/", "_blank")} title="" className="btn btn-default">Play</button>
                            </div>
                        </div>
                        <div className="col-sm-4">

                                <img src={six} alt="" className="img-responsive" />

                            <div className="card-container card-container-lg">
                                <h3>6. Skribbl</h3>
                                <button onClick={() => window.open("https://skribbl.io/", "_blank")} title="" className="btn btn-default">Play</button>
                            </div>
                        </div>
                        <div className="col-sm-4">

                                <img src={seven} alt="" className="img-responsive" />

                            <div className="card-container card-container-lg">
                                <h3>7. 2048</h3>
                                <button onClick={() => window.open("http://2048.io/", "_blank")} title="" className="btn btn-default">Play</button>
                            </div>
                        </div>
                        <div className="col-sm-4">

                                <img src={eight} alt="" className="img-responsive" />

                            <div className="card-container card-container-lg">
                                <h3>8. Krunker</h3>
                                <button onClick={() => window.open("https://krunker.io/", "_blank")} title="" className="btn btn-default">Play</button>
                            </div>
                        </div>
                        <div className="col-sm-4">
  
                                <img src={nine} alt="" className="img-responsive" />

                            <div className="card-container card-container-lg">
                                <h3>9. Smash Karts</h3>
                                <button onClick={() => window.open("https://smashkarts.io/", "_blank")} title="" className="btn btn-default">Play</button>
                            </div>
                        </div>
                    </div>
                    {/* Additional rows of game cards */}
                    {/* <div className="row">...</div> */}
                </div>
            </div>
            <footer className="footer-container text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <p><b></b></p>
                        </div>
                    </div>
                </div>
            </footer>
            <script>
                {`
                document.addEventListener("DOMContentLoaded", function (event) {
                    // Add logic for navigation active page highlighting
                });
                `}
            </script>
            <script type="text/javascript" src="main.70a66962.js"></script>
        </div>
        </DashboardLayout>
    );
};

export default GamesPage;
