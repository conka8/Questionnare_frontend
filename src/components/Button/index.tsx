import { ReactNode } from 'react'
import styled from 'styled-components'
import {
    border,
    BorderProps,
    fontFamily,
    FontFamilyProps,
    fontWeight,
    FontWeightProps,
    layout,
    LayoutProps,
    margin,
    MarginProps,
    padding,
    PaddingProps,
} from 'styled-system'
import SpinnerCircle from '../SpinnerCircle'

type Variant = 'primary' | 'secondary' | 'tertiary' | 'text' | 'subtle' | 'transparent'

interface IButton extends PaddingProps, MarginProps, BorderProps, FontFamilyProps, FontWeightProps, LayoutProps {
    variant?: Variant
    children?: ReactNode
    onClick?: () => void
    isLoading?: boolean
    disabled?: boolean
    className?: string
    type?: 'button' | 'reset' | 'submit'
}

const Button: React.FC<IButton> = (props: IButton) => {
    const { variant = 'primary', children, isLoading, disabled, onClick, className, type } = props

    return (
        <ButtonOutline variant={variant} className={className} {...props} onClick={null}>
            <StyledButton variant={variant} type={type} className={className} {...props} onClick={disabled ? null : onClick}>
                {isLoading ? <SpinnerCircle radius={10} /> : children}
            </StyledButton>
        </ButtonOutline>
    )
}

const ButtonOutline = styled.div<{ variant: Variant; className: string }>`
  background: ${(props) => props.theme.colors.buttonprimary};
  padding: 1px;
  border-radius: 4px;
  &:hover {
    opacity: 0.8;
  }
`

const StyledButton = styled.button<{ variant: Variant; disabled?: boolean }>`
  border: none;
  outline: none;
  background: ${(props) =>
        props.variant === 'primary' || props.variant === 'tertiary' ? props.theme.colors.buttonprimary : '#000000'};
  color: ${(props) =>
        props.variant === 'primary' || props.variant === 'tertiary'
            ? props.theme.colors.text
            : props.theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fonts.medium};
  border-radius: ${(props) => (props.variant === 'tertiary' ? '4px' : '4px')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  ${padding}
  ${margin}
  ${border}
  ${fontFamily}
  ${fontWeight}
  ${layout}
`

export default Button
