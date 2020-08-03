import React, { Component } from 'react'
import './DashBoard.css'
import {FaPencilAlt, FaTrashAlt } from 'react-icons/fa'

class DashBoard extends Component {
    state={
        employee : [],
        name : "",
        position : "",
        salary : "",
        status : "",
        trial : "",
        period : "",
        url : "",
        updateName : '',
        updatePosition : '',
        updateSalary : '',
        updateStatus : '',
        updateTrial : '',
        updatePeriod : '',
        updateUrl : '',
        id : '',
        modName : '',
        delId : '',
        delete : '',
    }

    componentDidMount(){
        fetch('https://frozen-woodland-32017.herokuapp.com/p')
        .then(response =>response.json())
        .then(data=>{
            this.setState({employee : data})
        })
    }

    includeEmployee=()=>{
        fetch('https://frozen-woodland-32017.herokuapp.com/dashboard',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name : this.state.name,
                position : this.state.position,
                salary : this.state.salary,
                status : this.state.status,
                trial : this.state.trial,
                period : this.state.period,
                url : this.state.url
            })
        }).then(res => res.json())
        .then(data => {
            this.setState({
                employee : data,
                name : "",
                position : "",
                salary : "",
                status : "",
                trial : "",
                period : "",
                url : "",
            })
        }).catch(err=>console.log(err))
    }

    updateEmployee=()=>{
        fetch('https://frozen-woodland-32017.herokuapp.com/update',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id : this.state.id,
                name : this.state.updateName,
                position : this.state.updatePosition,
                salary : this.state.updateSalary,
                status : this.state.updateStatus,
                trial : this.state.updateTrial,
                period : this.state.updatePeriod,
                url : this.state.updateUrl
            })
        }).then(res => res.json())
        .then(data => {
            this.setState({ employee : data})
        }).catch(err=>console.log(err))
    }

    handleChange=(event)=>{
        const{name, value}= event.target
        this.setState({[name] : value})
    }

    initialFormValue=(rec)=>{
        this.setState({
            id : rec.id ,
            updateName : rec.name,
            updatePosition : rec.position,
            updateSalary : rec.salary,
            updateStatus : rec.status,
            updateTrial : rec.trial,
            updatePeriod : rec.period,
            updateUrl : rec.url,
        })
    }

    secondFormValue=(vac)=>{
        this.setState({
            delId : vac.id,
            modName : vac.name
        })
    }

    deletedEmployee=()=>{
        console.log(this.state.delete)
        if(this.state.delete==='Yes'){
        fetch('https://frozen-woodland-32017.herokuapp.com/delete',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id : this.state.delId
            })
        }).then(res => res.json())
            .then(info =>{
            if(info.id){
            fetch('https://frozen-woodland-32017.herokuapp.com/p')
            .then(response =>response.json())
            .then(data=>{
                this.setState({employee : data})
            })}
        })
        }
    }

    render() {
        return (
            <div className='bredth p-2'>
                <div className="modal fade" id="modalRegisterForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header text-center">
                        <h4 className="modal-title w-100 font-weight-bold">Employee's Profile</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body mx-3">
                        <div className="md-form mb-5">
                        <input type="text" id="orangeForm-name" required name='name' onChange={this.handleChange} placeholder='Andy Rob' value={this.state.name} className="form-control validate"/>
                        <label data-error="wrong" data-success="right"  htmlFor="orangeForm-name">Name</label>
                        </div>
                        <div className="md-form mb-5">
                        <input type="text" id="orangeForm-position" required name='position' onChange={this.handleChange} placeholder='Project Manager' value={this.state.position} className="form-control validate"/>
                        <label data-error="wrong" data-success="right" htmlFor="orangeForm-position">Position</label>
                        </div>
                        <div className="md-form mb-5">
                        <input type="text" id="orangeForm-salary" required name='salary' onChange={this.handleChange} value={this.state.salary} placeholder='3.200 NOK' className="form-control validate"/>
                        <label data-error="wrong" data-success="right" htmlFor="orangeForm-salary">Salary</label>
                        </div>
                        <div className="md-form mb-5">
                        <input type="text" id="orangeForm-status" required name='status' onChange={this.handleChange} placeholder='Full/Part Time' value={this.state.status} className="form-control validate"/>
                        <label data-error="wrong" data-success="right" htmlFor="orangeForm-status">Status</label>
                        </div>
                        <div className="md-form mb-5">
                        <input type="text" id="orangeForm-trial" required name='trial' onChange={this.handleChange} placeholder='test period' value={this.state.trial} className="form-control validate"/>
                        <label data-error="wrong" data-success="right" htmlFor="orangeForm-trial">Level</label>
                        </div>
                        <div className="md-form mb-5">
                        <input type="text" id="orangeForm-period" required name='period' onChange={this.handleChange} placeholder='2 months' value={this.state.period} className="form-control validate"/>
                        <label data-error="wrong" data-success="right" htmlFor="orangeForm-period">Duration</label>
                        </div>

                        <div className="md-form mb-4">
                        <input type="text" id="orangeForm-url" required name='url' onChange={this.handleChange} value={this.state.url} className="form-control validate"/>
                        <label data-error="wrong" data-success="right" htmlFor="orangeForm-url">Image Url</label>
                        </div>

                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                        <button onClick={this.includeEmployee} data-dismiss="modal" className="btn btn-deep-orange"  >Add</button>
                    </div>
                    </div>
                </div>
                </div>

                <div className="d-flex justify-content-end">
                <button  className="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalRegisterForm">Add employee</button>
                </div>
                <div className="d-flex justify-content-around gen">
                    <h4 className='p-1'>Employee</h4>
                    <h4 className='p-1'>Salary</h4>
                    <h4 className='p-1'>Status</h4>
                    <h4 className='p-1'>Manage</h4>
                </div>
                {
                    this.state.employee.sort((a,b)=> a.id - b.id).map(user=> <div key={user.id} className="beneath card gen  my-3"> <div className="d-flex justify-content-around p-3">
                        <div className='d-flex justify-content-center align-items-center'>
                        <div className="d-flex justify-content-between align-items-center set p-1 h">
                            <img className='rounded-circle z-depth-0' src={user.url} width='50'  height='50' alt='stuff'/>
                            <p className=''>{user.name}<br/><span className='p py-3'>{user.position}</span></p>
                        </div>
                        </div>
                            <div className='d-flex justify-content-center align-items-center p-1'><p className=''>{user.salary}<br/><span className='p py-2'>{user.status}</span></p></div>
                            <div className='d-flex justify-content-center align-items-center p-1'><p className=''>{user.trial}<br/><span className='p py-2'>{user.period}</span></p></div>
                        <div className='d-flex justify-content-between'>
                            <div className="d-flex justify-content-center align-items-center p-2 border-right p-1">
                                    <FaPencilAlt className='cursor' onClick={()=>this.initialFormValue(user)} size='20'  data-toggle="modal" data-target="#modalUpdateForm"/>
                            </div>
                            <div className="d-flex justify-content-center align-items-center p-2">
                                <FaTrashAlt className="cursor" onClick={()=>this.secondFormValue(user)} size='20' data-toggle="modal" data-target='#modalContactForm' />
                            </div>
                        </div>
                    </div></div>)
                }
                <div className="modal fade" id="modalUpdateForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                                    aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                        <div className="modal-header text-center">
                                            <h4 className="modal-title w-100 font-weight-bold">Update Employee's Profile</h4>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body mx-3">
                                            <div className="md-form mb-5">
                                            <input type="text" id={`orangeForm-updateName`} required name='updateName' onChange={this.handleChange} placeholder='Name e.g (Andy Rob)'  value={this.state.updateName} className="form-control validate"/>
                                            <label data-error="wrong" data-success="right"  htmlFor={`orangeForm-updateName`}></label>
                                            </div>
                                            <div className="md-form mb-5">
                                            <input type="text" id={"orangeForm-updatePosition"} required name='updatePosition' onChange={this.handleChange} placeholder='Job Description e.g (Project Manager)'  value={this.state.updatePosition} className="form-control validate"/>
                                            <label data-error="wrong" data-success="right" htmlFor={"orangeForm-updatePosition"}></label>
                                            </div>
                                            <div className="md-form mb-5">
                                            <input type="text" id={"orangeForm-updateSalary"} required name='updateSalary' onChange={this.handleChange} placeholder='Salary e.g (3.200 NOK)' value={this.state.updateSalary} className="form-control validate"/>
                                            <label data-error="wrong" data-success="right" htmlFor={"orangeForm-updateSalary"}></label>
                                            </div>
                                            <div className="md-form mb-5">
                                            <input type="text" id={"orangeForm-updateStatus"} required name='updateStatus' onChange={this.handleChange} placeholder='Status e.g (Full/Part Time)'  value={this.state.updateStatus} className="form-control validate"/>
                                            <label data-error="wrong" data-success="right" htmlFor={"orangeForm-updateStatus"}></label>
                                            </div>
                                            <div className="md-form mb-5">
                                            <input type="text" id={"orangeForm-updateTrial"} required name='updateTrial' onChange={this.handleChange} placeholder='Level e.g (test period)'  value={this.state.updateTrial} className="form-control validate"/>
                                            <label data-error="wrong" data-success="right" htmlFor={"orangeForm-updateTrial"}></label>
                                            </div>
                                            <div className="md-form mb-5">
                                            <input type="text" id={"orangeForm-updatePeriod"} required name='updatePeriod' onChange={this.handleChange} placeholder='Duration e.g (2 months)'  value={this.state.updatePeriod} className="form-control validate"/>
                                            <label data-error="wrong" data-success="right" htmlFor={"orangeForm-updatePeriod"}></label>
                                            </div>

                                            <div className="md-form mb-4">
                                            <input type="text" id={"orangeForm-updateUrl"} required name='updateUrl' onChange={this.handleChange} placeholder='Image updateUrl' value={this.state.updateUrl} className="form-control validate"/>
                                            <label data-error="wrong" data-success="right" htmlFor={"orangeForm-updateUrl"}></label>
                                            </div>

                                        </div>
                                        <div className="modal-footer d-flex justify-content-center">
                                            <button onClick={this.updateEmployee} data-dismiss="modal" className="btn btn-deep-orange"  >Update</button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                        <div className="modal fade" id="modalContactForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                <div className="modal-header text-center">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body mx-3">
                                        <div className="mb-5">
                                        <p>Are you sure you want to delete {this.state.modName} from your employees ? </p>
                                        </div>
                                    <div className="form-check mb-5">
                                        <div className=''>
                                            <label  htmlFor="defaultForm-email"><input onChange={this.handleChange} checked={this.state.delete==='Yes'} name='delete' value='Yes' type="radio" id="defaultForm-email" className="form-check-input validate"/>Yes</label>
                                            </div>
                                            <div className=''>
                                            <label htmlFor="defaultForm"><input name='delete' onChange={this.handleChange} checked={this.state.delete==='No'} value='No' type="radio" id="defaultForm" className="form-check-input validate"/>No</label>
                                            </div>
                                        </div>

                                </div>
                                <div className="modal-footer d-flex justify-content-center">
                                    <button onClick={this.deletedEmployee} data-dismiss="modal" className="btn btn-default">Submit</button>
                                </div>
                                </div>
                            </div>
                            </div>
            </div>
        )
    }
}

export default DashBoard
