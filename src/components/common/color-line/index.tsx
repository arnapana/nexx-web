import React, { HTMLAttributes } from 'react'
import classnames from 'classnames'

interface IColorLine {
  outerClassName: string
  lineClassName: string
}

export const ColorLine: React.FC<IColorLine> = ({ outerClassName, lineClassName }) => {
  return (
    <div className={classnames(outerClassName)}>
      <hr className={classnames(lineClassName)} />
    </div>
  )
}

ColorLine.defaultProps = {}
