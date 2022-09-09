import React from "react";
import './ContactUs.css';
import Footer from "./Footer";
import HomeNavBar from "./HomeNavBar";


const ContactUs = () => {
    return(
        <>
                <HomeNavBar/>
                <div class="container contact">
                    <div class="content">
                        <div class="left-side">
                        <div class="address details">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="topic">Address</div>
                            <div class="text-one">No 24 Athurugiriya Road</div>
                            <div class="text-two">Malabe</div>
                            <div class="text-two">Sri Lanka</div>
                        </div>
                        <div class="phone details">
                            <i class="fas fa-phone-alt"></i>
                            <div class="topic">Phone</div>
                            <div class="text-one">076 989 3564</div>
                            <div class="text-two">011 343 4567</div>
                        </div>
                        <div class="email details">
                            <i class="fas fa-envelope"></i>
                            <div class="topic">Email</div>
                            <div class="text-one">cafesecretally@gmail.com</div>
                            <div class="text-two">info.cafesecretally@gmail.com</div>
                        </div>
                        </div>
                        <div class="right-side">
                        <div class="topic-text">
                            Have Any Question ?
                            <p />
                                        We'd love to hear from you!
                            <p />
                            <br/>
                        </div>

                        <div className="ig">
                            <img/>
                        </div>
                        </div>
                    </div>
                    </div>
                    <Footer/>
        </>
    );
}

export default ContactUs;