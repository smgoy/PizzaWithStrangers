import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class EventDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: {text: 'this week', order: 0},
      dropdownItems: [
        {text: 'this month', order: 1},
        {text: 'this year', order: 2}
      ]
    };
  }

  toggleTitle(eventKey) {
    const itemIndex = this.state.dropdownItems.indexOf(eventKey);
    this.state.dropdownItems.splice(itemIndex, 1);
    if (this.state.dropdownItems[0].order < this.state.title.order) {
      this.state.dropdownItems.push(this.state.title);
    } else {
      this.state.dropdownItems.unshift(this.state.title);
    }
    this.setState({ title: eventKey });
  }

  render() {
    const dropdownItems = this.state.dropdownItems.map( item => (
      <MenuItem eventKey={item} key={item.text}>{item.text}</MenuItem>
    ));

    return(
      <DropdownButton bsStyle='link'
                      title={this.state.title.text}
                      id='dropdown-basic'
                      onSelect={this.toggleTitle.bind(this)}>
        {dropdownItems}
      </DropdownButton>
    );
  }
}

export default EventDropdown;
