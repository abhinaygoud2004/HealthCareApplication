import React from 'react'
import "./UserProfile.css"
import { useNavigate } from 'react-router-dom';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { loginContext } from '../../contexts/loginContext';
import { useContext } from 'react';

function UserProfile() {
  let [currentUser]=useContext(loginContext)
  const navigate = useNavigate();
  return (
    <div>        <section style={{ backgroundColor: '#eee' }}>
    <MDBContainer className="py-5">
      
      <MDBRow>
        <MDBCol lg="4">
          <MDBCard className="mb-4">
            <MDBCardBody className="text-center">
              <MDBCardImage
                src={currentUser.Image}
                alt="avatar"
                className="rounded-circle"
                style={{ width: '150px' }}
                fluid />
              <p className="text-muted mb-1">Full Stack Developer</p>
              <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
              <div className="d-flex justify-content-center mb-2">
                <button className='btn btn-primary' onClick={()=>navigate("/appointment")}>View Doctors</button>
              </div>
            </MDBCardBody>
          </MDBCard>


        </MDBCol>
        <MDBCol lg="8">
          <MDBCard className="mb-4">
            <MDBCardBody>
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Full Name</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">{currentUser.username}</MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Email</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">{currentUser.email}</MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Mobile</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">{currentUser.phonenumber}</MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Address</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">{currentUser.city}</MDBCardText>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>



  <div className="userRecords container p-5 d-flex flex-row justify-content-around">
      <div className="prev row d-flex flex-column">
          <div className='col-5'>
              <MDBCardText>Prev</MDBCardText>
          </div>
          <div>
              Appointements
          </div>
      </div>
      <div className="upcoming row d-flex flex-column">
          <div className='col-5'>
              <MDBCardText>Upcoming</MDBCardText>
          </div>

          <div>
              Appointments
          </div>
      </div>
  </div>



    </MDBContainer>
  </section>
</div>
  )
}

export default UserProfile