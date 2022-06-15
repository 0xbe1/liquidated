import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
// import axios from "axios"
import { execute } from "../.graphclient"
import gql from 'graphql-tag';

interface Liquidate {
  protocol: { name: string}
  hash: string
  timestamp: string
  from: string
  to: string
  market: { name: string }
  asset: { symbol: string }
  amountUSD: string
  profitUSD: string
}

const Home: NextPage<{
  liquidates: Array<Liquidate>
}> = ({ liquidates }) => {
  // const [num, setNum] = useState(LOAD_NUM)

  return (
    <div className="flex min-h-screen flex-col items-center font-mono">
      <Head>
        <title>Liquidated 🔥</title>
        <meta
          name="description"
          content="List of core BUIDLers behind the most impactful web3 projects."
        />
        <meta property="og:url" content="https://liquidated.live/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="They BUIDL" />
        <meta
          property="og:description"
          content="List of core BUIDLers behind the most impactful web3 projects."
        />
        <meta
          property="og:image"
          content="https://theybuidl.xyz/og-preview.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="theybuidl.xyz" />
        <meta property="twitter:url" content="https://theybuidl.xyz/" />
        <meta name="twitter:title" content="They BUIDL" />
        <meta
          name="twitter:description"
          content="List of core BUIDLers behind the most impactful web3 projects."
        />
        <meta
          name="twitter:image"
          content="https://theybuidl.xyz/og-preview.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          data-token="JKVUMR3WYYPX"
          async
          src="https://cdn.splitbee.io/sb.js"
        ></script>
      </Head>

      <main className="flex w-full flex-1 items-center sm:w-4/5 lg:w-1/2">
        <div className="w-full">
          <p className="my-10 text-6xl font-bold text-purple-600">Liquidated 🔥</p>
          <div className="my-5">
            <p>
              Most recent liquidations ...
            </p>
          </div>

          <div>{liquidates.map((l, i) => <Liquidate {...l}/>)}</div>
          
          {/* <div className="flex justify-center pb-4">
            {num < buidlers.length ? (
              <button
                className="hover:underline"
                onClick={() => setNum((prevNum) => prevNum + LOAD_NUM)}
              >
                Load More 👇
              </button>
            ) : (
              'The end!'
            )}
          </div> */}
        </div>
      </main>

      <footer className="flex h-20 w-full flex-col items-center justify-center border-t">
        <div>
          by{' '}
          <a className="underline" href="https://twitter.com/_0xbe1">
            0xbe1
          </a>{' '}
          |{' '}
          <a className="underline" href="https://github.com/0xbe1/theybuidl">
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
          <a className="text-purple-600 underline" href="https://theybuidl.xyz">
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
    </div>
  )
}

function Liquidate(props: Liquidate) {
  return (
    <div className="my-4 flex rounded-lg border border-purple-600">
      {JSON.stringify(props)}
    </div>
  )
}

const query = gql`{
  liquidates(orderBy:timestamp, orderDirection:desc, where:{amountUSD_gt:10000}, first: 10) {
    protocol { name }
    hash
    timestamp
    from
    to
    market {
      name
    }
    asset {
      symbol
    }
    amountUSD
    profitUSD
  }
}`

export async function getStaticProps() {
  const { data } = await execute(query, {})
  return {
    props: {
      liquidates: data.liquidates as Array<Liquidate>,
    },
    revalidate: 60, // ISR (incremental static regeneration) per minute
  }
}

export default Home
