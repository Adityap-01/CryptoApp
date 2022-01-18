import React from 'react'
import millify from 'millify'; // will use to format numbers , Converts long numbers into human-readable strings
import {Typography, Row , Col , Statistic} from 'antd';
import {Link} from 'react-router-dom';
import { Cryptocurrencies, News } from '../components';

import { useGetCryptosQuery } from '../services/cryptoApi';

const {Title} = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    if(isFetching) return 'Loading..';
    console.log(data);
    return (
        <>
            <Title level={2} className='heading'>Global Crypto Stats</Title>
            <Row>
                {/* In ant design there are total 24 spans so 12 means taking 1/2 screen  */}
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>     
                <Col span={12}><Statistic title="Total Exchanges" value={globalStats.totalExchanges}/></Col>     
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>     
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>     
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>     
            </Row>

            <div className="home-heading-container">
            <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
            <Title level={3} className='show-more'>
                <Link to="/cryptocurrencies">Show More</Link>
            </Title>
            </div>
            <Cryptocurrencies simplified/>

            <div className="home-heading-container">
            <Title level={2} className='home-title'>Latest Crypto News</Title>
            <Title level={3} className='show-more'>
                <Link to="/news">Show More</Link>
            </Title>
            </div>
            <News simplified/>
        </>
    )
}

export default Homepage
