import React from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Counter extends React.Component {
    incrementIfOdd = () => {
       
    };

    incrementAsync = () => {
        
    };

    render() {
        return (
            //After importing our actions functions from actions We call this functions as click events
            <p>
                Clicked: {this.props.count} times
                <button onClick={() => { this.props.increment()}}>
                    +
                </button>
                <button onClick={() => {this.props.decrement()}}>
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
