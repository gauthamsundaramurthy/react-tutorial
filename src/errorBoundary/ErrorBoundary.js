import React from 'react';

class ErrorBoundary extends React.Component {
    state = {
        hasError : null,
        errorInfo : null    
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: error,
            errorInfo: info
        })
    }

    render() {
        let isError = this.state.hasError;
        if (isError) {
            return (
                <div>
                    <h4> Something went wrong </h4>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.hasError && this.state.hasError.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            )
        } else {
            return (this.props.children);
        }
    }
}

export default ErrorBoundary;