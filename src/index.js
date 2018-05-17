import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import marked from 'marked'
import './index.css'

class DisplayContainer extends Component {
    constructor() {
        super();
        this.state = {
            value: "",
        };
    }

    updateState = e => {
        this.setState({ value: e.target.value });
    }

    createMarkup = markup => {
        return {__html: marked(markup)};
    }

    render() {
        return(
            <div>
                <h1 class="App-Header">Markdown Converter</h1><br/>
                <div class="box">
                    <RawInput updateState={this.updateState} />&nbsp;
                    <span dangerouslySetInnerHTML={this.createMarkup(this.state.value)} />
                </div>
            </div>
        );
    }
}

const RawInput = value => {
   return <textarea rows="10" cols="100" onChange={value.updateState} />;
}

ReactDOM.render(<DisplayContainer />, document.getElementById('root'))