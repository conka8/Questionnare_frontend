import styled from 'styled-components'
import useTheme from 'hooks/useTheme'
import { Box, Flex } from 'components/Box'
import { Text } from './Text'
import { AlertIcon, CheckedIcon, ForbidIcon, ClockDarkIcon } from './Svg'
import useViewport from 'hooks/useViewport'

export type AlertType = 'warning' | 'success' | 'info' | 'loading' | 'error'
interface IAlertProps {
    message: string
    type: AlertType
    variant?: 'warning' | 'success' | 'info' | 'loading' | 'error'
}

const BridgeStatus = (props: IAlertProps) => {
    const { message, type, variant } = props
    const { theme } = useTheme()
    const { width } = useViewport()
    const isMobile = width <= 990
    return (
        <AlertContainer type={type} minHeight={'25px'} height={!isMobile && '30px'}>
            <Box>
                {variant === 'warning' ? (
                    type === 'warning' && <ClockDarkIcon fill={theme.colors[type]} />
                ) : variant === 'success' ? (
                    type === 'success' && <CheckedIcon color={theme.colors[type]} />
                ) : variant === 'info' ? (
                    type === 'info' && <CheckedIcon color={theme.colors[type]} />
                ) : variant === 'error' ? (
                    <ForbidIcon color={theme.colors[variant]} />
                ) :
                    <AlertIcon color={theme.colors[type]} />
                }
            </Box>
            <Box ml={'0.6rem'} mb={'4px'}>
                <AlertText type={type}>{message}</AlertText>
            </Box>
        </AlertContainer>
    )
}

const AlertContainer = styled(Flex) <{ type: AlertType }>`
  border-radius: 4px;
//   background: ${(props) => props.theme.colors[`${props.type}Bg`]};
  align-items: center;
  margin-bottom: 10px;
`

const AlertText = styled(Text) <{ type: AlertType }>`
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: ${(props) => props.theme.fonts.medium};
  font-size: 14px;
  color: ${(props) => props.theme.colors[props.type]};
  margin: 0;
`

export default BridgeStatus
