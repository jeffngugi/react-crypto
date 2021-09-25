import React from 'react'
import millify from 'millify'
import {Link} from 'react-router-dom'
import {Typography, Row, Col, Statistic} from 'antd'
import {useGetCryptosQuery} from '../services/CryptoApi'
import { Cryptocurrencies, News } from '../components'
import Loader from './Loader'


const {Title} = Typography

const HomePage = () => {
    const {data, isFetching } = useGetCryptosQuery(10)
    const globalStats = data?.data?.stats
    // console.log(globalStats)
    if(isFetching) return <Loader />
    return (
        <>
            <Title level={2} className='heading'>Global crypto stats</Title>
            <Row>
                <Col span={12}><Statistic title='Total cryptocurrencies' value={globalStats.total}/></Col>
                <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)}/></Col>
                <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)}/></Col>
                <Col span={12}><Statistic title='Total cryptocurrencies' value={millify(globalStats.total24hVolume  )}/></Col>
                <Col span={12}><Statistic title='Total 24 hr Volume' value={millify(globalStats.totalMarkets)}/></Col>
            </Row>
            <div className='home-heading-container'>
                <Title level={2} className='home-title'>Top 10 cryptocurrencies in the world</Title>
                <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show more</Link></Title>
            </div>
            <Cryptocurrencies simplified/>
            <div className='home-heading-container'>
                <Title level={2} className='home-title'>Latest News</Title>
                <Title level={3} className='show-more'><Link to='/news'>Show more</Link></Title>
            </div>
            <News simplified />
        </>
    )
}

export default HomePage
