import { NextPage } from 'next'
import classNames from 'classnames'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { Container, BreadCrumb } from '@components/common'
import { ButtonContact } from '@components/index'
import { getPostBySlug } from '@utils/file-system'

const Privacy: NextPage = (props:any) => {
  return (
    <Container>
      {/* Floating Button */}
      <ButtonContact />
      <BreadCrumb outerClassName='container mx-auto my-10' />
      <div className='container mx-auto'>
        <div className='mb-10'>
          <p className='font-prompts font-medium text-center 2xl:text-5xl 2xl:leading-[55px]'>นโยบายความเป็นส่วนตัว</p>
        </div>
        <div>
          {/* Header */}
          <div className='grid items-center px-8 h-[65px] text-white bg-primary rounded-2xl'>
            <p className={classNames('font-prompts font-medium 2xl:text-2xl telephamacy-title')}>
              การประมวลผลข้อมูลส่วนบุคคล
            </p>
          </div>
          {/* Content */}
          <div className='mb-32 font-sarabun text-xl font-light prose'>
            <MDXRemote {...props.mdxSource} />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .telephamacy-title {
            position: relative;
          }
          .telephamacy-title::before {
            content: '';
            width: 11px;
            height: 11px;
            border-radius: 50%;
            margin-right: 10px;
            display: inline-block;
            background-color: #fff;
            vertical-align: middle;
          }
        `}
      </style>
    </Container>
  )
}

export default Privacy

export const getStaticProps = async () => {
  const posts: any = await getPostBySlug('policy')
  const mdxSource = await serialize(posts.content)
  return {
    props: {
      frontMatter: posts,
      mdxSource: mdxSource,
      slug: posts.slug
    }
  }
}
