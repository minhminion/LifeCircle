import React, { Component } from 'react'
import { Row , Col } from 'antd'
import PropTypes from 'prop-types'

class ShowTitle extends Component {
    constructor(props)
    {
        super(props);
    }
    render()
    { 
        return (
        <Row style={titleStyle}>
            <Col span={24}>
                <h1>
                    {this.props.title}
                </h1>
            </Col> 
        </Row>
        )
    }
}

const titleStyle = {
    lineHeight : 2,
    fontSize: 100
}

ShowTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default ShowTitle
