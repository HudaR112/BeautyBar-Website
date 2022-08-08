import React from 'react';
import './Content.css';

  function Content() {
    return (
       <div>
         <section class="">
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img class="d-block w-100" src="Images/banner-1.jpg" alt="First slide" style={{height:"auto"}}/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100 " src="Images/banner-2.jpg" alt="Second slide" style={{height:"auto"}}/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100" src="Images/banner-2.jpg" alt="Third slide" style={{height:"auto"}}/>
                  </div>
                </div>
               </div>
        </section>   

        <section class="bg-light" id="about">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Know about us</h3>
               </div>
              </div>
             <div class="row">
                <p class="mt-4 mb-5">BeautyBar was co-founded by Huda Rauf, in 2021, in Karachi, Pakistan. The Salon was
                 started on rather small scale. Huda, for its first class services soon developed a loyal clientele and manifold 
                 increase in workload she launched the first branch of BeautyBar offering a variety of services now running for 8 years successfully.
                 The success story goes on and to cater for the persistent demand of clients from Bahadurabad and BeautyBar's both branches have 
                 separate departments and well trained and experienced staff for different beauty treatments ranging from Makeup, Haircut, Styling, Colouring,
                 Facials, Manicure, Pedicure, Waxing, Nail Art etc.</p>
             </div>   
          </div>   
        </section>   

        <section class="" id="destinations">   
         <div class="container">
             <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Services</h3>
               </div>
              </div>
              <div class="row">
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/ig-3.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Makeup</h4>
                          <p class="mt-4 mb-5">BeautyBar has also been dealing in a wide range of bridal make up, They are currently offering very cheap price in the market with best
                           makeover service in parlour with professional staff. 
                           There are lots of Pakistani actresses has done makeover 
                           with them such as Sanam Baloch, Sana Nawaz , Aiman Khan and 
                           Minal Khan. Lets check the complete list of their bridal makeup charges below.</p>
                          <table className="tablestyle">
                           <thead className='theader'>
                           <th>Makeup Packages</th>
                           <th>Price(Rs)</th>  
                           </thead>                         
                          <tbody class="card-text text-secondary">
                          <tr>
                          <td>Bridal-Makeover</td>     
                          <td>18000</td>	     
                          </tr>
                          <tr><td>Glamour-Shimmer</td>
                          <td>15000</td></tr>
                          <tr><td>Glamour-Smokey</td><td>12000</td></tr>      
                          <tr>
                          <td>Model-Bridal</td>
                          <td>10000</td>
                          </tr>	          
                          <tr><td>Engagement-Makeup</td>
                          <td>7000</td></tr>	       
                          <tr>
                          <td>Face-Services </td>
                          <td>3000</td>
                          </tr>
                          <tr>
                          <td>Full-Services</td>
                          <td>5000</td>
                          </tr>	       
                          <tr>
                          <td>Royal-Services</td>
                          <td>8000</td>
                          </tr>	          
	                       <tr>
                          <td>
                          Makeover+Hairdo
                          </td>
                          <td>
                          5000
                          </td>
                          </tr>          
 	                       <tr>
                          <td>Makeup + Hairdo</td>
                          <td>6000</td>
                          </tr>     	       
                          </tbody>
                          </table>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/t-2.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Haircut</h4>
                          <p class="card-text text-secondary">
                          Love is in the hair! Get smooth sleek hair or gloriously bouncy and voluminous hair.
                          Your beautician will arrive at your home and set up her equipment-all you need is a 
                          chair in good light and a nearby power socket that is not directly connected to the UPS power
                          source in case of an electricity outage.She will have a short consultation session with you
                          regarding which style of ladies haircut or blow dry you would like. For best results make sure your hair 
                          is washed before your appointment and there is electricity to prevent delays.
                          </p>
                          <table className="tablestyle">
                          <thead className='theader'>
                           <th>Hair Packages</th>
                           <th>Price(Rs)</th>           
                           </thead>                
                          <tbody class="card-text text-secondary">
                          <tr>
                          <td>Blowdry</td>     
                          <td>1500</td>	     
                          </tr>
                          <tr><td>Hairstyle</td>
                          <td>3000</td></tr>
                          <tr><td>Child Hairstyle</td><td>1500</td></tr>      
                          <tr>
                          <td>Bridal Hairstyle (with jewelry setting)</td>
                          <td>4500</td>
                          </tr>	          
                          <tr><td>Hot Oil and Shoulder Massage</td>
                          <td>1000</td></tr>	       
                          <tr>
                          <td>Organic Protein Treatment + Massage </td>
                          <td>1500</td>
                          </tr>
                          <tr>
                          <td>Full-Services</td>
                          <td>5000</td>
                          </tr>	       
                          <tr>
                          <td>Hair Dye Application Only (Client's Dye)	</td>
                          <td>8000</td>
                          </tr>	           	       
                          </tbody>
                          </table>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/t-1.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Facial</h4>
                          <p class="card-text text-secondary">People often say beauty is skin-deep and 
                          that resonates a lot with Pakistani women. Our hectic routines and care giving 
                          outlook towards other people leave very little time to practice self-care for ourselves. 
                          Inadvertently we end up neglecting our skin especially our face because we have no time for
                          beauty facials or face threading.Off the shelf beauty products such as cleansing, exfoliating 
                          and sunblock are the core building blocks of ones skin routine, but once in a while, we need to 
                          leave our skin in the hands of the professionals to rejuvenate it.</p>
                       <table className="tablestyle">
                       <thead className='theader'>
                           <th>Faical Packages</th>
                           <th>Price(Rs)</th>      
                           </thead>                     
                          <tbody class="card-text text-secondary">
                          <tr>
                          <td>Cleanser	</td>     
                          <td>2000</td>	     
                          </tr>
                          <tr><td>Face Polisher</td>
                          <td>1500</td></tr>
                          <tr><td>Face Polisher + Cleanser</td><td>2700</td></tr>      
                          <tr>
                          <td>Bridal Hairstyle (with jewelry setting)</td>
                          <td>4500</td>
                          </tr>	          
                          <tr><td>Dermaclear Facial</td>
                          <td>3200</td></tr>	       
                          <tr>
                          <td>Dermaclear Facial with Polisher</td>
                          <td>3600</td>
                          </tr>
                          <tr>
                          <td>Janssen Whitening Facial </td>
                          <td>3700</td>
                          </tr>	       
                          <tr>
                          <td>Janssen Whitening Facial with Polisher</td>
                          <td>4500</td>
                          </tr>	           	       
                          </tbody>
                          </table>
                          </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
              </div>
        </div>
       </section>  


       <section class=""  id="places">
        <div class="container">
          <div class="col-sm-12 col-md-12 mb-4">
             <h3 class="text-center text-secondary mt-4">Location</h3>
         </div>
       <div class="accordion" id="accordionExample">
        <div class="card">
         <div class="card-header" id="headingOne">
            <h2 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               Karachi
            </button>
            </h2>
         </div>

         <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
            C33, E-Street, Block 4, Clifton<br/>
            +92 21 3586 2201-3<br/>
            +92 301 828 3211<br/>
            hello@beautybar.net<br/>
            </div>
            <div class="card-body">
            KDA: 101/B, Tipu Sultan Road, MACHS<br/>
            +92 303 222 2888<br/>
            +92 303 222 2555<br/>
            </div>
         </div>
      </div>
      <div class="card">
         <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Lahore
            </button>
            </h2>
         </div>
         <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
            6/B Block Q, College Road, Gulberg II <br/>
            +92 42 3577 9103-4 <br/>
            +92 42-35751560 <br/>
            +92 333 429 9948 <br/>
            </div>
         </div>
      </div>
      <div class="card">
         <div class="card-header" id="headingThree">
            <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               Islamabad
            </button>
            </h2>
         </div>
         <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
            Plot No 5, Street 14, E/7, Shaheen Market <br/>
            +92 51 265 5585 <br/>
            +92 51 265 5586 <br/>
            +92 321 786 0074 <br/>
            </div>
         </div>
      </div>
      </div>
    </div> 
    </section>
    <section class="bg-light mt-5" id="tourist">    
     <div class="container">
      <div class="row text-center">
        <div class="col-sm-12 col-md-12 mb-4">
            <h3 class="text-center mt-4 text-secondary">Client Reviews</h3>
         </div>
        <div class="col-md-4">
          <div class="testimonial mb-5">
           <div class="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Anna Ameen</h4>
          <h6 class="font-weight-bold blue-text my-3">Client</h6>
          <p class="font-weight-normal dark-grey-text">
          Amazing experience with team Nabila specifically with Arfa and Aafia ♥️♥️♥️
         Best ambiance with well organised and cooperative personnel.</p>
        </div>
      </div>
      
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="Images/ppl1.jpg" margin-top="2px" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Aline Murtaza</h4>
          <h6 class="font-weight-bold blue-text my-3">Client</h6>
          <p class="font-weight-normal dark-grey-text">Such nice hospitable staff. Specially sumera and Afia extremely sweet and very good at what they do.
          Experienced stylists</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Maria Mehmood</h4>
          <h6 class="font-weight-bold blue-text my-3">Client</h6>
          <p class="font-weight-normal dark-grey-text">
          Had an amazing experience of getting make over from N Gents KDA.
          I would absolutely recommend N Gents KDA for their hair services and professionalism.
          They know their way around their dyes and they can also explain to you exactly as is.
          They were professional with their work and very caring towards their clients.
          I have gotten compliments over my hair from family and friends.
          From staff to their extra ordinary expertise in make up and hair section , everything was perfect.
          Highly recommended 💯</p>
        </div>
        </div>
      </div>
    </div> 
 </section> 
</div>
    );
  }
  export default Content;