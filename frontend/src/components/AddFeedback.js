import React, { useState } from "react";
import axios from "axios";
import './Feedback.css'
import HomeNavBar from "./HomeNavBar";
import Footer from './Footer';
import { FaBlackTie, FaStar } from "react-icons/fa";


const colors = {
    orange: "#FFDF00",
    grey: "#a9a9a9"

};


export default function AddFeedback() {


    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)

    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }


    const [first_name, setFname] = useState("");
    const [last_name, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [complaint, setComplaint] = useState("");

    const sendData = async (e) => {
        e.preventDefault();

        let newComplaint = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            complaint: complaint
        }

        axios.post("http://localhost:5000/customer/add", newComplaint).then(() => {
            alert("Complaint Added")


        }).catch((err) => {
            alert(err)
        })

        setFname("");
        setLname("");
        setEmail("");
        setComplaint("");

    }

    return (
        <>
            <HomeNavBar />
        <div className="bodys">
            <div style={styles.container}>
            <div className="conta">
                <h2>Add Feedbacks</h2>
                <div style={styles.stars}>
                    {stars.map((_, index) => {
                        return (
                            <FaStar
                                key={index}
                                size={24}
                                onClick={() => handleClick(index + 1)}
                                onMouseOver={() => handleMouseOver(index + 1)}
                                onMouseLeave={handleMouseLeave}
                                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                style={{
                                    marginRight: 10,
                                    cursor: "pointer"
                                }}
                            />
                        )
                    })}
                </div>

                <form onSubmit={sendData}>

                    <div className="col-md-7 element">
                        <label for="inserProduct" className="form-label1">First Name</label>
                        <input type="text" name="productName" className="form-control input-field" id="inserProduct" placeholder="Enter product name" required
                            onChange={(e) => {
                                setFname(e.target.value);
                            }} />

                    </div>

                    <div className="col-md-7 element">
                        <label for="inserProduct" className="form-label1">Last Name</label>
                        <input type="text" name="productName" className="form-control input-field" id="inserProduct" placeholder="Enter product name" required
                            onChange={(e) => {
                                setFname(e.target.value);
                            }} />
                    </div>
                    <div className="col-md-7 element">
                        <label for="inserProduct" className="form-label1">Email Address</label>
                        <input type="text" name="productName" className="form-control input-field" id="inserProduct" placeholder="Enter product name" required
                            onChange={(e) => {
                                setFname(e.target.value);
                            }} />
                    </div>
                    <div className="col-md-7 element">
                        <label for="inserProduct" className="form-label1">Feedback</label>
                        <input type="text" name="productName" className="form-control input-field" id="inserProduct" placeholder="Enter product name" required
                            onChange={(e) => {
                                setFname(e.target.value);
                            }} />
                    </div>
                    <div class="centerb"><button type="submit" className="btn btn-primary">Submit</button></div>
                </form>
            </div>
            </div>
            </div>
        </>

    );
};
const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    }
}
