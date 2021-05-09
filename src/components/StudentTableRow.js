import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {FaTrashAlt, FaEdit} from 'react-icons/fa';
import axios from 'axios';

export class StudentTableRow extends Component {

  constructor(props) {
    super(props);
    this.deleteStudent = this.deleteStudent.bind(this)
  }

  deleteStudent() {
    axios.delete('http://localhost:4000/students/delete-student/'+ this.props.obj._id)
    .then((res)=> {
      console.log('student deleted successfully')
      // this.props.history.push('/student-list');
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.rollno}</td>
        <td>
          <Link className="edit-link" to={"/edit-student/"+this.props.obj._id}><FaEdit /></Link>
          <Button size="sm" variant="danger" onClick={this.deleteStudent}><FaTrashAlt /></Button>
        </td>
      </tr>

    )
  }
}

export default StudentTableRow
