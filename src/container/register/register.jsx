import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Form, Icon, Input, Button, Typography, Divider, message} from 'antd'

import './register.less'
import {register} from '../../redux/actions'

const {Title} = Typography

class Register extends Component {
    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            const {username, password, confirmPassword} = values
            if (!err) {
                console.log('Received values of form: ', values)
                if(password !== confirmPassword){
                    return message.error('两次密码要一致哦~')
                }
                this.props.register({username, password})
            }
        })
    }

    toLogin = (e) => {
        e.preventDefault()
        this.props.history.replace('/login')
    }

    render() {
        const {getFieldDecorator} = this.props.form
        const {_id, msg} = this.props.user
        if (_id) {
            message.success('恭喜您，注册成功~')
            return <Redirect to='/'/>
        } else if (msg) {
            message.error(msg)
        }
        return (
            <div className="background">
                <div className="form-login">
                    <Title className="title">TSY-BLOG</Title>
                    <Divider/>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: '用户名不能为空哦!'}],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="用户名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: '密码不能为空哦!'}],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="密码"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('confirmPassword', {
                                rules: [{required: true, message: '确认密码不能为空哦!'}],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="确认密码"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button login-btn">
                                注&nbsp;&nbsp;&nbsp;&nbsp;册
                            </Button>
                            <a href="#" onClick={this.toLogin}>现在就去登录！</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

const RegisterForm = Form.create()(Register)

export default connect(
    state => ({user: state.user}),
    {register}
)(RegisterForm)