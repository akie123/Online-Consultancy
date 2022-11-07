import './signin.css'
export default function (){

    return(
        <>

            <div className='login'>
                <div className="container-fluid" style={{width:'75%'}}>
                    <div className="card">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 d-none d-md-block">

                                <img className="imgg img-fluid"
                                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                     alt="login form" style={{borderRadius:'1rem 0 0 1rem'}} />

                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="card-body">
                                    <form >

                                        <h5 style={{fontFamily: 'Source Serif 4, sansSerif',
                                            letterSpacing: '1px'}} className='hh'>Sign Into Your Account</h5>
                                        <div className="log">
                                            <div className="form-group">

                                                <input type="email" name="email" className="form-control" id="email"
                                                       placeholder="Email Address"/>
                                            </div>
                                            <div className="form-group">

                                                <input type="password" name="password" className="form-control"
                                                       id="password" placeholder="Password"/>
                                            </div>

                                        </div>
                                        <button className="btn btn-dark btn-lg btn-block" id="but" type="button">Login
                                        </button>
                                        <div className="extra">
                                            <a className="forgot-1" href="/forget">Forgot Password</a>
                                            <p>Don't have a account?<a href="/signup" className="forgot-2"> Register
                                                here</a></p>

                                        </div>
                                        <a href="#!" className="small text-muted">Terms of use.</a>
                                        <a href="#!" className="small text-muted">Privacy policy</a>


                                    </form>

                                </div>
                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </>
    )


}