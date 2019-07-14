import React, {Component} from 'react'
import {Typography, Divider, Avatar} from 'antd'
import QueueAnim from 'rc-queue-anim'

import myIcon from '../../images/itachi.jpeg'
const {Title, Paragraph, Text} = Typography

export default class About extends Component {
    render() {
        return (
            <div>
                <Avatar size={64} src={myIcon}/>
                <Divider/>
                <Title>介绍</Title>
                <QueueAnim>
                    <Paragraph key="1">
                        职业：前端菜鸡一枚。
                    </Paragraph>
                    <Paragraph key="2">
                        爱好：知乎、跑跑手游。
                    </Paragraph>
                    <Paragraph key="3">
                        动机：react练手。
                    </Paragraph>
                    <Paragraph key="4">
                        项目技术栈：react全家桶 + ant-design + express + mongoose
                    </Paragraph>
                </QueueAnim>
            </div>
        )
    }
}