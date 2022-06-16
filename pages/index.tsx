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
  from: string
  to: string
  market: {
    inputToken?: { symbol: string }
    inputTokens?: { symbol: string }[]
  }
  asset: { symbol: string }
  amountUSD: string
  profitUSD: string
}

const Home: NextPage<{
  liquidates: Array<Liquidate>
}> = ({ liquidates }) => {
  const [amountThreshold, setAmountThreshold] = useState(2)
  const [num, setNum] = useState(LOAD_NUM)

  return (
    <div className="flex min-h-screen flex-col items-center font-mono">
      <Head>
        <title>📺 liquidated live</title>
        <meta name="description" content="liquidations happening ..." />
        <meta property="og:url" content="https://liquidated.live/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="📺 liquidated live" />
        <meta property="og:description" content="liquidations happening ..." />
        <meta
          property="og:image"
          content="https://liquidated.live/og-preview.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="liquidated.live" />
        <meta property="twitter:url" content="https://liquidated.live/" />
        <meta name="twitter:title" content="📺 liquidated live" />
        <meta name="twitter:description" content="liquidations happening ..." />
        <meta
          name="twitter:image"
          content="https://liquidated.live/og-preview.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 items-center sm:w-4/5 lg:w-2/3">
        <div className="w-full">
          <p className="my-5 text-3xl font-bold text-purple-600">
            📺 liquidated live{' '}
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
          <div className="alert alert-warning shadow-sm">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 flex-shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>
                Aave V2 "repaid" data issue will be resolved after{' '}
                <a
                  className="underline"
                  href="https://okgraph.xyz/?q=QmQckK9fAqWKBxzsYaBDfz7mU1S59RzJ9S2YF4yzXjSiQg"
                >
                  the patch subgraph
                </a>{' '}
                syncs.
              </span>
            </div>
          </div>
          <p className="my-5">👇 liquidated threshold (usd)</p>
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
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
          </div>
          <div className="flex w-full justify-between px-2 text-xs">
            <span>1e0</span>
            <span>1e1</span>
            <span>1e2</span>
            <span>1e3</span>
            <span>1e4</span>
            <span>1e5</span>
            <span>1e6</span>
          </div>
          <Liquidates
            liquidates={liquidates
              .filter(
                (l) => parseInt(l.amountUSD) >= Math.pow(10, amountThreshold)
              )
              .slice(0, num)}
          />
          <div className="flex justify-center pb-4">
            {num < liquidates.length ? (
              <button
                className="hover:underline"
                onClick={() => setNum((prevNum) => prevNum + LOAD_NUM)}
              >
                👇 load more
              </button>
            ) : (
              'The end!'
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
        <div>repaid</div>
        <div>collateral</div>
        <div>amount</div>
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
          <div>{l.market.inputToken ? l.market.inputToken.symbol : '🔨'}</div>
          <div>{l.asset.symbol}</div>
          <div>
            {parseFloat(l.amountUSD).toLocaleString('en-US', {
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
  return gql`
  {
    compoundv2Liquidates(
      orderBy: timestamp
      orderDirection: desc
      where: { amountUSD_gt: 0, timestamp_gte: ${timestamp_gte} }
      first: 1000
    ) {
      protocol {
        name
        network
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
    aavev2Liquidates(
      orderBy: timestamp
      orderDirection: desc
      where: { amountUSD_gt: 0, timestamp_gte: ${timestamp_gte} }
      first: 1000
    ) {
      protocol {
        name
        network
      }
      hash
      timestamp
      from
      to
      market {
        inputTokens {
          symbol
        }
      }
      asset {
        symbol
      }
      amountUSD
      profitUSD
    }
    venusLiquidates(
      orderBy: timestamp
      orderDirection: desc
      where: { amountUSD_gt: 0, timestamp_gte: ${timestamp_gte} }
      first: 1000
    ) {
      protocol {
        name
        network
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
}

export async function getStaticProps() {
  const currentEpochSeconds = Math.floor(new Date().getTime() / 1000)
  // TODO: get a typesafe data https://github.com/graphprotocol/graph-client#typescript-support
  const { data } = await execute(
    query(currentEpochSeconds - PAST_N_DAYS * 24 * 60 * 60),
    {}
  )
  const compoundv2Liquidates = data.compoundv2Liquidates as Array<Liquidate>
  const aavev2Liquidates = data.aavev2Liquidates as Array<Liquidate>
  const venusLiquidates = data.venusLiquidates as Array<Liquidate>
  return {
    props: {
      liquidates: compoundv2Liquidates
        .concat(aavev2Liquidates)
        .concat(venusLiquidates)
        .sort((a, b) => b.timestamp.localeCompare(a.timestamp)),
    },
    revalidate: 60, // ISR (incremental static regeneration) per minute
  }
}

export default Home
