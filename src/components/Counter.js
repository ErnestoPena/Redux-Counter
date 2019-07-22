import React from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Counter extends React.Component {
    incrementIfOdd = () => {
        // Stretch Problem: Implement an increment function that
        // only increments if the counter value is odd
    };

    incrementAsync = () => {
        // Stretch Problem: Implement an increment function that
        // increments after waiting for one second
    };

    render() {
        return (
            <p>
                Clicked: {this.props.count} times
                <button onClick={() => { const newCount = props.count + 1}}>
                    +
                </button>
                <button onClick={() => {/* Fill me in */ }}>
                    -
                </button>
                 {/* Uncomment these button tags if you got
                around to implementing the extra credit functions */}
                {/* <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                <button onClick={this.incrementAsync}>
                    Increment async
                </button>  */}
            </p>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};


export default connect(mapStateToProps, { increment, decrement })(Counter);
