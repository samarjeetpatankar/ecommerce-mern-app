import styles from "./Footer.module.css";
import { about, help, policy, social } from "../../Assets/FooterData";
import { BsBagFill } from "react-icons/bs";
import { GiAlliedStar, GiHelp } from "react-icons/gi";
import { MdCardGiftcard } from "react-icons/md";
import {
  FaCcAmex,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcPaypal,
} from "react-icons/fa";
import { SiMastercard } from "react-icons/si";
import { SlCreditCard } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.topSection}>
        <div className={styles.linkSection}>
          <span className={styles.spanText}>ABOUT</span>
          {about.map((elem, i) => (
            <p key={i}>
              <a
                className={styles.ancorLink}
                href={elem.link}
                target={"_blank"}
                rel="noreferrer"
              >
                {elem.name}
              </a>
            </p>
          ))}
        </div>
        <div className={styles.linkSection}>
          <span className={styles.spanText}>HELP</span>
          {help.map((elem, i) => (
            <p key={i}>
              <a
                className={styles.ancorLink}
                href={elem.link}
                target={"_blank"}
                rel="noreferrer"
              >
                {elem.name}
              </a>
            </p>
          ))}
        </div>
        <div className={styles.linkSection}>
          <span className={styles.spanText}>POLICY</span>
          {policy.map((elem, i) => (
            <p key={i}>
              <a
                className={styles.ancorLink}
                href={elem.link}
                target={"_blank"}
                rel="noreferrer"
              >
                {elem.name}
              </a>
            </p>
          ))}
        </div>
        <div className={styles.linkSection}>
          <span className={styles.spanText}>SOCIAL</span>
          {social.map((elem, i) => (
            <p key={i}>
              <a
                className={styles.ancorLink}
                href={elem.link}
                target={"_blank"}
                rel="noreferrer"
              >
                {elem.name}
              </a>
            </p>
          ))}
        </div>
        <hr className={styles.verticleLine} />
        <div className={styles.linkSection}>
          <span className={styles.spanText}>Mail Us:</span>
          <p className={styles.text}>
            Acme Corporation,
            <br />
            123 Main Street,
            <br />
            Suite 456,
            <br />
            Anytown, USA 12345
          </p>
        </div>

        <div className={styles.linkSection}>
          <span className={styles.spanText}>Registered Office Address:</span>
          <p className={styles.text}>
            ABC Corporation Pvt. Ltd.,
            <br />
            Tower XYZ, Suite 789,
            <br />
            Tech Park Avenue, Tech City,
            <br />
            Metropolitan District,
            <br />
            Newville, 12345, State of Example,
            <br />
            Country Code : AB12345CD
            <br />
            Telephone: +1-234-567-8900
          </p>
        </div>
      </section>
      <hr className={styles.horizonLine} />
      <section className={styles.bottomSection}>
        <p>
          <a className={styles.ancorLink} target={"_blank"} rel="noreferrer">
            <BsBagFill className={styles.icon} /> Become a Seller
          </a>
        </p>
        <p>
          <a className={styles.ancorLink} target={"_blank"} rel="noreferrer">
            <GiAlliedStar className={styles.icon} /> Advertise
          </a>
        </p>
        <p>
          <a className={styles.ancorLink} target={"_blank"} rel="noreferrer">
            <MdCardGiftcard className={styles.icon} /> Gift Card
          </a>
        </p>
        <p>
          <a className={styles.ancorLink} target={"_blank"} rel="noreferrer">
            <GiHelp className={styles.icon} /> Help Center
          </a>
        </p>
        <p>© 2023 Ecommerce.com</p>
        <p className={styles.cards}>
          <FaCcVisa className={styles.card} />
          <FaCcMastercard className={styles.card} />
          <SiMastercard className={styles.card} />
          <SlCreditCard className={styles.card} />
          <FaCcAmazonPay className={styles.card} />
          <FaCcApplePay className={styles.card} />
          <FaCcPaypal className={styles.card} />
          <FaCcAmex className={styles.card} />
        </p>
      </section>
    </footer>
  );
};

export default Footer;
