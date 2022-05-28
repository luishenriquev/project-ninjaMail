

type Props = {
  title: any;
  height: any;
  width: any;
  cor: any;
  corTitle?: any
  fontFamily: any;
  fontSize?: any;
  fontWeight?: any
}
export default function Button({ title, height, width, cor, fontFamily, fontSize, fontWeight, corTitle }: Props) {
  return (
    <button style={{ height: height, width: width, background: cor, border: 'none', fontFamily: fontFamily, fontSize: fontSize, color: corTitle, fontWeight: fontWeight }}>
      {title}
      {/* <Title title={title} fontSize={fontSize} fontFamily={fontFamily} cor={cor} /> */}
    </button>
  )
}

