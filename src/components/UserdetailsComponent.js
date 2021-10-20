import React from 'react';
import { connect } from 'react-redux';
import { Spinner, Table } from 'reactstrap';

const mapStateToProps = (state) => {
	return {
		user: state.users.getUserDetails,
		error: state.users.getErrorUserDetails
	};
};

const UserdetailsComponent = (props) => {
	return (
		<div>
			{props.user ? (
				<Table striped className="mt-5">
					<tbody>
						<tr>
							<th width="200">Nama</th>
							<td width="10">:</td>
							<td>{props.user.nama}</td>
						</tr>
						<tr>
							<th width="200">Alamat</th>
							<td width="10">:</td>
							<td>{props.user.alamat}</td>
						</tr>
						<tr>
							<th width="200">Nomor Handpone</th>
							<td width="10">:</td>
							<td>{props.user.nohp}</td>
						</tr>
					</tbody>
				</Table>
			) : (
				<div className="text-center">
					<Spinner />
				</div>
			)}
		</div>
	);
};

export default connect(mapStateToProps, null)(UserdetailsComponent);
