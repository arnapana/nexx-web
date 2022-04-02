interface Props {
  className: string
}

export const ListIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth='2'
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 10h16M4 14h16M4 18h16' />
    </svg>
  )
}

ListIcon.defaultProps = {
  className: ''
}
