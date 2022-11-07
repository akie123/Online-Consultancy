
import { Outlet, Link } from "react-router-dom"
export default function (){

    return(
        <div>

            <div className="container-fluid fir">


                <nav className="navbar navbar-expand-lg  navbar-dark">

                    <a className="navbar-brand col-brand" href=""> E-Clinic </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item">

                                <a className="nav-link" href="#working"> Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#testimonials"> Testimonial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact_us">Contact </a>
                            </li>
                            <li className="nav-item">

                                <a className="nav-link" href="./signin">Login </a>
                            </li>


                        </ul>
                    </div>
                </nav>
                <div className="row bk">

                    <div className="col-lg-6  ">
                        <h1 className="head-margin">E Clinic -The healthcare consultation service. </h1>
                        <h5>Consult a doctor online from anywhere, anytime!</h5>
                        <button type="button but" id="but" className="btn btn-dark btn-lg but"><i
                            className="fa-solid fa-user-doctor"></i> Consult Now
                        </button>
                        <div className="row ">

                            <div className="col-lg-4  col-md-12">

                                <a className="fa-solid fa-video ck"> Video Call </a>

                            </div>

                            <div className="col-lg-4 col-md-12">
                                <a className="fa-solid fa-lock ck"> 1:1 consultation</a>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <a className="fa-solid fa-bolt ck"> Instant Digital Prescriptions </a>
                            </div>


                        </div>

                        <div className="row ">

                            <div className="col-lg-4 col-md-12">

                                <a className="fa-solid fa-microphone ck"> Audio </a>

                            </div>

                            <div className="col-lg-4 col-md-12">
                                <a className="fa-solid fa-certificate ck"> Certified Doctors</a>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <a className="fa-solid fa-handshake-angle ck"> Flexible Appointments</a>
                            </div>


                        </div>


                    </div>

                    <div className="col-lg-6  ">
                        <img className="im" src="\images\PicApp - Apple iPhone X.png" alt="doc"/>
                    </div>

                </div>


            </div>



        </div>
    )

}