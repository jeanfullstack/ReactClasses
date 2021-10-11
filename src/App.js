import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import tasks from './sample/tasks.json';

//Components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';






class App extends Component {

    state = {
        tasks: tasks
    }

    //Creacion de la funcion
    addTask = (title, description) => {
        const newTask = {
            title: title,
            description: description,
            id: this.state.tasks.length
        }
        this.setState({
            tasks: [...this.state.tasks, newTask]
        })
    }


    deleteTask = (id) => {
        const newTasks = this.state.tasks.filter(task => task.id !== id);
        this.setState({ tasks: newTasks })
    }


    checkDone = (id) => {
        const newTasks = this.state.tasks.map(task => {
            if (task.id === id) {
                task.done = !task.done
            }
            return task;
        });
        this.setState({ tasks: newTasks })
    }


    render() {
        return <div>
            <Router>

                <Link to="/">Home</Link>
                <br/>
                <Link to="/posts">Posts</Link>


                <Route exact path="/" render={() => {
                return  <div>
                        <TaskForm addTask={this.addTask} />
                        <Tasks
                            tasks={this.state.tasks}
                            deleteTask={this.deleteTask}
                            checkDone={this.checkDone}
                        />
                    </div>
                }}>
                </Route>


                <Route path="/posts" component={Posts} />

            </Router>


        </div>
    }

}


export default App;

//console.log(title, description)

//console.log(newTasks);

//Hora 3 Min 10


/*
Hey coders, en el 02:39:20 a todo aquel que en la funcion this.setState() le haya dado este error: "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops"

La solucion es esta:  onsubmit = () =>{
      this.setState({
        tasks: [...this.state.tasks, newTask]
      })
    }

Se ve que usando la funcion this.setState como lo hizo fazt hacia que constantemente la aplicacion actualice el DOM y para evitar sobrecargar la memoria, react esta programado para que nos lance la excepcion que les mencione arriba y así evitar un loop infinito que crashee la pc. Para ello lo que hice fue en vez de pasarlo a un objeto como hizo fazt, lo pase a una funcion directamente. Mi fuente para solucionar este asunto fue esta mujer:
*/











/* function Helloworld(props) {
    return ( <
        div id = "hello" >
        <
        h3 > { props.subtitle } < /h3>  { props.mytext } < /
        div > < /h3>
    )
} */


/* class Helloworld extends React.Component {

    state = {
        show: true
    }


    toggleShow = () => {
        this.setState({ show: !this.state.show })
    }



    render() {
        if (this.state.show) {
            return ( <
                div id = "hello" >
                <
                h3 > { this.props.subtitle } < /h3>  { this.props.mytext } <
                button onClick = {
                    this.toggleShow
                } > Toggle Show < /button> < /
                div >
            )
        } else {
            return <h1 >
                There are not elements <
                button onClick = { this.toggleShow } >
                Toggle Show <
                /button> < /
            h1 >

        }
    }
}


function App() {
    return ( <
        div > This is my component:
        <
        Helloworld mytext = "Hello Fazt"
        subtitle = "Loremp isump" / >
        <
        Helloworld mytext = "Hola Mundo"
        subtitle = "Component Two" / >
        <
        Helloworld mytext = "Hello!"
        subtitle = "Component Three" / > < /div>

    );
}
 */


/* const App1 = () => <
    div > This is my component: < Helloworld / > < /div>


class App2 extends React.Component {
    render() {
        return <
            div > This is my component: < Helloworld / > < /div>

    }

} */


