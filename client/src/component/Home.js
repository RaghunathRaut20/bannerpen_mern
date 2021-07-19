import React from 'react';
import penImg from '../images/pen/qq2.webp'
import whatDi from '../images/static/LeadingManufacturer.webp';
import what_bannerpen from '../images/what_bannerpen.webp'
import timerock from '../images/timerock.webp'; 
import specAndFeatures from '../images/specAndFeatures.webp';
import brandsImgs from '../images/brands.webp'; 
import BakerWellbeing from '../images/imgGallery/BakerWellbeing.webp';
import Homecarousel from './Homecarousel'; 


const Home = () => {
    return(
        <>
            <div className="container-fluid bg-Body-Dark">
                <h1 className="text-center fs-1 fw-bold p-3">Welcome to Banner pen direct</h1>
                <div className="d-flex justify-content-center">
                    <iframe  src="https://www.youtube.com/embed/LTbMfm5Eb2E?rel=0&amp;showinfo=0&amp;autoplay=1" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
                </div>
                <h5 className="text-center fs-4 p-3"> Order online | Orders starts from as low as 300pcs | Direct from factory | Free express shipping </h5>
                <div className="text-center">
                    <button className="btn btn-primary btn-m fw-bold">ORDER NOW</button>
                </div>
            </div>
            <div className="container-fluid bg-Body-light">
                <h1 className="text-center fs-1 fw-bold p-3">OUR POPULAR BANNER PENS</h1>
                <p>A quick access to our most popular banner pen models. Always on production. Faster turnaround.</p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 p-2">
                            <div className="card">
                                <img src={penImg} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title text-center text-uppercase">GIRONIMO</h5>
                                    <p className="card-text justify">Best seller. Always on production. Quality translucent pen with a comfi rubber grip. Preferred by most customers. A staggering swatch Of 12 standard colors are available to choose from.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 p-2">
                            <div className="card">
                                <img src={penImg} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title text-center text-uppercase">GIRONIMO</h5>
                                    <p className="card-text justify">Best seller. Always on production. Quality translucent pen with a comfi rubber grip. Preferred by most customers. A staggering swatch Of 12 standard colors are available to choose from.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 p-2">
                            <div className="card">
                                <img src={penImg} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title text-center text-uppercase">GIRONIMO</h5>
                                    <p className="card-text justify">Best seller. Always on production. Quality translucent pen with a comfi rubber grip. Preferred by most customers. A staggering swatch Of 12 standard colors are available to choose from.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 p-2">
                            <div className="card">
                                <img src={penImg} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title text-center text-uppercase">GIRONIMO</h5>
                                    <p className="card-text justify">Best seller. Always on production. Quality translucent pen with a comfi rubber grip. Preferred by most customers. A staggering swatch Of 12 standard colors are available to choose from.</p>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>                
            </div>
            <div className="container-fluid bg-Body-Dark">
                <h1 className="text-center fs-1 fw-bold p-3">WHAT IS BANNER PEN DIRECT?</h1>
                <div class="col-md-8 offset-md-2 col-md-offset-2 justify-content-center">
                    <p class="text-center">Banner pen direct is the only online platform for ordering your banner pens directly from the manufacturer, without waiting for an agent’s quotation and paying middle man fees. We have produced over 15 Million pens to the biggest brands, governments, Universities, Conventions & Exhibitions, mid & small size businesses, self-employed entrepreneurs, restaurants, Coffee shops, weddings and more.</p>
                    <p class="text-center">Banner pen direct is simply the cheapest, fastest and most convenient way to get your customized pens to your doorstep. </p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 p-2">
                            <div className="card">
                                <img src={whatDi} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title text-center text-uppercase">GIRONIMO</h5>
                                    <p className="card-text justify">Best seller. Always on production. Quality translucent pen with a comfi rubber grip. Preferred by most customers. A staggering swatch Of 12 standard colors are available to choose from.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 p-2">
                            <div className="card">
                                <img src={whatDi} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title text-center text-uppercase">GIRONIMO</h5>
                                    <p className="card-text justify">Best seller. Always on production. Quality translucent pen with a comfi rubber grip. Preferred by most customers. A staggering swatch Of 12 standard colors are available to choose from.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 p-2">
                            <div className="card">
                                <img src={whatDi} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title text-center text-uppercase">GIRONIMO</h5>
                                    <p className="card-text justify">Best seller. Always on production. Quality translucent pen with a comfi rubber grip. Preferred by most customers. A staggering swatch Of 12 standard colors are available to choose from.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 p-2">
                            <div className="card">
                                <img src={whatDi} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title text-center text-uppercase">GIRONIMO</h5>
                                    <p className="card-text justify">Best seller. Always on production. Quality translucent pen with a comfi rubber grip. Preferred by most customers. A staggering swatch Of 12 standard colors are available to choose from.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-Body-Dark">
                <div class="container">
                    <h1 className="text-center fs-1 fw-bold p-3">WHAT BANNER PEN CAN BE USED FOR?</h1>
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div class="row">
                                <div className="col-sm-6 col-xs-12">
                                    <ul>
                                        <li>Products & Presentations</li>
                                        <li>Business & Personal Information</li>
                                        <li>Events, conventions & Exhibitions </li>
                                        <li>Election candidates</li>
                                        <li>Advertising</li>
                                    </ul>
                                </div>    
                                <div className="col-sm-6 col-xs-12">    
                                    <ul>
                                        <li>Services, time tables, maps</li>
                                        <li>Restaurants / Coffee shops Menu</li>
                                        <li>Technical information </li>
                                        <li>Special promotion</li>
                                        <li>Branding</li>
                                    </ul>
                                </div>
                            </div>
                            <p>Basically everything. Any information you want your customers to have in their hand or on their desk at all times. You will be surprised how well those pens work for you. Most of our customers will re-order them again and again.</p>
                            <p>For further ideas & inspiration, visit our leading banner designs gallery. </p>
                            <button className="btn btn-primary">VISIT GALLERY</button>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <img src={what_bannerpen} className="img-fluid"/>
                        </div>
                    </div>
                </div>    
            </div>    
            <div className="container-fluid bg-Body-light">
                <div class="container">
                    <h1 className="text-center fs-1 fw-bold p-3">ORDER TIMELINE</h1>                    
                    <img src={timerock} className="mx-auto d-block img-fluid" />                    
                </div>    
            </div>
            <div className="container-fluid bg-Body-light">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <img src={specAndFeatures} className="img-fluid" />
                        </div>
                        <div class="col-md-6">
                            <h1 className="text-center fs-1 fw-bold p-3">BANNER PEN SPEC & FEATURES</h1> 
                            <div class="row">
                                <div className="col-sm-6 col-xs-12">
                                    <ul>
                                        <li> Quality long lasting pen </li>
                                        <li> Durable ABS material </li>
                                        <li> Rubber grip for extra comfort </li>
                                        <li> Bold tip 0.1mm quality ball refill </li>
                                        <li> Optional quality silk screen logo imprint on pen barrel/clip  </li>                                        
                                    </ul>
                                </div>    
                                <div className="col-sm-6 col-xs-12">    
                                    <ul>
                                        <li> 18 x 7cm size retractable banner  </li>
                                        <li> full color CMYK Process printing on both sides of banner </li>
                                        <li> front side paper coating for extra stability and lustre </li>
                                        <li> Additional Stylus tip for writing on touch screens </li>
                                    </ul>
                                </div>
                            </div> 
                            <button class="btn btn-primary"> READ MORE </button>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="container-fluid bg-Body-light">
                <div class="container">
                    <h1 className="text-center fs-1 fw-bold p-3">OUR CUSTOMERS</h1>
                    <img src={brandsImgs} class="img-fluid"/>
                </div>
            </div>
            <div className="container-fluid bg-Body-Dark">
                <div class="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className="text-center fs-1 fw-bold p-3">Need Help With Your Banner Design?</h1>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-primary"> ARTWORK PAGE </button>
                            </div>                            
                        </div>                        
                    </div>
                </div>
            </div> 
            <div className="container-fluid bg-Body-Dark">
                <div class="container">
                    <h1 className="text-center fs-1 fw-bold p-3">Image Gallery</h1>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={BakerWellbeing} className="img-fluid" />
                        </div>
                        <div className="col-md-3">
                            <img src={BakerWellbeing} className="img-fluid" />
                        </div>
                        <div className="col-md-3">
                            <img src={BakerWellbeing} className="img-fluid" />
                        </div>
                        <div className="col-md-3">
                            <img src={BakerWellbeing} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-Body-light">
                <div className="container">
                <h1 className="text-center fs-1 fw-bold p-3">WHAT OUR CUSTOMERS SAY</h1>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={BakerWellbeing} className="mx-auto d-block img-fluid" />
                                <div class="col-md-6 offset-md-3 col-md-offset-3 justify-content-center">
                                    <p className="text-center">We have been getting the banner pens for every trade show we have participating in the last 5 years. Those pens are brilliantly serving our purpose of introducing our new products and company information within a quality useful and low cost giveaway</p>
                                    <h5 className="text-center">Raghunath Raut</h5>
                                    <p className="text-center">Product Manager</p>
                                </div>                               
                            </div>
                            <div className="carousel-item">
                                <img src={BakerWellbeing} className="mx-auto d-block img-fluid" />
                                <div class="col-md-6 offset-md-3 col-md-offset-3 justify-content-center">
                                    <p className="text-center">We have been getting the banner pens for every trade show we have participating in the last 5 years. Those pens are brilliantly serving our purpose of introducing our new products and company information within a quality useful and low cost giveaway</p>
                                    <h5 className="text-center">Raghunath Raut</h5>
                                    <p className="text-center">Product Manager</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={BakerWellbeing} className="mx-auto d-block img-fluid" />
                                <div class="col-md-6 offset-md-3 col-md-offset-3 justify-content-center">
                                    <p className="text-center">We have been getting the banner pens for every trade show we have participating in the last 5 years. Those pens are brilliantly serving our purpose of introducing our new products and company information within a quality useful and low cost giveaway</p>
                                    <h5 className="text-center">Raghunath Raut</h5>
                                    <p className="text-center">Product Manager</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>    
            </div>

            <div className="container-fluid bg-Body-light">
                <div className="container">
                    <h1 className="text-center fs-1 fw-bold p-3">Contact us</h1>
                    <div className="row">
                        <div className="col-md-8 offset-md-2 col-md-offset-2 justify-content-center">
                            <p> Please fill the below form and use the free text box to send your enquiry. You may also contact us via direct chat on WhatsApp, Telegram, Facebook messenger via our Facebook page, Instagram & Twitter accounts or simply Try our website live chat channel.
    </p>                    
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-md-4">
                            <p>WhatsApp: Send us a message</p>
                            <p>Telegram: t.me/bannerpen</p>
                            <p>Email:info@bannerpen.org</p>
                            <p>16-18 Mau Lam st. Jordan, Kowloon, Hong Kong </p>
                        </div>
                        <div className="col-md-8">
                            <form method="post">
                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <input class="form-control" type="text" placeholder="Name" aria-label="Name" />
                                    </div>
                                    <div class="col-md-6">
                                        <input class="form-control" type="email" placeholder="Email" aria-label="Email" />
                                    </div>
                                </div>  
                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <select class="form-control"  aria-label="Name">
                                            <option>Test</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6">
                                        <input class="form-control" type="Mobile No" placeholder="Mobile No" aria-label="Mobile No" />
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <textarea class="form-control" placeholder="Message"></textarea>                                          
                                </div>
                                <button class="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>   
                </div>
            </div>
        </>
    )   
}

export default Home;