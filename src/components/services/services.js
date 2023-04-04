import React from "react";
import "./services.css";

function Services() {
  return (
    <div className="container p-5">
        <div className="row text-center mb-4">
            <h1>Our Main Services</h1>
            <p>Human Care is more than healthcare. We prefer quality over anything</p>
        </div>

      <div className="row text-center">
        <div className="col-sm-4 ">
          <div className="card float">
            <div>
                <img src="https://raw.githubusercontent.com/arifulsajib/pictures-for-projects/main/healthService/service1.jpg" class="card-img-top" alt="..." height="200"></img>
            </div>

            <div className="p-3">
                <h1>Blood Analysis</h1>
                <h6> Specialised Doctors: 4</h6>
                <h6><i class="fas fa-calendar-week" aria-hidden="true"></i> Open: Everyday</h6>
                <p>Click on the details button to see more information about this service.</p>
                <a class="text-decoration-none" href=""><button class="default-btn d-block mx-auto">Details</button></a>
            </div>
          </div>
        </div>
        
        <div className="col-sm-4 ">
          <div className="card float">
            <div>
                <img src="https://raw.githubusercontent.com/arifulsajib/pictures-for-projects/main/healthService/service2.jpg" class="card-img-top" alt="..." height="200"></img>
            </div>

            <div className="p-3">
                <h1>Cancer Cure</h1>
                <h6> Specialised Doctors: 5</h6>
                <h6><i class="fas fa-calendar-week" aria-hidden="true"></i> Open: Mon-Fri</h6>
                <p>Click on the details button to see more information about this service.</p>
                <a class="text-decoration-none" href=""><button class="default-btn d-block mx-auto">Details</button></a>
            </div>
          </div>
        </div>
        
        
        <div className="col-sm-4 ">
          <div className="card float">
            <div>
            <img src="https://raw.githubusercontent.com/arifulsajib/pictures-for-projects/main/healthService/service3.png" class="card-img-top" alt="..." height="200"></img>  
            </div>

            <div className="p-3">
                <h1>Cancer Cure</h1>
                <h6> Specialised Doctors: 2</h6>
                <h6><i class="fas fa-calendar-week" aria-hidden="true"></i> Open: Wed-Fri</h6>
                <p>Click on the details button to see more information about this service.</p>
                <a class="text-decoration-none" href=""><button class="default-btn d-block mx-auto">Details</button></a>
            </div>
          </div>
        </div>
        


      </div>
    </div>
  );
}

export default Services;