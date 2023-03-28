import React from 'react'
import "./Home.css"
import Services from '../services/services'
import { useNavigate } from 'react-router-dom'
function Home() {
	const navigate = useNavigate();
  return (
    <div className='home'>
		<div class="Main" >


<div class="container mt-5">
    <div class="card">
        <div class="card-body">
            <div class="row">
                <img src="https://wallpapercave.com/wp/wp2789220.jpg" alt="pic" />
                <h1>Doctors that gets you</h1>
                {/* <h6>Skills for your present (and your future). Get started with just a click.</h6> */}
            </div>
        </div>
    </div>
</div>


<div class="container mt-5">
    <div class="card bg-gradient">
        <h3 class="ms-3 mt-3 w-75">Top Hospitals in your locality.</h3>
        <div class="row">
            <div class="col">
                <div class="card pb-1">
                    <div class="card-body">
                        <img src="https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg" class="w-100" alt="Python" />
                        <h1 class="bold text-center">Kims</h1>

                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card pb-4">
                <div class="card-body">
                        <img src="https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg" class="w-100" alt="Python" />
                        <h1 class="bold text-center">Kims</h1>

                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card pb-1">
                     <div class="card-body">
                        <img src="https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg" class="w-100" alt="Python" />
                        <h1 class="bold text-center">Kims</h1>

                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card pb-4">
                <div class="card-body">
                        <img src="https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg" class="w-100" alt="Python" />
                        <h1 class="bold text-center">Kims</h1>

                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card pb-5">
                <div class="card-body">
                        <img src="https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg" class="w-100" alt="Python" />
                        <h1 class="bold text-center">Kims</h1>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container mt-5">
    <h3>Top Doctors</h3>
    <div class="row">
        <div class="col">
            <div class="card pb-5">
                <div class="card-body">
                    <img src="https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=" class="w-100" alt="Bootstrap" />
                    <h1>Mr.Ravidhar</h1>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card pb-5 pt-5 p-4">
            <div class="card-body">
                    <img src="https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=" class="w-100" alt="Bootstrap" />
                    <h1>Mr.Ravidhar</h1>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card ">
            <div class="card-body">
                    <img src="https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=" class="w-100" alt="Bootstrap" />
                    <h1>Mr.Ravidhar</h1>
                </div>
            </div>
        </div>
        {/* <div class="col">
            <div class="card ">
            <div class="card-body">
                    <img src="https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=" class="w-100" alt="Bootstrap" />
                    <h1>Mr.Ravidhar</h1>
                </div>
            </div>
        </div> */}
    </div>
</div>

<div class="container mt-5">
    <h3>Top Categories</h3>
    <div class="row mb-4">
        <div class="col">
            <div class="card">
                <img src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" alt="Design" />
            </div>
            <h6 class="bold">Best Infrastructure</h6>
        </div>
        <div class="col">
            <div class="card">
                <img src="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg" alt="Development" />
            </div>
            <h6 class="bold">User Friendly Environment</h6>
        </div>
        <div class="col">
            <div class="card">
                <img src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg" alt="Marketing" />
            </div>
            <h6 class="bold">Well defined statistics</h6>
        </div>
    </div>
    <div class="row mb-4">
        <div class="col">
            <div class="card">
                <img src="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg" alt="Personal Development" />
            </div>
            <h6 class="bold">Personalised Healthcare</h6>
        </div>
        <div class="col">
            <div class="card">
                <img src="https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg" alt="Business" />
            </div>
            <h6 class="bold">Online appointments</h6>
        </div>
        <div class="col">
            <div class="card">
                <img src="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg" alt="Phototgraphy" />
            </div>
            <h6 class="bold">Feeded Prescriptions</h6>
        </div>
    </div>
</div>



<div class="container mt-5">
    <div class="row">
        <div class="col-5">
            <img src={"data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k="} alt="Transformation" />
        </div>
        <div class="col-7">
            <div class="card-body mt-5">
                <h1>Transform your life through Prodoc</h1>
                <p class="card-text">Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
                <button className='btn btn-primary' onClick={()=>navigate("/")}>Book an Appointment</button>
            </div>
        </div>
    </div>
</div>


</div>
		<Services />
    </div>
  )
}

export default Home