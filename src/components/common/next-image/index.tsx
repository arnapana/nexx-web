import NextImage, { ImageProps } from 'next/image'

const loader = ({ src }: any) => {
  return src
}

export const ImageLoader = (props: ImageProps) => {
  return (
    <>
      <NextImage
        placeholder='blur'
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM087ppDAADpQGO4xm9mwAAAABJRU5ErkJggg=='
        {...props}
        loader={loader}
      />
    </>
  )
}
