import React from 'react'
export default function Graphics() {
  return (
    <> 
    <h1 style={{textAlign : "center", fontWeight : "bold", margin: "20px",
  }}>Contact</h1>
  <div style={{display : "flex", justifyContent : "space-around", margin : "20px 0"}}>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.5016521845578!2d82.19541922522389!3d26.792151029379617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07c4f58cb42d%3A0x88547653a4a8e8e1!2sRam%20mandir!5e0!3m2!1sen!2sin!4v1674763462964!5m2!1sen!2sin" 
          width="1100" 
          title='1'
          height="500" 
          className="border:0 w-100" 
          allowfullscreen="" 
          loading="lazy" >
          </iframe>
    </div>
    <div style={{margin : "20px 40px",textAlign:"center", color : "grey"}}>
      <h1>
        Contact us
      </h1>
      <div style={{fontSize :"30px",fontWeight: "bold"}}>
        <p >
              Get in touch with Kuldeep and Rohit Tech Developer
            </p>
      </div>
      <div>
              
              <p>
              <p >Dr. Gangadhar S Badhe Marg, Samarth Nagar, Chunabhatti, Sion, Mumbai, Maharashtra 400022
              </p>
              </p>
              <p className='mb-3 d-flex gap-15 align-items-center'>
               
                <a href='tel:+91 8907654323'>+91 8907654323</a>
                </p>
              <p className='mb-3 d-flex gap-15 align-items-center'>
              <a href='mailTo: MumbaiIndianJeete2023@gmail.com'>MumbaiIndianJeete2023@gmail.com</a>
              </p>
              <p className='mb-3 d-flex gap-15 align-items-center'>
              <p className='mb-0'>Saturaday-Sunday 12 AM - 6 AM</p>
              </p>
              
              </div>
      </div>
     </>
  )
}
