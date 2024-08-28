import styles from "./footer.module.css";
import Logo from "../../assests/svg4.svg";
export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div>
        <h4 className="">Abstract</h4>
        <ul>
          <li>Branches</li>
        </ul>
      </div>
      <div>
        <h4 className="">Resources</h4>
        <ul>
          <li>Blog</li>
          <li>Help Center</li>
          <li>Release Notes</li>
          <li>Status</li>
        </ul>
      </div>
      <div>
        <h4 className="">Community</h4>
        <ul>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>Dribbble</li>
          <li>Podcast</li>
        </ul>
      </div>
      <div>
        <h4 className="">Company</h4>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Legal</li>
        </ul>
        <div style={{ display: "unset" }}>
          <h4 className="">Contact Us</h4>
          <ul>
            <li>info@abstract.com</li>
          </ul>
        </div>
      </div>
      <div className={styles.copyrightCon}>
        <img src={Logo} alt="icon" height="33px" width="43px" />
        <p>© Copyright 2022 </p>
        <p>Abstract Studio Design, Inc. </p>
        <p>All rights reserved</p>
      </div>
    </div>
  );
}
