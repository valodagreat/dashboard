import React, { Component } from 'react'
import './Employee.css'

class Employee extends Component {
    state={
        project : [
    ]}
    
    addProduct=()=>{
        this.props.onRouteChange('addproduct')
    }

    componentDidMount(){
        fetch('https://frozen-woodland-32017.herokuapp.com')
        .then(response =>response.json())
        .then(data=>{
            this.setState({project : data})
        })
    }

    includeProduct=()=>{
        fetch('https://frozen-woodland-32017.herokuapp.com/profile',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name : this.props.title,
                url : this.props.url
            })
        }).then(res => res.json())
        .then(data => {
            this.props.onRouteChange('noProduct')
            this.setState({ project: data})
        }).catch(err=>console.log(err))
    }
    cancelSubmit=()=>{
        this.props.onRouteChange('noProduct')
    }

    render() {
        return (
            <div className='breadth'>
                <h2 className='p-3 h'>employee</h2>
                <div className="card rounded m-5">
                    <p className='p-3'><img className='p-2 rounded-circle z-depth-0' src='https://res.cloudinary.com/valodagreat/image/upload/v1596154086/employ_2_l3js3z.png' height='65' alt='stuff'/> 
                    <span className='employ'>All Employees</span></p>
                    <h5 className='p-3 s'>Projects</h5>
                    {this.state.project.map(user =><p key={user.project} className='p-3'><img className='p-2 rounded-circle z-depth-0' src={user.url} height='65' alt='stuff'/> 
                    <span className='employ'>{user.project}</span></p>)}
                    <h5 className='p-3 s'>Status</h5>
                    <p className='p-3'><img className='p-2 rounded-circle z-depth-0' src='https://res.cloudinary.com/valodagreat/image/upload/v1596159400/w8udl2lhrno3qie9lwdf.jpg' height='65' alt='stuff'/> 
                    <span className='employ'>Full Time</span></p>
                    <p className='p-3'><img className='p-2 rounded-circle z-depth-0' src='https://res.cloudinary.com/valodagreat/image/upload/v1596159280/nseh1tb8xzdxrec1tf2a.jpg' height='65' alt='stuff'/> 
                    <span className='employ'>Part Time</span></p>
                    {this.props.route==='addproduct' ? null :<div className='btns'>
                    <button onClick={this.addProduct} type="button" className="btn aqua-gradient btn-rounded m-3">add project</button></div>
                    }{
                        this.props.route === 'noProduct' ? null : <div className='p-5 post'><h4 className='p-2'>Add Project</h4>
                            <div className='p-2'>
                            <label htmlFor='projectTitle'>Title <input type="text" required name="projectTitle"  onChange={this.props.titleChange} /> </label></div>
                            <div className='p-2'>
                            <label htmlFor='projectUrl'>Link <input type="text" name="projectUrl" required  onChange={this.props.urlChange} /> </label></div>
                            <div className='p-2'>
                            <button onClick={this.includeProduct} className='btn aqua-gradient  btn-rounded'>Submit</button>
                            <button onClick={this.cancelSubmit} className='btn aqua-gradient  btn-rounded'>Cancel</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Employee
