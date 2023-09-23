import { cx, slugify } from 'lib/utils'
// @ts-ignore
// import { TagTwo } from './TagTwo'
import TagTwo from './TagTwo'

interface PublicationItemProps {
  date?: string
  title?: string
  doi?: '' | string
  authors?: string
  id?: 0 | number
  tags?: string[]
  children?: React.ReactNode
}

export const PublicationItem: React.FC<PublicationItemProps> = ({
  date,
  children,
  authors,
  title,
  doi,
  tags,
}) => (
  <li className="py-8">
    <article>
      <time className={cx('block mb-2', 'text-gray-500', 'dark:text-gray-400')}>{date}</time>
      <h2 className="font-bold text-xl">
        <a
          className="group inline-flex items-center gap-2"
          href={doi}
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
      </h2>
      {authors ? (
        <div className="mt-3">
          <p>{authors}</p>
        </div>
      ) : null}
      {tags ? (
        <ul className="mt-4 flex flex-wrap space-x-2">
          {tags.map((tag, index) => {
            return (
              <li key={index}>
                <TagTwo href={`/tags/${slugify(tag)}`} tag={tag} />
              </li>
            )
          })}
        </ul>
      ) : null}
    </article>
  </li>
)
