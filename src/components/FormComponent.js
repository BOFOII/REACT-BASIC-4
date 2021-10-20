import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserList, postUser } from '../actions/UserAction';
import swal from 'sweetalert';

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      nohp: '',
      alamat: '',
    };
  }
  componentDidMount() {
    this.props.dispatch(getUserList());
  }
  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  onSubmit = event => {
    const data = {
      id: 99,
      nama: this.state.nama,
      nohp: this.state.nohp,
      alamat: this.state.alamat,
    }
    event.preventDefault();
    this.props.dispatch(postUser(data));
  }
	render() {
    if(this.props.error && !this.props.success) {
      swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "error",
        button: "Aww yiss!",
      });
    } else if(this.props.success && !this.props.error) {
      swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!",
      });
    }
		return (
			<div>
				<form onSubmit={ this.onSubmit } className="mt-5">
					<div class="mb-3">
						<label for="exampleFormControlInput1" class="form-label">
							Real Name
						</label>
						<input
							type="text"
							class="form-control"
              name="nama"
              value={ this.state.nama }
              onChange={ this.onChangeHandler }
						/>
            <label for="exampleFormControlInput1" class="form-label">
							No Hanphone
						</label>
						<input
							type="text"
							class="form-control"
              name="nohp"
              value={ this.state.nohp }
              onChange={ this.onChangeHandler }
						/>
            <label for="exampleFormControlInput1" class="form-label">
							Address
						</label>
						<input
							type="text"
							class="form-control"
              name="alamat"
              value={ this.state.alamat }
              onChange={ this.onChangeHandler }
						/>
					</div>
					<button type="submit" className="btn btn-dark">Create</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
  return {
    error: state.users.error,
    success: state.users.success,
  }
}

export default connect(mapStateToProps, null)(FormComponent);
