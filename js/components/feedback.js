import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';


export class Feedback extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render() {

        return (
            <div>
                {this.props.feedback}
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    feedback: state.feedback
});

export default connect(mapStateToProps)(Feedback);