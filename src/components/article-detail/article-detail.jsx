import React, { Component } from "react"
import { PageHeader, Divider } from "antd"
import ReactMarkdown from "react-markdown"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import moment from "moment"

import "./article-detail.css"
import { getOneArticle } from "../../redux/actions"

class ArticleDetail extends Component {
  componentDidMount() {
    const { chapterId } = this.props.match.params
    this.props.getOneArticle(chapterId)
  }

  render() {
    const { currentArticle } = this.props
    if (!currentArticle) {
      return null
    }
    return (
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <PageHeader
          onBack={() => this.props.history.goBack()}
          title={currentArticle.title}
          subTitle={`「${currentArticle.description}」 | 发表时间： ${moment(currentArticle.time).format('YYYY-MM-DD HH:mm:ss')}`}
        />
        <Divider />
        <div className="md-wrapper">
          <ReactMarkdown source={currentArticle.content} />
        </div>
      </div>
    )
  }
}

export default withRouter(
  connect(
    state => ({ currentArticle: state.article.currentArticle }),
    { getOneArticle }
  )(ArticleDetail)
)
