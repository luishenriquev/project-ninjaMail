import img from "../../../public/NinjaMailLogo.png";
import styles from '../../../styles/Home.module.css';
import Button from "../Button";
import Logo from "../Logo";
import Title from "../Title";

export default function Head() {
  return (
    <div className={styles.head} >
      <Logo imgP={img} />
      <div className={styles.options}>
        <ul className={styles.titlesOptions}>
          <div className={styles.containerOptions}>
            <li className={styles.title}>
            <Title title={'FEATURES'} fontSize={17} fontFamily={'Raleway'} fontWeight={800} />            
            </li>
            <p className={styles.underlineOptions} />
          </div>
          <div className={styles.containerOptions}>
            <li className={styles.title}>
            <Title title={'PRICING'} fontSize={17} fontFamily={'Raleway'} fontWeight={800} />            
            </li>
            <p className={styles.underlineOptions} />
          </div>

          <div className={styles.containerOptions}>
            <li className={styles.title}>
            <Title title={'SERVICES'} fontSize={17} fontFamily={'Raleway'} fontWeight={800} />       
            </li>
            <p className={styles.underlineOptions} />
          </div>

          <div className={styles.containerOptions}>
            <li className={styles.title}>
            <Title title={'PARTNERS'} fontSize={17} fontFamily={'Raleway'} fontWeight={800} />
            </li>
            <p className={styles.underlineOptions} />
          </div>
        </ul>
        <Button title={'SIGN UP FREE'} height={41} width={168} cor={'#4BA87D'} fontFamily={'Raleway'} corTitle={'#FFFF'} fontWeight={800} fontSize={17} />
      </div>
    </div>
  )
}
