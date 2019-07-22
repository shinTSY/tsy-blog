import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect, Route, Switch, Link} from 'react-router-dom'
import {Layout, Menu, Breadcrumb, Icon} from 'antd'

import Articles from '../../components/article/articles'
import ArticleDetail from '../../components/article-detail/article-detail'
import About from '../../components/about/about'
import Life from '../../components/life/life'

import './main.less'

const {SubMenu} = Menu
const {Header, Content, Footer, Sider} = Layout

class Main extends Component {

    getRouterIndex = (pathName) => {
        const routerArray = ['/', '/life', '/about']
        const routeIndex = routerArray.findIndex((route) => route === pathName)
        return [`${routeIndex + 1}`]
    }

    changePage = ({item, key, keyPath, domEvent}) => {
        switch (key) {
            case '1':
                this.props.history.push('')
                break
            case '2':
                this.props.history.push('/life')
                break
            case '3':
                this.props.history.push('/about')
                break
            default:
                break

        }
    }

    render() {
        // const {user} = this.props
        // if (!user._id) {
        //     return <Redirect to="/login"/>
        // }
        return (
            <Layout style={{height: '100%'}}>
                <Header className="header">
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={this.getRouterIndex(this.props.location.pathname)}
                        style={{lineHeight: '64px'}}
                        onClick={this.changePage}
                    >
                        <Menu.Item key="1"><Icon type="edit"/>文章</Menu.Item>
                        <Menu.Item key="2"><Icon type="fire"/>生活</Menu.Item>
                        <Menu.Item key="3"><Icon type="user"/>关于我</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{padding: '0 50px'}} className="bg-wrapper">
                    <Layout style={{
                        padding: '24px 0',
                        background: 'rgba(255, 255, 255, .97)',
                        height: '100%',
                        boxShadow: '0px 0 10px 1px rgba(0,0,0, 0.3)'
                    }}>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            <Switch>
                                <Route path="/detail/:chapterId" component={ArticleDetail}/>
                                <Route path="/about" component={About}/>
                                <Route path="/life" component={Life}/>
                                <Route path="" component={Articles}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center', zIndex: 3}} className="bg-wrapper">shinTSY</Footer>
            </Layout>
        )
    }
}

export default connect(
    state => ({user: state.user})
)(Main)