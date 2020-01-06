import React from 'react';
import InputComponent from './InputComponent.js'
import ButtonComponent from './ButtonComponent.js'
import TextAreaComponent from './TextAreaComponent.js'
// import { ApiGet, ApiPost, ApiPut } from '../common/Api';

class RedactorSystem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameTopicState: '',
            prologTopicState: '',
            bodyTopicState: '',
            users: ''
        }
    }
    render() {
        return (
            <form>
                <InputComponent title={'Title'} inputChange={this.inputTitleChange} />
                <InputComponent title={'prolog'} inputChange={this.inputPrologChange} />
                <TextAreaComponent inputBodyTextChange={this.inputBodyTextChange} />
                <ButtonComponent butTitle={'Commit'} SubmitButClick={this.SubmitButClick} />
            </form >
        );
    }


    SubmitButClick = (event) => {
        event.preventDefault();
        console.log(this.state.nameTopicState, this.state.prologTopicState, this.state.bodyTopicState)
        fetch('api/title', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nameTopic: this.state.nameTopicState,
                prologTopic: this.state.prologTopicState,
                bodyTopic: this.state.bodyTopicState
            })
        })



    }

    //     const body = {
    //         title: this.state.titleState,
    //     };

    //     ApiPost('/api/title', body)
    //         .then((data) => {
    //             console.log(data);

    //             this.setState({
    //                 sent: true,
    //                 success: true,
    //             });
    //         }).catch((error) => {
    //             console.error(error);

    //             this.setState({
    //                 sent: true,
    //                 success: false,
    //             });
    //         });
    // }

    inputTitleChange = (event) => {
        this.setState({
            nameTopicState: event.target.value
        });
    }
    inputPrologChange = (event) => {
        this.setState({
            prologTopicState: event.target.value
        });
    }
    inputBodyTextChange = (event) => {
        this.setState({
            bodyTopicState: event.target.value
        });
    }
}
export default RedactorSystem;




