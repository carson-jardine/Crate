//Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//UI Imports
import Input from "../../ui/input/Input";
import Button from "../../ui/button";
import { Grid, GridCell } from '../../ui/grid'
import Textarea from "../../ui/input/Textarea"
import Select from "../../ui/input/Select"

//App Imports
import userRoutes from "../../setup/routes/user";
import { editProfile } from "./api/actions"

class EditProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: '',
      name: '',
      email: '',
      bio: '',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: ''
    } 
  }

  componentDidMount() {
    const { shippingAddress, image, name, email, bio} = this.props.user.details
    // const { street1, street2, city, state, zip } = shippingAddress
    this.setState({
      name,
      email
    })
  }

  updateInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleEditProfile = (event) => {
    event.preventDefault()
    const { street1, street2, city, state, zip, image, name, email, bio} = this.state
    const shippingAddress = {
      street1,
      street2,
      city,
      state,
      zip
    }

    const updatedProfile = {
      image,
      name,
      email,
      bio,
      shippingAddress,
      role: "USER"
    }
    this.props.editProfile(updatedProfile)
    this.props.history.push(userRoutes.profile.path)
  }

  render() {
    return (
      <Grid alignCenter={true} style={{ padding: '1em' }}>
        <GridCell style={{ textAlign: 'center', margin: '2em' }}>
          <form>
            <h2>Edit your Bio</h2>
            <GridCell style={{ textAlign: 'left', margin: '2em' }}>
              <label htmlFor="image">Profile Picture</label>
              <Textarea
                label="picture"
                type="text"
                fullWidth={true}
                placeholder="Image URL"
                name="image"
                autoComplete="off"
                value={this.state.image}
                onChange={this.updateInput}
              />
            </GridCell>
            <GridCell style={{ textAlign: 'left', margin: '2em' }}>
              <label htmlFor="name">Your Name</label>
              <Input
                label="Name"
                type="text"
                fullWidth={true}
                required="required"
                placeholder="Full Name"
                name="name"
                autoComplete="off"
                value={this.state.name}
                onChange={this.updateInput}
              />
            </GridCell>
            <GridCell style={{ textAlign: 'left', margin: '2em' }}>
              <label htmlFor="email">Your Email</label>
              <Input
                type="text"
                fullWidth={true}
                required="required"
                placeholder="Email Address"
                name="email"
                autoComplete="off"
                data-cy="email"
                value={this.state.email}
                onChange={this.updateInput}
              />
            </GridCell>
            <GridCell style={{ textAlign: 'left', margin: '2em' }}>
              <label htmlFor="bio">Your Bio</label>
              <Textarea
                type="text"
                fullWidth={true}
                placeholder="Describe Yourself"
                name="bio"
                autoComplete="off"
                data-cy="bio"
                value={this.state.bio}
                onChange={this.updateInput}
              />
            </GridCell>
            <GridCell style={{ textAlign: 'left', margin: '2em' }}>
              <label htmlFor="street1">Your Street</label>
              <Input
                type="text"
                fullWidth={true}
                required="required"
                placeholder="Your Street"
                name="street1"
                autoComplete="off"
                data-cy="street1"
                value={this.state.street1}
                onChange={this.updateInput}
              />
            </GridCell>
            <GridCell style={{ textAlign: 'left', margin: '2em' }}>
              <label htmlFor="street2">Address Line 2</label>
              <Input
                type="text"
                fullWidth={true}
                placeholder="Optional"
                name="street2"
                autoComplete="off"
                data-cy="street2"
                value={this.state.street2}
                onChange={this.updateInput}
              />
            </GridCell>
            <GridCell style={{ textAlign: 'left', margin: '2em' }}>
              <label htmlFor="city">City</label>
              <Input
                type="text"
                fullWidth={true}
                required="required"
                placeholder="Your City"
                name="city"
                autoComplete="off"
                data-cy="city"
                value={this.state.city}
                onChange={this.updateInput}
              />
            </GridCell>
            <GridCell style={{ textAlign: 'left', margin: '2em' }}>
              <label htmlFor="state">State</label>
              <Select
                type="text"
                fullWidth={true}
                required="required"
                name="state"
                value={this.state.state}
                onChange={this.updateInput}
                data-cy="state"
                >
                <option value="">Select a state</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </Select>
            </GridCell>
            <GridCell style={{ textAlign: 'left', margin: '2em' }}>
              <label htmlFor="zip">Zip Code</label>
              <Input
                type="text"
                fullWidth={true}
                required="required"
                placeholder="Your Zip"
                name="zip"
                autoComplete="off"
                data-cy="zip"
                value={this.state.zip}
                onChange={this.updateInput}
              />
            </GridCell>
            <Button theme="primary" onClick={this.handleEditProfile}>
              Save
            </Button>
          </form>
        </GridCell>
      </Grid>
    );
    }
};

function editProfileState(state) {
  return {
    user: state.user,
  };
}

// export default EditProfile
export default connect(editProfileState, {editProfile})(EditProfile);
