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
// if &&
//========================================================//
// let node = document.getElementById('root');
/*
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.loginClick = this.loginClick.bind(this);
        this.logoutClick = this.logoutClick.bind(this);
        this.state = {login: false};
    }

    loginClick() {
        this.setState({login: true})
    }

    logoutClick() {
        this.setState({login: false})
    }

    render() {
        const login = this.state.login;

        let button = null;

        if (login) {
            button = <LogoutButton onClicK={this.logoutClick} />;
        } else {
            button = <LoginButton onClicK={this.loginClick} />;
        }

        return (
            <div>
                <Greeting login={login} />
                {button}
            </div>
        );
    }
}

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const login = props.login;
    if (login) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    console.log(props.onClicK);
    return (
        <button onClick={props.onClicK}>
            Login
        </button>

    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClicK}>
            Logout
        </button>
    );
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);
*/
/*
//
function Mailbox(props) {
    const unreadMessages = props.unreadMessages;

    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread message.
                </h2>
            }
        </div>
    );
}

const message = ['React', 'Re: React'];

ReactDOM.render(
    <Mailbox unreadMessages={message} />,
    node
);

//
function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);
*/

//========================================================//
// ul>li
//========================================================//
/* let node = document.getElementById('root');

// const numbers = [1, 2, 3, 4, 5];
//
// const listItems = numbers.map((number) =>
//     <li>{number}</li>
// );
//
// ReactDOM.render(
//     <ul>{listItems}</ul>,
//     node
// );

// adding keys
function NumberList(props) {
    const numbers = props.numBERS;

    const listItems = numbers.map((num) =>
        <li key={num.toString()} >
            {num}
        </li>
    );

    return (
      <ul>{listItems}</ul>
    );
}

const numBer = [1, 2, 3, 4, 5];

ReactDOM.render(
    <NumberList numBERS={numBer}/>,
    node
);

//
//EXAMPLE PROPS
function ListItem(props) {
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numBERS;

    const listItems = numbers.map((num) =>
    <ListItem key={num.toString()}
        value={num} />
    );

    return (
        <ul>
            {listItems}
        </ul>
    );
}

const numbeR = [1, 2, 3, 4];

ReactDOM.render(
    <NumberList numBERS={numbeR}/>,
    document.getElementById('root')
);

//
function Blog(props) {
    const sideBar = (
        <ul>
            {props.posts.map((post) =>
            <li key={post.id}>
                {post.title}
            </li>
            )}
        </ul>
    );

    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );

    return (
        <div>
            {sideBar}
            <hr />
            {content}
        </div>
    );
}

const pOsTs =  [
    {id: 1, title: 'Heloo', content: 'Welcom'},
    {id: 2, title: 'Hi', content: 'By'}
];

ReactDOM.render(
    <Blog posts={pOsTs}/>,
    node
);
*/

//========================================================//
// input
//========================================================//
/* // let node = document.getElementById('root');
//
// class Form extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: ' '
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//
//     handleSubmit(event) {
//         alert('Text field value is: ' + this.state.value);
//     }
//
//     render() {
//         return(
//             <div>
//                 <input type="text"
//                     placeholder="Hello"
//                     // value={this.state.value}
//                     onChange={this.handleChange}
//                 />
//
//                 <button onClick={this.handleSubmit}>
//                     Submit
//                 </button>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Form />,
//     node
// );


// class Form extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ' '};
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//
//     handleSubmit(event) {
//         alert('Textarea value is: ' + this.state.value);
//     }
//
//     render() {
//         return (
//             <div>
//         <textarea
//             name="description"
//             value={this.state.value}
//             onChange={this.handleChange}
//         />
//                 <br />
//                 <button onClick={this.handleSubmit}>
//                     Submit
//                 </button>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Form />,
//     document.getElementById('root')
// );


// class Form extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ' '};
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//
//     handleSubmit(event) {
//         alert('Select value is: ' + this.state.value);
//     }
//
//     render() {
//         return (
//             <div>
//                 <select value={this.state.value} onChange={this.handleChange}>
//                     <option value="A">Apple</option>
//                     <option value="B">Banana</option>
//                     <option value="C">Cranberry</option>
//                 </select>
//                 <button onClick={this.handleSubmit}>
//                     Submit
//                 </button>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Form />,
//     document.getElementById('root')
// );


// class Form extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: 'B'};
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//
//     handleSubmit(event) {
//         alert('Radio button value is: ' + this.state.value);
//     }
//
//     render() {
//         return (
//             <div>
//                 <label>
//                     <input
//                         type="radio"
//                         name="choice"
//                         value="A"
//                         onChange={this.handleChange} />
//                     Option A
//                 </label>
//                 <br />
//                 <label>
//                     <input
//                         type="radio"
//                         name="choice"
//                         value="B"
//                         onChange={this.handleChange}
//                         defaultChecked={true} />
//                     Option B
//                 </label>
//                 <br />
//                 <label>
//                     <input
//                         type="radio"
//                         name="choice"
//                         value="C"
//                         onChange={this.handleChange} />
//                     Option C
//                 </label>
//                 <br />
//                 <br />
//                 <button onClick={this.handleSubmit}>
//                     Submit
//                 </button>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Form value="A"/>,
//     document.getElementById('root')
// );


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: {'A': false,
                      'B': true,
                      'C': false}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        // Copy the object so we don't mutate the old state.
        // (This requires an Object.assign polyfill):
        const checked = Object.assign({}, this.state.checked);
        console.log(this.state.checked);
        console.log(checked);
        if (!checked[value]) {
            checked[value] = true;
        } else {
            checked[value] = false;
        };
        this.setState({checked});
    }

    handleSubmit(event) {
        alert('Boxes checked: ' +
            (this.state.checked.A ? 'A ' : '') +
            (this.state.checked.B ? 'B ' : '') +
            (this.state.checked.C ? 'C' : '')
        );
    }

    render() {
        return (
            <div>
                <label>
                    <input
                        type="checkbox"
                        value="A"
                        onChange={this.handleChange} />
                    Option A
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="B"
                        onChange={this.handleChange}
                        defaultChecked={true} />
                    Option B
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="C"
                        onChange={this.handleChange} />
                    Option C
                </label>
                <br />
                <br />
                <button onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Form />,
    document.getElementById('root')
);
*/

//========================================================//
// upper knowlege
//========================================================//
let node = document.getElementById('root');

/* function BoilingVerdict(props) {
    if(props.celsiy >= 1) {
        // console.log(props)
        return <p>The water is boiling</p>
    }
    return <p>The water would not boil</p>
}


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ' '
        }
        this.handlChange = this.handlChange.bind(this);
    }

    handlChange(e) {
        this.setState({
            value: e.target.value    
        });
        console.log("this.state.value- " + this.state.value);
    }
    
    render() {
        console.log("val: " + this.state.value);
        const val = this.state.value;

        return(
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                    type="text"
                    value={val}
                    onChange={this.handlChange}
                />

                <BoilingVerdict celsiy={parseFloat(val)}/>
            </fieldset>

        );
    }
}

ReactDOM.render(
    <Calculator />,
    node
);
*/

//

/* const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
    console.log('toCelsius: ' + fahrenheit);
    return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius) {
    console.log('toFarenheit: ' + celsius);
    return (celsius * 9 / 5) + 32;
}

function tryConvert(value, convert) {
    const input = parseFloat(value);
    console.log('value in tryConvert fot farenheit: ' + value);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function BoilingVerdict(props) {
    console.log('props.celsiu__s: ' + props.celsiu__s);
    if (props.celsiu__s >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChang___e(e.target.value);
        console.log('value: ' + this.props.valu__e);
        console.log('scale: ' + this.props.scal__e);
    }

    render() {
        const vAlue = this.props.valu__e;
        const sCale = this.props.scal__e;
        const typeofInput = this.props.typ__e;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[sCale]}:</legend>
                <input type={typeofInput}
                       value={vAlue}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {value: '', scale: 'c'};
    }

    handleCelsiusChange(val) {
        this.setState({scale: 'c', value: val});
    }

    handleFahrenheitChange(val) {
        this.setState({scale: 'f', value: val});
    }

    render() {
        const scalE = this.state.scale;
        const valuE = this.state.value;
        const celsiuS = scalE === 'f' ? tryConvert(valuE, toCelsius) : valuE;
        const fahrenheit = scalE === 'c' ? tryConvert(valuE, toFahrenheit) : valuE;

        return (
            <div>
                <TemperatureInput
                    typ__e="number"
                    scal__e="c"
                    valu__e={celsiuS}
                    onChang___e={this.handleCelsiusChange} />
                <TemperatureInput
                    typ__e="number"
                    scal__e="f"
                    valu__e={fahrenheit}
                    onChang___e={this.handleFahrenheitChange} />
                <BoilingVerdict
                    celsiu__s={parseFloat(celsiuS)} />
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);
*/

/* function FancyBorder(props) {
    return(
        <div className={'FancyBorder Fancyborder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomDialoge() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcom
            </h1>
            <p className="Dialog-message">
                Thank you
            </p>
        </FancyBorder>
    );
}

ReactDOM.render(
    <WelcomDialoge />,
    document.getElementById('root')
);
*/

function Contacts() {
  return <div className="Contacts" />;
}

function Chat() {
  return <div className="Chat" />;
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}

ReactDOM.render(<App />, document.getElementById('root'));
//==========================//
// +++ REMEMBER +++ //
//==========================//
