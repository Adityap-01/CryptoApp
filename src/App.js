import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd'; // ant design

import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components';
import './App.css'

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>

            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/">
                                <Homepage />
                            </Route>

                            <Route exact path="/cryptocurrencies">
                                <Cryptocurrencies />
                            </Route>

                            <Route exact path="/crypto/:coinId">
                                <CryptoDetails />
                            </Route>

                            <Route exact path="/news">
                                <News />
                            </Route>
                        </Switch>
                    </div>
                </Layout>


                <div className="footer" >
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        The CryptoUpdate <br />
                        All rights Reserved 
                        
                    </Typography.Title>
                    <a href="https://github.com/Adityap-01" target={"_blank"}>Aditya Pradhan</a> 
                    <Space>
                        
                        <Link to="/">Home</Link>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>

            </div>

        </div>
    )
}

export default App
