import useSWR from 'swr'
import { useEffect } from 'react'
import { animate } from 'motion'

import fetcher from 'lib/fetcher'
import { NowPlayingSong } from 'lib/types'
import SocialIcon from './social-icons'
import Image from 'next/image'

function AnimatedBars() {
  useEffect(() => {
    animate(
      '#bar1',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(1.5) translateY(-0.082rem)',
          'scaleY(1.0) translateY(0rem)',
        ],
      },
      {
        duration: 1.0,
        repeat: Infinity,
        easing: ['ease-in-out'],
      }
    )
    animate(
      '#bar2',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(3) translateY(-0.083rem)',
          'scaleY(1.0) translateY(0rem)',
        ],
      },
      {
        delay: 0.2,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out'],
      }
    )
    animate(
      '#bar3',
      {
        transform: [
          'scaleY(1.0)  translateY(0rem)',
          'scaleY(0.5) translateY(0.37rem)',
          'scaleY(1.0)  translateY(0rem)',
        ],
      },
      {
        delay: 0.3,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out'],
      }
    )
  }, [])

  return (
    <div className="w-auto flex items-end overflow-hidden">
      <span id="bar1" className="w-1 mr-[3px] h-2 bg-gray-300 dark:bg-gray-500 opacity-75" />
      <span id="bar2" className="w-1 mr-[3px] h-1 bg-gray-300 dark:bg-gray-500" />
      <span id="bar3" className="w-1 h-3 bg-gray-300 dark:bg-gray-500 opacity-80" />
    </div>
  )
}

function StaticBars() {
  return (
    <div className="w-auto flex items-end overflow-hidden">
      <span id="bar1" className="w-1 mr-[3px] h-2 bg-gray-300 dark:bg-gray-500 opacity-75" />
      <span id="bar2" className="w-1 mr-[3px] h-1 bg-gray-300 dark:bg-gray-500" />
      <span id="bar3" className="w-1 h-3 bg-gray-300 dark:bg-gray-500 opacity-80" />
    </div>
  )
}

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher)

  return (
    <div className="flex flex-row-reverse justify-center items-center sm:flex-row mb-8 mx-4 w-full sm:max-w-md">
      <Image
        src="https://asset.brandfetch.io/id20mQyGeY/idnZiPe__8.svg"
        alt={'Spotify'}
        width={200}
        height={200}
        className="w-8 h-8 sm:w-4 sm:h-4 ml-8 mr-0 sm:ml-0 sm:mr-4"
      />
      <div className="inline-flex flex-col sm:flex-row w-full max-w-full justify-center truncate">
        {data?.songUrl ? (
          <a
            className="capsize text-gray-800 dark:text-gray-200 font-medium max-w-max truncate"
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.title}
          </a>
        ) : (
          <p className="capsize text-gray-800 dark:text-gray-200 font-medium">Not Playing</p>
        )}
        <span className="capsize mx-2 text-gray-500 dark:text-gray-300 hidden sm:block">
          {' – '}
        </span>
        <p className="capsize text-gray-500 dark:text-gray-300 max-w-max truncate">
          {data?.artist ?? 'Spotify'}
        </p>
      </div>
      <div className="mr-4 ml-0 sm:mr-0 sm:ml-4">
        {data?.songUrl ? <AnimatedBars /> : <StaticBars />}
      </div>
    </div>
  )
}
