import React from 'react'

class BuggyCounter extends React.Component {

    state = {
        errorCount : 0  
    }

    incrementCount () {
        this.setState( ({errorCount}) => ({
            errorCount: errorCount + 1
        })) 
    }

    render() {
        if (this.state.errorCount === 5 ) {
            throw 'Component crashed !!'
        }
        return (
            <div>
                <p onClick={this.incrementCount.bind(this)}> {this.state.errorCount} </p>
            </div>
        )
    }
}

export default BuggyCounter;