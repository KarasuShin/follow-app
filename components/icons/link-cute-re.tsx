import { memo } from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Path } from 'react-native-svg'
import { useStyles } from 'react-native-unistyles'

function SvgLinkCuteRe(props: SvgProps) {
  const {
    theme,
  } = useStyles()
  return <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}><Path stroke={props.color || theme.colors.gray12} strokeLinecap="round" strokeWidth={2} d="m11.647 5.988-1.415-1.414a4 4 0 0 0-5.656 0v0a4 4 0 0 0 0 5.656l2.828 2.829a4 4 0 0 0 5.657 0m-.707 4.95 1.414 1.414a4 4 0 0 0 5.657 0v0a4 4 0 0 0 0-5.657l-2.829-2.828a4 4 0 0 0-5.656 0" /></Svg>
}
const Memo = memo(SvgLinkCuteRe)
export default Memo
