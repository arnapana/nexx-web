import React, { useEffect, useState, Children, cloneElement } from 'react'
import { ArrowRightIcon } from '@components/icons'

interface IBreadCrumbStyle {
  children: React.ReactNode
}

const Crumb = ({ children, last = false }: any) => {
  if (last) return <p className='text-base font-medium underline'>{children}</p>

  return <p className='text-base'>{children}</p>
}

const BreadCrumbStyle: React.FC<IBreadCrumbStyle> = ({ children }) => {
  const [childs, setChilds] = useState<any>(null)

  useEffect(() => {
    const arrayChildren = Children.toArray(children)
    const childElements: any[] = []
    Children.map(arrayChildren, (child, index) => {
      const lastindex = index === arrayChildren.length - 1

      if (lastindex) {
        childElements.push(
          <Crumb key={index} last={true}>
            {cloneElement(child as React.ReactElement<any>)}
          </Crumb>
        )
      } else {
        childElements.push(<Crumb key={index}>{cloneElement(child as React.ReactElement<any>)}</Crumb>)
        !lastindex &&
          childElements.push(
            <Crumb key={index + 100}>
              <ArrowRightIcon className='mx-2 w-5 h-5' />
            </Crumb>
          )
      }
    })

    setChilds(childElements)
  }, [children])

  if (!childs) return null

  return <>{childs.map((val: string, index: number) => val)}</>
}

export default BreadCrumbStyle
