import Image from "next/image";
import styles from '../../../styles/Home.module.css';
import Title from "../Title";

type Props = {
    img: any;
    title: any;
    subTitle: any;
  }

export default function CardMember({ img, title, subTitle }:Props) {
    return (
        <div>
            <div className={styles.CardCompMember}>
                <div className={styles.imgMember}>
                    <Image src={img} alt="photo member" />
                </div>
                <div className={styles.titlesCompMember}>
                    <Title title={title} fontSize={34} fontWeight={900} fontFamily={'Raleway'} cor={'#FFFF'} />
                    <div className={styles.titleCompMember}>
                        <Title title={subTitle} fontSize={19} fontWeight={700} fontFamily={'Raleway'} cor={'#FFFF'} display={'flex'} flexDirection={"row"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
