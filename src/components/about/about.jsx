import React, {Component} from 'react'
import {Typography, Divider, Avatar} from 'antd'

const {Title, Paragraph, Text} = Typography

export default class About extends Component {
    render() {
        return (
            <div>
                <Avatar size={64} icon="user"/>
                <Divider/>
                <Title>介绍</Title>
                <Paragraph>
                    职业：前端菜鸡一枚。
                </Paragraph>
                <Paragraph>
                    爱好：知乎、跑跑手游。
                </Paragraph>
                <Paragraph>
                    动机：react练手。
                </Paragraph>
                <Paragraph>
                    项目技术栈：react全家桶 + ant-design + express + mongoose
                </Paragraph>
            </div>
        )
    }
}