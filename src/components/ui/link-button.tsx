import Link from 'next/link'

interface LinkButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  variant?: string
  'data-testid'?: string
}

export function LinkButton({
  href,
  children,
  className = '',
  style = {},
  variant = 'default',
  'data-testid': testId,
}: LinkButtonProps) {
  // variant-based styles (Buttonコンポーネントと統一)
  const variantStyles = {
    default: {},
    primary: { backgroundColor: '#4FC3E7', color: 'white' },
    secondary: { backgroundColor: '#F4C2C1', color: '#333' },
  }

  const currentVariantStyle =
    variantStyles[variant as keyof typeof variantStyles] ||
    variantStyles.default

  return (
    <Link
      href={href}
      className={className}
      style={{
        display: 'inline-block',
        padding: '12px 24px',
        borderRadius: '12px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        textDecoration: 'none',
        ...currentVariantStyle,
        ...style,
      }}
      data-testid={testId}
    >
      {children}
    </Link>
  )
}
