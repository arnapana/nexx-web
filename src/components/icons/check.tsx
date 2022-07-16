interface Props {
  className: string
}

export const CheckIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
      <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
    </svg>
  )
}

CheckIcon.defaultProps = {
  className: ''
}
