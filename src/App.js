import {Link, Route, Switch} from 'react-router-dom'
import {Layout, Typography, Space} from 'antd'
import './App.css'
import {Navbar, Exchanges, HomePage, CryptoDetails, Cryptocurrencies, News} from './components'

const App = () => {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='route'>
                        <Switch>
                            <Route exact path='/'>
                                <HomePage />
                            </Route>
                            <Route exact path='/exchanges'>
                                <Exchanges />
                            </Route>
                            <Route exact path='/cryptocurrencies'>
                                <Cryptocurrencies />
                            </Route>
                            <Route exact path='/crypto/:coinId'>
                                <CryptoDetails />
                            </Route>
                            <Route exact path='/news'>
                                <News />
                            </Route>

                        </Switch>
                    </div>
                </Layout>
            
            <div className='footer'>
                <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
                    Cryotoverse <br />
                    All rights reserved
                </Typography.Title>
                <Space>
                    <Link to='/' />
                    <Link to='/exchanges' />
                    <Link to='/news' />
                </Space>
            </div>
            </div>
        </div>
    )
}

export default App
