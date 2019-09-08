import { Layout, Menu, Breadcrumb, Icon, Input } from 'antd';
import React , {Component} from 'react';
import AppList from './AppList'
import uuid from 'uuid'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const tabList1 = [
    {
        key: uuid.v4(),
        nav: 'tab1',
        title: 'My App',
        options: [ 'Todo List','option 2','option 3' ]
    },
]

const contentOption = {
    todoList : <AppList />,
    reverseText: <h3>TAB2</h3>,
}

class AppLayout extends Component{
    constructor(props)
    {
        super(props);
        this.state ={
            tabs: tabList1,
            title: <AppList />
        }
    }

    itemSelect = () =>{
        console.log('Selected')
    }

    componentWillMount()
    {
        this.state.tabs.map((tab) =>
            (
                console.log(tab.key)
            )
        )
    }

    render()
    {
        return(
            <Layout >
                <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
                </Header>
                <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                    {this.state.tabs.map((tab) =>(
                        <SubMenu
                        key={tab.key}
                        title={tab.title}
                        onTitleClick={this.itemSelect()}
                        >
                            {tab.options.map((option) =>(
                                <Menu.Item name={option} key={uuid.v1()}>{option}</Menu.Item>
                            ))}
                        </SubMenu>
                    ))}
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                    style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                    >
                        {this.state.title}
                    </Content>
                </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default AppLayout
