import React, {Component} from 'react'
import {Form, Icon, Input, Button, Typography, Divider} from 'antd'

import './login.less'

const {Title} = Typography

class Login extends Component {
    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values)
            }
        })
    }

     toRegister = (e) => {
        e.preventDefault()
        this.props.history.replace('/register')
    }

    render() {
        const {getFieldDecorator} = this.props.form
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
                            <Button type="primary" htmlType="submit" className="login-form-button login-btn">
                                登&nbsp;&nbsp;&nbsp;&nbsp;录
                            </Button>
                            <a href="" onClick={this.toRegister}>没有账号？去注册呗！</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

const LoginForm = Form.create()(Login)

export default LoginForm