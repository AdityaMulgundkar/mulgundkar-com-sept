import Image from 'next/image'

interface LogoTooltipProps {
  tag?: string
  description?: string
  children?: React.ReactNode
}
export const LogoTooltip: React.FC<LogoTooltipProps> = ({
  children,
  tag = '',
  description = tag || '',
}) => (
  <div className="flex flex-col items-center group">
    <Image
      className="col-span-2 max-h-4 w-full object-contain lg:col-span-1 fill-cyan-500 hover:fill-cyan-700"
      src={
        'https://img.icons8.com/' +
        isColor(tag!).toLowerCase() +
        getCleanTag(tag!).replace(/ /g, '')?.toLowerCase()
      }
      alt={tag}
      width="158"
      height="48"
    />
    <div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
      <span className="relative p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
        {description}
      </span>
      <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
    </div>
  </div>
)

function getCleanTag(tag: '' | string) {
  switch (tag) {
    case 'VS Code':
      return 'visual-studio-code-2019'
    case 'Github Copilot':
      return 'github'
    case 'GitKraken':
      return 'git'
    case 'iTerm2':
      return 'console'
    default:
      return tag
  }
  throw new Error('Function not implemented.')
}

function isColor(tag: '' | string) {
  switch (tag) {
    case 'AirTable':
      return '/'
    case 'Blinkist':
      return 'fluency/'
    default:
      return 'color/'
  }
  throw new Error('Function not implemented.')
}
