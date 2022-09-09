import emailjs from '@emailjs/browser';
import { useState } from 'react';
import React,{ useRef } from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const Result = () =>{
  return(
    <p>Your message has been successfully sent. i will contact you soon</p>
  );
};

const ContactUs = () => {

    const[result, showResult] = useState(false);
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_bslninr', 'template_v2wf2qf', form.current, '5g8h6v7eqHUTwGVad')
      // console.log(retuslt)
        .then((result) => {
            // console.log(result.text);
        }, (error) => {
            // console.log(error.text);
        });

        //clear form after the submition
        e.target.reset();
        showResult(true);
    };
    //hidden message time
    setTimeout(()=>{
      showResult(false)
    }, 5000)

  return (
    <>
    <div className="container-fluid">
      <div className="row">
      <div className="col-md-6">
      <section className=" rounded-lg shadow">
          {/* <h1>Details</h1> */}
          <MDBCol className="px-20 mt- text-[14px]0 mb-4 text-base">
              <p>
                <MDBIcon icon="home" className="me-2 mt-5 text-[14px]" />
                NO.19 Public Library complex, Makadura,    Gonavila.
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3 mt-5 text-[14px]" />
                fablabmakandura@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3 mt-5 text-[14px]" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3 mb-5 mt-5 text-[14px]" /> + 01 234 567 89
              </p>
            </MDBCol>
        </section>
        </div>

        <div className="col-md-6">
      <section className="mb-5 rounded-lg shadow">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
      <form className="space-y-3" ref={form} onSubmit={sendEmail}>
      <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
              <input type="text" id="email" name="user_name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 	"  placeholder="Name" required/>
          </div>
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input type="email" name="user_email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
              <input type="text" name="user_phone" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="+94 0000 000" required/>
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
              <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Type Your Massage"></textarea>
          </div>
          <button type="submit" value="Send" className="py-3 px-5 text-sm text-center bg-sky-700 hover:bg-sky-800 text-white font-bold rounded border-2 border-white ">Send message</button>
          <div className='row'>{result ? <Result/> : null}</div>
      </form>
  </div>
</section>
        </div>
      </div>
    </div>

    
    </>
    
  );
};

export default ContactUs;
