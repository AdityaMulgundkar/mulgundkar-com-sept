import { cx } from 'lib/utils'
// @ts-ignore
import { v4 } from 'uuid'
import Image from 'next/image'

interface ProjectItemProps {
  emoji?: string
  title?: string
  tags?: string[]
  image?:
    | 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80'
    | string
  shadow?: true | boolean
  id?: 0 | number
  fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  pos?: 'center' | 'top' | 'bottom'
  description?: string
}
const myid = v4()

function RandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100)
  return randomNumber
}

export const ProjectItem: React.FC<ProjectItemProps> = ({
  emoji,
  title = 'title',
  tags,
  image = '/photo-test.jpg',
  shadow = true,
  id = RandomNumber(),
  fit = 'cover',
  pos = 'center',
  description = '',
}) => (
  <div className="rounded-xl bg-clip-border shadow-lg bg-gray-100 dark:bg-gray-800/50">
    <div className="mx-4 mt-4 overflow-hidden rounded-xl bg-clip-border shadow-lg shadow-blue-gray-500/40">
      <Image
        src={image}
        alt={title}
        className={cx('w-full h-48 rounded-t-xl')}
        style={{
          maxWidth: '100%',
          maxHeight: '600px',
          objectFit: `${fit}`,
          objectPosition: `${pos}`,
        }}
        width={1000}
        height={1000}
      />
    </div>
    <div className="p-6">
      <div className="mb-3 flex items-center justify-between">
        <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-gray-500 dark:text-gray-300 antialiased">
          {title}
        </h5>
      </div>
      <p className="mb-4 block font-sans text-base font-light leading-relaxed text-gray-500 dark:text-gray-400 antialiased">
        {description}
      </p>

      {/* {tags?.map((tag, index) => {
        return <div key={index}>{tag}</div>
      })} */}

      {/* <button
        className={cx(
          "block w-full select-none rounded-lg py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase shadow-md transition-all",
          "bg-gray-900 text-gray-50",
          "dark:bg-gray-800 dark:text-gray-50"
        )}
        type="button"
        data-ripple-light="true"
      >
        Read More
      </button> */}
    </div>
  </div>
)
