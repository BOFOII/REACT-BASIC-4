import BootstrapTable from 'react-bootstrap-table-next';
import React, { useState } from 'react';
import { Container, Button, Row, Col } from "reactstrap";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom';

const { SearchBar } = Search;

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const columns = [{
  dataField: 'id',
  text: 'ID',
  sort: true,
  headerStyle: () => {
    return { width: "5%" };
  },
}, {
  dataField: 'nama',
  text: 'Name',
  sort: true,
}, {
  dataField: 'nohp',
  text: 'No. HP',
  sort: true,
}, {
  dataField: 'alamat',
  text: 'Addres',
  sort: true,
}, {
  dataField: 'link',
  text: 'Action',
  formatter: (rowContent, row) => {
    return (
        <div>
          <Link to={ "/details/" + row.id }>
            <Button color="dark" className="mr-2"> Detail
            </Button>
          </Link>
          <Link>
            <Button to={ "/edit/" + row.id } color="dark" className="mr-2">Edit
            </Button>
          </Link>
          <Link to="/">
            <Button color="dark" className="mr-2">Delete
            </Button>
          </Link>
        </div>
      );
    },
},];

const TableComponent = (props) => {
  return(
    <Container>
      <ToolkitProvider
        keyField="id"
        data={ props.users }
        columns={ columns }
        defaultSorted={ defaultSorted }
        search
      >
        {
          props => (
            <div>
              <Row>
                <Col>
                </Col>
                <Col>
                  <div className="float-right">
                    <SearchBar {...props.searchProps} placeholder="Search .." />
                  </div>
                </Col>
              </Row>
              <hr/>
              <BootstrapTable
                {...props.baseProps} pagination={ paginationFactory() }
              />
            </div>
          )
        }
      </ToolkitProvider>
    </Container>
  );
}

export default TableComponent;

