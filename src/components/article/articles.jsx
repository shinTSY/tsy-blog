import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {List, Typography, Pagination} from 'antd'

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
                <h3 style={{marginBottom: 28}}>文章列表</h3>
                <List
                    header={<div>Header</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <Link to="/detail/1">
                            <List.Item>
                                <Typography.Text mark>[ITEM]</Typography.Text> {item}
                            </List.Item>
                        </Link>
                    )}
                />
                <Pagination style={{position: 'absolute', bottom: 10, left: '50%', transform: "translateX(-50%)"}}
                            showQuickJumper defaultCurrent={1} total={50} onChange={this.onChange}/>
            </div>
        )
    }
}

export default withRouter(Articles)