import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';

export class EditStudent extends Component {

  constructor(props) {
    super(props)

    //Setting up functions 
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //Setting up state 
    this.state = {
      name: '',
      email:'',
      rollno:''
    }
  }

  componentDidMount(){
    axios.get('http://localhost:4000/students/edit-student/'+this.props.match.params.id)
    .then(res => {
    //  console.log(res.data)
      this.setState({
        name: res.data.name,
        email: res.data.email,
        rollno: res.data.rollno
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  onChangeStudentName(e) {
    this.setState({name:e.target.value})
  }
  onChangeStudentEmail(e) {
    this.setState({email:e.target.value})
  }
  onChangeStudentRollno(e) {
    this.setState({rollno:e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    // console.log(`${this.state.name}`)
    // console.log(`${this.state.email}`)
    // console.log(`${this.state.rollno}`)

   const studentObject = {
    name: this.state.name ,
    email: this.state.email,
    rollno: this.state.rollno 
   };

    axios.put('http://localhost:4000/students/update-student/'+this.props.match.params.id, studentObject)
    .then((res) => {
      console.log(res.data)
      console.log('Student successfully updated')
      }
    );

    this.props.history.push('/student-list');
  }

  render() {
    return (
      <div className="form-wrapper my-3">
        <Form onSubmit={this.onSubmit}>
        
          <Form.Group controlId="name" className="my-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName}/>
          </Form.Group>
          <Form.Group controlId="email" className="my-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail}/>
          </Form.Group>
          <Form.Group controlId="rollno" className="my-3">
            <Form.Label>Roll No</Form.Label>
            <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeStudentRollno} />
          </Form.Group>
          <Button variant="primary" size="lg" block="block" type="submit" className="my-3"> Update Student </Button>
        </Form>
      </div>
    )
  }
}

export default EditStudent
