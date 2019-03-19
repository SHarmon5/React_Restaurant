import React from 'react';
import { Button, Icon, Header } from 'semantic-ui-react';
import MenuForm from './MenuForm';




class Menu extends React.Component {
  state = { editing: false, };
  
  toggleEdit = () => this.setState({ editing: !this.state.editing });

  
  
  render() {

    const styles = {
      pointer: {
        cursor: "pointer",
      },
      flex: {
        display: "flex",
        alignItems: "center",
      },
    };

    const { id, title, deleteMenu } = this.props
      return (
        <div style={styles.flex}>
          <div style={styles.flex}>
            <div className="center">
            <Header as="h2">{title}</Header>
            </div>
          </div>
          <Button 
            icon 
            color="red" 
            size="tiny" 
            onClick={() => deleteMenu(id)} 
            style={{ marginLeft: "15px", }}
          >
            <Icon name="trash" />
          </Button>
          { this.state.editing ? 
          <MenuForm {...this.props} toggleEdit={this.toggleEdit} /> : <div></div>}
          <Button 
            icon 
            color="yellow" 
            size="tiny" 
            onClick={this.toggleEdit} 
            style={{ marginLeft: "15px", }}
          >
            <Icon name="pencil" />
          </Button>
        </div>

        )

   
  };
}

export default Menu;