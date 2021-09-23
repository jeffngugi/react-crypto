import React from 'react'
import millify from 'millify'
import {Link} from 'react-router-dom'
import {Typography, Row, Col, Statistic} from 'antd'

const {Title} = Typography

const HomePage = () => {
    return (
        <>
            <Title level={2} className='heading'>Global crypto stats</Title>
            <Row>
                <Col span={12}><Statistic title='Total cryptocurrencies' value={5}/></Col>
                <Col span={12}><Statistic title='Total Exchanges' value={5}/></Col>
                <Col span={12}><Statistic title='Total Market Cap' value={5}/></Col>
                <Col span={12}><Statistic title='Total cryptocurrencies' value={5}/></Col>
                <Col span={12}><Statistic title='Total 24 hr Volume' value={5}/></Col>>
            </Row>
        </>
    )
}

export default HomePage
