import React, {Component} from 'react'
import {PageHeader, Divider} from 'antd'
import ReactMarkdown from 'react-markdown';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import './article-detail.css'
import {getOneArticle} from '../../redux/actions'

const md = '# This is a header\n\nAnd this is a paragraphheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\nheader\n'

class ArticleDetail extends Component {
    componentDidMount() {
        const {chapterId} = this.props.match.params
        this.props.getOneArticle(chapterId)
    }

    render() {
        const {currentArticle} = this.props
        if(!currentArticle){
            return null
        }
        return (
            <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                <PageHeader onBack={() => this.props.history.goBack()} title={currentArticle.title} subTitle="最流行的前端打包工具"/>
                <Divider/>
                <div className="md-wrapper">
                    <ReactMarkdown source={currentArticle.content}/>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(
    state => ({currentArticle: state.article.currentArticle}),
    {getOneArticle}
)(ArticleDetail))
