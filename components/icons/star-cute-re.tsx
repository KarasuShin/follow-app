import { memo } from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Path } from 'react-native-svg'
import { useStyles } from 'react-native-unistyles'

function SvgStarCuteRe(props: SvgProps) {
  const {
    theme,
  } = useStyles()
  return <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}><Path stroke={props.color || theme.colors.gray12} strokeWidth={2} d="M8.885 5.865C10.324 4.08 11.043 3.188 12 3.188c.957 0 1.676.892 3.115 2.677l.218.27c.337.42.506.63.72.785.216.157.467.252.97.444l.325.124c2.142.816 3.213 1.224 3.509 2.134.295.91-.331 1.87-1.584 3.79l-.19.29c-.294.451-.441.677-.524.93-.082.252-.095.52-.122 1.058l-.017.347c-.115 2.29-.172 3.435-.946 3.997-.774.562-1.881.263-4.094-.336l-.335-.09c-.52-.14-.78-.211-1.045-.211-.266 0-.525.07-1.045.21l-.335.091c-2.213.599-3.32.898-4.094.336-.774-.562-.831-1.707-.946-3.997l-.017-.347c-.027-.537-.04-.806-.122-1.059-.082-.252-.23-.478-.524-.928l-.19-.291c-1.253-1.92-1.88-2.88-1.584-3.79.296-.91 1.367-1.318 3.51-2.134l.324-.124c.503-.192.754-.287.97-.444.214-.156.383-.365.72-.784z" /></Svg>
}
const Memo = memo(SvgStarCuteRe)
export default Memo
