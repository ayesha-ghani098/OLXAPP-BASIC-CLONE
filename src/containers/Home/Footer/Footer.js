import "./Footer.css";
import { Divider, IconButton } from "@material-ui/core";

import footerimg from "../../../assets/footerimg.png";

import appstore2 from "../../../assets/appstore2.webp";
import playstore2 from "../../../assets/playstore2.webp";
import appstore from "../../../assets/appstore.webp";
import playstore from "../../../assets/playstore.webp";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

function Footer() {
  return (
    <div>
      <div className="footer fluid-container no-gutters">
        <div className="container">
          <div className="row no-gutters">
            <div className="footer_phoneapp col-sm-4">
              <img className="img-fluid" src={footerimg} />
            </div>
            <div className="footer_phoneapp_text col-sm-5">
              <h1>TRY THE OLX APP</h1>
              <p>
                Buy, sell and find just about anything using the app <br /> on
                your mobile.
              </p>
            </div>
            <div className="footer_apps col-sm-3">
              <div>
                <h5>GET YOUR APP TODAY</h5>
                <img src={appstore2} />
                <img src={playstore2} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-main">
        <div class="container">
          <div class="row">
            <div class="col sub-category">
              <h3>Popular Categories</h3>
              <ul>
                <li>
                  <a>Cars </a>
                </li>
                <li>
                  <a>Flats for rent </a>
                </li>
                <li>
                  <a>Jobs </a>
                </li>
                <li>
                  <a>Mobile Phones </a>
                </li>
              </ul>
            </div>
            <div class="col sub-category">
              <h3>Trending Searches</h3>
              <ul>
                <li>
                  <a>Bikes </a>
                </li>
                <li>
                  <a>Watches </a>
                </li>
                <li>
                  <a>Books </a>
                </li>
                <li>
                  <a>Dogs </a>
                </li>
              </ul>
            </div>
            <div class="col sub-category">
              <h3>About Us</h3>
              <ul>
                <li>
                  <a>About OLX Group</a>
                </li>
                <li>
                  <a>OLX Blog</a>
                </li>
                <li>
                  <a>Contact Us </a>
                </li>
                <li>
                  <a>OLX for Businesses</a>
                </li>
              </ul>
            </div>
            <div class="col sub-category">
              <h3>OLX</h3>
              <ul>
                <li>
                  <a>Help </a>
                </li>
                <li>
                  <a>Sitemap </a>
                </li>
                <li>
                  <a>Legal & Privacy Info </a>
                </li>
              </ul>
            </div>
            <div class="col sub-category">
              {" "}
              <h3>Follow Us</h3>
              <div className="Footer_socialmedia">
                <IconButton className="icon">
                  <FacebookIcon />
                </IconButton>
                <IconButton className="icon">
                  <TwitterIcon />
                </IconButton>
                <IconButton className="icon">
                  <YouTubeIcon />
                </IconButton>
                <IconButton className="icon">
                  <InstagramIcon />
                </IconButton>
              </div>
              <div>
                <img src={appstore} />
                <img src={playstore} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fluid-container footer-end">
        <section className="footer__othercountries">
          <small>Other Countries </small>
          <small>India - South Africa - Indonesia</small>
        </section>
        <section className="footer__copyright">
          <span>Free Classifieds in Pakistan</span>
          <span>.</span>
          <span>&copy; 2006-2020 OLX</span>
        </section>
      </div>
    </div>
  );
}

export default Footer;
