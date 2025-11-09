'use client'

interface MapButtonProps {
  href: string
  children: React.ReactNode
}

export function MapButton({ href, children }: MapButtonProps) {
  return (
    <button
      type="button"
      onClick={() => {
        window.open(href, '_blank', 'noopener,noreferrer')
      }}
      className="inline-flex items-center gap-2 rounded-xl bg-[#4FC3E7] px-4 py-2 text-white transition-colors hover:bg-[#3ba3c7]"
    >
      {children}
    </button>
  )
}
