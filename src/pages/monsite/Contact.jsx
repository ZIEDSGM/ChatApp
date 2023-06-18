import React, { Fragment } from 'react'
const Contact = () => {
  return (
    
    <div>
        <section class="contact" id="contact">
      <h2>Contact Us</h2>
      <p>Reach out to us for any inquiries or feedback.</p>
      <div class="row">
        <div class="col information">
          <div class="contact-details">
           
            <p><i class="fas fa-envelope"></i> info@TalkSquad.com</p>
            <p><i class="fas fa-globe"></i> www.TalkSquad.com.tn</p>
          </div>          
        </div>
        
        <div class="col form">
          <form>
            <input type="text" placeholder="Name*" required/>
            <input type="email" placeholder="Email*" required/>
            <textarea placeholder="Message*" required></textarea>
            <button id="submit" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact