
import React from 'react';


import { Row, Col, Menu, Icon } from 'antd';
import '../static/style/components/header.less';


const Header = () => {
    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className="header-logo">xuwenliu</span>
                    <span className="header-txt">专注前端开发。</span>
                </Col>
                <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={8}>
                    <Menu mode="horizontal">
                        <Menu.Item key="home">
                            <Icon type="home" />
                            Home
                        </Menu.Item>
                        <Menu.Item key="article">
                            <Icon type="read" />
                            Article
                        </Menu.Item>
                        <Menu.Item key="life">
                            <Icon type="smile" />
                            Life
                        </Menu.Item>
                        <Menu.Item key="about">
                            <Icon type="user" />
                            About
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header;