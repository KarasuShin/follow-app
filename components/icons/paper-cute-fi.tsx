import { memo } from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Path } from 'react-native-svg'
import { useStyles } from 'react-native-unistyles'

function SvgPaperCuteFi(props: SvgProps) {
  const {
    theme,
  } = useStyles()
  return <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}><Path fill={props.color || theme.colors.gray12} fillRule="evenodd" d="M19 16v-4.073c0-1.824 0-3.294-.155-4.45-.162-1.2-.507-2.21-1.31-3.013-.802-.802-1.813-1.147-3.013-1.309C13.366 3 11.897 3 10.073 3H5.968c-.7 0-1.456-.045-2.116.228a3 3 0 0 0-1.624 1.624 3.069 3.069 0 0 0-.207.985c-.045.66-.08 1.377-.01 2.036.038.362.223.692.522.9.274.193.587.227.911.227H5v8.076c0 .886 0 1.65.082 2.262.088.655.287 1.284.797 1.793.722.722 1.846.892 2.829.869 2.593.07 5.193.004 7.787 0 .685 0 1.277 0 1.758-.05.896-.095 1.682-.483 2.204-1.23.318-.453.438-.955.492-1.467.073-.689.113-1.434.04-2.126a1.25 1.25 0 0 0-1.116-1.116C19.585 15.981 19.29 16 19 16m-8.174 4h5.618c.75 0 1.235-.001 1.6-.04.58-.06.858-.36.916-.916.028-.266.037-.595.039-1.044H11v.99c0 .354-.062.694-.174 1.01M5 7V5.015c-.242.015-.34.043-.383.061-.391.162-.573.499-.6.898C4 6.21 4 6.52 4 7zm4 2a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1" clipRule="evenodd" /></Svg>
}
const Memo = memo(SvgPaperCuteFi)
export default Memo
