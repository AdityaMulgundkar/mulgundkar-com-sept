'use client'
import Image from 'next/image'
import * as Tooltip from '@radix-ui/react-tooltip'

interface LogoTooltipProps {
  tag?: string
  src?: string
}
export const LogoTooltip: React.FC<LogoTooltipProps> = ({ tag = 'tag', src = 'src' }) => (
  <div className="flex flex-col items-center group">
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className="IconButton">
            <Image
              className="col-span-2 max-h-4 w-full object-contain lg:col-span-1"
              src={src}
              alt={tag}
              width="158"
              height="48"
            />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="bg-black px-2 py-1 text-sm text-white" sideOffset={5}>
            {tag}
            <Tooltip.Arrow className="TooltipArrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  </div>
)
