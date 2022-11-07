
export default function (){

    return(
        <>

            <div style={{padding:'2%'}} className="container-fluid cont contt" >


                <h1 className="work">Drop Us a Message/Grievance</h1>


                <div className="row">


                    <div className="col padd">
                        <form >
                            <div className="row">

                                <div className="col-md-6">

                                    <div className="form-group">
                                        <input type="email" className="form-control" id="email"
                                               placeholder="Your Email *" name="email"/>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control" id="name1" placeholder="Your Name *"
                                               name="namee"/>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control" id="name2"
                                               placeholder="Your Phone Number *" name="phonee"/>
                                    </div>

                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                    <textarea className="form-control" id="text1"
                              placeholder="Feel free to drop us a suggestion/grievance"
                              name="queryy" style={{width:'100%',height:'200px'}}/>
                                    </div>
                                </div>



                            </div>
                            <div className="row">
                                <div className="col-md-4">

                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <button className="btn contbtn">Send Message</button>
                                    </div>
                                </div>
                                <div className="col-md-4">

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{textAlign:'center'}}>
                <i className="social-icon fab fa-facebook-f"></i>
                <i className="social-icon fab fa-twitter"></i>
                <i className="social-icon fa-brands fa-github"></i>
                <i className="social-icon fa-brands fa-linkedin"></i>
                <p>© Copyright 2022 E-Clinic</p>
            </div>


        </>
    )




}