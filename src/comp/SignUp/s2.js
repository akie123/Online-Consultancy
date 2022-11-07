import './signup.css'
export default function (){

    return(
        <>
            <div className="card">
                <div className="row">
                    <div className="col-lg-5 col-md-5 d-none d-md-block">

                        <img className="img"
                             src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                             alt="login form" className="img-fluid" style={{borderRadius: '1rem 0 0 1rem'}} />

                    </div>
                    <div className="col-lg-7 col-md-7">

                        <div className="card-body one" id="body-1">

                            <div className="head">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <i className="fas fa-check-circle"> <br/><span>User</span> </i>
                                    </div>
                                    <div className="col-sm-3">
                                        <i className="far fa-check-circle"><br/> Credential</i>
                                    </div>
                                    <div className="col-sm-3">
                                        <i className="far fa-check-circle"> <br/>Info</i>
                                    </div>
                                    <div className="col-sm-3">
                                        <i className="far fa-check-circle"><br/> Success</i>
                                    </div>
                                </div>
                            </div>
                            <hr/>

                                <div className="bod-1">
                                    <form className="" >

                                        <h4>We are too excited to have you with us!</h4>

                                        <div className="log">
                                            <h3>Select User</h3>
                                        </div>

                                        <div className="row but">
                                            <div className="col-6">
                                                <button type="button" id="bu" className=" btn btn-dark btn-lg "><i
                                                    className="fas fa-user-injured "></i>
                                                    Patient
                                                </button>
                                            </div>
                                            <div className="col-6 ">
                                                <button type="button" id="but1" className="btn btn-dark btn-lg "><i
                                                    className="fas fa-user-md "></i>
                                                    Doctor
                                                </button>

                                            </div>
                                        </div>

                                    </form>

                                </div>

                        </div>
                    </div>
                </div>
            </div>





        </>



    )


}