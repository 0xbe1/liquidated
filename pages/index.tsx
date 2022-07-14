import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import { execute } from '../.graphclient'
import gql from 'graphql-tag'
import Footer from '../components/footer'

// fetch past n days of liquidations on build
const PAST_N_DAYS = 3
const LOAD_NUM = 100

interface Liquidate {
  protocol: {
    name: string
    network: string
  }
  hash: string
  timestamp: string
  asset?: {
    symbol: string
  }
  market?: {
    inputToken: {
      symbol: string
    }
  }
  amountUSD: string
  profitUSD: string
}

const Home: NextPage<{
  liquidates: Array<Liquidate>
}> = ({ liquidates }) => {
  const [amountThreshold, setAmountThreshold] = useState(2)
  const [num, setNum] = useState(LOAD_NUM)

  const filteredLiquidates = liquidates.filter(
    (l) => parseInt(l.amountUSD) >= Math.pow(10, amountThreshold)
  )

  return (
    <div className="flex min-h-screen flex-col items-center font-mono">
      <Head>
        <title>📺 liquidated.live</title>
        <meta name="description" content="liquidations happening ..." />
        <meta property="og:url" content="https://liquidated.live/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="📺 liquidated.live" />
        <meta property="og:description" content="liquidations happening ..." />
        <meta
          property="og:image"
          content="https://liquidated.live/og-preview.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="liquidated.live" />
        <meta property="twitter:url" content="https://liquidated.live/" />
        <meta name="twitter:title" content="📺 liquidated.live" />
        <meta name="twitter:description" content="liquidations happening ..." />
        <meta
          name="twitter:image"
          content="https://liquidated.live/og-preview.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 items-center sm:w-5/6 lg:w-4/5">
        <div className="w-full">
          <p className="my-5 text-3xl font-bold text-purple-600">
            📺 liquidated.live{' '}
            <span className="text-sm">
              powered by{' '}
              <a
                className="underline"
                href="https://github.com/messari/subgraphs"
              >
                Messari Subgraphs
              </a>
            </span>
          </p>
          <p className="my-5">💰 liquidated amount {'>='}</p>
          <input
            type="range"
            min="0"
            max="6"
            value={amountThreshold}
            onChange={(event) =>
              setAmountThreshold(parseInt(event.currentTarget.value))
            }
            className="range range-primary"
            step="1"
          />
          <div className="flex w-full justify-between px-2 text-xs">
            <span>1</span>
            <span>10</span>
            <span>100</span>
            <span>1k</span>
            <span>10k</span>
            <span>100k</span>
            <span>1m</span>
          </div>
          <Liquidates liquidates={filteredLiquidates.slice(0, num)} />
          <div className="flex justify-center pb-4">
            {num < filteredLiquidates.length ? (
              <button
                className="hover:underline"
                onClick={() => setNum((prevNum) => prevNum + LOAD_NUM)}
              >
                👇 load more
              </button>
            ) : (
              '🫡 no more'
            )}
          </div>
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
        <div>time (locale)</div>
        <div>protocol</div>
        <div>collateral</div>
        <div>amount</div>
        <div>profit</div>
        <div>txn</div>
      </div>
      {liquidates.map((l, i) => (
        <div key={i} className="grid w-full grid-cols-6">
          <div>
            {new Date(parseInt(l.timestamp) * 1000).toLocaleTimeString(
              undefined,
              {
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: false,
              }
            )}
          </div>
          <div>
            {l.protocol.name
              .split(/[- ]+/)
              .map((s) => s[0].toUpperCase() + s.slice(1))
              .join(' ')}
          </div>
          <div>{l.market ? l.market.inputToken.symbol : l.asset!.symbol}</div>
          <div>
            {parseFloat(l.amountUSD).toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              style: 'currency',
              currency: 'USD',
            })}
          </div>
          <div>
            {parseFloat(l.profitUSD).toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              style: 'currency',
              currency: 'USD',
            })}
          </div>
          <a
            className="truncate hover:underline"
            href={`https://${
              l.protocol.network === 'BSC' ? 'bscscan.com' : 'etherscan.io'
            }/tx/${l.hash}`}
          >
            {l.hash}
          </a>
        </div>
      ))}
    </div>
  )
}

function query(timestamp_gte: number) {
  // TODO: remove asset from aavev2 and move market section to LiquidateFields
  // when aavev2 subgraph upgrades to schema version 1.3.0
  return gql`
  fragment LiquidateFields on Liquidate {
    protocol {
      name
      network
    }
    hash
    timestamp
    amountUSD
    profitUSD
  }

  {
    compoundv2Liquidates(
      orderBy: timestamp
      orderDirection: desc
      where: { amountUSD_gt: 0, timestamp_gte: ${timestamp_gte} }
      first: 1000
    ) {
      ...LiquidateFields
      market {
        inputToken {
          symbol
        }
      }
    }
    aavev2Liquidates(
      orderBy: timestamp
      orderDirection: desc
      where: { amountUSD_gt: 0, timestamp_gte: ${timestamp_gte} }
      first: 1000
    ) {
      ...LiquidateFields
      asset {
        symbol
      }
    }
    ironbankLiquidates(
      orderBy: timestamp
      orderDirection: desc
      where: { amountUSD_gt: 0, timestamp_gte: ${timestamp_gte} }
      first: 1000
    ) {
      ...LiquidateFields
      market {
        inputToken {
          symbol
        }
      }
    }
    venusLiquidates(
      orderBy: timestamp
      orderDirection: desc
      where: { timestamp_gte: ${timestamp_gte} }
      first: 1000
    ) {
      ...LiquidateFields
      market {
        inputToken {
          symbol
        }
      }
    }
    makerdaoLiquidates(
      orderBy: timestamp
      orderDirection: desc
      where: { timestamp_gte: ${timestamp_gte} }
      first: 1000
    ) {
      ...LiquidateFields
      market {
        inputToken {
          symbol
        }
      }
    }
    liquityLiquidates(
      orderBy: timestamp
      orderDirection: desc
      where: { timestamp_gte: ${timestamp_gte} }
      first: 1000
    ) {
      ...LiquidateFields
      market {
        inputToken {
          symbol
        }
      }
    }
    abracadabraLiquidates(
      orderBy: timestamp
      orderDirection: desc
      where: { timestamp_gte: ${timestamp_gte} }
      first: 1000
    ) {
      ...LiquidateFields
      market {
        inputToken {
          symbol
        }
      }
    }
  }
`
}

export async function getStaticProps() {
  const currentEpochSeconds = Math.floor(new Date().getTime() / 1000)
  // TODO: get a typesafe data https://github.com/graphprotocol/graph-client#typescript-support
  const { data } = await execute(
    query(currentEpochSeconds - PAST_N_DAYS * 24 * 60 * 60),
    {}
  )
  return {
    props: {
      liquidates: [
        'compoundv2',
        'aavev2',
        'venus',
        'ironbank',
        'makerdao',
        'liquity',
        'abracadabra',
      ]
        .map((p) => p + 'Liquidates')
        .flatMap((q) => data[q] as Array<Liquidate>)
        .sort((a, b) => b.timestamp.localeCompare(a.timestamp)),
    },
    revalidate: 60, // ISR (incremental static regeneration) per minute
  }
}

export default Home
