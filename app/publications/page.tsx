import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import { ProjectItem } from '@/components/ProjectItem'
import { PublicationItem } from '@/components/PublicationItem'
import { cx } from 'lib/utils'

export const metadata = genPageMetadata({ title: 'Publications' })

export default function Publications() {
  return (
    <>
      <div className="pb-8 pt-6">
        <h1 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          Publications
        </h1>
        <div className="grid grid-cols-1 gap-0">
          <ul className={cx('divide-y -my-8', 'divide-gray-200', 'dark:divide-gray-700', '')}>
            <PublicationItem
              title="Fault Tolerant Control using Dynamic Control Reallocation on a Hexacopter in outdoor test flights"
              date="2023-09-23"
              authors="Aditya Mulgundkar, Mayank Singh, Prudhvi Raj Turlapati, Deepak Gangadharan, Harikumar Kandath"
              doi="https://doi.org"
              tags={['Fault-tolerant control', 'Control allocation', 'PX4', 'ROS']}
            />
            <PublicationItem
              title="Fault Detection and Isolation on a Hexacopter UAV using a Two-stage classification method"
              date="2023-08-18"
              authors="Aditya Mulgundkar, Mayank Singh, Munjaal Bhatt, Prudhvi Raj Turlapati, Deepak Gangadharan, Harikumar Kandath"
              doi="https://doi.org"
              tags={['Fault detection and isolation', 'Fault Classification', 'PX4']}
            />
            <PublicationItem
              title="A data-driven approach to detect actuator faults in multirotor UAV"
              date="2023-01-18"
              authors="Mayank Singh, Aditya Mulgundkar, Deepak Gangadharan, Harikumar Kandath"
              doi="https://doi.org"
              tags={['Fault detection']}
            />
          </ul>
        </div>
      </div>
    </>
  )
}
