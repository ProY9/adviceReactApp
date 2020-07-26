import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
    
    state = { advice: '' };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                this.setState({ advice });
                // the line above originaly is this.setState({ advice: advice}) bt when the proprty nd the value had the same name, w can just type one 
            })
            .catch((error) => {
                console.log(error);
            })
    }
    // methods r simply a function that belong to a class
    render() {
        const { advice } = this.state;
        return (
            <div className="app">
                <div className="card">
                <h1 className="heading">{advice}</h1>
                <button className="button" onClick={this.fetchAdvice}>
                    <span>giveMeAdvice!!!</span>
                </button>
                </div>
            </div>
        );
    }
}

export default App;