import React, { Component } from 'react';
import 'antd/dist/antd.css';
import ShowTitle from './ShowTitle'
import { Input, Button ,Row , Col , Form, Checkbox } from 'antd'

class InputForm extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            title : '',
            timer: 0,
            BColor: 'none',
            reverse: true,
            upcase: false,
        }
    }

    getValue = (e) =>
    {
        this.setState({ title: e.target.value})
    }

    checkOption =(e) =>{
        const target = e.target;
        let _value = target.value;
        this.setState({ [_value] : !this.state[_value] });
    }

    runOption = (e)=>
    {
        e.preventDefault();
        let _title = this.state.title
        _title = this.state.reverse ? _title.split('').reverse().join('') : _title;
        _title = this.state.upcase ? _title.toUpperCase() : _title
        this.setState({ 
            title: _title
        })
    }

    componentDidMount()
    {
        
    }

    

    componentDidUpdate()
    {
        // console.log(this.state.title);
        // console.log(this.state.reverse+"  "+this.state.upcase);
    }

    render()
    {
        const { title,reverse,upcase } = this.state
        return (
            <div style={formStyle}>
                <Form onSubmit={this.runOption}>
                    <Row gutter={10}>
                        <Col span={15}>
                            <Input  placeholder='Text here .... ' 
                                    onChange={this.getValue}
                                    value={title}
                                    />
                        </Col>
                        <Col span={4}>
                            <Checkbox value='reverse' checked={this.state.reverse} onChange={this.checkOption}> Reverse Text</Checkbox>
                            <Checkbox value='upcase' checked={this.state.upcase} onChange={this.checkOption}> To Upcase</Checkbox>
                        </Col>
                        <Col span={3}>
                            <Button  htmlType="submit" icon="sync">Run</Button>
                        </Col>
                    </Row>
                </Form>
                <ShowTitle title={title} />
            </div>
        )
    }
}

const formStyle = {
    margin :'auto',
    width: "100%",
    backGround : InputForm.BColor
}

export default InputForm