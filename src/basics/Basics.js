import React from 'react';
import Button from './Button';
import  './Basics.css'
import PropTypes from 'prop-types'

const KeysDemo = ({list}) => {
    var items = list.map((player,index) => <li key={index}> {player}</li>)
    return (
        <ul>
            {items}
        </ul>
    )
}

const WelcomeText = ({userName}) => {
    if (userName) {
        return <p> Welcome {userName}</p>
    } else {
        return <p> Welcome Guest !! </p>
    }
}

const FunctionalRef = () => {
    let inputFieldRef = React.createRef() 
    const addFocus = () => {
        inputFieldRef.current.focus();
    }
    return (
        <div>
            <input type="text" ref={inputFieldRef} />
            <button onClick={addFocus} > Add focus </button>
        </div>
    )
}

const PassingRef = () => {
    let reference = null;
    let childReference = null;
    const viewResult = () => {
        console.log(`Input value parent ${reference.value} & Input value child ${childReference.value}`);
    }
    return (
        <div>
            <p> Parent Component</p>
            <input type="text" ref={(input) => {reference = input}} />
            <PassingRefChild childRef={(input) => {childReference = input}} />
            <button onClick={viewResult}> View console </button>
        </div>
    )
}

const PassingRefChild = (props) => {
    return (
        <div>
            <p> Child component</p>
            <input type="text" ref={props.childRef} /> 
        </div>
    )
} 

const RenderTableData = () => {
    return (
        <React.Fragment>
            <tr>
                <td> FrontEnd </td>
                <td> React </td>
            </tr>
        </React.Fragment>
    )
}

class Basics extends React.Component {
    
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this)
        this.input = React.createRef();
        this.inputField = React.createRef();
    }

    state = {
        counter1 : 10,
        counter2 : 0,
        address: {
            city: 'Chennai',
            state: null
        },
        isLoggedIn : true,
        userName : 'Admin',
        profession: '',
        messageFromChild: ''
    }

    btn1 () {
        this.setState((state) => ({
            counter1: state.counter1 + 1 
        }))
    }

    btn2 = (value) => {
        this.setState((state) =>  ({
            messageFromChild : value
        }))
    }

    updateAddress () {
        this.setState({
            address : {
                ... this.state.address,
                state : "Tamil Nadu"
            }
        })
    }

    consoleText (field, e) {
        console.log(field + '->' + e.target.value )
    }

    consoleMsg (type) {
        if (type === 'controlled') {
            console.log(this.state.profession)
        }
        else {
            console.log(this.input.current.value)
        }
    }

    handleChange (e) {
        this.setState({
            profession : e.target.value
        })
    }

    render() {
        var style1 = {
            color: "red"
        };
        var playerList = ['Adam', 'Melvin', 'George']
        return (
            <div>
                <h2>{this.props.propString}</h2>
                <section>
                    <h4> Passing handler to child </h4>
                    <p style={style1}> {this.state.counter1} </p>
                    <button style={style1} onClick={this.btn1.bind(this)}> Counter </button>
                    
                    <p> {this.state.messageFromChild} </p>
                    <Button handler={this.btn2}> </Button>
                </section> 
                
                <section>
                    <h4 > Update nested object state </h4>
                    <p> City - {this.state.address.city } </p>
                    <p> State - {this.state.address.state } </p>
                    <button onClick={this.updateAddress.bind(this)}> Update Address </button>
                </section>

                <section>
                    <h4> Prop-Types  </h4>
                    <p>Array: {this.props.propArray}</p>			
                    <p>Bool: {this.props.propBool ? "True..." : "False..."}</p>
                    <p>Func: {this.props.propFunc('Prop Function')}</p>
                    <p>Number: {this.props.propNumber}</p>
                    <p>String: {this.props.propString}</p>
                </section>

                <section>
                    <h4> List & Keys  </h4>
                    <p> Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity: </p>
                    <KeysDemo list={playerList} />
                </section>

                <section>
                    <h4> Passing arguments to event handlers</h4>
                    <p id="display"></p>
                    <input type="text" placeholder="view console" onChange={this.consoleText.bind(this, 'firstName')} />
                    <input type="text" placeholder="view console" onChange={(e) => this.consoleText('lastName', e)} />
                </section>

                <section>
                    <h4> Conditional rendering </h4>
                    <p> Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them. </p>
                    { this.state.isLoggedIn ? <WelcomeText userName={this.state.userName} /> :
                        <WelcomeText />
                    }
                </section>

                <section>
                    <h4> Controlled components </h4>
                    <p>  In a controlled component, form data is handled by a React component </p>
                    Your profession 
                    
                    <input type="text" placeholder="view console" value={this.state.profession} onChange={this.handleChange} />
                    <button onClick={this.consoleMsg.bind(this, 'controlled')}> Submit</button>
                    
                    <h4> Uncontrolled components</h4>
                    <p> Here form data is handled by the DOM itself </p>
                    Your hobby 
                    
                    <input type="text" placeholder="view console" ref={this.input} />
                    <button onClick={this.consoleMsg.bind(this,'uncontrolled')}> Submit</button>
                </section>
                
                <section>
                    <h4> Ref inside class Component </h4>
                    <input type="text" ref={this.inputField} />
                    <button onClick={e=> this.inputField.current.focus()}> Add focus </button>
                    <h4> Ref inside functional Component </h4>
                    <FunctionalRef />
                    <h4> Passing Ref to child component </h4>
                    <PassingRef />
                </section>

                <section>
                    <h4> React Fragments </h4>
                    <p> A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM. </p>
                    <table> 
                        <thead>
                            <tr>
                                <th> Domain </th>
                                <th> Technology</th>
                            </tr>
                        </thead>
                        <tbody>
                            <RenderTableData />
                        </tbody>
                    </table>
                </section>
            </div>
        )
    }
}

Basics.defaultProps = {
    propString : "React Basics",
    propArray: [1, 2, 3, 4, 5],
    propBool: "true",
    propFunc: function(e) {
        return e
    },
    propNumber: 1
}

Basics.propTypes = {
    propNumber: PropTypes.number,
    propArray: PropTypes.array.isRequired,
    propBool : PropTypes.bool.isRequired,
    propFunc : PropTypes.func,
    propNumber: PropTypes.number,
    propString : PropTypes.string
}

export default Basics;