interface Props {
  className: string
}

export const ArrowDownIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth='2'
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
    </svg>
  )
}

ArrowDownIcon.defaultProps = {
  className: ''
}
