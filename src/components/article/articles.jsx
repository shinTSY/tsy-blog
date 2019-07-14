import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {List, Typography, Pagination} from 'antd'
import QueueAnim from 'rc-queue-anim'
import Texty from 'rc-texty'

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
]

class Articles extends Component {
    onChange = (pageNumber) => {
        console.log(pageNumber)
    }

    render() {
        return (
            <div style={{height: '100%', position: 'relative'}}>
                <h3 style={{marginBottom: 28}}><Texty>文章列表</Texty></h3>
                <List
                    header={<div>Header</div>}
                    bordered
                >
                    <QueueAnim delay={300}>
                        {data.map((item, index) => (
                            <List.Item key={index}>
                                <Link to="/detail/1">
                                    <Typography.Text mark>[ITEM]</Typography.Text> {item}
                                </Link>
                            </List.Item>
                        ))}
                    </QueueAnim>
                </List>
                <Pagination style={{position: 'absolute', bottom: 10, left: '50%', transform: "translateX(-50%)"}}
                            showQuickJumper defaultCurrent={1} total={50} onChange={this.onChange}/>
            </div>
        )
    }
}

export default withRouter(Articles)