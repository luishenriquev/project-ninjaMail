
import Image from "next/image";
import logo1 from "../../../public/logo1.png";
import logo2 from "../../../public/logo2.png";
import logo3 from "../../../public/logo3.png";
import logo4 from "../../../public/logo4.png";
import logo5 from "../../../public/logo5.png";
import img from "../../../public/photo.png";
import photobox from "../../../public/photobox.png";
import photobox2 from "../../../public/photobox2.png";
import photoMember from "../../../public/photoMember.png";
import photoMember2 from "../../../public/photoMember2.png";
import photoMember3 from "../../../public/photoMember3.png";
import imgV from "../../../public/video-image.png";
import styles from '../../../styles/Home.module.css';
import Box from "../Box";
import Button from "../Button";
import CardMember from "../CardMember";
import Logo from "../Logo";
import Title from "../Title";
import TitleBody from "../TitleBody/index";
import TitleBox from "../TitleBox";

export default function Body() {
    return (
        <div className={styles.Warpper}>
            <div className={styles.containerBody}>
                <div className={styles.cardBody}>
                    <div className={styles.cardTitlesBtnsBody}>
                        <TitleBody title={'Create Stunning'} quebratitle={'Email Campaigns'} fontSize={59} fontFamily={'Playfair Display'} />
                        <div className={styles.titleBody}>
                            <TitleBody title={'Create and launch  email campaigns that captivate'} quebratitle={' your customers in just a few clicks.'} fontSize={19} fontFamily={'Raleway'} />
                        </div>
                        <div className={styles.cardBtns}>
                            <Button title={'TRY NOW'} height={65} width={200} cor={'#4BA87D'} fontFamily={'Raleway'} corTitle={'#FFFF'} fontSize={21} fontWeight={900} />
                            <div className={styles.BtnCustom}>
                                <Button title={'GET A DEMO'} height={62} width={198} cor={'#FFFFFF'} fontFamily={'Raleway'} corTitle={'#4BA87D'} fontSize={21} fontWeight={900} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.ImgBody}>
                        <Image src={img} alt="Body" />
                    </div>
                </div>
            </div>
            <div className={styles.fundoVideo}>
                <div className={styles.imgVideo}>
                    <Image src={imgV} alt="" />
                </div>
                <div className={styles.cardVideo}>
                    <div className={styles.titleVideo}>
                        <Title title={'Reach More Customers'} fontSize={60} fontFamily={'Playfair Display'} fontWeight={900} cor={'#FFFF'} />
                        <div className={styles.BtnVideo}>
                            <Button title={'LEARN HOW'} height={65} width={198} cor={'#FFFFFF'} fontFamily={'Raleway'} corTitle={'#4BA87D'} fontSize={21} fontWeight={900} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.warpperBox}>
                <div className={styles.containerBox}>
                    <div className={styles.cardBox}>
                        <Box img={photobox} title="Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end." marginTop={-50} marginRight={47} />
                        <div className={styles.Box2}>
                            <Box img={photobox2} title="Start building and sharing with your team today. NinjaMail is renowned for its industry leading team collaboration tools." marginTop={33} marginRight={47} />
                        </div>
                    </div>
                    <div className={styles.titlesBox}>
                        <div className={styles.titleBox1}>
                            <TitleBox title={'The source for'} quebratitle={'proven, engaging'} outroQuebratitle={'email campaigns'} fontSize={44} fontFamily={'Playfair Display'} fontWeight={900} cor={'#000000'} />
                        </div>
                        <div className={styles.titleBox2}>
                            <TitleBox title={'Whether you’re a startup, small'} quebratitle={'business, e-commerce store, or '} outroQuebratitle={'want to promote your app, NinjaMail'} outroQuebratitle2={'has the feature set tailored for'} outroQuebratitle3={'your business.'} fontSize={19} fontFamily={'Raleway'} fontWeight={500} cor={'#000000'} />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.containerMember}>
                    <CardMember img={photoMember} />
                    <CardMember img={photoMember2} />
                    <CardMember img={photoMember3} />
                </div>
                <div className={styles.containerInput}>
                    <TitleBody title={'Learn how others are reaching their '} quebratitle={'audience easier than ever before.'} fontSize={44} fontWeight={900} fontFamily={'Playfair Display'} />
                    <div className={styles.cardInput}>
                        <input className={styles.Input} placeholder={"Enter your email"} />
                        <Button title={'JOIN OUR LIST'} height={65} width={221} cor={'#4BA87D'} fontFamily={'Raleway'} corTitle={'#FFFF'} fontSize={21} fontWeight={900} />
                    </div>
                    <div className={styles.subTitleInput}>
                        <Title title={'Thanks! Email received.'} fontSize={21} fontWeight={500} fontFamily={'Raleway'} cor={'#4BA87D'} />
                    </div>
                </div>
                <div className={styles.cardLogoImg}>
                    <TitleBody title={'All the best brands'} quebratitle={'already use us.'} fontSize={44} fontWeight={900} fontFamily={'Playfair Display'} />
                    <div className={styles.LogosImgs}>
                        <Logo imgP={logo1} marginRight={60} />
                        <Logo imgP={logo2} marginRight={60} />
                        <Logo imgP={logo3} marginRight={60} />
                        <Logo imgP={logo4} marginRight={60} />
                        <Logo imgP={logo5} marginRight={60} />
                    </div>
                </div>
            </div>
            <div className={styles.containerGS}>
                <Title title={'Get started today!'} fontSize={60} fontWeight={900} fontFamily={'Playfair Display'} cor={'#FFFF'} />
                <Button title={'PICK A PLAN'} height={65} width={200} cor={'#FFFF'} fontFamily={'Raleway'} corTitle={'#4BA87D'} fontSize={21} fontWeight={900} />
            </div>
        </div>

    )
}