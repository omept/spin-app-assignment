import React, { Component } from 'react';

class SecondsCountDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from: this.props.from ?? 10,
            text: this.props.from ?? 10
        };
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