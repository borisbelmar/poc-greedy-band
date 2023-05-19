import clsx from 'clsx'

type ButtonProps<T extends React.ElementType> = {
  children: React.ReactNode
  className?: string
  as?: T
} & Omit<React.ComponentProps<T>, 'as'>

export default function Button <T extends React.ElementType = 'button'> (
  { children, as, className, ...props }: ButtonProps<T>
): JSX.Element {
  const Component = as ?? 'button'

  return (
    <Component
      className={clsx('block bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded', className)}
      {...props}
    >
      {children}
    </Component>
  )
}
