import { genPageMetadata } from 'app/seo'
import { ProjectItem } from '@/components/ProjectItem'
import { Proof } from '@/components/Proof'
import { cx } from 'lib/utils'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = genPageMetadata({ title: 'Proof of Work' })

export default function Page() {
  return (
    <>
      <div className="pb-8 pt-6">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          Proof of Work
        </h1>
        <p className="mt-4">
          Appendix to my CV, a{' '}
          <Link
            className="text-sky-400 dark:text-sky-600 hover:text-sky-500 dark:hover:text-sky-500 hover:underline"
            href="https://landing.jobs/blog/proof-of-work"
            target="_blank"
            rel="noreferrer"
          >
            brief description of my work.
          </Link>
          <br />
          Note that this is not a complete list, as I have made this recently and am still in the
          process of updating.
        </p>
      </div>
      <Proof
        firstItem={true}
        title="Building Fault Tolerant UAVs using Machine Learning, Fault Analysis and Control Theory"
        category="MS Thesis, Robotics, Fault Tolerance in UAVs"
      >
        {/* <YoutubeEmbed embedId="z1vDjloeLiw" /> */}
        <p className="mb-4 block font-sans text-base font-light leading-relaxed antialiased">
          Designed and developed several drones that can detect motor faults (using fault analysis)
          and reallocate actuator outputs to stabilize the drone within a few milliseconds.
        </p>
        <Image
          src="/EFTC-Diagram.jpg"
          alt="Hexa frame"
          className={cx('w-full')}
          width={1000}
          height={1000}
        />
        <p className="mb-4 block font-sans text-base font-light leading-relaxed antialiased">
          Following types of UAV faults were detected and corrected:
        </p>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Fault Type</th>
              <th>Description</th>
              <th>QuadCopter</th>
              <th>HexaCopter</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Motor Faults</td>
              <td>
                Loss of Efficiency (LoE)
                <br />
                What happens when a motor works at a lower efficiency
              </td>
              <td>Y</td>
              <td>Y</td>
            </tr>
            <tr>
              <td>Motor Failures</td>
              <td>
                Loss of Actuation (LoA)
                <br />
                What happens when a motor stops working completely
              </td>
              <td>X</td>
              <td>Y</td>
            </tr>
            <tr>
              <td>Motor Locking</td>
              <td>What happens when a motor gets stuck at some RPM</td>
              <td>X</td>
              <td>X</td>
            </tr>
            <tr>
              <td>Propeller Faults</td>
              <td>What happens when a propeller chips off</td>
              <td>Y</td>
              <td>Y</td>
            </tr>
            <tr>
              <td>Sensor Faults</td>
              <td>What happens when a sensor stops working</td>
              <td>Y</td>
              <td>Y</td>
            </tr>
          </tbody>
        </table>
      </Proof>
      <Proof
        title="Design, fabrication & analysis of a magnetostrictive test-bed running in a lower-earth orbit"
        category="Space Tech, Hobby Project, Robotics Test-bed"
        url="https://nis.readthedocs.io/"
      >
        <p className="mb-4 block font-sans text-base font-light leading-relaxed antialiased">
          Engineered a payload for ISRO&apos;s Polar Satellite Launch Vehicle (PSLV), expanding
          capabilities in satellite deployment. Conducted test-bed studies on Terfenol-D
          material&apos;s intrinsic shape transformation effect in outer space, advancing
          understanding of material properties under extreme conditions.
        </p>
        <Image
          src="/nmimsedu.jpg"
          alt="Hexa frame"
          className={cx('w-full')}
          width={1000}
          height={1000}
        />
      </Proof>
      <Proof title="Open-Source" category="Flutter, OpenCV, PX4, Robotics">
        {/* <img src="/untouched.jpg" alt="Hexa frame" className={cx("w-64")} /> */}
        <p className="mb-4 block font-sans text-base font-light leading-relaxed antialiased">
          Creator and maintainer (BDFL) of several open-source projects.
        </p>
        <ul>
          <li>
            <a
              href="https://github.com/AdityaMulgundkar/DroneForce"
              target="_blank"
              rel="noreferrer"
            >
              DroneForce
            </a>{' '}
            <br />
            Ardupilot based framework to write your custom controller and control a drone with ROS.
            You can read the usage tutorial on&nbsp;
            <Link href={`/blog/droneforce-usage`}>my blog.</Link>
          </li>
          <li>
            <a href="https://pub.dev/opencv" target="_blank" rel="noreferrer">
              Flutter OpenCV
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AdityaMulgundkar/OpenCV-nuget"
              target="_blank"
              rel="noreferrer"
            >
              OpenCV Nuget
            </a>
            <br />
            My work on easing your workflow for&nbsp;
            <a
              href="https://summerofcode.withgoogle.com/archive/2021/projects/6006857948200960"
              target="_blank"
              rel="noreferrer"
            >
              OpenCV on Windows
            </a>{' '}
            using the NuGet Package manager.
          </li>
          <li>
            <a href="https://pub.dev/wallpaper_manager" target="_blank" rel="noreferrer">
              Wallpaper Manager
            </a>
          </li>
        </ul>
      </Proof>
      <Proof title="Mobile Applications" category="Flutter, Android, iOS">
        {/* <img src="/untouched.jpg" alt="Hexa frame" className={cx("w-64")} /> */}
        <p className="mb-4 block font-sans text-base font-light leading-relaxed antialiased">
          Experienced in developing mobile applications using Flutter, React Native, and native
          Android. Work done under NDA, or on contract isn&apos;t listed here.
        </p>
        <ul>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=in.wedeasy.app"
              target="_blank"
              rel="noreferrer"
            >
              WedEasy
            </a>
          </li>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.chaos_apps.valorant_plus_plus"
              target="_blank"
              rel="noreferrer"
            >
              Valorant++
            </a>{' '}
            (Personal Project)
          </li>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=in.scangrid.app"
              target="_blank"
              rel="noreferrer"
            >
              ScanGrid
            </a>{' '}
            by VieTrove Solutions
          </li>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=co.soaron.untouched_flutter"
              target="_blank"
              rel="noreferrer"
            >
              Untouched
            </a>{' '}
            by SoarOn
          </li>
        </ul>
      </Proof>
      <Proof
        title="Recent Websites"
        category="Responsive websites, landing pages, modern web apps, PWAs"
      >
        {/* <img src="/untouched.jpg" alt="Hexa frame" className={cx("w-64")} /> */}
        <p className="mb-4 block font-sans text-base font-light leading-relaxed antialiased">
          Experienced in developing websites using React, Next.js, Django, MySQL, MongoDB,
          PostgreSQL, GraphQL and PHP. Back-end dashboards, admin panels and internal websites
          aren&apos;t listed here.
        </p>
        <ul>
          <li>
            <a href="https://wedeasy.in" target="_blank" rel="noreferrer">
              WedEasy
            </a>
          </li>
          <li>
            <a href="https://solcodes.vercel.app" target="_blank" rel="noreferrer">
              SolCodes
            </a>
          </li>
          <li>
            <a href="https://www.guildcap.com/" target="_blank" rel="noreferrer">
              Guild Capital
            </a>
          </li>
          <li>
            <a href="https://www.atidiv.com/" target="_blank" rel="noreferrer">
              Atidiv
            </a>
          </li>
          <li>
            <a href="https://www.argylesp.com/" target="_blank" rel="noreferrer">
              Argyle Search Partners
            </a>
          </li>
          <li>
            <a href="https://www.blackwatch.io/" target="_blank" rel="noreferrer">
              BlackWatch Advisors
            </a>
          </li>
        </ul>
      </Proof>
    </>
  )
}
