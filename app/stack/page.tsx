import { genPageMetadata } from 'app/seo'
import { ProjectItem } from '@/components/ProjectItem'
import { Proof } from '@/components/Proof'
import { cx } from 'lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { StackOdd } from '@/components/StackOdd'
import { StackEven } from '@/components/StackEven'
import { LogoTooltipURL } from '@/components/LogoTooltipURL'
import { LogoTooltip } from '@/components/LogoTooltip'

export const metadata = genPageMetadata({ title: 'Stack' })

export default function Page() {
  return (
    <>
      <div>
        <div className="bg-white dark:bg-black shadow sm:rounded-lg">
          <div className="border-t border-gray-200 dark:border-gray-700">
            <dl>
              <StackOdd tag="Coding">
                <LogoTooltip tag="VS Code" />
                <LogoTooltip tag="Github Copilot" />
                <LogoTooltipURL
                  tag="Linear"
                  src="https://asset.brandfetch.io/iduDa181eM/id0tTqetsg.svg"
                />
              </StackOdd>
              <StackEven tag="OSX">
                <LogoTooltipURL
                  tag="Raycast"
                  src="https://asset.brandfetch.io/idxxHV50Mm/idw44lawVc.svg"
                />
                <LogoTooltip tag="GitKraken" />
                <LogoTooltipURL
                  tag="Barrier"
                  src="https://dl.flathub.org/repo/appstream/x86_64/icons/128x128/com.github.debauchee.barrier.png"
                />
                <LogoTooltip tag="iTerm2" />
              </StackEven>
              <StackOdd tag="Extensions">
                <LogoTooltip tag="Bitwarden" />
                <LogoTooltip tag="Grammarly" />
              </StackOdd>
              <StackEven tag="Web Tools">
                <LogoTooltip tag="Notion" />
                <LogoTooltip tag="AirTable" />
                <LogoTooltipURL
                  tag="Miro"
                  src="https://asset.brandfetch.io/idAnDTFapY/idkwvxShC9.jpeg"
                />
                <LogoTooltip tag="Figma" />
              </StackEven>
              <StackOdd tag="Productivity">
                <LogoTooltip tag="Blinkist" />
                <LogoTooltipURL
                  tag="Substack"
                  src="https://asset.brandfetch.io/id_V6qzrDH/idcXnLQkqq.png"
                />
                <LogoTooltip tag="Grammarly" />
              </StackOdd>
              <StackEven tag="Academic">
                <LogoTooltipURL
                  tag="Overleaf"
                  src="https://asset.brandfetch.io/idtZzCB9A3/ido7H3x6Zc.png"
                />
                <LogoTooltipURL
                  tag="TurnItIn"
                  src="https://asset.brandfetch.io/idKaAfBKjS/idKK2OHDyt.jpeg"
                />
              </StackEven>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}
