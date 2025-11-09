interface ButtonProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  variant?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  'data-testid'?: string
}

export function Button({
  children,
  className = '',
  style = {},
  onClick,
  variant = 'default',
  disabled = false,
  type = 'button',
  'data-testid': testId,
}: ButtonProps) {
  // variant-based styles (extensible for future use)
  const variantStyles = {
    default: {},
    primary: { backgroundColor: '#4FC3E7', color: 'white' },
    secondary: { backgroundColor: '#F4C2C1', color: '#333' },
  }

  const currentVariantStyle =
    variantStyles[variant as keyof typeof variantStyles] ||
    variantStyles.default
  return (
    <button
      type={type}
      disabled={disabled}
      className={className}
      style={{
        padding: '12px 24px',
        borderRadius: '12px',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        opacity: disabled ? 0.6 : 1,
        ...currentVariantStyle,
        ...style,
      }}
      onClick={(e) => onClick?.(e)}
      data-testid={testId}
    >
      {children}
    </button>
  )
}
