import styles from '../../../styles/Home.module.css';

type Props = {
  title: any;
  quebratitle?: any;
  outroQuebratitle?: any;
  outroQuebratitle2?: any;
  outroQuebratitle3?: any;
  fontSize: any;
  fontFamily: any;
  cor?: any
  fontWeight?: any
}

export default function TitleBox({ title, fontSize, fontFamily, cor, quebratitle, fontWeight, outroQuebratitle, outroQuebratitle2, outroQuebratitle3 }: Props) {
  return (
    <div className={styles.card}>
      <p style={{ fontSize: fontSize, fontFamily: fontFamily, color: cor, fontWeight: fontWeight }} >
        {title}<br />
        {quebratitle}<br />
        {outroQuebratitle}<br />
        {outroQuebratitle2}<br />
        {outroQuebratitle3}
      </p>
    </div>
  )
}