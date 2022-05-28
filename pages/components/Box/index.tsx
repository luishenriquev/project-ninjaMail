import Image from "next/image";
import styles from '../../../styles/Home.module.css';
import { default as Title, default as TitleBox } from "../TitleBox";

type Props = {
  img: any;
  title: any;
  marginTop?: any;
  marginRight?: any;

}
export default function Box({ img, title, marginTop, marginRight }: Props) {
  return (
    <div className={styles.containercompBox} style={{ marginTop: marginTop, marginRight: marginRight }}>
      <Image src={img} alt="img" />
      <div className={styles.cardCompBox} >
        <div className={styles.titleCompBox1}>
          <TitleBox title={'Launch campaigns but also find'} quebratitle={'new customers. Our unique '} outroQuebratitle={'platform handles campaigns '} outroQuebratitle2={'from start to end.'} fontSize={16} fontFamily={'Raleway'} fontWeight={500} cor={'#000000'} />
        </div>
        <div className={styles.titleCompBox2}>
          <Title title={'Learn More >'} fontSize={16} fontFamily={'Raleway'} fontWeight={800} cor={'#4BA87D'} />
        </div>
      </div>
    </div>
  )
}
