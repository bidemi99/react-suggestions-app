import React, { Component } from 'react';
import './suggestions.css';



class  Suggestions extends Component{
    constructor(){
        super();
        this.state = {
            suggestions:[]
        }
    }

    componentDidMount(){
        fetch('/api/suggestionsAPI')
        .then(res => res.json())
        .then(suggestions => this.setState({suggestions}, () => console.log('suggestion received...', suggestions)));
    }


    render() {
        return(
            <div>
                <h2>Suggestion Box</h2>
                <h4>
                    Do you have an idea how we can improve our products or a new market we can explore?
                    Type any suggestions you have for us below. 
                    Thanks!
                </h4>
                <form>
                    <formgroup>
                        <label for="name">Name</label>
                        <input type="text" placeholder="Enter your full name"></input>
                    </formgroup>
                    <br/>
                    <formgroup>
                        <label for="email">Email</label>
                        <input type="email" name="email" placeholder="Enter a valid email"></input>
                    </formgroup>
                    <br/>
                    <formgroup>
                        <label for="suggestions">Your suggestions here:</label>
                        <textarea rows="4" cols="50" type="text"></textarea>
                    </formgroup>
                    <br/>
                    <button type="submit">Send</button>
                    <button type="submit">Delete</button>
                </form>
                <h4>See what others suggested</h4>
                <ul>
                    {this.state.suggestions.map(suggestion =>
                        <li key={suggestion.id}>{suggestion.name}: {suggestion.idea}</li>)}
                </ul>
                
            </div>
        )
    }
}
export default Suggestions;