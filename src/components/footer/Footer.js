import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { AiFillHome } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';
import "./Footer.css"
function Footer() {
  return (
    <div className='footer'><MDBFooter className='text-center text-lg-start text-dark p-2'>
    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        
        <MDBRow className='mt-3'>
          <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon icon="gem" className="me-3" />
              
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Sections</h6>
            <p>
              <a href='#!' className='text-reset'>
                Home
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                About
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Services
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Profile
              </a>
            </p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Support</h6>
            <p>
              <a href='#!' className='text-reset'>
                Terms & Conditions
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Company Support
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                FAQ's
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Company Licence
              </a>
            </p>
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              
              <AiFillHome  style={{fontSize:"19px"}}/>New York, NY 10012, US
            </p>
            <p>
              
              <HiMail  style={{fontSize:"19px"}}/>info@example.com
            </p>
            <p>
               <BsTelephoneFill style={{fontSize:"19px"}}/>+ 01 234 567 88
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2021 Copyright:
      <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        ProDoc..
      </a>
    </div>
  </MDBFooter></div>
  )
}

export default Footer