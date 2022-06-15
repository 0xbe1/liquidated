import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { execute } from '../.graphclient'
import gql from 'graphql-tag'
import Footer from '../components/footer'

const query = gql`
  {
    liquidates(
      orderBy: timestamp
      orderDirection: desc
      where: { amountUSD_gt: 1000 }
      first: 100
    ) {
      protocol {
        name
      }
      hash
      timestamp
      from
      to
      market {
        inputToken {
          symbol
        }
      }
      asset {
        symbol
      }
      amountUSD
      profitUSD
    }
  }
`

interface Liquidate {
  protocol: { name: string }
  hash: string
  timestamp: string
  from: string
  to: string
  market: { inputToken: { symbol: string } }
  asset: { symbol: string }
  amountUSD: string
  profitUSD: string
}

const Home: NextPage<{
  liquidates: Array<Liquidate>
}> = ({ liquidates }) => {
  return (
    <div className="flex min-h-screen flex-col items-center font-mono">
      <Head>
        <title>Liquidated 🔥</title>
        <meta
          name="description"
          content="most recent liquidations powered by Messari Subgraphs."
        />
        <meta property="og:url" content="https://liquidated.live/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="They BUIDL" />
        <meta
          property="og:description"
          content="most recent liquidations powered by Messari Subgraphs."
        />
        <meta
          property="og:image"
          content="https://liquidated.live/og-preview.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="liquidated.live" />
        <meta property="twitter:url" content="https://liquidated.live/" />
        <meta name="twitter:title" content="They BUIDL" />
        <meta
          name="twitter:description"
          content="most recent liquidations powered by Messari Subgraphs."
        />
        <meta
          name="twitter:image"
          content="https://liquidated.live/og-preview.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 items-center sm:w-4/5 lg:w-3/5">
        <div className="w-full">
          <p className="my-10 text-6xl font-bold text-purple-600">
            liquidated 🔥
          </p>
          <p className="my-5">
            most recent liquidations powered by{' '}
            <a
              className="underline"
              href="https://github.com/messari/subgraphs"
            >
              Messari Subgraphs
            </a>
          </p>
          <Liquidates liquidates={liquidates} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

function Liquidates({ liquidates }: { liquidates: Array<Liquidate> }) {
  return (
    <div className="my-4">
      <div className="grid grid-cols-6 text-purple-600">
        <div>time (UTC)</div>
        <div>protocol</div>
        <div>repaid</div>
        <div>collateral</div>
        <div>amount (USD)</div>
        <div></div>
      </div>
      {liquidates.map((l, i) => (
        <div key={i} className="grid w-full grid-cols-6">
          <div>
            {new Date(parseInt(l.timestamp)).toLocaleTimeString('en-US')}
          </div>
          <div>{l.protocol.name}</div>
          <div>{l.market.inputToken.symbol}</div>
          <div>{l.asset.symbol}</div>
          <div>{parseFloat(l.amountUSD).toFixed(2)}</div>
          <a href={`https://etherscan.io/tx/${l.hash}`}>🔗</a>
        </div>
      ))}
    </div>
  )
}

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
