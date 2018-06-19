import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

import './LoginButton.css';

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle} className="loginButton">Войти</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-dialog">
          <ModalHeader toggle={this.toggle}>Вход на сайт</ModalHeader>
          <ModalBody>
            <InputGroup>
                <InputGroupAddon addonType="prepend">Логин</InputGroupAddon>
                <Input placeholder="username" />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="prepend">Пароль</InputGroupAddon>
                <Input placeholder="password" />
            </InputGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Войти</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Отмена</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
