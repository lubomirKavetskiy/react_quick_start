/**
 * Created by Любомир on 25.06.2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

// УСТАНОВКА
/* ReactDOM.render(
   <h1>Hello, world</h1>,
   document.getElementById('root')
);
 */

// ВНЕДРЕНИЕ JSX
/* function formatName(user) {
    return user.firstName + ' ' + user.lastName;
};

const user = {
    firstName: 'Lubomir',
    lastName: 'Kavetskiy'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);

// function getGreeding(user) {
//     var a;
//     if(user){
//         a = <h1>Hello, {formatName(user)}!</h1>;
//     }
//     else {
//        a= <h1>Hello, Stranger</h1>;
//     }
//
//     ReactDOM.render(
//         a,
//         document.getElementById('root')
//     );
// }
// getGreeding(user);

const a = "Lub";

ReactDOM.render(<h1>Hello, 'a'</h1>, document.getElementById('root'));
*/

// ОТРИСОВКА ЭЛЕМЕНТОВ

/* const element = <h1>Hello!!!</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
);

function tick(){
    const element = (
        <div>
            <h1>Hello!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );

    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);
*/

//========================================================//
// Components and Props
//========================================================//
/* function Welcome(props) {
  return (
    <h1>
      Hello, {props.name}
    </h1>
  );
}

const element = <Welcome name="Lub" />;

ReactDOM.render(element, document.getElementById('root'));

//
let node = document.getElementById('root');

function Welcome(props) {
  return (
    <h1>
      Hello, {props.name}
    </h1>
  );
}

let naMe='Andriy';

function App() {
  return (
    <div>
      <Welcome name={naMe} />
      <Welcome name="Andr" />
    </div>
  );
}

// const el = App;

ReactDOM.render(
  <App />,
  // el(),
  node,
);

//
function formatDate(date){
    return date.toLocaleDateString();
};

// function Comment(props) {
//     return (
//         <div className="Comment">
//             <div className="UserInfo">
//                 <img className="Avatar"
//                      src={props.author.avatarUrl}
//                      alt={props.author.name}
//                 />
//                 <div className="UserInfo-name">
//                     {props.author.name}
//                 </div>
//             </div>
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     );
// }

function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}
        />
    );
};

// function Comment(props) {
//     return (
//         <div className="Comment">
//             <div className="UserInfo">
//                <Avatar user={props.author}/>
//                 <div className="UserInfo-name">
//                     {props.author.name}
//                 </div>
//             </div>
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     );
// }

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
};

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
};

 const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello, Lub',
        avatarUrl:'http://placekitten.com/g/64/64'
    }
 };

ReactDOM.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
    />,
    node
);
*/

//========================================================//
// State and Lifecycle
//========================================================//
/* let node = document.getElementById('root');

// class Clock extends React.Component {
//     render(){
//         return(
//             <div>
//                 <h1>Hello</h1>
//                 <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }

// setInterval(function () {
//         ReactDOM.render(
//             <Clock date={new Date()}/>,
//             node
//         );
//     },
//     1000);

// class Clock extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             date: new Date()
//         };
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Hello</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }

//
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
        1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    node
);
*/

//========================================================//
// Handling Events
//========================================================//
/* let node = document.getElementById('root');

class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }


    render() {
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    node
);
*/

//========================================================//
// if
//========================================================//
/* let node = document.getElementById('root');

function UserGreeting(props) {
  return <h1>Welcome back</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up</h1>;
}

function Greeting(props) {
    const isLoggedin = props.isLogge;

    if (isLoggedin) {
       return <UserGreeting />;
    }
    return <GuestGreeting />
}

ReactDOM.render(
 <Greeting isLogge={false}/>,
    node
);
*/