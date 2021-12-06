import "./Hero.scss";

import img1 from "../../Asset/img/1638237499619_Webp.net-compress-image.jpg";
import img2 from "../../Asset/img/1638574368329_Metaverse Real Estate (1).jpg";
import img3 from "../../Asset/img/1638538086375_Airdrop-Sandbox-Graphic-280x136.jpg";
import img4 from "../../Asset/img/1638532906356_Meta image 280x136.png";
import img5 from "../../Asset/img/1631754270064_Frame 48.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="carrousel">
        <div className="one">
          <img src={img1} alt="" />

          <span>Crypto Report</span>
          <span>Report: A Glimpse Into Crypto</span>
        </div>
        <div className="two">
          <img src={img2} alt="" />

          <span>Crypto Tutorials</span>
          <span>Metaverse Real Estate</span>
        </div>
        <div className="three">
          <img src={img3} alt="" />
          <span>Token Airdrop</span>
          <span>$130K of 10 Alpha Pass Airdrop!</span>
        </div>
        <div className="four">
          <img src={img4} alt="" />
          <span>Learn & Earn</span>
          <span>Join $400K NEAR Learning Campaign!</span>
        </div>
        <div className="five">
          <img src={img5} alt="" />
          <span>Podcast</span>
          <span>Podcast: BTC Misses Price Target</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
