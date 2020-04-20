import React from 'react';
import ErrorBoundary from './ErrorBoundary'
import BuggyCounter from './BuggyCounter'

class ErrorBoundaryDemo extends React.Component {
    render () {
        return (
            <section>
                <h3> Error Boundary </h3>
                <p> Click on the numbers to increase the counter <br/> The counter is programmed to throw when it reaches 5</p>
                <ErrorBoundary> 
                    <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
                    <BuggyCounter/> 
                    <BuggyCounter/> 
                </ErrorBoundary>
                <hr />
                <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
                <ErrorBoundary> 
                    <BuggyCounter/> 
                </ErrorBoundary>
                <ErrorBoundary> 
                    <BuggyCounter/> 
                </ErrorBoundary>
            </section>
        )
    }
}

export default ErrorBoundaryDemo;