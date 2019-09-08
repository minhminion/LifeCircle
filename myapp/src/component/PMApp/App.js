import React from 'react'
import CardList from './CardList';
import AddProject from './AddProject'
import uuid from 'uuid';
import { Row , Button, Pagination} from 'antd'

export default class App extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            
            contents:[
                {
                    id: uuid.v4(),
                    title: "React App",
                    completed : false,
                    step : 3,
                },
                {
                    id: uuid.v4(),
                    title: "Vue App",
                    completed : false,
                    step : 3,
                },
                {
                    id: uuid.v4(),
                    title: "Angular App",
                    completed : false,
                    step : 3,
                },
                {
                    id: uuid.v4(),
                    title: "Node App",
                    completed : false,
                    step : 3,
                },
                {
                    id: uuid.v4(),
                    title: "Angular App",
                    completed : false,
                    step : 3,
                },
                {
                    id: uuid.v4(),
                    title: "Node App",
                    completed : false,
                    step : 3,
                },
            ],
            totalContent: 8,
            minValue:0,
            maxValue:8,
        }   
    }

    addProject = (values)=>{
        console.log(values)
        const newProject = {
            id: uuid.v4(),
            title: values.title,
            completed : false,
            step : 3,
        }

        this.setState({ contents :[...this.state.contents,newProject]})
    }

    timer = 0;

    stopCreate = ()=> 
    {
        clearInterval(this.timer)
        console.log('Stop create')
    }

    componentDidMount()
    {
        this.timer = setInterval( ()=>{

            const newProject = {
                id: uuid.v4(),
                title: this.state.contents.length,
                completed : false,
                step : 3,
            }
            this.setState({ contents :[...this.state.contents,newProject]})
            // console.log(this.state.contents.length)
        },1000)
    }

    handlePaging =(value) =>{
        if(value <= 1)
        {
            this.setState({
                minValue: 0,
                maxValue: 4,
              });
        }
        else{
            this.setState({
                minValue: (value-1)*this.state.totalContent,
                maxValue: value*this.state.totalContent
              });
        }
    }

    render()
    {
        const data = this.state.contents;
        return(
            <div>
                <AddProject addProject={this.addProject}/>
                <Button onClick={this.stopCreate}>Stop</Button>
                <Row>
                    <CardList contents={data} min={this.state.minValue} max={this.state.maxValue}/>
                </Row>
                <Pagination 
                    defaultCurrent={1}
                    defaultPageSize={this.state.totalContent}
                    onChange={this.handlePaging}
                    total={this.state.contents.length}
                />
            </div>
        )
    }
}   


