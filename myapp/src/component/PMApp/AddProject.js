import React from 'react'
import { Button, Modal, Form, Input } from 'antd'
import TextArea from 'antd/lib/input/TextArea'

class AddProject extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            visible: false
        }
    }

    showModal = () =>{
        this.setState({
            visible: true
        })
    }

    handleCancel = () =>{
        this.setState({
            visible: false
        })
    }

    handleOk = () =>{
        this.setState({
            visible: false
        })
    }

    handleCreate =() =>{
        const { form } = this.formRef.props
        form.validateFields((err,values) => {
            if(err)
            {
                return;
            }
            
            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ visible: false });
            this.props.addProject(values);
        })

    }


    saveForm = formRef => {
        this.formRef = formRef
        console.log(this.formRef)
    }

    render()
    {
        return(
            
           <div>
                <Button icon='plus' type="primary" style={btnStyle} onClick={this.showModal}>New Project</Button>
                <ColectionsSubmit 
                    wrappedComponentRef={this.saveForm}
                    visible={this.state.visible} 
                    onCreate={this.handleCreate} 
                    handleOk={this.handleOk}
                    handleCancel={this.handleCancel}/>
            </div> 
        )
    }
}

const btnStyle = {
    marginBottom: 30
}

const ColectionsSubmit = Form.create({ name: 'form_in_modal'})(
    class extends React.Component{
        constructor(props)
        {
            super(props)
        }
        
        render(){
            const { visible, onCreate, handleCancel, handleOk , form} = this.props;
            const { getFieldDecorator } = form
            return(
                <Modal 
                        visible={visible}
                        title={'Create new project'}
                        onCancel={handleCancel}
                        onOk={onCreate}
                        okText={'Create'}
                    >
                        <Form layout='vertical'> 
                            <Form.Item label={'Title'}>
                            {getFieldDecorator('title', 
                            {
                                rules: [{ required: true, message: 'Please input the title of collection!' }],
                            })(<Input placeholder='Text here ...'/>)}
                            </Form.Item>
                            <Form.Item label={'Decription'}>
                            {getFieldDecorator('description', 
                            {
                                rules: [{ required: false, message: 'Please input the title of collection!' }],
                            })(<TextArea placeholder='Text here ...'/>)}
                            </Form.Item>
                        </Form>
                    </Modal>
            )
        }
    }
)

export default AddProject
