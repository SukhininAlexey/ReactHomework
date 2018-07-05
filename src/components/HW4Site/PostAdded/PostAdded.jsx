import './PostAdded.css';

import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class UserCard extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            user_id: "5b3d7638ea8a0af2bf4bb5ba",
            title: null,
            body: null,
        }
    }
    
    handleUserChange = (e) => {
        this.setState({
            user_id: e.target.value,
        });
    }
    
    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value,
        });
    }
    
    handleBodyChange = (e) => {
        this.setState({
            body: e.target.value,
        });
    }
    
    handleSubmit =(e) => {
        
        fetch(
            'http://localhost:8888/posts',{
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    author_id: this.state.user_id,
                    title: this.state.title,
                    body: this.state.body,
                }),
            }
        )
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
        
        e.preventDefault();
    }
    
    
	render() {
        
		return (
            <Form>
                <FormGroup>
                  <Label for="select-user">User name</Label>
                  <Input type="select" name="user" id="select-user" value={this.state.user_id} onChange={this.handleUserChange}>
                    <option value="5b3d7638ea8a0af2bf4bb5ba">Adam</option>
                    <option value="5b3dbfabea8a0af2bf4bb5be">Eve</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="post-title">Post title</Label>
                  <Input name="title" id="post-title" placeholder="title"  value={this.state.title} onChange={this.handleTitleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="post-body">Post body</Label>
                  <Input type="textarea" name="body" id="post-body" value={this.state.body} onChange={this.handleBodyChange} />
                </FormGroup>
                <Button type="submit" onClick={this.handleSubmit}>Send</Button>
            </Form>
		);
	}
}
