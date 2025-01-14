import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="sticky top-0">
      <div className="backdrop-blur-md px-4">
        <div className="flex items-center justify-between py-6 mx-auto max-w-3xl xl:max-w-5xl">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between ml-4">
                {/* <div className="mr-3">
              <Logo />
            </div> */}
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-8 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="hidden sm:block font-medium text-sm px-1 text-gray-900 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            <SearchButton />
            <ThemeSwitch />
          </div>
        </div>
      </div>
      <MobileNav />
    </header>
  )
}

export default Header
