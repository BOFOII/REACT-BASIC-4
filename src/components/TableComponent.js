import BootstrapTable from 'react-bootstrap-table-next';
import React from 'react';
import { Container, Button, Row, Col, Spinner } from 'reactstrap';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const { SearchBar } = Search;

const defaultSorted = [
	{
		dataField: 'id',
		order: 'asc'
	}
];

const mapStateToProps = (state) => {
	return {
		users: state.users.getUserList,
		error: state.users.getErrorUser
	};
};

const TableComponent = (props) => {
	const columns = [
		{
			dataField: 'id',
			text: 'ID',
			sort: true,
			headerStyle: () => {
				return { width: '5%' };
			}
		},
		{
			dataField: 'nama',
			text: 'Name',
			sort: true
		},
		{
			dataField: 'nohp',
			text: 'No. HP',
			sort: true
		},
		{
			dataField: 'alamat',
			text: 'Addres',
			sort: true
		},
		{
			dataField: 'link',
			text: 'Action',
			formatter: (rowContent, row) => {
				return (
					<div>
						<Link to={'details/' + row.id}>
							<Button color="dark" className="mr-2">
								{' '}
								Detail
							</Button>
						</Link>
						<Link to={'edit/' + row.id}>
							<Button color="dark" className="mr-2">
								Edit
							</Button>
						</Link>
						<Button color="dark" className="mr-2">
							Delete
						</Button>
					</div>
				);
			}
		}
	];

	let table;
	if (props.users) {
		table = (
			<ToolkitProvider keyField="id" data={props.users} columns={columns} defaultSorted={defaultSorted} search>
				{(props) => (
					<div>
						<Row>
							<Col>
								<Link to="create">
									<Button color="dark" className="mr-2">
										{' '}
										Create
									</Button>
								</Link>
							</Col>
							<Col>
								<div className="float-right">
									<SearchBar {...props.searchProps} placeholder="Search .." />
								</div>
							</Col>
						</Row>
						<hr />
						<BootstrapTable {...props.baseProps} pagination={paginationFactory()} />
					</div>
				)}
			</ToolkitProvider>
		);
	} else {
		table = <div className="text-center">{props.error ? <h1>{props.error}</h1> : <Spinner color="dark" />}</div>;
	}

	return <Container>{table}</Container>;
};

export default connect(mapStateToProps, null)(TableComponent);
