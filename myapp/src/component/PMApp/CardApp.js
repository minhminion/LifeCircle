import React from 'react'
import PropTypes from 'prop-types'
import { Card , Icon , Avatar ,Col} from 'antd'


const { Meta } = Card

class CardApp extends React.Component {
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const { title , completed , step} = this.props.content
        return(
        <Col span={6} style={cardStyle}>
            <Card
                style={{ width: 300 }}
                cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
                actions={[
                <Icon type="setting" key="setting" />,
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />,
                ]}
            >
                <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={title}
                description="This is the description"
                />
            </Card>
        </Col>
        )
        
    }
}

const cardStyle = {
    marginBottom: 30
}

CardApp.propTypes = {
    content: PropTypes.object.isRequired
}

export default CardApp
