import type { ReactElement } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '@/components/layout'
import NestedLayout from '@/components/nested-layout'
import type { NextPageWithLayout } from './_app'


const Page: NextPageWithLayout = () => {
  const router = useRouter()

  return <div>
    <p>hello world</p>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/blog/hello-world">Blog Post</Link>
      </li>
      <button onClick={() => router.push('/about', undefined, { shallow: true })}>
        Click here to read more
      </button>
    </ul>
  </div>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}

export default Page