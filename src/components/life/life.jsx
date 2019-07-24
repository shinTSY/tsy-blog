import React, {Component} from 'react'
import {Carousel, Icon} from 'antd'

import './life.less'
import loveImg from './images/love.jpg'


export default class Life extends Component {
    next = () => {
        this.carousel.next()
    }
    previous = () => {
        this.carousel.prev()
    }

    render() {
        return (
            <div style={{position: "relative", height: '100%', overflow:'hidden'}}>
                <Icon style={{
                    position: "absolute",
                    left: 10,
                    top: '50%',
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    color: "white"
                }}
                      type="left-circle" onClick={this.previous}/>
                <Carousel autoplay effect="fade" ref={node => this.carousel = node}>
                    <img src={loveImg} alt="" style={{width: "100%", height: "100%"}}/>
                    <img src={require('./images/IMG_0860.JPG')} alt="" style={{width: "100%", height: "100%"}}/>
                    <img src={require('./images/chicken.png')} alt="" style={{width: "100%", height: "100%"}}/>

                </Carousel>
                <Icon
                    style={{position: "absolute", right: 10, top: '50%', transform: "translateY(-50%)", color: "white"}}
                    type="right-circle" onClick={this.next}/>
            </div>
        )
    }
}