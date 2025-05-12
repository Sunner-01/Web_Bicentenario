interface FlagProps {
  className?: string
}

export const SpainFlag = ({ className = "h-4 w-6" }: FlagProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" className={className} aria-label="Bandera de España">
    <rect width="750" height="500" fill="#c60b1e" />
    <rect width="750" height="250" fill="#ffc400" y="125" />
  </svg>
)

export const UKFlag = ({ className = "h-4 w-6" }: FlagProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 30"
    className={className}
    aria-label="Bandera del Reino Unido"
  >
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z" />
    </clipPath>
    <clipPath id="t">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
    </clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
)

export const FranceFlag = ({ className = "h-4 w-6" }: FlagProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className={className} aria-label="Bandera de Francia">
    <rect width="900" height="600" fill="#ED2939" />
    <rect width="600" height="600" fill="#fff" />
    <rect width="300" height="600" fill="#002395" />
  </svg>
)

export const GermanyFlag = ({ className = "h-4 w-6" }: FlagProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" className={className} aria-label="Bandera de Alemania">
    <rect width="5" height="3" fill="#000" />
    <rect width="5" height="2" y="1" fill="#D00" />
    <rect width="5" height="1" y="2" fill="#FFCE00" />
  </svg>
)
