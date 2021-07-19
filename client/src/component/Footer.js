import React from 'react';

const Footer = () => {
    return(
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h5 className="text-center p-3 fw-bold">ABOUT US</h5>
                            <div>
                                <p>Banner pen direct is the only online platform for ordering your banner pens directly from the manufacturer, without waiting for an agent’s quotation and paying middle man fees. We have produced over 15 Million pens to the biggest brands, governments, Universities, Conventions & Exhibitions, mid & small size businesses, self-employed entrepreneurs, restaurants, Coffee shops, weddings and more.</p>                            
                            </div>
                        </div>
                        <div className="col-md-2">
                            <h5 className="text-center p-3 fw-bold">QUICK LINKS</h5>
                            <ul>
                                <li>About US</li>
                                <li>Banner Pens</li>
                                <li>Customized USB Drives</li>
                                <li>Artwork & Spec</li>
                                <li>Upload your Artworks</li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h5 className="text-center p-3 fw-bold">SUPPORT</h5>
                            <ul>
                                <li>Online chat support </li>
                                <li>Contact us on</li>
                                <li>Facebook</li>
                                <li>Whatsapp</li>
                                <li>E-mail us</li>
                            </ul>
                        </div>    
                        <div className="col-md-5">
                            <h5 className="text-center p-3 fw-bold">SUBSCRIBE</h5>
                            <div class="row">
                                <div class="col-md-8">
                                    <input type="text" className="form-control" />
                                </div>
                                <div class="col-md-4">
                                    <button class="btn btn-primary"> Subscribe </button>
                                </div>
                            </div>

                        </div>    
                    </div>
                </div>
            </div>   
        </>
    )
}

export default Footer;