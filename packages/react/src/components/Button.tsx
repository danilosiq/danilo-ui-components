import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  border: '2px solid transparent',

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$ignite500',
      },

      secondary: {
        color: '$ignite300',
        border: '2px solid $ignite500',
      },

      tertiary: {
        color: '$gray100',
      },
    },

    size: {
      md: {
        padding: '0 $4',
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.6,
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {}
