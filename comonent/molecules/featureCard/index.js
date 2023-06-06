import React from "react";
import Image from "next/image";
import hotel from'../../../public/images/rent.jpeg';
import { FiMapPin } from 'react-icons/fi';
import { BiArea } from 'react-icons/bi';
import { MdOutlineBathtub, MdOutlineBedroomParent } from 'react-icons/md';
import './styles.scss';

function FeatureCard() {
  return (
    <div className="col-md-4 col-xs-12">
      <div className="blogCol">
        <div class="featureCard">
          <div class="image">
            <Image
              src={hotel}
              width='100px'
              height='100px'
              alt="rentImage"
            />
            <div className="saleCapton">
                <div className="saleCapton_tab green">
                    <p>House</p>
                </div>
                <div className="saleCapton_tab">
                    <p>Active</p>
                </div>
            </div>
          </div>
          <figcaption>
              <div class="contentCAption">
                    <span class="feature_address">
                    <FiMapPin fontSize={15} color='grey' style={{marginRight: '4px'}} /> 525 W 28th Street, Manila 
                    </span>
                    <div class="feature-title">
                            <h4><span class="amount">Rs.3,410</span> /month</h4>
                            <h5><a href="#">AVA High Line </a></h5>
                    </div>
                    <div class="fp--excerpt">
                      <p>Special pricing for immediate move-ins! Call for details! AVA is a first. Our apartments are energized by New York City, personalized by you. Yep. Take our DIY kits and go...</p>
                    </div>
              </div>
          </figcaption>
          <div class="property_fdetail width-100">
              <div class="area area_First">
                <BiArea fontSize={20} color='grey' style={{marginRight: '4px', float: 'left'}} />
                <span>Sqft 1200</span>
              </div>
              <div class="area">
                <MdOutlineBedroomParent fontSize={20} color='grey' style={{marginRight: '4px', float: 'left'}} />
                <span>3</span>
              </div>
              <div class="area">
                <MdOutlineBathtub fontSize={20} color='grey' style={{marginRight: '4px', float: 'left'}} />
                <span>2</span>
              </div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default FeatureCard;

