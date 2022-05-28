import Image from 'next/image';
import styles from '../../../styles/Home.module.css';

type Props = {
  imgP: any;
  marginRight?: any;
}

export default function Logo({ imgP, marginRight }: Props) {
  return (
    <div className={styles.cardLogo} style={{ marginRight: marginRight}}>
      
        <Image
        src={imgP}
        alt="My Image"

      />

    </div>
  )
}
