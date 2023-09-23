interface StackOddProps {
  tag?: string
  children?: React.ReactNode
}
export const StackOdd: React.FC<StackOddProps> = ({ children, tag }) => (
  <div className="bg-gray-50 dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    <dt className="text-sm font-medium">{tag}</dt>
    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
      <div className="mx-auto mt-0 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        {children}
      </div>
    </dd>
  </div>
)
