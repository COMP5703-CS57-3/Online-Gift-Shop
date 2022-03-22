//index.js
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="center-align">
                    Hello<br/>
                </h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
