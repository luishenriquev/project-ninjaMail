import styles from '../../../styles/Home.module.css';
import Image from "next/image";
import Title from "../Title";

type Props = {
    img: any;
  }

export default function CardMember({ img, }:Props) {
    return (
        <div>
            <div className={styles.CardCompMember}>
                <div>
                    <Image src={img} alt="photo member" />
                </div>
                <div className={styles.titlesCompMember}>
                    <Title title={'Frankie'} fontSize={34} fontWeight={900} fontFamily={'Raleway'} cor={'#FFFF'} />
                    <div className={styles.titleCompMember}>
                        <Title title={'Member since 2016'} fontSize={19} fontWeight={700} fontFamily={'Raleway'} cor={'#FFFF'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
