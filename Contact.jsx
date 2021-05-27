import React,{useState} from "react";

const Contact =()=>{
    const [data, setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        massage:"",
    });
    const InputEvent =(event) =>{
        const {name,value} = event.target;
        setData((preVal)=>{
            return {
                ...preVal,
                [name] : value,
                
            };
        });
    };
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`My name is ${data.fullname}. My Mobile number is ${data.phone}.and email is ${data.email} and here is what I want to say ${data.massage}`);
    }
    return(

        <>
        <div classname="my-5">
            <p className="text-center headd">Contact Us</p>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your name"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Phone</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="**********"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
                    </div>
                    
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                         <textarea  type="text" className="form-control"  rows="3" name="message" value={data.massage} onChange={InputEvent}> </textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>

    );
};

export default Contact;