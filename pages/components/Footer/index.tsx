
import Logo from "../Logo";
import imgNinja from "../../../public/NinjaMailLogo.png"
import styles from '../../../styles/Home.module.css';
import Title from "../Title";


export default function Footer() {
  return (
    <div className={styles.WarpperFooter}>
      <div className={styles.containerFooter}>
        <Logo imgP={imgNinja} />
        <div className={styles.cardFooter}>
          <div className={styles.cardFooter1}>
            <Title title={'Features'} fontSize={17} fontFamily={'Raleway'} fontWeight={800} />
            <Title title={'Pricing'} fontSize={17} fontFamily={'Raleway'} fontWeight={800} />
            <Title title={'Services'} fontSize={17} fontFamily={'Raleway'} fontWeight={800} />
            <Title title={'Partners'} fontSize={17} fontFamily={'Raleway'} fontWeight={800} />
          </div>
          <div className={styles.cardFooter2}>
            <Title title={'About Us'} fontSize={17} fontFamily={'Raleway'} fontWeight={800} />
            <Title title={'Tutorials'} fontSize={17} fontFamily={'Raleway'} fontWeight={800} />
            <Title title={'Resources'} fontSize={17} fontFamily={'Raleway'} fontWeight={800} />
            <Title title={'Help Center'} fontSize={17} fontFamily={'Raleway'} fontWeight={800} />
            <Title title={'Templates'} fontSize={17} fontFamily={'Raleway'} fontWeight={800} />
            <Title title={'Case Studies'} fontSize={17} fontFamily={'Raleway'} fontWeight={800} />
          </div>
          <div className={styles.cardFooter3}>
            <Title title={'Medium'} fontSize={17} fontFamily={'Raleway'} fontWeight={800} />
            <Title title={'Twitter'} fontSize={17} fontFamily={'Raleway'} fontWeight={800} />
            <Title title={'Facebook'} fontSize={17} fontFamily={'Raleway'} fontWeight={800} />
            <Title title={'Instagram'} fontSize={17} fontFamily={'Raleway'} fontWeight={800} />
            <Title title={'LinkedIn'} fontSize={17} fontFamily={'Raleway'} fontWeight={800} />
          </div>
          <div className={styles.cardFooter4}>
            <Title title={'Contact Us'} fontSize={17} fontFamily={'Raleway'} fontWeight={800} />
            <Title title={'Slack'} fontSize={17} fontFamily={'Raleway'} fontWeight={800} />
            <Title title={'Jobs'} fontSize={17} fontFamily={'Raleway'} fontWeight={800} />
          </div>
        </div>
      </div>
      <div className={styles.underlineFooter} />
      <div className={styles.Footer}>
        <Title title={'NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All rights reserved.'} fontSize={15} fontFamily={'Raleway'} fontWeight={700} />
        <div className={styles.Footer2}>
          <Title title={'Terms & Conditions'} fontSize={15} fontFamily={'Raleway'} fontWeight={700} />
        </div>
        <div className={styles.Footer3}>
          <Title title={'Privacy Policy'} fontSize={15} fontFamily={'Raleway'} fontWeight={700} />
        </div>
      </div>
    </div>

  )
}
