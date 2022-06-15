import React from 'react'

const Footer = () => (
  <footer className="flex h-20 w-full flex-col items-center justify-center border-t">
    <div>
      by{' '}
      <a className="underline" href="https://twitter.com/_0xbe1">
        0xbe1
      </a>{' '}
      |{' '}
      <a className="underline" href="https://github.com/0xbe1/liquidated">
        Code
      </a>{' '}
      <a className="underline" href="https://discord.gg/u5KUjNZ8wy">
        Community
      </a>
    </div>
    <div>
      <a className="underline" href="https://miniscan.xyz">
        miniscan.xyz
      </a>{' '}
      |{' '}
      <a className="text-purple-600 underline" href="https://liquidated.live">
        liquidated.live
      </a>{' '}
      |{' '}
      <a className="underline" href="https://theybuidl.xyz">
        theybuidl.xyz
      </a>{' '}
      |{' '}
      <a className="underline" href="https://okgraph.xyz">
        okgraph.xyz
      </a>{' '}
      |{' '}
      <a className="underline" href="https://name3.org">
        name3.org
      </a>
    </div>
  </footer>
)

export default Footer
