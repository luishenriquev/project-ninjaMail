import styles from '../../../styles/Home.module.css';

type Props = {
  title: any;
  quebratitle?: any;
  fontSize: any;
  fontFamily: any;
  cor?: any
  fontWeight?: any
}

export default function TitleBody({ title, fontSize, fontFamily, cor, quebratitle, fontWeight}: Props) {
  return (
    <div className={styles.card}>
      <p style={{
         fontSize: fontSize, 
         fontFamily: fontFamily, 
         color: cor,
         fontWeight: fontWeight }}
         >
        {title}<br />
        {quebratitle}<br />
      </p>
    </div>
  )
}