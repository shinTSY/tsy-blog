import React, {Component} from 'react'
import {PageHeader, Divider} from 'antd'
import ReactMarkdown from 'react-markdown';

import './article-detail.css'

const md = '# This is a header\n\nAnd this is a paragraphheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\n'

export default class ArticleDetail extends Component {
    render() {
        const {chapterId} = this.props.match.params
        return (
            <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                <PageHeader onBack={() => this.props.history.goBack()} title="Webpack" subTitle="最流行的前端打包工具"/>
                <Divider/>
                <div className="md-wrapper">
                    <ReactMarkdown source={md}/>
                </div>
            </div>
        )
    }
}