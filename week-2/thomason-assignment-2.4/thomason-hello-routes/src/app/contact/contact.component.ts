/*
=====================================
  ; Title: about.component.ts
  ; Author: William Thomason
  ; Date: July 18 2019
  ; Modified By: William Thomason
  ; Description: about.component.ts
======================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <!--Section: Contact v.2-->
  <section class="mb-4 contact">
  
      <!--Section heading-->
      <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
      <!--Section description-->
      <p class="text-center w-responsive mx-auto mb-5">
      Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you 
      within a matter of hours to help you.</p>
  
      <div class="row">
  
          <!--Grid column-->
          <div class="col-md-9 mb-md-0 mb-5 form">
              <form id="contact-form" name="contact-form" action="mail.php" method="POST">
  
                  <!--Grid row-->
                  <div class="row">
  
                      <!--Grid column-->
                      <div class="col-md-6">
                          <div class="md-form mb-0">
                              <input type="text" id="name" name="name" class="form-control">
                              <label for="name" class="">Your name</label>
                          </div>
                      </div>
                      <!--Grid column-->
  
                      <!--Grid column-->
                      <div class="col-md-6">
                          <div class="md-form mb-0">
                              <input type="text" id="email" name="email" class="form-control">
                              <label for="email" class="">Your email</label>
                          </div>
                      </div>
                      <!--Grid column-->
  
                  </div>
                  <!--Grid row-->
  
                  <!--Grid row-->
                  <div class="row">
                      <div class="col-md-12">
                          <div class="md-form mb-0">
                              <input type="text" id="subject" name="subject" class="form-control">
                              <label for="subject" class="">Subject</label>
                          </div>
                      </div>
                  </div>
                  <!--Grid row-->
  
                  <!--Grid row-->
                  <div class="row">
  
                      <!--Grid column-->
                      <div class="col-md-12">
  
                          <div class="md-form">
                              <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                              <label for="message">Your message</label>
                          </div>
  
                      </div>
                  </div>
                  <!--Grid row-->
  
              </form>
  
              <div class="text-center text-md-left">
                  <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
              </div>
              <div class="status"></div>
              <br/>
          </div>
          <!--Grid column-->
  
          <!--Grid column-->
          <div class="col-md-2 text-center">
              <ul class="list-unstyled mb-0">
                  <li><i class="fas fa-map-marker-alt fa-2x"></i>
                      <p>San Francisco, CA 94126, USA</p>
                  </li>
  
                  <li><i class="fas fa-phone mt-4 fa-2x"></i>
                      <p>+ 01 234 567 89</p>
                  </li>
  
                  <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                      <p>contact@mdbootstrap.com</p>
                  </li>
              </ul>
          </div>
          <!--Grid column-->
  
      </div>
  
  </section>
  <!--Section: Contact v.2-->
  `,
  styles: [`
  .contact{
    background-color: #8533ff;
    border-radius: 10px;
    color: white;
  }
  .form{
    margin-left:15px;
  }
  `]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
