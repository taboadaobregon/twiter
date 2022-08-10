import { SparklesIcon } from '@heroicons/react/solid'
import React from 'react'
import Input from './Input'
import Post from './Post'

export default function Feed() {

  const posts = [
    {
      id:"1",
      name:"andres taboada",
      username: "andrestb",
      userImg: "https://www.redhat.com/cms/managed-files/tux-327x360.png",
      img:"https://images.unsplash.com/photo-1579710758949-3ab36db30f1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      text:"nice view",
      timestamp:"2 hours agoust"
    },
    {
      id:"2",
      name:"andres obregon",
      username: "andresobt",
      userImg: "https://www.redhat.com/cms/managed-files/tux-327x360.png",
      img:"https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      text:"wow",
      timestamp:"2 days agoust"
    }
  ]


  return (
    <div className='xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[899px] sm:ml-[73px] flex-grow max-w-xl'>
      <div className='flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
        <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
        <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9'>
        <SparklesIcon className='h-5'/>
        </div>
      </div>
      <Input/>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
