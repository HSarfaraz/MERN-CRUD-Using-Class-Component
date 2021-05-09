import React, { Component } from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';
import StudentTableRow from './StudentTableRow';

export class StudentList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:4000/students/')
    .then(res => {
      this.setState({
        students: res.data
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  DataTable(){
    return this.state.students.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />
    })
  }
  

  render() {
    return (
      <div className="table-wrapper">
        <Table striped bordered hover className="my-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Roll No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.DataTable()}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default StudentList
