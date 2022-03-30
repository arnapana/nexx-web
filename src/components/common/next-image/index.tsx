import NextImage, { ImageProps } from 'next/image'

const loader = ({ src }: any) => {
  return src
}

export const ImageLoader = (props: ImageProps) => {
  return <NextImage {...props} loader={loader} />
}
