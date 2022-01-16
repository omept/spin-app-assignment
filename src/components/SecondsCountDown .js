import React, { Component } from 'react';

class SecondsCountDown extends Component {
    constructor(props) {
        super(props);
        let from = this.props.from ?? 10;
        this.state = { from, text: from };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState((state) => ({
            text: state.text - 1
        }));

        if (this.state.text === 0) {
            clearInterval(this.timerID);
            this.props.onFinish();
        }
    }

    render() {
        return this.state.text;
    }
}

export default SecondsCountDown;