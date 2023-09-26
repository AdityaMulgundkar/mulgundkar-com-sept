import { genPageMetadata } from 'app/seo'
import { cx } from 'lib/utils'
import { StackOdd } from '@/components/StackOdd'
import { StackEven } from '@/components/StackEven'
import { LogoTooltip } from '@/components/LogoTooltip'

export const metadata = genPageMetadata({ title: 'Stack' })

export default function Page() {
  return (
    <>
      <div className={cx('max-w-none')}>
        <div className="pb-8 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Stack
          </h1>

          <div className="pt-4 grid grid-cols-1 gap-0">
            <StackOdd tag="Coding">
              <LogoTooltip
                tag="VS Code"
                src="https://asset.brandfetch.io/idUz6LJMxo/idNTHTS6o3.svg"
              />
              <LogoTooltip
                tag="Github Copilot"
                src="https://asset.brandfetch.io/idZAyF9rlg/id6a3YYV60.svg"
              />
              <LogoTooltip
                tag="Linear"
                src="https://asset.brandfetch.io/iduDa181eM/id0tTqetsg.svg"
              />
            </StackOdd>
            <StackEven tag="OSX">
              <LogoTooltip
                tag="Raycast"
                src="https://asset.brandfetch.io/idxxHV50Mm/idw44lawVc.svg"
              />
              <LogoTooltip
                tag="GitKraken"
                src="https://asset.brandfetch.io/idzGznS_EP/idgLZ_0IgA.svg"
              />
              <LogoTooltip
                tag="Barrier"
                src="https://dl.flathub.org/repo/appstream/x86_64/icons/128x128/com.github.debauchee.barrier.png"
              />
              {/* <LogoTooltip
                tag="iTerm2"
                src="https://asset.brandfetch.io/iduDa181eM/id0tTqetsg.svg"
              /> */}
            </StackEven>
            <StackOdd tag="Extensions">
              <LogoTooltip
                tag="BitWarden"
                src="https://asset.brandfetch.io/idoK_yj68K/idikG5ODgv.svg"
              />
              <LogoTooltip
                tag="Grammarly"
                src="https://asset.brandfetch.io/iddd_fYAYR/id1xynQtR_.svg"
              />
            </StackOdd>
            <StackEven tag="Web Tools">
              <LogoTooltip
                tag="Notion"
                src="https://asset.brandfetch.io/idPYUoikV7/idKNKdmaQM.svg"
              />
              <LogoTooltip
                tag="AirTable"
                src="https://asset.brandfetch.io/iddsnRzkxS/iddyj0wl13.svg"
              />
              <LogoTooltip tag="Miro" src="https://asset.brandfetch.io/idAnDTFapY/idG4aRyg5R.svg" />
              <LogoTooltip
                tag="Figma"
                src="https://asset.brandfetch.io/idZHcZ_i7F/idcJ00e7RI.svg"
              />
            </StackEven>
            <StackOdd tag="Productivity">
              <LogoTooltip
                tag="Blinkist"
                src="https://asset.brandfetch.io/iddk_TjyfQ/idBwwo_sko.svg"
              />
              <LogoTooltip
                tag="Substack"
                src="https://asset.brandfetch.io/idPmHT2Ru4/id1ffrgTAB.svg"
              />
            </StackOdd>
            <StackEven tag="Academic">
              <LogoTooltip
                tag="Overleaf"
                src="https://asset.brandfetch.io/idtZzCB9A3/iddgHBzIug.svg"
              />
              <LogoTooltip
                tag="TurnItIn"
                src="https://asset.brandfetch.io/idKaAfBKjS/idWQWJfReW.svg"
              />
            </StackEven>
          </div>
        </div>
      </div>
    </>
  )
}
