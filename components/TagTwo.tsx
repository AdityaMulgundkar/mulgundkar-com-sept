import Link from 'next/link'
import { slug } from 'github-slugger'
import { cx, slugify } from 'lib/utils'
interface Props {
  href: string
  tag: string
}

const TagTwo = ({ href, tag }: Props) => {
  return (
    <Link
      href={href}
      className={cx(
        'inline-block text-sm py-0.5 px-2.5 rounded-full border hover:underline',
        'bg-gray-100 border-gray-200',
        'dark:bg-gray-800 dark:border-gray-700'
      )}
    >
      #{slugify(tag)}
    </Link>
  )
}

export default TagTwo
