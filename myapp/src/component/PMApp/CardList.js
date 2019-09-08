import React from 'react'
import CardApp from './CardApp';
import { Button , Icon , Row} from 'antd'

export default class CardList extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const { min , max , contents } = this.props
        // console.log(min +'+'+ max)
        return(
            contents.slice(min,max).map((content) => (
                    <CardApp key={content.key} content={content} />
                ))
        )
    }
}   