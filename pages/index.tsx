import { PossibleFragmentSpreadsRule } from 'graphql';
import type { NextPage } from 'next'
import Head from 'next/head';

import { PostCard, Categories, PostWidget } from '../components/index';

 
const Home: NextPage = () => {

  const posts = [
    {title:'React Pro Blog 1',excerpt:"React Next Problog 1"},
    {title:'React Pro Blog 2',excerpt:"React Next Problog 2"}
  ]
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-200">
      <Head>
        <title>Pro Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => <PostCard post={ post} key={index} />)}
        </div>

        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative'>

            <PostWidget />
            <Categories/>
</div>

        </div>

      </div>

      

     
    </div>
  )
}

export default Home
