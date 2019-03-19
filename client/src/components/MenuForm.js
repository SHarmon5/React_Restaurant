import React from 'react';
import { Form, } from 'semantic-ui-react';

class MenuForm extends React.Component {
  state = { title: "", };

  handleChange = (e) => {
   this.setState({ title: e.target.value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.updateMenu({id: this.props.id, ...this.state});
      this.props.toggleEdit()
    } else {
    this.props.addMenu(this.state.title);
    }
    this.setState({ title: "", });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label= "Menu"
          placeholder="Create a New Menu"
          required
          value={this.state.title}
          onChange={this.handleChange}
          />      
      </Form>
    )
  }
}

export default MenuForm;