import React from 'react'
import InputForm from './ReverseText/InputForm';
import AppTodo from './TodoList/AppTodo';
import PMApp from './PMApp/App'
import { Card } from 'antd';

const tabList = [
  {
    key: 'tab1',
    tab: 'Reverse Text',
  },
  {
    key: 'tab2',
    tab: 'Todo List',
  },
  {
    key: 'tab3',
    tab: 'Project Maneger',
  },
];

const contentList = {
  tab1: <InputForm />,
  tab2: <AppTodo />,
  tab3: <PMApp />,
};

export default class AppList extends React.Component {
  state = {
    key: 'tab1',
    noTitleKey: 'app',
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <div>
        <Card
          style={{ width: '100%' }}
          title="My First React App"
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={key => {
            this.onTabChange(key, 'key');
          }}
        >
          {contentList[this.state.key]}
        </Card>
      </div>
    );
  }
}
