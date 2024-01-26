import { ReactNode } from 'react'

export interface ModalTheme {
  background: string
}

export type Handler = () => void

export interface InjectedProps {
  onDismiss?: Handler
}

export interface ModalProps extends InjectedProps {
  title: ReactNode
  hideCloseButton?: boolean
  onBack?: () => void | null
  bodyPadding?: string
  headerBackground?: string
  minWidth?: string
  minHeight?: string
  children?: React.ReactNode
}
