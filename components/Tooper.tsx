import Link from 'next/link'
import React from 'react'

const Tooper = () => {
  return (
    <Link href="/">
        <a className="text-neutral-400 hover:text-neutral-600" style={{textDecoration : "none", letterSpacing: '3px'}} target="_self">../</a>
    </Link>
  )
}

export default Tooper