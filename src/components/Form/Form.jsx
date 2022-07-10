import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Label, Input, Button } from './Form.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
    this.formReset();
  };

  formReset = () => this.setState({ name: '', number: '' });

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameInputId}>
          Name
          <Input
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor={this.numberInputId}>
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            id={this.numberInputId}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">+ Add contact</Button>
      </form>
    );
  }
}

export default Form;
