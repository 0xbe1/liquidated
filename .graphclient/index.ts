// @ts-nocheck
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Account = {
  /**  Address of the account  */
  id: Scalars['ID'];
};

export type Account_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Account_orderBy =
  | 'id';

export type ActiveAccount = {
  /**  { Address of the account }-{ Days since Unix epoch }-{ [Optional] HH: hour of the day }  */
  id: Scalars['ID'];
};

export type ActiveAccount_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ActiveAccount_orderBy =
  | 'id';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Borrow = Event & {
  /**  { Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: LendingProtocol;
  /**  Address that received tokens  */
  to: Scalars['String'];
  /**  Market that tokens are borrowed from  */
  from: Scalars['String'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  The market this transaction interacted with  */
  market: Market;
  /**  Token borrowed  */
  asset: Token;
  /**  Amount of token borrowed in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of token borrowed in USD  */
  amountUSD?: Maybe<Scalars['BigDecimal']>;
};

export type Borrow_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Borrow_orderBy =
  | 'id'
  | 'hash'
  | 'logIndex'
  | 'protocol'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'timestamp'
  | 'market'
  | 'asset'
  | 'amount'
  | 'amountUSD';

export type Deposit = Event & {
  /**  { Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: LendingProtocol;
  /**  Market that tokens are deposited into  */
  to: Scalars['String'];
  /**  Address that deposited tokens  */
  from: Scalars['String'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  The market this transaction interacted with  */
  market: Market;
  /**  Token deposited  */
  asset: Token;
  /**  Amount of token deposited in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of token deposited in USD  */
  amountUSD: Scalars['BigDecimal'];
};

export type Deposit_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Deposit_orderBy =
  | 'id'
  | 'hash'
  | 'logIndex'
  | 'protocol'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'timestamp'
  | 'market'
  | 'asset'
  | 'amount'
  | 'amountUSD';

/**
 * An event is any user action that occurs in a protocol. Generally, they are Ethereum events
 * emitted by a function in the smart contracts, stored in transaction receipts as event logs.
 * However, some user actions of interest are function calls that don't emit events. For example,
 * the deposit and withdraw functions in Yearn do not emit any events. In our subgraphs, we still
 * store them as events, although they are not technically Ethereum events emitted by smart
 * contracts.
 *
 */
export type Event = {
  /**  { Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: LendingProtocol;
  /**  Address that received the tokens  */
  to: Scalars['String'];
  /**  Address that sent the tokens  */
  from: Scalars['String'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
};

export type Event_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Event_orderBy =
  | 'id'
  | 'hash'
  | 'logIndex'
  | 'protocol'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'timestamp';

export type FinancialsDailySnapshot = {
  /**  ID is # of days since Unix epoch time  */
  id: Scalars['ID'];
  /**  Protocol this snapshot is associated with  */
  protocol: LendingProtocol;
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['BigDecimal'];
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']>;
  /**  Total supply of minted tokens in native amounts, with same ordering as mintedTokens. Only applies to CDP  */
  mintedTokenSupplies?: Maybe<Array<Scalars['BigInt']>>;
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  dailySupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  dailyProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  dailyTotalRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
  /**  Current balance of all deposited assets, in USD. Note this metric should be the same as TVL.  */
  totalDepositBalanceUSD: Scalars['BigDecimal'];
  /**  Total assets deposited on a given day, in USD  */
  dailyDepositUSD: Scalars['BigDecimal'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['BigDecimal'];
  /**  Current balance of all borrowed/minted assets, in USD.  */
  totalBorrowBalanceUSD: Scalars['BigDecimal'];
  /**  Total assets borrowed/minted on a given day, in USD.  */
  dailyBorrowUSD: Scalars['BigDecimal'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination).  */
  cumulativeBorrowUSD: Scalars['BigDecimal'];
  /**  Total assets liquidated on a given day, in USD.  */
  dailyLiquidateUSD: Scalars['BigDecimal'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['BigDecimal'];
};

export type FinancialsDailySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolControlledValueUSD?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  mintedTokenSupplies?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_not?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  dailySupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyBorrowUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyBorrowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyLiquidateUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyLiquidateUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type FinancialsDailySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'blockNumber'
  | 'timestamp'
  | 'totalValueLockedUSD'
  | 'protocolControlledValueUSD'
  | 'mintedTokenSupplies'
  | 'dailySupplySideRevenueUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'dailyProtocolSideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'dailyTotalRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'totalDepositBalanceUSD'
  | 'dailyDepositUSD'
  | 'cumulativeDepositUSD'
  | 'totalBorrowBalanceUSD'
  | 'dailyBorrowUSD'
  | 'cumulativeBorrowUSD'
  | 'dailyLiquidateUSD'
  | 'cumulativeLiquidateUSD';

export type InterestRate = {
  /**  { Interest rate side }-{ Interest rate type }-{ Market ID }  */
  id: Scalars['ID'];
  /**  Interest rate in percentage APY. E.g. 5.21% should be stored as 5.21  */
  rate: Scalars['BigDecimal'];
  /**  Duration of the loan in days. Only applies to fixed term lending (e.g. Notional)  */
  duration?: Maybe<Scalars['Int']>;
  /**  Maturity of the loan in block height. Only applies to fixed term lending (e.g. Notional)  */
  maturityBlock?: Maybe<Scalars['BigInt']>;
  /**  The party the interest is paid to / received from  */
  side: InterestRateSide;
  /**  The type of interest rate (e.g. stable, fixed, variable, etc)  */
  type: InterestRateType;
};

export type InterestRateSide =
  /**  Interest rate accrued by lenders  */
  | 'LENDER'
  /**  Interest rate paid by borrowers  */
  | 'BORROWER';

export type InterestRateType =
  /**  Stable interest rate (e.g. Aave)  */
  | 'STABLE'
  /**  Variable interest rate (e.g. Compound)  */
  | 'VARIABLE'
  /**  Fixed term interest rate (e.g. Notional)  */
  | 'FIXED_TERM';

export type InterestRate_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  rate?: InputMaybe<Scalars['BigDecimal']>;
  rate_not?: InputMaybe<Scalars['BigDecimal']>;
  rate_gt?: InputMaybe<Scalars['BigDecimal']>;
  rate_lt?: InputMaybe<Scalars['BigDecimal']>;
  rate_gte?: InputMaybe<Scalars['BigDecimal']>;
  rate_lte?: InputMaybe<Scalars['BigDecimal']>;
  rate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  duration?: InputMaybe<Scalars['Int']>;
  duration_not?: InputMaybe<Scalars['Int']>;
  duration_gt?: InputMaybe<Scalars['Int']>;
  duration_lt?: InputMaybe<Scalars['Int']>;
  duration_gte?: InputMaybe<Scalars['Int']>;
  duration_lte?: InputMaybe<Scalars['Int']>;
  duration_in?: InputMaybe<Array<Scalars['Int']>>;
  duration_not_in?: InputMaybe<Array<Scalars['Int']>>;
  maturityBlock?: InputMaybe<Scalars['BigInt']>;
  maturityBlock_not?: InputMaybe<Scalars['BigInt']>;
  maturityBlock_gt?: InputMaybe<Scalars['BigInt']>;
  maturityBlock_lt?: InputMaybe<Scalars['BigInt']>;
  maturityBlock_gte?: InputMaybe<Scalars['BigInt']>;
  maturityBlock_lte?: InputMaybe<Scalars['BigInt']>;
  maturityBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maturityBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  side?: InputMaybe<InterestRateSide>;
  side_not?: InputMaybe<InterestRateSide>;
  side_in?: InputMaybe<Array<InterestRateSide>>;
  side_not_in?: InputMaybe<Array<InterestRateSide>>;
  type?: InputMaybe<InterestRateType>;
  type_not?: InputMaybe<InterestRateType>;
  type_in?: InputMaybe<Array<InterestRateType>>;
  type_not_in?: InputMaybe<Array<InterestRateType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type InterestRate_orderBy =
  | 'id'
  | 'rate'
  | 'duration'
  | 'maturityBlock'
  | 'side'
  | 'type';

export type LendingProtocol = Protocol & {
  /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
  id: Scalars['ID'];
  /**  Name of the protocol, including version. e.g. Aave v2  */
  name: Scalars['String'];
  /**  Slug of protocol, including version. e.g. aave-v2  */
  slug: Scalars['String'];
  /**  Version of the subgraph schema, in SemVer format (e.g. 1.0.0)  */
  schemaVersion: Scalars['String'];
  /**  Version of the subgraph implementation, in SemVer format (e.g. 1.0.0)  */
  subgraphVersion: Scalars['String'];
  /**  Version of the methodology used to compute metrics, loosely based on SemVer format (e.g. 1.0.0)  */
  methodologyVersion: Scalars['String'];
  /**  The blockchain network this subgraph is indexing on  */
  network: Network;
  /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
  type: ProtocolType;
  /**  The specific lending protocol type  */
  lendingType?: Maybe<LendingType>;
  /**  Risk type of the lending protocol  */
  riskType?: Maybe<RiskType>;
  /**  Tokens that can be minted. Only applies to CDP  */
  mintedTokens?: Maybe<Array<Token>>;
  /**  # of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int'];
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['BigDecimal'];
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']>;
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
  /**  Current balance of all deposited assets, in USD. Note this metric should be the same as TVL.  */
  totalDepositBalanceUSD: Scalars['BigDecimal'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['BigDecimal'];
  /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD.  */
  totalBorrowBalanceUSD: Scalars['BigDecimal'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination).  */
  cumulativeBorrowUSD: Scalars['BigDecimal'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['BigDecimal'];
  /**  Total supply of minted tokens in native amounts, with same ordering as mintedTokens. Only applies to CDP  */
  mintedTokenSupplies?: Maybe<Array<Scalars['BigInt']>>;
  /**  Daily usage metrics for this protocol  */
  dailyUsageMetrics: Array<UsageMetricsDailySnapshot>;
  /**  Hourly usage metrics for this protocol  */
  hourlyUsageMetrics: Array<UsageMetricsHourlySnapshot>;
  /**  Daily financial metrics for this protocol  */
  financialMetrics: Array<FinancialsDailySnapshot>;
  /**  All markets that belong to this protocol  */
  markets: Array<Market>;
  /**  Store the ids of each market for easy iteration  */
  _marketIds: Array<Scalars['String']>;
  /**  Price Oracle used to calculate asset price in USD  */
  _priceOracle?: Maybe<Scalars['Bytes']>;
  /**  Liquidation penalty (the same for every market)  */
  _liquidationPenalty: Scalars['BigDecimal'];
};


export type LendingProtocolmintedTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
};


export type LendingProtocoldailyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsDailySnapshot_filter>;
};


export type LendingProtocolhourlyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
};


export type LendingProtocolfinancialMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FinancialsDailySnapshot_filter>;
};


export type LendingProtocolmarketsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Market_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Market_filter>;
};

export type LendingProtocol_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_gt?: InputMaybe<Scalars['String']>;
  slug_lt?: InputMaybe<Scalars['String']>;
  slug_gte?: InputMaybe<Scalars['String']>;
  slug_lte?: InputMaybe<Scalars['String']>;
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_contains_nocase?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_contains_nocase?: InputMaybe<Scalars['String']>;
  slug_starts_with?: InputMaybe<Scalars['String']>;
  slug_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  slug_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slug_ends_with?: InputMaybe<Scalars['String']>;
  slug_ends_with_nocase?: InputMaybe<Scalars['String']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  slug_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion?: InputMaybe<Scalars['String']>;
  schemaVersion_not?: InputMaybe<Scalars['String']>;
  schemaVersion_gt?: InputMaybe<Scalars['String']>;
  schemaVersion_lt?: InputMaybe<Scalars['String']>;
  schemaVersion_gte?: InputMaybe<Scalars['String']>;
  schemaVersion_lte?: InputMaybe<Scalars['String']>;
  schemaVersion_in?: InputMaybe<Array<Scalars['String']>>;
  schemaVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  schemaVersion_contains?: InputMaybe<Scalars['String']>;
  schemaVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_contains?: InputMaybe<Scalars['String']>;
  schemaVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_starts_with?: InputMaybe<Scalars['String']>;
  schemaVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  schemaVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_ends_with?: InputMaybe<Scalars['String']>;
  schemaVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  schemaVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion?: InputMaybe<Scalars['String']>;
  subgraphVersion_not?: InputMaybe<Scalars['String']>;
  subgraphVersion_gt?: InputMaybe<Scalars['String']>;
  subgraphVersion_lt?: InputMaybe<Scalars['String']>;
  subgraphVersion_gte?: InputMaybe<Scalars['String']>;
  subgraphVersion_lte?: InputMaybe<Scalars['String']>;
  subgraphVersion_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphVersion_contains?: InputMaybe<Scalars['String']>;
  subgraphVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_contains?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_starts_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_ends_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion?: InputMaybe<Scalars['String']>;
  methodologyVersion_not?: InputMaybe<Scalars['String']>;
  methodologyVersion_gt?: InputMaybe<Scalars['String']>;
  methodologyVersion_lt?: InputMaybe<Scalars['String']>;
  methodologyVersion_gte?: InputMaybe<Scalars['String']>;
  methodologyVersion_lte?: InputMaybe<Scalars['String']>;
  methodologyVersion_in?: InputMaybe<Array<Scalars['String']>>;
  methodologyVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  methodologyVersion_contains?: InputMaybe<Scalars['String']>;
  methodologyVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_contains?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_starts_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_ends_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Network>;
  network_not?: InputMaybe<Network>;
  network_in?: InputMaybe<Array<Network>>;
  network_not_in?: InputMaybe<Array<Network>>;
  type?: InputMaybe<ProtocolType>;
  type_not?: InputMaybe<ProtocolType>;
  type_in?: InputMaybe<Array<ProtocolType>>;
  type_not_in?: InputMaybe<Array<ProtocolType>>;
  lendingType?: InputMaybe<LendingType>;
  lendingType_not?: InputMaybe<LendingType>;
  lendingType_in?: InputMaybe<Array<LendingType>>;
  lendingType_not_in?: InputMaybe<Array<LendingType>>;
  riskType?: InputMaybe<RiskType>;
  riskType_not?: InputMaybe<RiskType>;
  riskType_in?: InputMaybe<Array<RiskType>>;
  riskType_not_in?: InputMaybe<Array<RiskType>>;
  mintedTokens?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_not?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolControlledValueUSD?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  mintedTokenSupplies?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_not?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  _marketIds?: InputMaybe<Array<Scalars['String']>>;
  _marketIds_not?: InputMaybe<Array<Scalars['String']>>;
  _marketIds_contains?: InputMaybe<Array<Scalars['String']>>;
  _marketIds_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  _marketIds_not_contains?: InputMaybe<Array<Scalars['String']>>;
  _marketIds_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  _priceOracle?: InputMaybe<Scalars['Bytes']>;
  _priceOracle_not?: InputMaybe<Scalars['Bytes']>;
  _priceOracle_in?: InputMaybe<Array<Scalars['Bytes']>>;
  _priceOracle_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  _priceOracle_contains?: InputMaybe<Scalars['Bytes']>;
  _priceOracle_not_contains?: InputMaybe<Scalars['Bytes']>;
  _liquidationPenalty?: InputMaybe<Scalars['BigDecimal']>;
  _liquidationPenalty_not?: InputMaybe<Scalars['BigDecimal']>;
  _liquidationPenalty_gt?: InputMaybe<Scalars['BigDecimal']>;
  _liquidationPenalty_lt?: InputMaybe<Scalars['BigDecimal']>;
  _liquidationPenalty_gte?: InputMaybe<Scalars['BigDecimal']>;
  _liquidationPenalty_lte?: InputMaybe<Scalars['BigDecimal']>;
  _liquidationPenalty_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  _liquidationPenalty_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type LendingProtocol_orderBy =
  | 'id'
  | 'name'
  | 'slug'
  | 'schemaVersion'
  | 'subgraphVersion'
  | 'methodologyVersion'
  | 'network'
  | 'type'
  | 'lendingType'
  | 'riskType'
  | 'mintedTokens'
  | 'cumulativeUniqueUsers'
  | 'totalValueLockedUSD'
  | 'protocolControlledValueUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'totalDepositBalanceUSD'
  | 'cumulativeDepositUSD'
  | 'totalBorrowBalanceUSD'
  | 'cumulativeBorrowUSD'
  | 'cumulativeLiquidateUSD'
  | 'mintedTokenSupplies'
  | 'dailyUsageMetrics'
  | 'hourlyUsageMetrics'
  | 'financialMetrics'
  | 'markets'
  | '_marketIds'
  | '_priceOracle'
  | '_liquidationPenalty';

export type LendingType =
  /**  Collateralized Debt Position (CDP) protocols have singular isolated positions created by users. We aggregate them to give a single view of a market  */
  | 'CDP'
  /**  Pooled protocols pool all users assets into a single market  */
  | 'POOLED';

export type Liquidate = Event & {
  /**  { Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: LendingProtocol;
  /**  Market that tokens are repaid to  */
  to: Scalars['String'];
  /**  Address that carried out the liquidation  */
  from: Scalars['String'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  The market of which the debt is repaid to  */
  market: Market;
  /**  Collateral liquidated (e.g. cToken)  */
  asset: Token;
  /**  Amount of collateral liquidated in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of collateral liquidated in USD  */
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  /**  Amount of profit from liquidation in USD  */
  profitUSD?: Maybe<Scalars['BigDecimal']>;
};

export type Liquidate_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  profitUSD?: InputMaybe<Scalars['BigDecimal']>;
  profitUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  profitUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  profitUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  profitUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  profitUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  profitUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  profitUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Liquidate_orderBy =
  | 'id'
  | 'hash'
  | 'logIndex'
  | 'protocol'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'timestamp'
  | 'market'
  | 'asset'
  | 'amount'
  | 'amountUSD'
  | 'profitUSD';

export type Market = {
  /**  Smart contract address of the market  */
  id: Scalars['ID'];
  /**  The protocol this pool belongs to  */
  protocol: LendingProtocol;
  /**  Name of market  */
  name?: Maybe<Scalars['String']>;
  /**  Is this market active or is it frozen  */
  isActive: Scalars['Boolean'];
  /**  Can you use the output token as collateral  */
  canUseAsCollateral: Scalars['Boolean'];
  /**  Can you borrow from this market  */
  canBorrowFrom: Scalars['Boolean'];
  /**  Maximum loan-to-value ratio as a percentage value (e.g. 75% for DAI in Aave)  */
  maximumLTV: Scalars['BigDecimal'];
  /**  Liquidation threshold as a percentage value (e.g. 80% for DAI in Aave). When it is reached, the position is defined as undercollateralised and could be liquidated  */
  liquidationThreshold: Scalars['BigDecimal'];
  /**  Liquidation penalty (or the liquidation bonus for liquidators) as a percentage value. It is the penalty/bonus price on the collateral when liquidators purchase it as part of the liquidation of a loan that has passed the liquidation threshold  */
  liquidationPenalty: Scalars['BigDecimal'];
  /**  Token that need to be deposited to take a position in protocol  */
  inputToken: Token;
  /**  Token that is minted to track ownership of position in protocol (e.g. aToken, cToken). Leave as null if doesn't exist  */
  outputToken?: Maybe<Token>;
  /**  Aditional tokens that are given as reward for position in a protocol, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon  */
  rewardTokens?: Maybe<Array<RewardToken>>;
  /**  All interest rates / fees allowed in the market. Interest rate should be in APY percentage  */
  rates: Array<InterestRate>;
  /**  Current TVL (Total Value Locked) of this market  */
  totalValueLockedUSD: Scalars['BigDecimal'];
  /**  Current balance of all deposited assets (not historical cumulative), in USD  */
  totalDepositBalanceUSD: Scalars['BigDecimal'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['BigDecimal'];
  /**  Current amount of borrows in native underlying unit  */
  _currentBorrowBalance: Scalars['BigInt'];
  /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD  */
  totalBorrowBalanceUSD: Scalars['BigDecimal'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination)  */
  cumulativeBorrowUSD: Scalars['BigDecimal'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['BigDecimal'];
  /**  Amount of input tokens in the market  */
  inputTokenBalance: Scalars['BigInt'];
  /**  Price per share of input token in USD  */
  inputTokenPriceUSD: Scalars['BigDecimal'];
  /**  Total supply of output token  */
  outputTokenSupply: Scalars['BigInt'];
  /**  Price per share of output token in USD  */
  outputTokenPriceUSD: Scalars['BigDecimal'];
  /**  Amount of input token per full share of output token. Only applies when the output token exists  */
  exchangeRate: Scalars['BigDecimal'];
  /**  Market reserve factor  */
  _reserveFactor: Scalars['BigDecimal'];
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['BigDecimal']>>;
  /**  Creation timestamp  */
  createdTimestamp: Scalars['BigInt'];
  /**  Creation block number  */
  createdBlockNumber: Scalars['BigInt'];
  /**  Most recent block height seen for rate updates  */
  _lastUpdateBlock: Scalars['BigInt'];
  /**  Market daily snapshots  */
  dailySnapshots: Array<MarketDailySnapshot>;
  /**  Market hourly snapshots  */
  hourlySnapshots: Array<MarketHourlySnapshot>;
  /**  All deposits made to this market  */
  deposits: Array<Deposit>;
  /**  All withdrawals made from this market  */
  withdraws: Array<Withdraw>;
  /**  All borrows from this market  */
  borrows: Array<Borrow>;
  /**  All repayments to this market  */
  repays: Array<Repay>;
  /**  All liquidations made to this market  */
  liquidates: Array<Liquidate>;
};


export type MarketrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardToken_filter>;
};


export type MarketratesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InterestRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterestRate_filter>;
};


export type MarketdailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketDailySnapshot_filter>;
};


export type MarkethourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketHourlySnapshot_filter>;
};


export type MarketdepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
};


export type MarketwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdraw_filter>;
};


export type MarketborrowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Borrow_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Borrow_filter>;
};


export type MarketrepaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Repay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Repay_filter>;
};


export type MarketliquidatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Liquidate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidate_filter>;
};

export type MarketDailySnapshot = {
  /**  { Smart contract address of the market }-{ # of days since Unix epoch time }  */
  id: Scalars['ID'];
  /**  The protocol this snapshot belongs to  */
  protocol: LendingProtocol;
  /**  The pool this snapshot belongs to  */
  market: Market;
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
  /**  All interest rates / fees allowed in the market. Interest rate should be in APY percentage  */
  rates: Array<InterestRate>;
  /**  Current TVL (Total Value Locked) of this market  */
  totalValueLockedUSD: Scalars['BigDecimal'];
  /**  Current balance of all deposited assets (not historical cumulative), in USD. Same as pool TVL.  */
  totalDepositBalanceUSD: Scalars['BigDecimal'];
  /**  Sum of all deposits made on a given day, in USD  */
  dailyDepositUSD: Scalars['BigDecimal'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['BigDecimal'];
  /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD.  */
  totalBorrowBalanceUSD: Scalars['BigDecimal'];
  /**  Sum of all borrows/mints made on a given day, in USD  */
  dailyBorrowUSD: Scalars['BigDecimal'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination)  */
  cumulativeBorrowUSD: Scalars['BigDecimal'];
  /**  Total assets liquidated on a given day, in USD.  */
  dailyLiquidateUSD: Scalars['BigDecimal'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['BigDecimal'];
  /**  Amount of input token in the market.  */
  inputTokenBalance: Scalars['BigInt'];
  /**  Price per share of input token in USD  */
  inputTokenPriceUSD: Scalars['BigDecimal'];
  /**  Total supply of output token  */
  outputTokenSupply: Scalars['BigInt'];
  /**  Price per share of output token in USD  */
  outputTokenPriceUSD: Scalars['BigDecimal'];
  /**  Amount of input token per full share of output token. Only applies when the output token exists  */
  exchangeRate?: Maybe<Scalars['BigDecimal']>;
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['BigDecimal']>>;
};


export type MarketDailySnapshotratesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InterestRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterestRate_filter>;
};

export type MarketDailySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rates?: InputMaybe<Array<Scalars['String']>>;
  rates_not?: InputMaybe<Array<Scalars['String']>>;
  rates_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyBorrowUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyBorrowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyLiquidateUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyLiquidateUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenBalance?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  outputTokenSupply?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exchangeRate?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_not?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exchangeRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type MarketDailySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'market'
  | 'blockNumber'
  | 'timestamp'
  | 'rates'
  | 'totalValueLockedUSD'
  | 'totalDepositBalanceUSD'
  | 'dailyDepositUSD'
  | 'cumulativeDepositUSD'
  | 'totalBorrowBalanceUSD'
  | 'dailyBorrowUSD'
  | 'cumulativeBorrowUSD'
  | 'dailyLiquidateUSD'
  | 'cumulativeLiquidateUSD'
  | 'inputTokenBalance'
  | 'inputTokenPriceUSD'
  | 'outputTokenSupply'
  | 'outputTokenPriceUSD'
  | 'exchangeRate'
  | 'rewardTokenEmissionsAmount'
  | 'rewardTokenEmissionsUSD';

export type MarketHourlySnapshot = {
  /**  { Smart contract address of the market }-{ # of hours since Unix epoch time }  */
  id: Scalars['ID'];
  /**  The protocol this snapshot belongs to  */
  protocol: LendingProtocol;
  /**  The pool this snapshot belongs to  */
  market: Market;
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
  /**  All interest rates / fees allowed in the market. Interest rate should be in APY percentage  */
  rates: Array<InterestRate>;
  /**  Current TVL (Total Value Locked) of this market  */
  totalValueLockedUSD: Scalars['BigDecimal'];
  /**  Current balance of all deposited assets (not historical cumulative), in USD. Same as pool TVL.  */
  totalDepositBalanceUSD: Scalars['BigDecimal'];
  /**  Sum of all deposits made in a given hour, in USD  */
  hourlyDepositUSD: Scalars['BigDecimal'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['BigDecimal'];
  /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD.  */
  totalBorrowBalanceUSD: Scalars['BigDecimal'];
  /**  Sum of all borrows/mints made in a given hour, in USD  */
  hourlyBorrowUSD: Scalars['BigDecimal'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination)  */
  cumulativeBorrowUSD: Scalars['BigDecimal'];
  /**  Total assets liquidated in a given hour, in USD.  */
  hourlyLiquidateUSD: Scalars['BigDecimal'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['BigDecimal'];
  /**  Amount of input token in the market.  */
  inputTokenBalance: Scalars['BigInt'];
  /**  Price per share of input token in USD  */
  inputTokenPriceUSD: Scalars['BigDecimal'];
  /**  Total supply of output token  */
  outputTokenSupply: Scalars['BigInt'];
  /**  Price per share of output token in USD  */
  outputTokenPriceUSD: Scalars['BigDecimal'];
  /**  Amount of input token per full share of output token. Only applies when the output token exists  */
  exchangeRate?: Maybe<Scalars['BigDecimal']>;
  /**  Per-block reward token emission as of the current block normalized to a day (not hour), in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
  /**  Per-block reward token emission as of the current block normalized to a day (not hour), in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['BigDecimal']>>;
};


export type MarketHourlySnapshotratesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InterestRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterestRate_filter>;
};

export type MarketHourlySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rates?: InputMaybe<Array<Scalars['String']>>;
  rates_not?: InputMaybe<Array<Scalars['String']>>;
  rates_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
  hourlyDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyBorrowUSD?: InputMaybe<Scalars['BigDecimal']>;
  hourlyBorrowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyBorrowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyBorrowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyBorrowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyBorrowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyBorrowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyBorrowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyLiquidateUSD?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidateUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidateUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidateUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidateUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidateUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidateUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyLiquidateUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenBalance?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  outputTokenSupply?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exchangeRate?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_not?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exchangeRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type MarketHourlySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'market'
  | 'blockNumber'
  | 'timestamp'
  | 'rates'
  | 'totalValueLockedUSD'
  | 'totalDepositBalanceUSD'
  | 'hourlyDepositUSD'
  | 'cumulativeDepositUSD'
  | 'totalBorrowBalanceUSD'
  | 'hourlyBorrowUSD'
  | 'cumulativeBorrowUSD'
  | 'hourlyLiquidateUSD'
  | 'cumulativeLiquidateUSD'
  | 'inputTokenBalance'
  | 'inputTokenPriceUSD'
  | 'outputTokenSupply'
  | 'outputTokenPriceUSD'
  | 'exchangeRate'
  | 'rewardTokenEmissionsAmount'
  | 'rewardTokenEmissionsUSD';

export type Market_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canUseAsCollateral?: InputMaybe<Scalars['Boolean']>;
  canUseAsCollateral_not?: InputMaybe<Scalars['Boolean']>;
  canUseAsCollateral_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canUseAsCollateral_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canBorrowFrom?: InputMaybe<Scalars['Boolean']>;
  canBorrowFrom_not?: InputMaybe<Scalars['Boolean']>;
  canBorrowFrom_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canBorrowFrom_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  maximumLTV?: InputMaybe<Scalars['BigDecimal']>;
  maximumLTV_not?: InputMaybe<Scalars['BigDecimal']>;
  maximumLTV_gt?: InputMaybe<Scalars['BigDecimal']>;
  maximumLTV_lt?: InputMaybe<Scalars['BigDecimal']>;
  maximumLTV_gte?: InputMaybe<Scalars['BigDecimal']>;
  maximumLTV_lte?: InputMaybe<Scalars['BigDecimal']>;
  maximumLTV_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  maximumLTV_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidationThreshold?: InputMaybe<Scalars['BigDecimal']>;
  liquidationThreshold_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidationThreshold_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidationThreshold_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidationThreshold_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidationThreshold_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidationThreshold_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidationThreshold_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidationPenalty?: InputMaybe<Scalars['BigDecimal']>;
  liquidationPenalty_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidationPenalty_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidationPenalty_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidationPenalty_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidationPenalty_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidationPenalty_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidationPenalty_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputToken?: InputMaybe<Scalars['String']>;
  inputToken_not?: InputMaybe<Scalars['String']>;
  inputToken_gt?: InputMaybe<Scalars['String']>;
  inputToken_lt?: InputMaybe<Scalars['String']>;
  inputToken_gte?: InputMaybe<Scalars['String']>;
  inputToken_lte?: InputMaybe<Scalars['String']>;
  inputToken_in?: InputMaybe<Array<Scalars['String']>>;
  inputToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  inputToken_contains?: InputMaybe<Scalars['String']>;
  inputToken_contains_nocase?: InputMaybe<Scalars['String']>;
  inputToken_not_contains?: InputMaybe<Scalars['String']>;
  inputToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  inputToken_starts_with?: InputMaybe<Scalars['String']>;
  inputToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  inputToken_not_starts_with?: InputMaybe<Scalars['String']>;
  inputToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  inputToken_ends_with?: InputMaybe<Scalars['String']>;
  inputToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  inputToken_not_ends_with?: InputMaybe<Scalars['String']>;
  inputToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  outputToken?: InputMaybe<Scalars['String']>;
  outputToken_not?: InputMaybe<Scalars['String']>;
  outputToken_gt?: InputMaybe<Scalars['String']>;
  outputToken_lt?: InputMaybe<Scalars['String']>;
  outputToken_gte?: InputMaybe<Scalars['String']>;
  outputToken_lte?: InputMaybe<Scalars['String']>;
  outputToken_in?: InputMaybe<Array<Scalars['String']>>;
  outputToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  outputToken_contains?: InputMaybe<Scalars['String']>;
  outputToken_contains_nocase?: InputMaybe<Scalars['String']>;
  outputToken_not_contains?: InputMaybe<Scalars['String']>;
  outputToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  outputToken_starts_with?: InputMaybe<Scalars['String']>;
  outputToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  outputToken_not_starts_with?: InputMaybe<Scalars['String']>;
  outputToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  outputToken_ends_with?: InputMaybe<Scalars['String']>;
  outputToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  outputToken_not_ends_with?: InputMaybe<Scalars['String']>;
  outputToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rewardTokens?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates?: InputMaybe<Array<Scalars['String']>>;
  rates_not?: InputMaybe<Array<Scalars['String']>>;
  rates_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  _currentBorrowBalance?: InputMaybe<Scalars['BigInt']>;
  _currentBorrowBalance_not?: InputMaybe<Scalars['BigInt']>;
  _currentBorrowBalance_gt?: InputMaybe<Scalars['BigInt']>;
  _currentBorrowBalance_lt?: InputMaybe<Scalars['BigInt']>;
  _currentBorrowBalance_gte?: InputMaybe<Scalars['BigInt']>;
  _currentBorrowBalance_lte?: InputMaybe<Scalars['BigInt']>;
  _currentBorrowBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  _currentBorrowBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenBalance?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  outputTokenSupply?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exchangeRate?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_not?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exchangeRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  _reserveFactor?: InputMaybe<Scalars['BigDecimal']>;
  _reserveFactor_not?: InputMaybe<Scalars['BigDecimal']>;
  _reserveFactor_gt?: InputMaybe<Scalars['BigDecimal']>;
  _reserveFactor_lt?: InputMaybe<Scalars['BigDecimal']>;
  _reserveFactor_gte?: InputMaybe<Scalars['BigDecimal']>;
  _reserveFactor_lte?: InputMaybe<Scalars['BigDecimal']>;
  _reserveFactor_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  _reserveFactor_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  createdTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  _lastUpdateBlock?: InputMaybe<Scalars['BigInt']>;
  _lastUpdateBlock_not?: InputMaybe<Scalars['BigInt']>;
  _lastUpdateBlock_gt?: InputMaybe<Scalars['BigInt']>;
  _lastUpdateBlock_lt?: InputMaybe<Scalars['BigInt']>;
  _lastUpdateBlock_gte?: InputMaybe<Scalars['BigInt']>;
  _lastUpdateBlock_lte?: InputMaybe<Scalars['BigInt']>;
  _lastUpdateBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  _lastUpdateBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Market_orderBy =
  | 'id'
  | 'protocol'
  | 'name'
  | 'isActive'
  | 'canUseAsCollateral'
  | 'canBorrowFrom'
  | 'maximumLTV'
  | 'liquidationThreshold'
  | 'liquidationPenalty'
  | 'inputToken'
  | 'outputToken'
  | 'rewardTokens'
  | 'rates'
  | 'totalValueLockedUSD'
  | 'totalDepositBalanceUSD'
  | 'cumulativeDepositUSD'
  | '_currentBorrowBalance'
  | 'totalBorrowBalanceUSD'
  | 'cumulativeBorrowUSD'
  | 'cumulativeLiquidateUSD'
  | 'inputTokenBalance'
  | 'inputTokenPriceUSD'
  | 'outputTokenSupply'
  | 'outputTokenPriceUSD'
  | 'exchangeRate'
  | '_reserveFactor'
  | 'rewardTokenEmissionsAmount'
  | 'rewardTokenEmissionsUSD'
  | 'createdTimestamp'
  | 'createdBlockNumber'
  | '_lastUpdateBlock'
  | 'dailySnapshots'
  | 'hourlySnapshots'
  | 'deposits'
  | 'withdraws'
  | 'borrows'
  | 'repays'
  | 'liquidates';

export type Network =
  | 'ARBITRUM_ONE'
  | 'AURORA'
  | 'AVALANCHE'
  | 'BSC'
  | 'CELO'
  | 'MAINNET'
  | 'FANTOM'
  | 'FUSE'
  | 'MOONBEAM'
  | 'MOONRIVER'
  | 'NEAR_MAINNET'
  | 'OPTIMISM'
  | 'MATIC'
  | 'XDAI';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Protocol = {
  /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
  id: Scalars['ID'];
  /**  Name of the protocol, including version. e.g. Uniswap v3  */
  name: Scalars['String'];
  /**  Slug of protocol, including version. e.g. uniswap-v3  */
  slug: Scalars['String'];
  /**  Version of the subgraph schema, in SemVer format (e.g. 1.0.0)  */
  schemaVersion: Scalars['String'];
  /**  Version of the subgraph implementation, in SemVer format (e.g. 1.0.0)  */
  subgraphVersion: Scalars['String'];
  /**  Version of the methodology used to compute metrics, loosely based on SemVer format (e.g. 1.0.0)  */
  methodologyVersion: Scalars['String'];
  /**  The blockchain network this subgraph is indexing on  */
  network: Network;
  /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
  type: ProtocolType;
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['BigDecimal'];
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']>;
  /**  # of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int'];
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
  /**  Daily usage metrics for this protocol  */
  dailyUsageMetrics: Array<UsageMetricsDailySnapshot>;
  /**  Hourly usage metrics for this protocol  */
  hourlyUsageMetrics: Array<UsageMetricsHourlySnapshot>;
  /**  Daily financial metrics for this protocol  */
  financialMetrics: Array<FinancialsDailySnapshot>;
};


export type ProtocoldailyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsDailySnapshot_filter>;
};


export type ProtocolhourlyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
};


export type ProtocolfinancialMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FinancialsDailySnapshot_filter>;
};

export type ProtocolType =
  | 'EXCHANGE'
  | 'LENDING'
  | 'YIELD'
  | 'BRIDGE'
  | 'GENERIC';

export type Protocol_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_gt?: InputMaybe<Scalars['String']>;
  slug_lt?: InputMaybe<Scalars['String']>;
  slug_gte?: InputMaybe<Scalars['String']>;
  slug_lte?: InputMaybe<Scalars['String']>;
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_contains_nocase?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_contains_nocase?: InputMaybe<Scalars['String']>;
  slug_starts_with?: InputMaybe<Scalars['String']>;
  slug_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  slug_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slug_ends_with?: InputMaybe<Scalars['String']>;
  slug_ends_with_nocase?: InputMaybe<Scalars['String']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  slug_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion?: InputMaybe<Scalars['String']>;
  schemaVersion_not?: InputMaybe<Scalars['String']>;
  schemaVersion_gt?: InputMaybe<Scalars['String']>;
  schemaVersion_lt?: InputMaybe<Scalars['String']>;
  schemaVersion_gte?: InputMaybe<Scalars['String']>;
  schemaVersion_lte?: InputMaybe<Scalars['String']>;
  schemaVersion_in?: InputMaybe<Array<Scalars['String']>>;
  schemaVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  schemaVersion_contains?: InputMaybe<Scalars['String']>;
  schemaVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_contains?: InputMaybe<Scalars['String']>;
  schemaVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_starts_with?: InputMaybe<Scalars['String']>;
  schemaVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  schemaVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_ends_with?: InputMaybe<Scalars['String']>;
  schemaVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  schemaVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion?: InputMaybe<Scalars['String']>;
  subgraphVersion_not?: InputMaybe<Scalars['String']>;
  subgraphVersion_gt?: InputMaybe<Scalars['String']>;
  subgraphVersion_lt?: InputMaybe<Scalars['String']>;
  subgraphVersion_gte?: InputMaybe<Scalars['String']>;
  subgraphVersion_lte?: InputMaybe<Scalars['String']>;
  subgraphVersion_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphVersion_contains?: InputMaybe<Scalars['String']>;
  subgraphVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_contains?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_starts_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_ends_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion?: InputMaybe<Scalars['String']>;
  methodologyVersion_not?: InputMaybe<Scalars['String']>;
  methodologyVersion_gt?: InputMaybe<Scalars['String']>;
  methodologyVersion_lt?: InputMaybe<Scalars['String']>;
  methodologyVersion_gte?: InputMaybe<Scalars['String']>;
  methodologyVersion_lte?: InputMaybe<Scalars['String']>;
  methodologyVersion_in?: InputMaybe<Array<Scalars['String']>>;
  methodologyVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  methodologyVersion_contains?: InputMaybe<Scalars['String']>;
  methodologyVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_contains?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_starts_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_ends_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Network>;
  network_not?: InputMaybe<Network>;
  network_in?: InputMaybe<Array<Network>>;
  network_not_in?: InputMaybe<Array<Network>>;
  type?: InputMaybe<ProtocolType>;
  type_not?: InputMaybe<ProtocolType>;
  type_in?: InputMaybe<Array<ProtocolType>>;
  type_not_in?: InputMaybe<Array<ProtocolType>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolControlledValueUSD?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Protocol_orderBy =
  | 'id'
  | 'name'
  | 'slug'
  | 'schemaVersion'
  | 'subgraphVersion'
  | 'methodologyVersion'
  | 'network'
  | 'type'
  | 'totalValueLockedUSD'
  | 'protocolControlledValueUSD'
  | 'cumulativeUniqueUsers'
  | 'cumulativeSupplySideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'dailyUsageMetrics'
  | 'hourlyUsageMetrics'
  | 'financialMetrics';

export type Query = {
  token?: Maybe<Token>;
  tokens: Array<Token>;
  rewardToken?: Maybe<RewardToken>;
  rewardTokens: Array<RewardToken>;
  interestRate?: Maybe<InterestRate>;
  interestRates: Array<InterestRate>;
  lendingProtocol?: Maybe<LendingProtocol>;
  lendingProtocols: Array<LendingProtocol>;
  usageMetricsDailySnapshot?: Maybe<UsageMetricsDailySnapshot>;
  usageMetricsDailySnapshots: Array<UsageMetricsDailySnapshot>;
  usageMetricsHourlySnapshot?: Maybe<UsageMetricsHourlySnapshot>;
  usageMetricsHourlySnapshots: Array<UsageMetricsHourlySnapshot>;
  financialsDailySnapshot?: Maybe<FinancialsDailySnapshot>;
  financialsDailySnapshots: Array<FinancialsDailySnapshot>;
  market?: Maybe<Market>;
  markets: Array<Market>;
  marketDailySnapshot?: Maybe<MarketDailySnapshot>;
  marketDailySnapshots: Array<MarketDailySnapshot>;
  marketHourlySnapshot?: Maybe<MarketHourlySnapshot>;
  marketHourlySnapshots: Array<MarketHourlySnapshot>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  withdraw?: Maybe<Withdraw>;
  withdraws: Array<Withdraw>;
  borrow?: Maybe<Borrow>;
  borrows: Array<Borrow>;
  repay?: Maybe<Repay>;
  repays: Array<Repay>;
  liquidate?: Maybe<Liquidate>;
  liquidates: Array<Liquidate>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  activeAccount?: Maybe<ActiveAccount>;
  activeAccounts: Array<ActiveAccount>;
  circularBuffer?: Maybe<_CircularBuffer>;
  circularBuffers: Array<_CircularBuffer>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  event?: Maybe<Event>;
  events: Array<Event>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerytokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrewardTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinterestRateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinterestRatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InterestRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterestRate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerylendingProtocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerylendingProtocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LendingProtocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LendingProtocol_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusageMetricsDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusageMetricsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsDailySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusageMetricsHourlySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusageMetricsHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfinancialsDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfinancialsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FinancialsDailySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Market_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Market_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketDailySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketHourlySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketHourlySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywithdrawArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdraw_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryborrowArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryborrowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Borrow_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Borrow_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrepayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrepaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Repay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Repay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Liquidate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryactiveAccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryactiveAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ActiveAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ActiveAccount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycircularBufferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycircularBuffersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_CircularBuffer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<_CircularBuffer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Protocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Protocol_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryeventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryeventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Event_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Repay = Event & {
  /**  { Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: LendingProtocol;
  /**  Market that tokens are repaid to  */
  to: Scalars['String'];
  /**  Address that sent tokens  */
  from: Scalars['String'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  The market this transaction interacted with  */
  market: Market;
  /**  Token repaid  */
  asset: Token;
  /**  Amount of token repaid in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of token repaid in USD  */
  amountUSD?: Maybe<Scalars['BigDecimal']>;
};

export type Repay_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Repay_orderBy =
  | 'id'
  | 'hash'
  | 'logIndex'
  | 'protocol'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'timestamp'
  | 'market'
  | 'asset'
  | 'amount'
  | 'amountUSD';

export type RewardToken = {
  /**  { Reward token type }-{ Smart contract address of the reward token }  */
  id: Scalars['ID'];
  /**  Reference to the actual token  */
  token: Token;
  /**  The type of the reward token  */
  type: RewardTokenType;
};

export type RewardTokenType =
  /**  For reward tokens awarded to LPs/lenders  */
  | 'DEPOSIT'
  /**  For reward tokens awarded to borrowers  */
  | 'BORROW';

export type RewardToken_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<RewardTokenType>;
  type_not?: InputMaybe<RewardTokenType>;
  type_in?: InputMaybe<Array<RewardTokenType>>;
  type_not_in?: InputMaybe<Array<RewardTokenType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type RewardToken_orderBy =
  | 'id'
  | 'token'
  | 'type';

export type RiskType =
  /**  Global risk means each users position in a market is combined for one score to determine if they can be liquidated  */
  | 'GLOBAL'
  /**  Isolated risk means each users position in a market or CDP is isolated for risk of liquidation  */
  | 'ISOLATED';

export type Subscription = {
  token?: Maybe<Token>;
  tokens: Array<Token>;
  rewardToken?: Maybe<RewardToken>;
  rewardTokens: Array<RewardToken>;
  interestRate?: Maybe<InterestRate>;
  interestRates: Array<InterestRate>;
  lendingProtocol?: Maybe<LendingProtocol>;
  lendingProtocols: Array<LendingProtocol>;
  usageMetricsDailySnapshot?: Maybe<UsageMetricsDailySnapshot>;
  usageMetricsDailySnapshots: Array<UsageMetricsDailySnapshot>;
  usageMetricsHourlySnapshot?: Maybe<UsageMetricsHourlySnapshot>;
  usageMetricsHourlySnapshots: Array<UsageMetricsHourlySnapshot>;
  financialsDailySnapshot?: Maybe<FinancialsDailySnapshot>;
  financialsDailySnapshots: Array<FinancialsDailySnapshot>;
  market?: Maybe<Market>;
  markets: Array<Market>;
  marketDailySnapshot?: Maybe<MarketDailySnapshot>;
  marketDailySnapshots: Array<MarketDailySnapshot>;
  marketHourlySnapshot?: Maybe<MarketHourlySnapshot>;
  marketHourlySnapshots: Array<MarketHourlySnapshot>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  withdraw?: Maybe<Withdraw>;
  withdraws: Array<Withdraw>;
  borrow?: Maybe<Borrow>;
  borrows: Array<Borrow>;
  repay?: Maybe<Repay>;
  repays: Array<Repay>;
  liquidate?: Maybe<Liquidate>;
  liquidates: Array<Liquidate>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  activeAccount?: Maybe<ActiveAccount>;
  activeAccounts: Array<ActiveAccount>;
  circularBuffer?: Maybe<_CircularBuffer>;
  circularBuffers: Array<_CircularBuffer>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  event?: Maybe<Event>;
  events: Array<Event>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptiontokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrewardTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninterestRateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninterestRatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InterestRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterestRate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionlendingProtocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionlendingProtocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LendingProtocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LendingProtocol_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusageMetricsDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusageMetricsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsDailySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusageMetricsHourlySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusageMetricsHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfinancialsDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfinancialsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FinancialsDailySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Market_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Market_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketDailySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketHourlySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketHourlySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwithdrawArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdraw_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionborrowArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionborrowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Borrow_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Borrow_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrepayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrepaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Repay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Repay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Liquidate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionactiveAccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionactiveAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ActiveAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ActiveAccount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncircularBufferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncircularBuffersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_CircularBuffer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<_CircularBuffer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Protocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Protocol_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioneventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioneventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Event_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Token = {
  /**  Smart contract address of the token  */
  id: Scalars['ID'];
  /**  Name of the token, mirrored from the smart contract  */
  name: Scalars['String'];
  /**  Symbol of the token, mirrored from the smart contract  */
  symbol: Scalars['String'];
  /**  The number of decimal places this token uses, default to 18  */
  decimals: Scalars['Int'];
  /**  Optional field to track the price of a token, mostly for caching purposes  */
  lastPriceUSD?: Maybe<Scalars['BigDecimal']>;
  /**  Optional field to track the block number of the last token price  */
  lastPriceBlockNumber?: Maybe<Scalars['BigInt']>;
};

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  decimals?: InputMaybe<Scalars['Int']>;
  decimals_not?: InputMaybe<Scalars['Int']>;
  decimals_gt?: InputMaybe<Scalars['Int']>;
  decimals_lt?: InputMaybe<Scalars['Int']>;
  decimals_gte?: InputMaybe<Scalars['Int']>;
  decimals_lte?: InputMaybe<Scalars['Int']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  lastPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  lastPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  lastPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  lastPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  lastPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  lastPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lastPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lastPriceBlockNumber?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastPriceBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Token_orderBy =
  | 'id'
  | 'name'
  | 'symbol'
  | 'decimals'
  | 'lastPriceUSD'
  | 'lastPriceBlockNumber';

export type UsageMetricsDailySnapshot = {
  /**  ID is # of days since Unix epoch time  */
  id: Scalars['ID'];
  /**  Protocol this snapshot is associated with  */
  protocol: LendingProtocol;
  /**  # of unique daily active users  */
  dailyActiveUsers: Scalars['Int'];
  /**  # of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int'];
  /**  Total number of transactions occurred in a day. Transactions include all entities that implement the Event interface.  */
  dailyTransactionCount: Scalars['Int'];
  /**  Total number of deposits in a day  */
  dailyDepositCount: Scalars['Int'];
  /**  Total number of withdrawals in a day  */
  dailyWithdrawCount: Scalars['Int'];
  /**  Total number of borrows/mints in a day  */
  dailyBorrowCount: Scalars['Int'];
  /**  Total number of repayments/burns in a day  */
  dailyRepayCount: Scalars['Int'];
  /**  Total number of liquidations in a day  */
  dailyLiquidateCount: Scalars['Int'];
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
};

export type UsageMetricsDailySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dailyActiveUsers?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_not?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_gt?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_lt?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_gte?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_lte?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyTransactionCount?: InputMaybe<Scalars['Int']>;
  dailyTransactionCount_not?: InputMaybe<Scalars['Int']>;
  dailyTransactionCount_gt?: InputMaybe<Scalars['Int']>;
  dailyTransactionCount_lt?: InputMaybe<Scalars['Int']>;
  dailyTransactionCount_gte?: InputMaybe<Scalars['Int']>;
  dailyTransactionCount_lte?: InputMaybe<Scalars['Int']>;
  dailyTransactionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyTransactionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyDepositCount?: InputMaybe<Scalars['Int']>;
  dailyDepositCount_not?: InputMaybe<Scalars['Int']>;
  dailyDepositCount_gt?: InputMaybe<Scalars['Int']>;
  dailyDepositCount_lt?: InputMaybe<Scalars['Int']>;
  dailyDepositCount_gte?: InputMaybe<Scalars['Int']>;
  dailyDepositCount_lte?: InputMaybe<Scalars['Int']>;
  dailyDepositCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyDepositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyWithdrawCount?: InputMaybe<Scalars['Int']>;
  dailyWithdrawCount_not?: InputMaybe<Scalars['Int']>;
  dailyWithdrawCount_gt?: InputMaybe<Scalars['Int']>;
  dailyWithdrawCount_lt?: InputMaybe<Scalars['Int']>;
  dailyWithdrawCount_gte?: InputMaybe<Scalars['Int']>;
  dailyWithdrawCount_lte?: InputMaybe<Scalars['Int']>;
  dailyWithdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyBorrowCount?: InputMaybe<Scalars['Int']>;
  dailyBorrowCount_not?: InputMaybe<Scalars['Int']>;
  dailyBorrowCount_gt?: InputMaybe<Scalars['Int']>;
  dailyBorrowCount_lt?: InputMaybe<Scalars['Int']>;
  dailyBorrowCount_gte?: InputMaybe<Scalars['Int']>;
  dailyBorrowCount_lte?: InputMaybe<Scalars['Int']>;
  dailyBorrowCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyBorrowCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyRepayCount?: InputMaybe<Scalars['Int']>;
  dailyRepayCount_not?: InputMaybe<Scalars['Int']>;
  dailyRepayCount_gt?: InputMaybe<Scalars['Int']>;
  dailyRepayCount_lt?: InputMaybe<Scalars['Int']>;
  dailyRepayCount_gte?: InputMaybe<Scalars['Int']>;
  dailyRepayCount_lte?: InputMaybe<Scalars['Int']>;
  dailyRepayCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyRepayCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyLiquidateCount?: InputMaybe<Scalars['Int']>;
  dailyLiquidateCount_not?: InputMaybe<Scalars['Int']>;
  dailyLiquidateCount_gt?: InputMaybe<Scalars['Int']>;
  dailyLiquidateCount_lt?: InputMaybe<Scalars['Int']>;
  dailyLiquidateCount_gte?: InputMaybe<Scalars['Int']>;
  dailyLiquidateCount_lte?: InputMaybe<Scalars['Int']>;
  dailyLiquidateCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyLiquidateCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type UsageMetricsDailySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'dailyActiveUsers'
  | 'cumulativeUniqueUsers'
  | 'dailyTransactionCount'
  | 'dailyDepositCount'
  | 'dailyWithdrawCount'
  | 'dailyBorrowCount'
  | 'dailyRepayCount'
  | 'dailyLiquidateCount'
  | 'blockNumber'
  | 'timestamp';

export type UsageMetricsHourlySnapshot = {
  /**  { # of hours since Unix epoch time }  */
  id: Scalars['ID'];
  /**  Protocol this snapshot is associated with  */
  protocol: LendingProtocol;
  /**  # of unique hourly active users  */
  hourlyActiveUsers: Scalars['Int'];
  /**  # of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int'];
  /**  Total number of transactions occurred in an hour. Transactions include all entities that implement the Event interface.  */
  hourlyTransactionCount: Scalars['Int'];
  /**  Total number of deposits in an hour  */
  hourlyDepositCount: Scalars['Int'];
  /**  Total number of withdrawals in an hour  */
  hourlyWithdrawCount: Scalars['Int'];
  /**  Total number of borrows/mints in an hour  */
  hourlyBorrowCount: Scalars['Int'];
  /**  Total number of repayments/burns in an hour  */
  hourlyRepayCount: Scalars['Int'];
  /**  Total number of liquidations in an hour  */
  hourlyLiquidateCount: Scalars['Int'];
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
};

export type UsageMetricsHourlySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hourlyActiveUsers?: InputMaybe<Scalars['Int']>;
  hourlyActiveUsers_not?: InputMaybe<Scalars['Int']>;
  hourlyActiveUsers_gt?: InputMaybe<Scalars['Int']>;
  hourlyActiveUsers_lt?: InputMaybe<Scalars['Int']>;
  hourlyActiveUsers_gte?: InputMaybe<Scalars['Int']>;
  hourlyActiveUsers_lte?: InputMaybe<Scalars['Int']>;
  hourlyActiveUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyActiveUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyTransactionCount?: InputMaybe<Scalars['Int']>;
  hourlyTransactionCount_not?: InputMaybe<Scalars['Int']>;
  hourlyTransactionCount_gt?: InputMaybe<Scalars['Int']>;
  hourlyTransactionCount_lt?: InputMaybe<Scalars['Int']>;
  hourlyTransactionCount_gte?: InputMaybe<Scalars['Int']>;
  hourlyTransactionCount_lte?: InputMaybe<Scalars['Int']>;
  hourlyTransactionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyTransactionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyDepositCount?: InputMaybe<Scalars['Int']>;
  hourlyDepositCount_not?: InputMaybe<Scalars['Int']>;
  hourlyDepositCount_gt?: InputMaybe<Scalars['Int']>;
  hourlyDepositCount_lt?: InputMaybe<Scalars['Int']>;
  hourlyDepositCount_gte?: InputMaybe<Scalars['Int']>;
  hourlyDepositCount_lte?: InputMaybe<Scalars['Int']>;
  hourlyDepositCount_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyDepositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyWithdrawCount?: InputMaybe<Scalars['Int']>;
  hourlyWithdrawCount_not?: InputMaybe<Scalars['Int']>;
  hourlyWithdrawCount_gt?: InputMaybe<Scalars['Int']>;
  hourlyWithdrawCount_lt?: InputMaybe<Scalars['Int']>;
  hourlyWithdrawCount_gte?: InputMaybe<Scalars['Int']>;
  hourlyWithdrawCount_lte?: InputMaybe<Scalars['Int']>;
  hourlyWithdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyBorrowCount?: InputMaybe<Scalars['Int']>;
  hourlyBorrowCount_not?: InputMaybe<Scalars['Int']>;
  hourlyBorrowCount_gt?: InputMaybe<Scalars['Int']>;
  hourlyBorrowCount_lt?: InputMaybe<Scalars['Int']>;
  hourlyBorrowCount_gte?: InputMaybe<Scalars['Int']>;
  hourlyBorrowCount_lte?: InputMaybe<Scalars['Int']>;
  hourlyBorrowCount_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyBorrowCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyRepayCount?: InputMaybe<Scalars['Int']>;
  hourlyRepayCount_not?: InputMaybe<Scalars['Int']>;
  hourlyRepayCount_gt?: InputMaybe<Scalars['Int']>;
  hourlyRepayCount_lt?: InputMaybe<Scalars['Int']>;
  hourlyRepayCount_gte?: InputMaybe<Scalars['Int']>;
  hourlyRepayCount_lte?: InputMaybe<Scalars['Int']>;
  hourlyRepayCount_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyRepayCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyLiquidateCount?: InputMaybe<Scalars['Int']>;
  hourlyLiquidateCount_not?: InputMaybe<Scalars['Int']>;
  hourlyLiquidateCount_gt?: InputMaybe<Scalars['Int']>;
  hourlyLiquidateCount_lt?: InputMaybe<Scalars['Int']>;
  hourlyLiquidateCount_gte?: InputMaybe<Scalars['Int']>;
  hourlyLiquidateCount_lte?: InputMaybe<Scalars['Int']>;
  hourlyLiquidateCount_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyLiquidateCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type UsageMetricsHourlySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'hourlyActiveUsers'
  | 'cumulativeUniqueUsers'
  | 'hourlyTransactionCount'
  | 'hourlyDepositCount'
  | 'hourlyWithdrawCount'
  | 'hourlyBorrowCount'
  | 'hourlyRepayCount'
  | 'hourlyLiquidateCount'
  | 'blockNumber'
  | 'timestamp';

export type Withdraw = Event & {
  /**  { Transaction hash }-{ Log index } */
  id: Scalars['ID'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: LendingProtocol;
  /**  Address that received tokens  */
  to: Scalars['String'];
  /**  Market that tokens are withdrawn from  */
  from: Scalars['String'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  The market this transaction interacted with  */
  market: Market;
  /**  Token withdrawn  */
  asset: Token;
  /**  Amount of token withdrawn in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of token withdrawn in USD  */
  amountUSD: Scalars['BigDecimal'];
};

export type Withdraw_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Withdraw_orderBy =
  | 'id'
  | 'hash'
  | 'logIndex'
  | 'protocol'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'timestamp'
  | 'market'
  | 'asset'
  | 'amount'
  | 'amountUSD';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

export type _CircularBuffer = {
  id: Scalars['ID'];
  blocks: Array<Scalars['Int']>;
  windowStartIndex: Scalars['Int'];
  nextIndex: Scalars['Int'];
  bufferSize: Scalars['Int'];
  blocksPerDay: Scalars['BigDecimal'];
};

export type _CircularBuffer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blocks?: InputMaybe<Array<Scalars['Int']>>;
  blocks_not?: InputMaybe<Array<Scalars['Int']>>;
  blocks_contains?: InputMaybe<Array<Scalars['Int']>>;
  blocks_contains_nocase?: InputMaybe<Array<Scalars['Int']>>;
  blocks_not_contains?: InputMaybe<Array<Scalars['Int']>>;
  blocks_not_contains_nocase?: InputMaybe<Array<Scalars['Int']>>;
  windowStartIndex?: InputMaybe<Scalars['Int']>;
  windowStartIndex_not?: InputMaybe<Scalars['Int']>;
  windowStartIndex_gt?: InputMaybe<Scalars['Int']>;
  windowStartIndex_lt?: InputMaybe<Scalars['Int']>;
  windowStartIndex_gte?: InputMaybe<Scalars['Int']>;
  windowStartIndex_lte?: InputMaybe<Scalars['Int']>;
  windowStartIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  windowStartIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  nextIndex?: InputMaybe<Scalars['Int']>;
  nextIndex_not?: InputMaybe<Scalars['Int']>;
  nextIndex_gt?: InputMaybe<Scalars['Int']>;
  nextIndex_lt?: InputMaybe<Scalars['Int']>;
  nextIndex_gte?: InputMaybe<Scalars['Int']>;
  nextIndex_lte?: InputMaybe<Scalars['Int']>;
  nextIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  nextIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  bufferSize?: InputMaybe<Scalars['Int']>;
  bufferSize_not?: InputMaybe<Scalars['Int']>;
  bufferSize_gt?: InputMaybe<Scalars['Int']>;
  bufferSize_lt?: InputMaybe<Scalars['Int']>;
  bufferSize_gte?: InputMaybe<Scalars['Int']>;
  bufferSize_lte?: InputMaybe<Scalars['Int']>;
  bufferSize_in?: InputMaybe<Array<Scalars['Int']>>;
  bufferSize_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blocksPerDay?: InputMaybe<Scalars['BigDecimal']>;
  blocksPerDay_not?: InputMaybe<Scalars['BigDecimal']>;
  blocksPerDay_gt?: InputMaybe<Scalars['BigDecimal']>;
  blocksPerDay_lt?: InputMaybe<Scalars['BigDecimal']>;
  blocksPerDay_gte?: InputMaybe<Scalars['BigDecimal']>;
  blocksPerDay_lte?: InputMaybe<Scalars['BigDecimal']>;
  blocksPerDay_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  blocksPerDay_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type _CircularBuffer_orderBy =
  | 'id'
  | 'blocks'
  | 'windowStartIndex'
  | 'nextIndex'
  | 'bufferSize'
  | 'blocksPerDay';

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Account: ResolverTypeWrapper<Account>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Account_filter: Account_filter;
  Account_orderBy: Account_orderBy;
  ActiveAccount: ResolverTypeWrapper<ActiveAccount>;
  ActiveAccount_filter: ActiveAccount_filter;
  ActiveAccount_orderBy: ActiveAccount_orderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Block_height: Block_height;
  Borrow: ResolverTypeWrapper<Borrow>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Borrow_filter: Borrow_filter;
  Borrow_orderBy: Borrow_orderBy;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Deposit: ResolverTypeWrapper<Deposit>;
  Deposit_filter: Deposit_filter;
  Deposit_orderBy: Deposit_orderBy;
  Event: ResolversTypes['Borrow'] | ResolversTypes['Deposit'] | ResolversTypes['Liquidate'] | ResolversTypes['Repay'] | ResolversTypes['Withdraw'];
  Event_filter: Event_filter;
  Event_orderBy: Event_orderBy;
  FinancialsDailySnapshot: ResolverTypeWrapper<FinancialsDailySnapshot>;
  FinancialsDailySnapshot_filter: FinancialsDailySnapshot_filter;
  FinancialsDailySnapshot_orderBy: FinancialsDailySnapshot_orderBy;
  InterestRate: ResolverTypeWrapper<InterestRate>;
  InterestRateSide: InterestRateSide;
  InterestRateType: InterestRateType;
  InterestRate_filter: InterestRate_filter;
  InterestRate_orderBy: InterestRate_orderBy;
  LendingProtocol: ResolverTypeWrapper<LendingProtocol>;
  LendingProtocol_filter: LendingProtocol_filter;
  LendingProtocol_orderBy: LendingProtocol_orderBy;
  LendingType: LendingType;
  Liquidate: ResolverTypeWrapper<Liquidate>;
  Liquidate_filter: Liquidate_filter;
  Liquidate_orderBy: Liquidate_orderBy;
  Market: ResolverTypeWrapper<Market>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  MarketDailySnapshot: ResolverTypeWrapper<MarketDailySnapshot>;
  MarketDailySnapshot_filter: MarketDailySnapshot_filter;
  MarketDailySnapshot_orderBy: MarketDailySnapshot_orderBy;
  MarketHourlySnapshot: ResolverTypeWrapper<MarketHourlySnapshot>;
  MarketHourlySnapshot_filter: MarketHourlySnapshot_filter;
  MarketHourlySnapshot_orderBy: MarketHourlySnapshot_orderBy;
  Market_filter: Market_filter;
  Market_orderBy: Market_orderBy;
  Network: Network;
  OrderDirection: OrderDirection;
  Protocol: ResolversTypes['LendingProtocol'];
  ProtocolType: ProtocolType;
  Protocol_filter: Protocol_filter;
  Protocol_orderBy: Protocol_orderBy;
  Query: ResolverTypeWrapper<{}>;
  Repay: ResolverTypeWrapper<Repay>;
  Repay_filter: Repay_filter;
  Repay_orderBy: Repay_orderBy;
  RewardToken: ResolverTypeWrapper<RewardToken>;
  RewardTokenType: RewardTokenType;
  RewardToken_filter: RewardToken_filter;
  RewardToken_orderBy: RewardToken_orderBy;
  RiskType: RiskType;
  Subscription: ResolverTypeWrapper<{}>;
  Token: ResolverTypeWrapper<Token>;
  Token_filter: Token_filter;
  Token_orderBy: Token_orderBy;
  UsageMetricsDailySnapshot: ResolverTypeWrapper<UsageMetricsDailySnapshot>;
  UsageMetricsDailySnapshot_filter: UsageMetricsDailySnapshot_filter;
  UsageMetricsDailySnapshot_orderBy: UsageMetricsDailySnapshot_orderBy;
  UsageMetricsHourlySnapshot: ResolverTypeWrapper<UsageMetricsHourlySnapshot>;
  UsageMetricsHourlySnapshot_filter: UsageMetricsHourlySnapshot_filter;
  UsageMetricsHourlySnapshot_orderBy: UsageMetricsHourlySnapshot_orderBy;
  Withdraw: ResolverTypeWrapper<Withdraw>;
  Withdraw_filter: Withdraw_filter;
  Withdraw_orderBy: Withdraw_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _CircularBuffer: ResolverTypeWrapper<_CircularBuffer>;
  _CircularBuffer_filter: _CircularBuffer_filter;
  _CircularBuffer_orderBy: _CircularBuffer_orderBy;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account;
  ID: Scalars['ID'];
  Account_filter: Account_filter;
  ActiveAccount: ActiveAccount;
  ActiveAccount_filter: ActiveAccount_filter;
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Int: Scalars['Int'];
  Block_height: Block_height;
  Borrow: Borrow;
  String: Scalars['String'];
  Borrow_filter: Borrow_filter;
  Bytes: Scalars['Bytes'];
  Deposit: Deposit;
  Deposit_filter: Deposit_filter;
  Event: ResolversParentTypes['Borrow'] | ResolversParentTypes['Deposit'] | ResolversParentTypes['Liquidate'] | ResolversParentTypes['Repay'] | ResolversParentTypes['Withdraw'];
  Event_filter: Event_filter;
  FinancialsDailySnapshot: FinancialsDailySnapshot;
  FinancialsDailySnapshot_filter: FinancialsDailySnapshot_filter;
  InterestRate: InterestRate;
  InterestRate_filter: InterestRate_filter;
  LendingProtocol: LendingProtocol;
  LendingProtocol_filter: LendingProtocol_filter;
  Liquidate: Liquidate;
  Liquidate_filter: Liquidate_filter;
  Market: Market;
  Boolean: Scalars['Boolean'];
  MarketDailySnapshot: MarketDailySnapshot;
  MarketDailySnapshot_filter: MarketDailySnapshot_filter;
  MarketHourlySnapshot: MarketHourlySnapshot;
  MarketHourlySnapshot_filter: MarketHourlySnapshot_filter;
  Market_filter: Market_filter;
  Protocol: ResolversParentTypes['LendingProtocol'];
  Protocol_filter: Protocol_filter;
  Query: {};
  Repay: Repay;
  Repay_filter: Repay_filter;
  RewardToken: RewardToken;
  RewardToken_filter: RewardToken_filter;
  Subscription: {};
  Token: Token;
  Token_filter: Token_filter;
  UsageMetricsDailySnapshot: UsageMetricsDailySnapshot;
  UsageMetricsDailySnapshot_filter: UsageMetricsDailySnapshot_filter;
  UsageMetricsHourlySnapshot: UsageMetricsHourlySnapshot;
  UsageMetricsHourlySnapshot_filter: UsageMetricsHourlySnapshot_filter;
  Withdraw: Withdraw;
  Withdraw_filter: Withdraw_filter;
  _Block_: _Block_;
  _CircularBuffer: _CircularBuffer;
  _CircularBuffer_filter: _CircularBuffer_filter;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ActiveAccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ActiveAccount'] = ResolversParentTypes['ActiveAccount']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type BorrowResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Borrow'] = ResolversParentTypes['Borrow']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['LendingProtocol'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  market?: Resolver<ResolversTypes['Market'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amountUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type DepositResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Deposit'] = ResolversParentTypes['Deposit']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['LendingProtocol'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  market?: Resolver<ResolversTypes['Market'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Borrow' | 'Deposit' | 'Liquidate' | 'Repay' | 'Withdraw', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['LendingProtocol'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
}>;

export type FinancialsDailySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FinancialsDailySnapshot'] = ResolversParentTypes['FinancialsDailySnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['LendingProtocol'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  protocolControlledValueUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  mintedTokenSupplies?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
  dailySupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeSupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalDepositBalanceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyDepositUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeDepositUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalBorrowBalanceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyBorrowUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeBorrowUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyLiquidateUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeLiquidateUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InterestRateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InterestRate'] = ResolversParentTypes['InterestRate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rate?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maturityBlock?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  side?: Resolver<ResolversTypes['InterestRateSide'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['InterestRateType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LendingProtocolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LendingProtocol'] = ResolversParentTypes['LendingProtocol']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schemaVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subgraphVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  methodologyVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  network?: Resolver<ResolversTypes['Network'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ProtocolType'], ParentType, ContextType>;
  lendingType?: Resolver<Maybe<ResolversTypes['LendingType']>, ParentType, ContextType>;
  riskType?: Resolver<Maybe<ResolversTypes['RiskType']>, ParentType, ContextType>;
  mintedTokens?: Resolver<Maybe<Array<ResolversTypes['Token']>>, ParentType, ContextType, RequireFields<LendingProtocolmintedTokensArgs, 'skip' | 'first'>>;
  cumulativeUniqueUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  protocolControlledValueUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  cumulativeSupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalDepositBalanceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeDepositUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalBorrowBalanceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeBorrowUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeLiquidateUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  mintedTokenSupplies?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
  dailyUsageMetrics?: Resolver<Array<ResolversTypes['UsageMetricsDailySnapshot']>, ParentType, ContextType, RequireFields<LendingProtocoldailyUsageMetricsArgs, 'skip' | 'first'>>;
  hourlyUsageMetrics?: Resolver<Array<ResolversTypes['UsageMetricsHourlySnapshot']>, ParentType, ContextType, RequireFields<LendingProtocolhourlyUsageMetricsArgs, 'skip' | 'first'>>;
  financialMetrics?: Resolver<Array<ResolversTypes['FinancialsDailySnapshot']>, ParentType, ContextType, RequireFields<LendingProtocolfinancialMetricsArgs, 'skip' | 'first'>>;
  markets?: Resolver<Array<ResolversTypes['Market']>, ParentType, ContextType, RequireFields<LendingProtocolmarketsArgs, 'skip' | 'first'>>;
  _marketIds?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  _priceOracle?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  _liquidationPenalty?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LiquidateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Liquidate'] = ResolversParentTypes['Liquidate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['LendingProtocol'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  market?: Resolver<ResolversTypes['Market'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amountUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  profitUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MarketResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Market'] = ResolversParentTypes['Market']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['LendingProtocol'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  canUseAsCollateral?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  canBorrowFrom?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  maximumLTV?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidationThreshold?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidationPenalty?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  inputToken?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  outputToken?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  rewardTokens?: Resolver<Maybe<Array<ResolversTypes['RewardToken']>>, ParentType, ContextType, RequireFields<MarketrewardTokensArgs, 'skip' | 'first'>>;
  rates?: Resolver<Array<ResolversTypes['InterestRate']>, ParentType, ContextType, RequireFields<MarketratesArgs, 'skip' | 'first'>>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalDepositBalanceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeDepositUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  _currentBorrowBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalBorrowBalanceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeBorrowUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeLiquidateUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  inputTokenBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  inputTokenPriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  outputTokenSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  outputTokenPriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  exchangeRate?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  _reserveFactor?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  rewardTokenEmissionsAmount?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
  rewardTokenEmissionsUSD?: Resolver<Maybe<Array<ResolversTypes['BigDecimal']>>, ParentType, ContextType>;
  createdTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  _lastUpdateBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dailySnapshots?: Resolver<Array<ResolversTypes['MarketDailySnapshot']>, ParentType, ContextType, RequireFields<MarketdailySnapshotsArgs, 'skip' | 'first'>>;
  hourlySnapshots?: Resolver<Array<ResolversTypes['MarketHourlySnapshot']>, ParentType, ContextType, RequireFields<MarkethourlySnapshotsArgs, 'skip' | 'first'>>;
  deposits?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<MarketdepositsArgs, 'skip' | 'first'>>;
  withdraws?: Resolver<Array<ResolversTypes['Withdraw']>, ParentType, ContextType, RequireFields<MarketwithdrawsArgs, 'skip' | 'first'>>;
  borrows?: Resolver<Array<ResolversTypes['Borrow']>, ParentType, ContextType, RequireFields<MarketborrowsArgs, 'skip' | 'first'>>;
  repays?: Resolver<Array<ResolversTypes['Repay']>, ParentType, ContextType, RequireFields<MarketrepaysArgs, 'skip' | 'first'>>;
  liquidates?: Resolver<Array<ResolversTypes['Liquidate']>, ParentType, ContextType, RequireFields<MarketliquidatesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MarketDailySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MarketDailySnapshot'] = ResolversParentTypes['MarketDailySnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['LendingProtocol'], ParentType, ContextType>;
  market?: Resolver<ResolversTypes['Market'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  rates?: Resolver<Array<ResolversTypes['InterestRate']>, ParentType, ContextType, RequireFields<MarketDailySnapshotratesArgs, 'skip' | 'first'>>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalDepositBalanceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyDepositUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeDepositUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalBorrowBalanceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyBorrowUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeBorrowUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyLiquidateUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeLiquidateUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  inputTokenBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  inputTokenPriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  outputTokenSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  outputTokenPriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  exchangeRate?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  rewardTokenEmissionsAmount?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
  rewardTokenEmissionsUSD?: Resolver<Maybe<Array<ResolversTypes['BigDecimal']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MarketHourlySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MarketHourlySnapshot'] = ResolversParentTypes['MarketHourlySnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['LendingProtocol'], ParentType, ContextType>;
  market?: Resolver<ResolversTypes['Market'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  rates?: Resolver<Array<ResolversTypes['InterestRate']>, ParentType, ContextType, RequireFields<MarketHourlySnapshotratesArgs, 'skip' | 'first'>>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalDepositBalanceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  hourlyDepositUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeDepositUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalBorrowBalanceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  hourlyBorrowUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeBorrowUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  hourlyLiquidateUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeLiquidateUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  inputTokenBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  inputTokenPriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  outputTokenSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  outputTokenPriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  exchangeRate?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  rewardTokenEmissionsAmount?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
  rewardTokenEmissionsUSD?: Resolver<Maybe<Array<ResolversTypes['BigDecimal']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtocolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Protocol'] = ResolversParentTypes['Protocol']> = ResolversObject<{
  __resolveType: TypeResolveFn<'LendingProtocol', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schemaVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subgraphVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  methodologyVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  network?: Resolver<ResolversTypes['Network'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ProtocolType'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  protocolControlledValueUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  cumulativeUniqueUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cumulativeSupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyUsageMetrics?: Resolver<Array<ResolversTypes['UsageMetricsDailySnapshot']>, ParentType, ContextType, RequireFields<ProtocoldailyUsageMetricsArgs, 'skip' | 'first'>>;
  hourlyUsageMetrics?: Resolver<Array<ResolversTypes['UsageMetricsHourlySnapshot']>, ParentType, ContextType, RequireFields<ProtocolhourlyUsageMetricsArgs, 'skip' | 'first'>>;
  financialMetrics?: Resolver<Array<ResolversTypes['FinancialsDailySnapshot']>, ParentType, ContextType, RequireFields<ProtocolfinancialMetricsArgs, 'skip' | 'first'>>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokenArgs, 'id' | 'subgraphError'>>;
  tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  rewardToken?: Resolver<Maybe<ResolversTypes['RewardToken']>, ParentType, ContextType, RequireFields<QueryrewardTokenArgs, 'id' | 'subgraphError'>>;
  rewardTokens?: Resolver<Array<ResolversTypes['RewardToken']>, ParentType, ContextType, RequireFields<QueryrewardTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  interestRate?: Resolver<Maybe<ResolversTypes['InterestRate']>, ParentType, ContextType, RequireFields<QueryinterestRateArgs, 'id' | 'subgraphError'>>;
  interestRates?: Resolver<Array<ResolversTypes['InterestRate']>, ParentType, ContextType, RequireFields<QueryinterestRatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  lendingProtocol?: Resolver<Maybe<ResolversTypes['LendingProtocol']>, ParentType, ContextType, RequireFields<QuerylendingProtocolArgs, 'id' | 'subgraphError'>>;
  lendingProtocols?: Resolver<Array<ResolversTypes['LendingProtocol']>, ParentType, ContextType, RequireFields<QuerylendingProtocolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  usageMetricsDailySnapshot?: Resolver<Maybe<ResolversTypes['UsageMetricsDailySnapshot']>, ParentType, ContextType, RequireFields<QueryusageMetricsDailySnapshotArgs, 'id' | 'subgraphError'>>;
  usageMetricsDailySnapshots?: Resolver<Array<ResolversTypes['UsageMetricsDailySnapshot']>, ParentType, ContextType, RequireFields<QueryusageMetricsDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  usageMetricsHourlySnapshot?: Resolver<Maybe<ResolversTypes['UsageMetricsHourlySnapshot']>, ParentType, ContextType, RequireFields<QueryusageMetricsHourlySnapshotArgs, 'id' | 'subgraphError'>>;
  usageMetricsHourlySnapshots?: Resolver<Array<ResolversTypes['UsageMetricsHourlySnapshot']>, ParentType, ContextType, RequireFields<QueryusageMetricsHourlySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  financialsDailySnapshot?: Resolver<Maybe<ResolversTypes['FinancialsDailySnapshot']>, ParentType, ContextType, RequireFields<QueryfinancialsDailySnapshotArgs, 'id' | 'subgraphError'>>;
  financialsDailySnapshots?: Resolver<Array<ResolversTypes['FinancialsDailySnapshot']>, ParentType, ContextType, RequireFields<QueryfinancialsDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  market?: Resolver<Maybe<ResolversTypes['Market']>, ParentType, ContextType, RequireFields<QuerymarketArgs, 'id' | 'subgraphError'>>;
  markets?: Resolver<Array<ResolversTypes['Market']>, ParentType, ContextType, RequireFields<QuerymarketsArgs, 'skip' | 'first' | 'subgraphError'>>;
  marketDailySnapshot?: Resolver<Maybe<ResolversTypes['MarketDailySnapshot']>, ParentType, ContextType, RequireFields<QuerymarketDailySnapshotArgs, 'id' | 'subgraphError'>>;
  marketDailySnapshots?: Resolver<Array<ResolversTypes['MarketDailySnapshot']>, ParentType, ContextType, RequireFields<QuerymarketDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  marketHourlySnapshot?: Resolver<Maybe<ResolversTypes['MarketHourlySnapshot']>, ParentType, ContextType, RequireFields<QuerymarketHourlySnapshotArgs, 'id' | 'subgraphError'>>;
  marketHourlySnapshots?: Resolver<Array<ResolversTypes['MarketHourlySnapshot']>, ParentType, ContextType, RequireFields<QuerymarketHourlySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  deposit?: Resolver<Maybe<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<QuerydepositArgs, 'id' | 'subgraphError'>>;
  deposits?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<QuerydepositsArgs, 'skip' | 'first' | 'subgraphError'>>;
  withdraw?: Resolver<Maybe<ResolversTypes['Withdraw']>, ParentType, ContextType, RequireFields<QuerywithdrawArgs, 'id' | 'subgraphError'>>;
  withdraws?: Resolver<Array<ResolversTypes['Withdraw']>, ParentType, ContextType, RequireFields<QuerywithdrawsArgs, 'skip' | 'first' | 'subgraphError'>>;
  borrow?: Resolver<Maybe<ResolversTypes['Borrow']>, ParentType, ContextType, RequireFields<QueryborrowArgs, 'id' | 'subgraphError'>>;
  borrows?: Resolver<Array<ResolversTypes['Borrow']>, ParentType, ContextType, RequireFields<QueryborrowsArgs, 'skip' | 'first' | 'subgraphError'>>;
  repay?: Resolver<Maybe<ResolversTypes['Repay']>, ParentType, ContextType, RequireFields<QueryrepayArgs, 'id' | 'subgraphError'>>;
  repays?: Resolver<Array<ResolversTypes['Repay']>, ParentType, ContextType, RequireFields<QueryrepaysArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidate?: Resolver<Maybe<ResolversTypes['Liquidate']>, ParentType, ContextType, RequireFields<QueryliquidateArgs, 'id' | 'subgraphError'>>;
  liquidates?: Resolver<Array<ResolversTypes['Liquidate']>, ParentType, ContextType, RequireFields<QueryliquidatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountArgs, 'id' | 'subgraphError'>>;
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  activeAccount?: Resolver<Maybe<ResolversTypes['ActiveAccount']>, ParentType, ContextType, RequireFields<QueryactiveAccountArgs, 'id' | 'subgraphError'>>;
  activeAccounts?: Resolver<Array<ResolversTypes['ActiveAccount']>, ParentType, ContextType, RequireFields<QueryactiveAccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  circularBuffer?: Resolver<Maybe<ResolversTypes['_CircularBuffer']>, ParentType, ContextType, RequireFields<QuerycircularBufferArgs, 'id' | 'subgraphError'>>;
  circularBuffers?: Resolver<Array<ResolversTypes['_CircularBuffer']>, ParentType, ContextType, RequireFields<QuerycircularBuffersArgs, 'skip' | 'first' | 'subgraphError'>>;
  protocol?: Resolver<Maybe<ResolversTypes['Protocol']>, ParentType, ContextType, RequireFields<QueryprotocolArgs, 'id' | 'subgraphError'>>;
  protocols?: Resolver<Array<ResolversTypes['Protocol']>, ParentType, ContextType, RequireFields<QueryprotocolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryeventArgs, 'id' | 'subgraphError'>>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryeventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type RepayResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Repay'] = ResolversParentTypes['Repay']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['LendingProtocol'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  market?: Resolver<ResolversTypes['Market'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amountUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RewardTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RewardToken'] = ResolversParentTypes['RewardToken']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['RewardTokenType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  token?: SubscriptionResolver<Maybe<ResolversTypes['Token']>, "token", ParentType, ContextType, RequireFields<SubscriptiontokenArgs, 'id' | 'subgraphError'>>;
  tokens?: SubscriptionResolver<Array<ResolversTypes['Token']>, "tokens", ParentType, ContextType, RequireFields<SubscriptiontokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  rewardToken?: SubscriptionResolver<Maybe<ResolversTypes['RewardToken']>, "rewardToken", ParentType, ContextType, RequireFields<SubscriptionrewardTokenArgs, 'id' | 'subgraphError'>>;
  rewardTokens?: SubscriptionResolver<Array<ResolversTypes['RewardToken']>, "rewardTokens", ParentType, ContextType, RequireFields<SubscriptionrewardTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  interestRate?: SubscriptionResolver<Maybe<ResolversTypes['InterestRate']>, "interestRate", ParentType, ContextType, RequireFields<SubscriptioninterestRateArgs, 'id' | 'subgraphError'>>;
  interestRates?: SubscriptionResolver<Array<ResolversTypes['InterestRate']>, "interestRates", ParentType, ContextType, RequireFields<SubscriptioninterestRatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  lendingProtocol?: SubscriptionResolver<Maybe<ResolversTypes['LendingProtocol']>, "lendingProtocol", ParentType, ContextType, RequireFields<SubscriptionlendingProtocolArgs, 'id' | 'subgraphError'>>;
  lendingProtocols?: SubscriptionResolver<Array<ResolversTypes['LendingProtocol']>, "lendingProtocols", ParentType, ContextType, RequireFields<SubscriptionlendingProtocolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  usageMetricsDailySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['UsageMetricsDailySnapshot']>, "usageMetricsDailySnapshot", ParentType, ContextType, RequireFields<SubscriptionusageMetricsDailySnapshotArgs, 'id' | 'subgraphError'>>;
  usageMetricsDailySnapshots?: SubscriptionResolver<Array<ResolversTypes['UsageMetricsDailySnapshot']>, "usageMetricsDailySnapshots", ParentType, ContextType, RequireFields<SubscriptionusageMetricsDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  usageMetricsHourlySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['UsageMetricsHourlySnapshot']>, "usageMetricsHourlySnapshot", ParentType, ContextType, RequireFields<SubscriptionusageMetricsHourlySnapshotArgs, 'id' | 'subgraphError'>>;
  usageMetricsHourlySnapshots?: SubscriptionResolver<Array<ResolversTypes['UsageMetricsHourlySnapshot']>, "usageMetricsHourlySnapshots", ParentType, ContextType, RequireFields<SubscriptionusageMetricsHourlySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  financialsDailySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['FinancialsDailySnapshot']>, "financialsDailySnapshot", ParentType, ContextType, RequireFields<SubscriptionfinancialsDailySnapshotArgs, 'id' | 'subgraphError'>>;
  financialsDailySnapshots?: SubscriptionResolver<Array<ResolversTypes['FinancialsDailySnapshot']>, "financialsDailySnapshots", ParentType, ContextType, RequireFields<SubscriptionfinancialsDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  market?: SubscriptionResolver<Maybe<ResolversTypes['Market']>, "market", ParentType, ContextType, RequireFields<SubscriptionmarketArgs, 'id' | 'subgraphError'>>;
  markets?: SubscriptionResolver<Array<ResolversTypes['Market']>, "markets", ParentType, ContextType, RequireFields<SubscriptionmarketsArgs, 'skip' | 'first' | 'subgraphError'>>;
  marketDailySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['MarketDailySnapshot']>, "marketDailySnapshot", ParentType, ContextType, RequireFields<SubscriptionmarketDailySnapshotArgs, 'id' | 'subgraphError'>>;
  marketDailySnapshots?: SubscriptionResolver<Array<ResolversTypes['MarketDailySnapshot']>, "marketDailySnapshots", ParentType, ContextType, RequireFields<SubscriptionmarketDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  marketHourlySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['MarketHourlySnapshot']>, "marketHourlySnapshot", ParentType, ContextType, RequireFields<SubscriptionmarketHourlySnapshotArgs, 'id' | 'subgraphError'>>;
  marketHourlySnapshots?: SubscriptionResolver<Array<ResolversTypes['MarketHourlySnapshot']>, "marketHourlySnapshots", ParentType, ContextType, RequireFields<SubscriptionmarketHourlySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  deposit?: SubscriptionResolver<Maybe<ResolversTypes['Deposit']>, "deposit", ParentType, ContextType, RequireFields<SubscriptiondepositArgs, 'id' | 'subgraphError'>>;
  deposits?: SubscriptionResolver<Array<ResolversTypes['Deposit']>, "deposits", ParentType, ContextType, RequireFields<SubscriptiondepositsArgs, 'skip' | 'first' | 'subgraphError'>>;
  withdraw?: SubscriptionResolver<Maybe<ResolversTypes['Withdraw']>, "withdraw", ParentType, ContextType, RequireFields<SubscriptionwithdrawArgs, 'id' | 'subgraphError'>>;
  withdraws?: SubscriptionResolver<Array<ResolversTypes['Withdraw']>, "withdraws", ParentType, ContextType, RequireFields<SubscriptionwithdrawsArgs, 'skip' | 'first' | 'subgraphError'>>;
  borrow?: SubscriptionResolver<Maybe<ResolversTypes['Borrow']>, "borrow", ParentType, ContextType, RequireFields<SubscriptionborrowArgs, 'id' | 'subgraphError'>>;
  borrows?: SubscriptionResolver<Array<ResolversTypes['Borrow']>, "borrows", ParentType, ContextType, RequireFields<SubscriptionborrowsArgs, 'skip' | 'first' | 'subgraphError'>>;
  repay?: SubscriptionResolver<Maybe<ResolversTypes['Repay']>, "repay", ParentType, ContextType, RequireFields<SubscriptionrepayArgs, 'id' | 'subgraphError'>>;
  repays?: SubscriptionResolver<Array<ResolversTypes['Repay']>, "repays", ParentType, ContextType, RequireFields<SubscriptionrepaysArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidate?: SubscriptionResolver<Maybe<ResolversTypes['Liquidate']>, "liquidate", ParentType, ContextType, RequireFields<SubscriptionliquidateArgs, 'id' | 'subgraphError'>>;
  liquidates?: SubscriptionResolver<Array<ResolversTypes['Liquidate']>, "liquidates", ParentType, ContextType, RequireFields<SubscriptionliquidatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  account?: SubscriptionResolver<Maybe<ResolversTypes['Account']>, "account", ParentType, ContextType, RequireFields<SubscriptionaccountArgs, 'id' | 'subgraphError'>>;
  accounts?: SubscriptionResolver<Array<ResolversTypes['Account']>, "accounts", ParentType, ContextType, RequireFields<SubscriptionaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  activeAccount?: SubscriptionResolver<Maybe<ResolversTypes['ActiveAccount']>, "activeAccount", ParentType, ContextType, RequireFields<SubscriptionactiveAccountArgs, 'id' | 'subgraphError'>>;
  activeAccounts?: SubscriptionResolver<Array<ResolversTypes['ActiveAccount']>, "activeAccounts", ParentType, ContextType, RequireFields<SubscriptionactiveAccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  circularBuffer?: SubscriptionResolver<Maybe<ResolversTypes['_CircularBuffer']>, "circularBuffer", ParentType, ContextType, RequireFields<SubscriptioncircularBufferArgs, 'id' | 'subgraphError'>>;
  circularBuffers?: SubscriptionResolver<Array<ResolversTypes['_CircularBuffer']>, "circularBuffers", ParentType, ContextType, RequireFields<SubscriptioncircularBuffersArgs, 'skip' | 'first' | 'subgraphError'>>;
  protocol?: SubscriptionResolver<Maybe<ResolversTypes['Protocol']>, "protocol", ParentType, ContextType, RequireFields<SubscriptionprotocolArgs, 'id' | 'subgraphError'>>;
  protocols?: SubscriptionResolver<Array<ResolversTypes['Protocol']>, "protocols", ParentType, ContextType, RequireFields<SubscriptionprotocolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  event?: SubscriptionResolver<Maybe<ResolversTypes['Event']>, "event", ParentType, ContextType, RequireFields<SubscriptioneventArgs, 'id' | 'subgraphError'>>;
  events?: SubscriptionResolver<Array<ResolversTypes['Event']>, "events", ParentType, ContextType, RequireFields<SubscriptioneventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type TokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastPriceUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  lastPriceBlockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsageMetricsDailySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UsageMetricsDailySnapshot'] = ResolversParentTypes['UsageMetricsDailySnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['LendingProtocol'], ParentType, ContextType>;
  dailyActiveUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cumulativeUniqueUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dailyTransactionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dailyDepositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dailyWithdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dailyBorrowCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dailyRepayCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dailyLiquidateCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsageMetricsHourlySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UsageMetricsHourlySnapshot'] = ResolversParentTypes['UsageMetricsHourlySnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['LendingProtocol'], ParentType, ContextType>;
  hourlyActiveUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cumulativeUniqueUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hourlyTransactionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hourlyDepositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hourlyWithdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hourlyBorrowCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hourlyRepayCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hourlyLiquidateCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WithdrawResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Withdraw'] = ResolversParentTypes['Withdraw']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['LendingProtocol'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  market?: Resolver<ResolversTypes['Market'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _CircularBufferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_CircularBuffer'] = ResolversParentTypes['_CircularBuffer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  blocks?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  windowStartIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nextIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  bufferSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blocksPerDay?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  ActiveAccount?: ActiveAccountResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Borrow?: BorrowResolvers<ContextType>;
  Bytes?: GraphQLScalarType;
  Deposit?: DepositResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  FinancialsDailySnapshot?: FinancialsDailySnapshotResolvers<ContextType>;
  InterestRate?: InterestRateResolvers<ContextType>;
  LendingProtocol?: LendingProtocolResolvers<ContextType>;
  Liquidate?: LiquidateResolvers<ContextType>;
  Market?: MarketResolvers<ContextType>;
  MarketDailySnapshot?: MarketDailySnapshotResolvers<ContextType>;
  MarketHourlySnapshot?: MarketHourlySnapshotResolvers<ContextType>;
  Protocol?: ProtocolResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Repay?: RepayResolvers<ContextType>;
  RewardToken?: RewardTokenResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  UsageMetricsDailySnapshot?: UsageMetricsDailySnapshotResolvers<ContextType>;
  UsageMetricsHourlySnapshot?: UsageMetricsHourlySnapshotResolvers<ContextType>;
  Withdraw?: WithdrawResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _CircularBuffer?: _CircularBufferResolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace Compoundv2Types {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Account = {
  /**  Address of the account  */
  id: Scalars['ID'];
};

export type Account_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Account_orderBy =
  | 'id';

export type ActiveAccount = {
  /**  { Address of the account }-{ Days since Unix epoch }-{ [Optional] HH: hour of the day }  */
  id: Scalars['ID'];
};

export type ActiveAccount_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ActiveAccount_orderBy =
  | 'id';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Borrow = Event & {
  /**  { Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: LendingProtocol;
  /**  Address that received tokens  */
  to: Scalars['String'];
  /**  Market that tokens are borrowed from  */
  from: Scalars['String'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  The market this transaction interacted with  */
  market: Market;
  /**  Token borrowed  */
  asset: Token;
  /**  Amount of token borrowed in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of token borrowed in USD  */
  amountUSD?: Maybe<Scalars['BigDecimal']>;
};

export type Borrow_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Borrow_orderBy =
  | 'id'
  | 'hash'
  | 'logIndex'
  | 'protocol'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'timestamp'
  | 'market'
  | 'asset'
  | 'amount'
  | 'amountUSD';

export type Deposit = Event & {
  /**  { Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: LendingProtocol;
  /**  Market that tokens are deposited into  */
  to: Scalars['String'];
  /**  Address that deposited tokens  */
  from: Scalars['String'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  The market this transaction interacted with  */
  market: Market;
  /**  Token deposited  */
  asset: Token;
  /**  Amount of token deposited in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of token deposited in USD  */
  amountUSD: Scalars['BigDecimal'];
};

export type Deposit_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Deposit_orderBy =
  | 'id'
  | 'hash'
  | 'logIndex'
  | 'protocol'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'timestamp'
  | 'market'
  | 'asset'
  | 'amount'
  | 'amountUSD';

/**
 * An event is any user action that occurs in a protocol. Generally, they are Ethereum events
 * emitted by a function in the smart contracts, stored in transaction receipts as event logs.
 * However, some user actions of interest are function calls that don't emit events. For example,
 * the deposit and withdraw functions in Yearn do not emit any events. In our subgraphs, we still
 * store them as events, although they are not technically Ethereum events emitted by smart
 * contracts.
 *
 */
export type Event = {
  /**  { Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: LendingProtocol;
  /**  Address that received the tokens  */
  to: Scalars['String'];
  /**  Address that sent the tokens  */
  from: Scalars['String'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
};

export type Event_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Event_orderBy =
  | 'id'
  | 'hash'
  | 'logIndex'
  | 'protocol'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'timestamp';

export type FinancialsDailySnapshot = {
  /**  ID is # of days since Unix epoch time  */
  id: Scalars['ID'];
  /**  Protocol this snapshot is associated with  */
  protocol: LendingProtocol;
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['BigDecimal'];
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']>;
  /**  Total supply of minted tokens in native amounts, with same ordering as mintedTokens. Only applies to CDP  */
  mintedTokenSupplies?: Maybe<Array<Scalars['BigInt']>>;
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  dailySupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  dailyProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  dailyTotalRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
  /**  Current balance of all deposited assets, in USD. Note this metric should be the same as TVL.  */
  totalDepositBalanceUSD: Scalars['BigDecimal'];
  /**  Total assets deposited on a given day, in USD  */
  dailyDepositUSD: Scalars['BigDecimal'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['BigDecimal'];
  /**  Current balance of all borrowed/minted assets, in USD.  */
  totalBorrowBalanceUSD: Scalars['BigDecimal'];
  /**  Total assets borrowed/minted on a given day, in USD.  */
  dailyBorrowUSD: Scalars['BigDecimal'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination).  */
  cumulativeBorrowUSD: Scalars['BigDecimal'];
  /**  Total assets liquidated on a given day, in USD.  */
  dailyLiquidateUSD: Scalars['BigDecimal'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['BigDecimal'];
};

export type FinancialsDailySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolControlledValueUSD?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  mintedTokenSupplies?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_not?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  dailySupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyBorrowUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyBorrowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyLiquidateUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyLiquidateUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type FinancialsDailySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'blockNumber'
  | 'timestamp'
  | 'totalValueLockedUSD'
  | 'protocolControlledValueUSD'
  | 'mintedTokenSupplies'
  | 'dailySupplySideRevenueUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'dailyProtocolSideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'dailyTotalRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'totalDepositBalanceUSD'
  | 'dailyDepositUSD'
  | 'cumulativeDepositUSD'
  | 'totalBorrowBalanceUSD'
  | 'dailyBorrowUSD'
  | 'cumulativeBorrowUSD'
  | 'dailyLiquidateUSD'
  | 'cumulativeLiquidateUSD';

export type InterestRate = {
  /**  { Interest rate side }-{ Interest rate type }-{ Market ID }  */
  id: Scalars['ID'];
  /**  Interest rate in percentage APY. E.g. 5.21% should be stored as 5.21  */
  rate: Scalars['BigDecimal'];
  /**  Duration of the loan in days. Only applies to fixed term lending (e.g. Notional)  */
  duration?: Maybe<Scalars['Int']>;
  /**  Maturity of the loan in block height. Only applies to fixed term lending (e.g. Notional)  */
  maturityBlock?: Maybe<Scalars['BigInt']>;
  /**  The party the interest is paid to / received from  */
  side: InterestRateSide;
  /**  The type of interest rate (e.g. stable, fixed, variable, etc)  */
  type: InterestRateType;
};

export type InterestRateSide =
  /**  Interest rate accrued by lenders  */
  | 'LENDER'
  /**  Interest rate paid by borrowers  */
  | 'BORROWER';

export type InterestRateType =
  /**  Stable interest rate (e.g. Aave)  */
  | 'STABLE'
  /**  Variable interest rate (e.g. Compound)  */
  | 'VARIABLE'
  /**  Fixed term interest rate (e.g. Notional)  */
  | 'FIXED_TERM';

export type InterestRate_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  rate?: InputMaybe<Scalars['BigDecimal']>;
  rate_not?: InputMaybe<Scalars['BigDecimal']>;
  rate_gt?: InputMaybe<Scalars['BigDecimal']>;
  rate_lt?: InputMaybe<Scalars['BigDecimal']>;
  rate_gte?: InputMaybe<Scalars['BigDecimal']>;
  rate_lte?: InputMaybe<Scalars['BigDecimal']>;
  rate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  duration?: InputMaybe<Scalars['Int']>;
  duration_not?: InputMaybe<Scalars['Int']>;
  duration_gt?: InputMaybe<Scalars['Int']>;
  duration_lt?: InputMaybe<Scalars['Int']>;
  duration_gte?: InputMaybe<Scalars['Int']>;
  duration_lte?: InputMaybe<Scalars['Int']>;
  duration_in?: InputMaybe<Array<Scalars['Int']>>;
  duration_not_in?: InputMaybe<Array<Scalars['Int']>>;
  maturityBlock?: InputMaybe<Scalars['BigInt']>;
  maturityBlock_not?: InputMaybe<Scalars['BigInt']>;
  maturityBlock_gt?: InputMaybe<Scalars['BigInt']>;
  maturityBlock_lt?: InputMaybe<Scalars['BigInt']>;
  maturityBlock_gte?: InputMaybe<Scalars['BigInt']>;
  maturityBlock_lte?: InputMaybe<Scalars['BigInt']>;
  maturityBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maturityBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  side?: InputMaybe<InterestRateSide>;
  side_not?: InputMaybe<InterestRateSide>;
  side_in?: InputMaybe<Array<InterestRateSide>>;
  side_not_in?: InputMaybe<Array<InterestRateSide>>;
  type?: InputMaybe<InterestRateType>;
  type_not?: InputMaybe<InterestRateType>;
  type_in?: InputMaybe<Array<InterestRateType>>;
  type_not_in?: InputMaybe<Array<InterestRateType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type InterestRate_orderBy =
  | 'id'
  | 'rate'
  | 'duration'
  | 'maturityBlock'
  | 'side'
  | 'type';

export type LendingProtocol = Protocol & {
  /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
  id: Scalars['ID'];
  /**  Name of the protocol, including version. e.g. Aave v2  */
  name: Scalars['String'];
  /**  Slug of protocol, including version. e.g. aave-v2  */
  slug: Scalars['String'];
  /**  Version of the subgraph schema, in SemVer format (e.g. 1.0.0)  */
  schemaVersion: Scalars['String'];
  /**  Version of the subgraph implementation, in SemVer format (e.g. 1.0.0)  */
  subgraphVersion: Scalars['String'];
  /**  Version of the methodology used to compute metrics, loosely based on SemVer format (e.g. 1.0.0)  */
  methodologyVersion: Scalars['String'];
  /**  The blockchain network this subgraph is indexing on  */
  network: Network;
  /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
  type: ProtocolType;
  /**  The specific lending protocol type  */
  lendingType?: Maybe<LendingType>;
  /**  Risk type of the lending protocol  */
  riskType?: Maybe<RiskType>;
  /**  Tokens that can be minted. Only applies to CDP  */
  mintedTokens?: Maybe<Array<Token>>;
  /**  # of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int'];
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['BigDecimal'];
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']>;
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
  /**  Current balance of all deposited assets, in USD. Note this metric should be the same as TVL.  */
  totalDepositBalanceUSD: Scalars['BigDecimal'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['BigDecimal'];
  /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD.  */
  totalBorrowBalanceUSD: Scalars['BigDecimal'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination).  */
  cumulativeBorrowUSD: Scalars['BigDecimal'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['BigDecimal'];
  /**  Total supply of minted tokens in native amounts, with same ordering as mintedTokens. Only applies to CDP  */
  mintedTokenSupplies?: Maybe<Array<Scalars['BigInt']>>;
  /**  Daily usage metrics for this protocol  */
  dailyUsageMetrics: Array<UsageMetricsDailySnapshot>;
  /**  Hourly usage metrics for this protocol  */
  hourlyUsageMetrics: Array<UsageMetricsHourlySnapshot>;
  /**  Daily financial metrics for this protocol  */
  financialMetrics: Array<FinancialsDailySnapshot>;
  /**  All markets that belong to this protocol  */
  markets: Array<Market>;
  /**  Store the ids of each market for easy iteration  */
  _marketIds: Array<Scalars['String']>;
  /**  Price Oracle used to calculate asset price in USD  */
  _priceOracle?: Maybe<Scalars['Bytes']>;
  /**  Liquidation penalty (the same for every market)  */
  _liquidationPenalty: Scalars['BigDecimal'];
};


export type LendingProtocolmintedTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
};


export type LendingProtocoldailyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsDailySnapshot_filter>;
};


export type LendingProtocolhourlyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
};


export type LendingProtocolfinancialMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FinancialsDailySnapshot_filter>;
};


export type LendingProtocolmarketsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Market_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Market_filter>;
};

export type LendingProtocol_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_gt?: InputMaybe<Scalars['String']>;
  slug_lt?: InputMaybe<Scalars['String']>;
  slug_gte?: InputMaybe<Scalars['String']>;
  slug_lte?: InputMaybe<Scalars['String']>;
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_contains_nocase?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_contains_nocase?: InputMaybe<Scalars['String']>;
  slug_starts_with?: InputMaybe<Scalars['String']>;
  slug_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  slug_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slug_ends_with?: InputMaybe<Scalars['String']>;
  slug_ends_with_nocase?: InputMaybe<Scalars['String']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  slug_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion?: InputMaybe<Scalars['String']>;
  schemaVersion_not?: InputMaybe<Scalars['String']>;
  schemaVersion_gt?: InputMaybe<Scalars['String']>;
  schemaVersion_lt?: InputMaybe<Scalars['String']>;
  schemaVersion_gte?: InputMaybe<Scalars['String']>;
  schemaVersion_lte?: InputMaybe<Scalars['String']>;
  schemaVersion_in?: InputMaybe<Array<Scalars['String']>>;
  schemaVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  schemaVersion_contains?: InputMaybe<Scalars['String']>;
  schemaVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_contains?: InputMaybe<Scalars['String']>;
  schemaVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_starts_with?: InputMaybe<Scalars['String']>;
  schemaVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  schemaVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_ends_with?: InputMaybe<Scalars['String']>;
  schemaVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  schemaVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion?: InputMaybe<Scalars['String']>;
  subgraphVersion_not?: InputMaybe<Scalars['String']>;
  subgraphVersion_gt?: InputMaybe<Scalars['String']>;
  subgraphVersion_lt?: InputMaybe<Scalars['String']>;
  subgraphVersion_gte?: InputMaybe<Scalars['String']>;
  subgraphVersion_lte?: InputMaybe<Scalars['String']>;
  subgraphVersion_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphVersion_contains?: InputMaybe<Scalars['String']>;
  subgraphVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_contains?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_starts_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_ends_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion?: InputMaybe<Scalars['String']>;
  methodologyVersion_not?: InputMaybe<Scalars['String']>;
  methodologyVersion_gt?: InputMaybe<Scalars['String']>;
  methodologyVersion_lt?: InputMaybe<Scalars['String']>;
  methodologyVersion_gte?: InputMaybe<Scalars['String']>;
  methodologyVersion_lte?: InputMaybe<Scalars['String']>;
  methodologyVersion_in?: InputMaybe<Array<Scalars['String']>>;
  methodologyVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  methodologyVersion_contains?: InputMaybe<Scalars['String']>;
  methodologyVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_contains?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_starts_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_ends_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Network>;
  network_not?: InputMaybe<Network>;
  network_in?: InputMaybe<Array<Network>>;
  network_not_in?: InputMaybe<Array<Network>>;
  type?: InputMaybe<ProtocolType>;
  type_not?: InputMaybe<ProtocolType>;
  type_in?: InputMaybe<Array<ProtocolType>>;
  type_not_in?: InputMaybe<Array<ProtocolType>>;
  lendingType?: InputMaybe<LendingType>;
  lendingType_not?: InputMaybe<LendingType>;
  lendingType_in?: InputMaybe<Array<LendingType>>;
  lendingType_not_in?: InputMaybe<Array<LendingType>>;
  riskType?: InputMaybe<RiskType>;
  riskType_not?: InputMaybe<RiskType>;
  riskType_in?: InputMaybe<Array<RiskType>>;
  riskType_not_in?: InputMaybe<Array<RiskType>>;
  mintedTokens?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_not?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolControlledValueUSD?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  mintedTokenSupplies?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_not?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  _marketIds?: InputMaybe<Array<Scalars['String']>>;
  _marketIds_not?: InputMaybe<Array<Scalars['String']>>;
  _marketIds_contains?: InputMaybe<Array<Scalars['String']>>;
  _marketIds_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  _marketIds_not_contains?: InputMaybe<Array<Scalars['String']>>;
  _marketIds_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  _priceOracle?: InputMaybe<Scalars['Bytes']>;
  _priceOracle_not?: InputMaybe<Scalars['Bytes']>;
  _priceOracle_in?: InputMaybe<Array<Scalars['Bytes']>>;
  _priceOracle_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  _priceOracle_contains?: InputMaybe<Scalars['Bytes']>;
  _priceOracle_not_contains?: InputMaybe<Scalars['Bytes']>;
  _liquidationPenalty?: InputMaybe<Scalars['BigDecimal']>;
  _liquidationPenalty_not?: InputMaybe<Scalars['BigDecimal']>;
  _liquidationPenalty_gt?: InputMaybe<Scalars['BigDecimal']>;
  _liquidationPenalty_lt?: InputMaybe<Scalars['BigDecimal']>;
  _liquidationPenalty_gte?: InputMaybe<Scalars['BigDecimal']>;
  _liquidationPenalty_lte?: InputMaybe<Scalars['BigDecimal']>;
  _liquidationPenalty_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  _liquidationPenalty_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type LendingProtocol_orderBy =
  | 'id'
  | 'name'
  | 'slug'
  | 'schemaVersion'
  | 'subgraphVersion'
  | 'methodologyVersion'
  | 'network'
  | 'type'
  | 'lendingType'
  | 'riskType'
  | 'mintedTokens'
  | 'cumulativeUniqueUsers'
  | 'totalValueLockedUSD'
  | 'protocolControlledValueUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'totalDepositBalanceUSD'
  | 'cumulativeDepositUSD'
  | 'totalBorrowBalanceUSD'
  | 'cumulativeBorrowUSD'
  | 'cumulativeLiquidateUSD'
  | 'mintedTokenSupplies'
  | 'dailyUsageMetrics'
  | 'hourlyUsageMetrics'
  | 'financialMetrics'
  | 'markets'
  | '_marketIds'
  | '_priceOracle'
  | '_liquidationPenalty';

export type LendingType =
  /**  Collateralized Debt Position (CDP) protocols have singular isolated positions created by users. We aggregate them to give a single view of a market  */
  | 'CDP'
  /**  Pooled protocols pool all users assets into a single market  */
  | 'POOLED';

export type Liquidate = Event & {
  /**  { Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: LendingProtocol;
  /**  Market that tokens are repaid to  */
  to: Scalars['String'];
  /**  Address that carried out the liquidation  */
  from: Scalars['String'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  The market of which the debt is repaid to  */
  market: Market;
  /**  Collateral liquidated (e.g. cToken)  */
  asset: Token;
  /**  Amount of collateral liquidated in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of collateral liquidated in USD  */
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  /**  Amount of profit from liquidation in USD  */
  profitUSD?: Maybe<Scalars['BigDecimal']>;
};

export type Liquidate_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  profitUSD?: InputMaybe<Scalars['BigDecimal']>;
  profitUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  profitUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  profitUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  profitUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  profitUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  profitUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  profitUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Liquidate_orderBy =
  | 'id'
  | 'hash'
  | 'logIndex'
  | 'protocol'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'timestamp'
  | 'market'
  | 'asset'
  | 'amount'
  | 'amountUSD'
  | 'profitUSD';

export type Market = {
  /**  Smart contract address of the market  */
  id: Scalars['ID'];
  /**  The protocol this pool belongs to  */
  protocol: LendingProtocol;
  /**  Name of market  */
  name?: Maybe<Scalars['String']>;
  /**  Is this market active or is it frozen  */
  isActive: Scalars['Boolean'];
  /**  Can you use the output token as collateral  */
  canUseAsCollateral: Scalars['Boolean'];
  /**  Can you borrow from this market  */
  canBorrowFrom: Scalars['Boolean'];
  /**  Maximum loan-to-value ratio as a percentage value (e.g. 75% for DAI in Aave)  */
  maximumLTV: Scalars['BigDecimal'];
  /**  Liquidation threshold as a percentage value (e.g. 80% for DAI in Aave). When it is reached, the position is defined as undercollateralised and could be liquidated  */
  liquidationThreshold: Scalars['BigDecimal'];
  /**  Liquidation penalty (or the liquidation bonus for liquidators) as a percentage value. It is the penalty/bonus price on the collateral when liquidators purchase it as part of the liquidation of a loan that has passed the liquidation threshold  */
  liquidationPenalty: Scalars['BigDecimal'];
  /**  Token that need to be deposited to take a position in protocol  */
  inputToken: Token;
  /**  Token that is minted to track ownership of position in protocol (e.g. aToken, cToken). Leave as null if doesn't exist  */
  outputToken?: Maybe<Token>;
  /**  Aditional tokens that are given as reward for position in a protocol, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon  */
  rewardTokens?: Maybe<Array<RewardToken>>;
  /**  All interest rates / fees allowed in the market. Interest rate should be in APY percentage  */
  rates: Array<InterestRate>;
  /**  Current TVL (Total Value Locked) of this market  */
  totalValueLockedUSD: Scalars['BigDecimal'];
  /**  Current balance of all deposited assets (not historical cumulative), in USD  */
  totalDepositBalanceUSD: Scalars['BigDecimal'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['BigDecimal'];
  /**  Current amount of borrows in native underlying unit  */
  _currentBorrowBalance: Scalars['BigInt'];
  /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD  */
  totalBorrowBalanceUSD: Scalars['BigDecimal'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination)  */
  cumulativeBorrowUSD: Scalars['BigDecimal'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['BigDecimal'];
  /**  Amount of input tokens in the market  */
  inputTokenBalance: Scalars['BigInt'];
  /**  Price per share of input token in USD  */
  inputTokenPriceUSD: Scalars['BigDecimal'];
  /**  Total supply of output token  */
  outputTokenSupply: Scalars['BigInt'];
  /**  Price per share of output token in USD  */
  outputTokenPriceUSD: Scalars['BigDecimal'];
  /**  Amount of input token per full share of output token. Only applies when the output token exists  */
  exchangeRate: Scalars['BigDecimal'];
  /**  Market reserve factor  */
  _reserveFactor: Scalars['BigDecimal'];
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['BigDecimal']>>;
  /**  Creation timestamp  */
  createdTimestamp: Scalars['BigInt'];
  /**  Creation block number  */
  createdBlockNumber: Scalars['BigInt'];
  /**  Most recent block height seen for rate updates  */
  _lastUpdateBlock: Scalars['BigInt'];
  /**  Market daily snapshots  */
  dailySnapshots: Array<MarketDailySnapshot>;
  /**  Market hourly snapshots  */
  hourlySnapshots: Array<MarketHourlySnapshot>;
  /**  All deposits made to this market  */
  deposits: Array<Deposit>;
  /**  All withdrawals made from this market  */
  withdraws: Array<Withdraw>;
  /**  All borrows from this market  */
  borrows: Array<Borrow>;
  /**  All repayments to this market  */
  repays: Array<Repay>;
  /**  All liquidations made to this market  */
  liquidates: Array<Liquidate>;
};


export type MarketrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardToken_filter>;
};


export type MarketratesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InterestRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterestRate_filter>;
};


export type MarketdailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketDailySnapshot_filter>;
};


export type MarkethourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketHourlySnapshot_filter>;
};


export type MarketdepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
};


export type MarketwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdraw_filter>;
};


export type MarketborrowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Borrow_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Borrow_filter>;
};


export type MarketrepaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Repay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Repay_filter>;
};


export type MarketliquidatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Liquidate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidate_filter>;
};

export type MarketDailySnapshot = {
  /**  { Smart contract address of the market }-{ # of days since Unix epoch time }  */
  id: Scalars['ID'];
  /**  The protocol this snapshot belongs to  */
  protocol: LendingProtocol;
  /**  The pool this snapshot belongs to  */
  market: Market;
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
  /**  All interest rates / fees allowed in the market. Interest rate should be in APY percentage  */
  rates: Array<InterestRate>;
  /**  Current TVL (Total Value Locked) of this market  */
  totalValueLockedUSD: Scalars['BigDecimal'];
  /**  Current balance of all deposited assets (not historical cumulative), in USD. Same as pool TVL.  */
  totalDepositBalanceUSD: Scalars['BigDecimal'];
  /**  Sum of all deposits made on a given day, in USD  */
  dailyDepositUSD: Scalars['BigDecimal'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['BigDecimal'];
  /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD.  */
  totalBorrowBalanceUSD: Scalars['BigDecimal'];
  /**  Sum of all borrows/mints made on a given day, in USD  */
  dailyBorrowUSD: Scalars['BigDecimal'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination)  */
  cumulativeBorrowUSD: Scalars['BigDecimal'];
  /**  Total assets liquidated on a given day, in USD.  */
  dailyLiquidateUSD: Scalars['BigDecimal'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['BigDecimal'];
  /**  Amount of input token in the market.  */
  inputTokenBalance: Scalars['BigInt'];
  /**  Price per share of input token in USD  */
  inputTokenPriceUSD: Scalars['BigDecimal'];
  /**  Total supply of output token  */
  outputTokenSupply: Scalars['BigInt'];
  /**  Price per share of output token in USD  */
  outputTokenPriceUSD: Scalars['BigDecimal'];
  /**  Amount of input token per full share of output token. Only applies when the output token exists  */
  exchangeRate?: Maybe<Scalars['BigDecimal']>;
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['BigDecimal']>>;
};


export type MarketDailySnapshotratesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InterestRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterestRate_filter>;
};

export type MarketDailySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rates?: InputMaybe<Array<Scalars['String']>>;
  rates_not?: InputMaybe<Array<Scalars['String']>>;
  rates_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyBorrowUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyBorrowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyLiquidateUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyLiquidateUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenBalance?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  outputTokenSupply?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exchangeRate?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_not?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exchangeRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type MarketDailySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'market'
  | 'blockNumber'
  | 'timestamp'
  | 'rates'
  | 'totalValueLockedUSD'
  | 'totalDepositBalanceUSD'
  | 'dailyDepositUSD'
  | 'cumulativeDepositUSD'
  | 'totalBorrowBalanceUSD'
  | 'dailyBorrowUSD'
  | 'cumulativeBorrowUSD'
  | 'dailyLiquidateUSD'
  | 'cumulativeLiquidateUSD'
  | 'inputTokenBalance'
  | 'inputTokenPriceUSD'
  | 'outputTokenSupply'
  | 'outputTokenPriceUSD'
  | 'exchangeRate'
  | 'rewardTokenEmissionsAmount'
  | 'rewardTokenEmissionsUSD';

export type MarketHourlySnapshot = {
  /**  { Smart contract address of the market }-{ # of hours since Unix epoch time }  */
  id: Scalars['ID'];
  /**  The protocol this snapshot belongs to  */
  protocol: LendingProtocol;
  /**  The pool this snapshot belongs to  */
  market: Market;
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
  /**  All interest rates / fees allowed in the market. Interest rate should be in APY percentage  */
  rates: Array<InterestRate>;
  /**  Current TVL (Total Value Locked) of this market  */
  totalValueLockedUSD: Scalars['BigDecimal'];
  /**  Current balance of all deposited assets (not historical cumulative), in USD. Same as pool TVL.  */
  totalDepositBalanceUSD: Scalars['BigDecimal'];
  /**  Sum of all deposits made in a given hour, in USD  */
  hourlyDepositUSD: Scalars['BigDecimal'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['BigDecimal'];
  /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD.  */
  totalBorrowBalanceUSD: Scalars['BigDecimal'];
  /**  Sum of all borrows/mints made in a given hour, in USD  */
  hourlyBorrowUSD: Scalars['BigDecimal'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination)  */
  cumulativeBorrowUSD: Scalars['BigDecimal'];
  /**  Total assets liquidated in a given hour, in USD.  */
  hourlyLiquidateUSD: Scalars['BigDecimal'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['BigDecimal'];
  /**  Amount of input token in the market.  */
  inputTokenBalance: Scalars['BigInt'];
  /**  Price per share of input token in USD  */
  inputTokenPriceUSD: Scalars['BigDecimal'];
  /**  Total supply of output token  */
  outputTokenSupply: Scalars['BigInt'];
  /**  Price per share of output token in USD  */
  outputTokenPriceUSD: Scalars['BigDecimal'];
  /**  Amount of input token per full share of output token. Only applies when the output token exists  */
  exchangeRate?: Maybe<Scalars['BigDecimal']>;
  /**  Per-block reward token emission as of the current block normalized to a day (not hour), in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
  /**  Per-block reward token emission as of the current block normalized to a day (not hour), in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['BigDecimal']>>;
};


export type MarketHourlySnapshotratesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InterestRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterestRate_filter>;
};

export type MarketHourlySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rates?: InputMaybe<Array<Scalars['String']>>;
  rates_not?: InputMaybe<Array<Scalars['String']>>;
  rates_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
  hourlyDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyBorrowUSD?: InputMaybe<Scalars['BigDecimal']>;
  hourlyBorrowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyBorrowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyBorrowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyBorrowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyBorrowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyBorrowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyBorrowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyLiquidateUSD?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidateUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidateUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidateUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidateUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidateUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidateUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyLiquidateUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenBalance?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  outputTokenSupply?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exchangeRate?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_not?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exchangeRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type MarketHourlySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'market'
  | 'blockNumber'
  | 'timestamp'
  | 'rates'
  | 'totalValueLockedUSD'
  | 'totalDepositBalanceUSD'
  | 'hourlyDepositUSD'
  | 'cumulativeDepositUSD'
  | 'totalBorrowBalanceUSD'
  | 'hourlyBorrowUSD'
  | 'cumulativeBorrowUSD'
  | 'hourlyLiquidateUSD'
  | 'cumulativeLiquidateUSD'
  | 'inputTokenBalance'
  | 'inputTokenPriceUSD'
  | 'outputTokenSupply'
  | 'outputTokenPriceUSD'
  | 'exchangeRate'
  | 'rewardTokenEmissionsAmount'
  | 'rewardTokenEmissionsUSD';

export type Market_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canUseAsCollateral?: InputMaybe<Scalars['Boolean']>;
  canUseAsCollateral_not?: InputMaybe<Scalars['Boolean']>;
  canUseAsCollateral_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canUseAsCollateral_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canBorrowFrom?: InputMaybe<Scalars['Boolean']>;
  canBorrowFrom_not?: InputMaybe<Scalars['Boolean']>;
  canBorrowFrom_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canBorrowFrom_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  maximumLTV?: InputMaybe<Scalars['BigDecimal']>;
  maximumLTV_not?: InputMaybe<Scalars['BigDecimal']>;
  maximumLTV_gt?: InputMaybe<Scalars['BigDecimal']>;
  maximumLTV_lt?: InputMaybe<Scalars['BigDecimal']>;
  maximumLTV_gte?: InputMaybe<Scalars['BigDecimal']>;
  maximumLTV_lte?: InputMaybe<Scalars['BigDecimal']>;
  maximumLTV_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  maximumLTV_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidationThreshold?: InputMaybe<Scalars['BigDecimal']>;
  liquidationThreshold_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidationThreshold_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidationThreshold_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidationThreshold_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidationThreshold_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidationThreshold_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidationThreshold_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidationPenalty?: InputMaybe<Scalars['BigDecimal']>;
  liquidationPenalty_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidationPenalty_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidationPenalty_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidationPenalty_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidationPenalty_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidationPenalty_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidationPenalty_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputToken?: InputMaybe<Scalars['String']>;
  inputToken_not?: InputMaybe<Scalars['String']>;
  inputToken_gt?: InputMaybe<Scalars['String']>;
  inputToken_lt?: InputMaybe<Scalars['String']>;
  inputToken_gte?: InputMaybe<Scalars['String']>;
  inputToken_lte?: InputMaybe<Scalars['String']>;
  inputToken_in?: InputMaybe<Array<Scalars['String']>>;
  inputToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  inputToken_contains?: InputMaybe<Scalars['String']>;
  inputToken_contains_nocase?: InputMaybe<Scalars['String']>;
  inputToken_not_contains?: InputMaybe<Scalars['String']>;
  inputToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  inputToken_starts_with?: InputMaybe<Scalars['String']>;
  inputToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  inputToken_not_starts_with?: InputMaybe<Scalars['String']>;
  inputToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  inputToken_ends_with?: InputMaybe<Scalars['String']>;
  inputToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  inputToken_not_ends_with?: InputMaybe<Scalars['String']>;
  inputToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  outputToken?: InputMaybe<Scalars['String']>;
  outputToken_not?: InputMaybe<Scalars['String']>;
  outputToken_gt?: InputMaybe<Scalars['String']>;
  outputToken_lt?: InputMaybe<Scalars['String']>;
  outputToken_gte?: InputMaybe<Scalars['String']>;
  outputToken_lte?: InputMaybe<Scalars['String']>;
  outputToken_in?: InputMaybe<Array<Scalars['String']>>;
  outputToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  outputToken_contains?: InputMaybe<Scalars['String']>;
  outputToken_contains_nocase?: InputMaybe<Scalars['String']>;
  outputToken_not_contains?: InputMaybe<Scalars['String']>;
  outputToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  outputToken_starts_with?: InputMaybe<Scalars['String']>;
  outputToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  outputToken_not_starts_with?: InputMaybe<Scalars['String']>;
  outputToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  outputToken_ends_with?: InputMaybe<Scalars['String']>;
  outputToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  outputToken_not_ends_with?: InputMaybe<Scalars['String']>;
  outputToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rewardTokens?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates?: InputMaybe<Array<Scalars['String']>>;
  rates_not?: InputMaybe<Array<Scalars['String']>>;
  rates_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  _currentBorrowBalance?: InputMaybe<Scalars['BigInt']>;
  _currentBorrowBalance_not?: InputMaybe<Scalars['BigInt']>;
  _currentBorrowBalance_gt?: InputMaybe<Scalars['BigInt']>;
  _currentBorrowBalance_lt?: InputMaybe<Scalars['BigInt']>;
  _currentBorrowBalance_gte?: InputMaybe<Scalars['BigInt']>;
  _currentBorrowBalance_lte?: InputMaybe<Scalars['BigInt']>;
  _currentBorrowBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  _currentBorrowBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenBalance?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  outputTokenSupply?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exchangeRate?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_not?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exchangeRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  _reserveFactor?: InputMaybe<Scalars['BigDecimal']>;
  _reserveFactor_not?: InputMaybe<Scalars['BigDecimal']>;
  _reserveFactor_gt?: InputMaybe<Scalars['BigDecimal']>;
  _reserveFactor_lt?: InputMaybe<Scalars['BigDecimal']>;
  _reserveFactor_gte?: InputMaybe<Scalars['BigDecimal']>;
  _reserveFactor_lte?: InputMaybe<Scalars['BigDecimal']>;
  _reserveFactor_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  _reserveFactor_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  createdTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  _lastUpdateBlock?: InputMaybe<Scalars['BigInt']>;
  _lastUpdateBlock_not?: InputMaybe<Scalars['BigInt']>;
  _lastUpdateBlock_gt?: InputMaybe<Scalars['BigInt']>;
  _lastUpdateBlock_lt?: InputMaybe<Scalars['BigInt']>;
  _lastUpdateBlock_gte?: InputMaybe<Scalars['BigInt']>;
  _lastUpdateBlock_lte?: InputMaybe<Scalars['BigInt']>;
  _lastUpdateBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  _lastUpdateBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Market_orderBy =
  | 'id'
  | 'protocol'
  | 'name'
  | 'isActive'
  | 'canUseAsCollateral'
  | 'canBorrowFrom'
  | 'maximumLTV'
  | 'liquidationThreshold'
  | 'liquidationPenalty'
  | 'inputToken'
  | 'outputToken'
  | 'rewardTokens'
  | 'rates'
  | 'totalValueLockedUSD'
  | 'totalDepositBalanceUSD'
  | 'cumulativeDepositUSD'
  | '_currentBorrowBalance'
  | 'totalBorrowBalanceUSD'
  | 'cumulativeBorrowUSD'
  | 'cumulativeLiquidateUSD'
  | 'inputTokenBalance'
  | 'inputTokenPriceUSD'
  | 'outputTokenSupply'
  | 'outputTokenPriceUSD'
  | 'exchangeRate'
  | '_reserveFactor'
  | 'rewardTokenEmissionsAmount'
  | 'rewardTokenEmissionsUSD'
  | 'createdTimestamp'
  | 'createdBlockNumber'
  | '_lastUpdateBlock'
  | 'dailySnapshots'
  | 'hourlySnapshots'
  | 'deposits'
  | 'withdraws'
  | 'borrows'
  | 'repays'
  | 'liquidates';

export type Network =
  | 'ARBITRUM_ONE'
  | 'AURORA'
  | 'AVALANCHE'
  | 'BSC'
  | 'CELO'
  | 'MAINNET'
  | 'FANTOM'
  | 'FUSE'
  | 'MOONBEAM'
  | 'MOONRIVER'
  | 'NEAR_MAINNET'
  | 'OPTIMISM'
  | 'MATIC'
  | 'XDAI';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Protocol = {
  /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
  id: Scalars['ID'];
  /**  Name of the protocol, including version. e.g. Uniswap v3  */
  name: Scalars['String'];
  /**  Slug of protocol, including version. e.g. uniswap-v3  */
  slug: Scalars['String'];
  /**  Version of the subgraph schema, in SemVer format (e.g. 1.0.0)  */
  schemaVersion: Scalars['String'];
  /**  Version of the subgraph implementation, in SemVer format (e.g. 1.0.0)  */
  subgraphVersion: Scalars['String'];
  /**  Version of the methodology used to compute metrics, loosely based on SemVer format (e.g. 1.0.0)  */
  methodologyVersion: Scalars['String'];
  /**  The blockchain network this subgraph is indexing on  */
  network: Network;
  /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
  type: ProtocolType;
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['BigDecimal'];
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']>;
  /**  # of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int'];
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
  /**  Daily usage metrics for this protocol  */
  dailyUsageMetrics: Array<UsageMetricsDailySnapshot>;
  /**  Hourly usage metrics for this protocol  */
  hourlyUsageMetrics: Array<UsageMetricsHourlySnapshot>;
  /**  Daily financial metrics for this protocol  */
  financialMetrics: Array<FinancialsDailySnapshot>;
};


export type ProtocoldailyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsDailySnapshot_filter>;
};


export type ProtocolhourlyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
};


export type ProtocolfinancialMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FinancialsDailySnapshot_filter>;
};

export type ProtocolType =
  | 'EXCHANGE'
  | 'LENDING'
  | 'YIELD'
  | 'BRIDGE'
  | 'GENERIC';

export type Protocol_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_gt?: InputMaybe<Scalars['String']>;
  slug_lt?: InputMaybe<Scalars['String']>;
  slug_gte?: InputMaybe<Scalars['String']>;
  slug_lte?: InputMaybe<Scalars['String']>;
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_contains_nocase?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_contains_nocase?: InputMaybe<Scalars['String']>;
  slug_starts_with?: InputMaybe<Scalars['String']>;
  slug_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  slug_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slug_ends_with?: InputMaybe<Scalars['String']>;
  slug_ends_with_nocase?: InputMaybe<Scalars['String']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  slug_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion?: InputMaybe<Scalars['String']>;
  schemaVersion_not?: InputMaybe<Scalars['String']>;
  schemaVersion_gt?: InputMaybe<Scalars['String']>;
  schemaVersion_lt?: InputMaybe<Scalars['String']>;
  schemaVersion_gte?: InputMaybe<Scalars['String']>;
  schemaVersion_lte?: InputMaybe<Scalars['String']>;
  schemaVersion_in?: InputMaybe<Array<Scalars['String']>>;
  schemaVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  schemaVersion_contains?: InputMaybe<Scalars['String']>;
  schemaVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_contains?: InputMaybe<Scalars['String']>;
  schemaVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_starts_with?: InputMaybe<Scalars['String']>;
  schemaVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  schemaVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_ends_with?: InputMaybe<Scalars['String']>;
  schemaVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  schemaVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion?: InputMaybe<Scalars['String']>;
  subgraphVersion_not?: InputMaybe<Scalars['String']>;
  subgraphVersion_gt?: InputMaybe<Scalars['String']>;
  subgraphVersion_lt?: InputMaybe<Scalars['String']>;
  subgraphVersion_gte?: InputMaybe<Scalars['String']>;
  subgraphVersion_lte?: InputMaybe<Scalars['String']>;
  subgraphVersion_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphVersion_contains?: InputMaybe<Scalars['String']>;
  subgraphVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_contains?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_starts_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_ends_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion?: InputMaybe<Scalars['String']>;
  methodologyVersion_not?: InputMaybe<Scalars['String']>;
  methodologyVersion_gt?: InputMaybe<Scalars['String']>;
  methodologyVersion_lt?: InputMaybe<Scalars['String']>;
  methodologyVersion_gte?: InputMaybe<Scalars['String']>;
  methodologyVersion_lte?: InputMaybe<Scalars['String']>;
  methodologyVersion_in?: InputMaybe<Array<Scalars['String']>>;
  methodologyVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  methodologyVersion_contains?: InputMaybe<Scalars['String']>;
  methodologyVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_contains?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_starts_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_ends_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Network>;
  network_not?: InputMaybe<Network>;
  network_in?: InputMaybe<Array<Network>>;
  network_not_in?: InputMaybe<Array<Network>>;
  type?: InputMaybe<ProtocolType>;
  type_not?: InputMaybe<ProtocolType>;
  type_in?: InputMaybe<Array<ProtocolType>>;
  type_not_in?: InputMaybe<Array<ProtocolType>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolControlledValueUSD?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Protocol_orderBy =
  | 'id'
  | 'name'
  | 'slug'
  | 'schemaVersion'
  | 'subgraphVersion'
  | 'methodologyVersion'
  | 'network'
  | 'type'
  | 'totalValueLockedUSD'
  | 'protocolControlledValueUSD'
  | 'cumulativeUniqueUsers'
  | 'cumulativeSupplySideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'dailyUsageMetrics'
  | 'hourlyUsageMetrics'
  | 'financialMetrics';

export type Query = {
  token?: Maybe<Token>;
  tokens: Array<Token>;
  rewardToken?: Maybe<RewardToken>;
  rewardTokens: Array<RewardToken>;
  interestRate?: Maybe<InterestRate>;
  interestRates: Array<InterestRate>;
  lendingProtocol?: Maybe<LendingProtocol>;
  lendingProtocols: Array<LendingProtocol>;
  usageMetricsDailySnapshot?: Maybe<UsageMetricsDailySnapshot>;
  usageMetricsDailySnapshots: Array<UsageMetricsDailySnapshot>;
  usageMetricsHourlySnapshot?: Maybe<UsageMetricsHourlySnapshot>;
  usageMetricsHourlySnapshots: Array<UsageMetricsHourlySnapshot>;
  financialsDailySnapshot?: Maybe<FinancialsDailySnapshot>;
  financialsDailySnapshots: Array<FinancialsDailySnapshot>;
  market?: Maybe<Market>;
  markets: Array<Market>;
  marketDailySnapshot?: Maybe<MarketDailySnapshot>;
  marketDailySnapshots: Array<MarketDailySnapshot>;
  marketHourlySnapshot?: Maybe<MarketHourlySnapshot>;
  marketHourlySnapshots: Array<MarketHourlySnapshot>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  withdraw?: Maybe<Withdraw>;
  withdraws: Array<Withdraw>;
  borrow?: Maybe<Borrow>;
  borrows: Array<Borrow>;
  repay?: Maybe<Repay>;
  repays: Array<Repay>;
  liquidate?: Maybe<Liquidate>;
  liquidates: Array<Liquidate>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  activeAccount?: Maybe<ActiveAccount>;
  activeAccounts: Array<ActiveAccount>;
  circularBuffer?: Maybe<_CircularBuffer>;
  circularBuffers: Array<_CircularBuffer>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  event?: Maybe<Event>;
  events: Array<Event>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerytokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrewardTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinterestRateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinterestRatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InterestRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterestRate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerylendingProtocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerylendingProtocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LendingProtocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LendingProtocol_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusageMetricsDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusageMetricsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsDailySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusageMetricsHourlySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusageMetricsHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfinancialsDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfinancialsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FinancialsDailySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Market_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Market_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketDailySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketHourlySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketHourlySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywithdrawArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdraw_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryborrowArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryborrowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Borrow_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Borrow_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrepayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrepaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Repay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Repay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Liquidate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryactiveAccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryactiveAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ActiveAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ActiveAccount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycircularBufferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycircularBuffersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_CircularBuffer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<_CircularBuffer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Protocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Protocol_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryeventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryeventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Event_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Repay = Event & {
  /**  { Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: LendingProtocol;
  /**  Market that tokens are repaid to  */
  to: Scalars['String'];
  /**  Address that sent tokens  */
  from: Scalars['String'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  The market this transaction interacted with  */
  market: Market;
  /**  Token repaid  */
  asset: Token;
  /**  Amount of token repaid in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of token repaid in USD  */
  amountUSD?: Maybe<Scalars['BigDecimal']>;
};

export type Repay_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Repay_orderBy =
  | 'id'
  | 'hash'
  | 'logIndex'
  | 'protocol'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'timestamp'
  | 'market'
  | 'asset'
  | 'amount'
  | 'amountUSD';

export type RewardToken = {
  /**  { Reward token type }-{ Smart contract address of the reward token }  */
  id: Scalars['ID'];
  /**  Reference to the actual token  */
  token: Token;
  /**  The type of the reward token  */
  type: RewardTokenType;
};

export type RewardTokenType =
  /**  For reward tokens awarded to LPs/lenders  */
  | 'DEPOSIT'
  /**  For reward tokens awarded to borrowers  */
  | 'BORROW';

export type RewardToken_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<RewardTokenType>;
  type_not?: InputMaybe<RewardTokenType>;
  type_in?: InputMaybe<Array<RewardTokenType>>;
  type_not_in?: InputMaybe<Array<RewardTokenType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type RewardToken_orderBy =
  | 'id'
  | 'token'
  | 'type';

export type RiskType =
  /**  Global risk means each users position in a market is combined for one score to determine if they can be liquidated  */
  | 'GLOBAL'
  /**  Isolated risk means each users position in a market or CDP is isolated for risk of liquidation  */
  | 'ISOLATED';

export type Subscription = {
  token?: Maybe<Token>;
  tokens: Array<Token>;
  rewardToken?: Maybe<RewardToken>;
  rewardTokens: Array<RewardToken>;
  interestRate?: Maybe<InterestRate>;
  interestRates: Array<InterestRate>;
  lendingProtocol?: Maybe<LendingProtocol>;
  lendingProtocols: Array<LendingProtocol>;
  usageMetricsDailySnapshot?: Maybe<UsageMetricsDailySnapshot>;
  usageMetricsDailySnapshots: Array<UsageMetricsDailySnapshot>;
  usageMetricsHourlySnapshot?: Maybe<UsageMetricsHourlySnapshot>;
  usageMetricsHourlySnapshots: Array<UsageMetricsHourlySnapshot>;
  financialsDailySnapshot?: Maybe<FinancialsDailySnapshot>;
  financialsDailySnapshots: Array<FinancialsDailySnapshot>;
  market?: Maybe<Market>;
  markets: Array<Market>;
  marketDailySnapshot?: Maybe<MarketDailySnapshot>;
  marketDailySnapshots: Array<MarketDailySnapshot>;
  marketHourlySnapshot?: Maybe<MarketHourlySnapshot>;
  marketHourlySnapshots: Array<MarketHourlySnapshot>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  withdraw?: Maybe<Withdraw>;
  withdraws: Array<Withdraw>;
  borrow?: Maybe<Borrow>;
  borrows: Array<Borrow>;
  repay?: Maybe<Repay>;
  repays: Array<Repay>;
  liquidate?: Maybe<Liquidate>;
  liquidates: Array<Liquidate>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  activeAccount?: Maybe<ActiveAccount>;
  activeAccounts: Array<ActiveAccount>;
  circularBuffer?: Maybe<_CircularBuffer>;
  circularBuffers: Array<_CircularBuffer>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  event?: Maybe<Event>;
  events: Array<Event>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptiontokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrewardTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninterestRateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninterestRatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InterestRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterestRate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionlendingProtocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionlendingProtocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LendingProtocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LendingProtocol_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusageMetricsDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusageMetricsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsDailySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusageMetricsHourlySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusageMetricsHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfinancialsDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfinancialsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FinancialsDailySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Market_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Market_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketDailySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketHourlySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketHourlySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwithdrawArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdraw_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionborrowArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionborrowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Borrow_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Borrow_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrepayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrepaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Repay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Repay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Liquidate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionactiveAccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionactiveAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ActiveAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ActiveAccount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncircularBufferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncircularBuffersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_CircularBuffer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<_CircularBuffer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Protocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Protocol_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioneventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioneventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Event_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Token = {
  /**  Smart contract address of the token  */
  id: Scalars['ID'];
  /**  Name of the token, mirrored from the smart contract  */
  name: Scalars['String'];
  /**  Symbol of the token, mirrored from the smart contract  */
  symbol: Scalars['String'];
  /**  The number of decimal places this token uses, default to 18  */
  decimals: Scalars['Int'];
  /**  Optional field to track the price of a token, mostly for caching purposes  */
  lastPriceUSD?: Maybe<Scalars['BigDecimal']>;
  /**  Optional field to track the block number of the last token price  */
  lastPriceBlockNumber?: Maybe<Scalars['BigInt']>;
};

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  decimals?: InputMaybe<Scalars['Int']>;
  decimals_not?: InputMaybe<Scalars['Int']>;
  decimals_gt?: InputMaybe<Scalars['Int']>;
  decimals_lt?: InputMaybe<Scalars['Int']>;
  decimals_gte?: InputMaybe<Scalars['Int']>;
  decimals_lte?: InputMaybe<Scalars['Int']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  lastPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  lastPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  lastPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  lastPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  lastPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  lastPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lastPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lastPriceBlockNumber?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastPriceBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Token_orderBy =
  | 'id'
  | 'name'
  | 'symbol'
  | 'decimals'
  | 'lastPriceUSD'
  | 'lastPriceBlockNumber';

export type UsageMetricsDailySnapshot = {
  /**  ID is # of days since Unix epoch time  */
  id: Scalars['ID'];
  /**  Protocol this snapshot is associated with  */
  protocol: LendingProtocol;
  /**  # of unique daily active users  */
  dailyActiveUsers: Scalars['Int'];
  /**  # of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int'];
  /**  Total number of transactions occurred in a day. Transactions include all entities that implement the Event interface.  */
  dailyTransactionCount: Scalars['Int'];
  /**  Total number of deposits in a day  */
  dailyDepositCount: Scalars['Int'];
  /**  Total number of withdrawals in a day  */
  dailyWithdrawCount: Scalars['Int'];
  /**  Total number of borrows/mints in a day  */
  dailyBorrowCount: Scalars['Int'];
  /**  Total number of repayments/burns in a day  */
  dailyRepayCount: Scalars['Int'];
  /**  Total number of liquidations in a day  */
  dailyLiquidateCount: Scalars['Int'];
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
};

export type UsageMetricsDailySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dailyActiveUsers?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_not?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_gt?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_lt?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_gte?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_lte?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyTransactionCount?: InputMaybe<Scalars['Int']>;
  dailyTransactionCount_not?: InputMaybe<Scalars['Int']>;
  dailyTransactionCount_gt?: InputMaybe<Scalars['Int']>;
  dailyTransactionCount_lt?: InputMaybe<Scalars['Int']>;
  dailyTransactionCount_gte?: InputMaybe<Scalars['Int']>;
  dailyTransactionCount_lte?: InputMaybe<Scalars['Int']>;
  dailyTransactionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyTransactionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyDepositCount?: InputMaybe<Scalars['Int']>;
  dailyDepositCount_not?: InputMaybe<Scalars['Int']>;
  dailyDepositCount_gt?: InputMaybe<Scalars['Int']>;
  dailyDepositCount_lt?: InputMaybe<Scalars['Int']>;
  dailyDepositCount_gte?: InputMaybe<Scalars['Int']>;
  dailyDepositCount_lte?: InputMaybe<Scalars['Int']>;
  dailyDepositCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyDepositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyWithdrawCount?: InputMaybe<Scalars['Int']>;
  dailyWithdrawCount_not?: InputMaybe<Scalars['Int']>;
  dailyWithdrawCount_gt?: InputMaybe<Scalars['Int']>;
  dailyWithdrawCount_lt?: InputMaybe<Scalars['Int']>;
  dailyWithdrawCount_gte?: InputMaybe<Scalars['Int']>;
  dailyWithdrawCount_lte?: InputMaybe<Scalars['Int']>;
  dailyWithdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyBorrowCount?: InputMaybe<Scalars['Int']>;
  dailyBorrowCount_not?: InputMaybe<Scalars['Int']>;
  dailyBorrowCount_gt?: InputMaybe<Scalars['Int']>;
  dailyBorrowCount_lt?: InputMaybe<Scalars['Int']>;
  dailyBorrowCount_gte?: InputMaybe<Scalars['Int']>;
  dailyBorrowCount_lte?: InputMaybe<Scalars['Int']>;
  dailyBorrowCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyBorrowCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyRepayCount?: InputMaybe<Scalars['Int']>;
  dailyRepayCount_not?: InputMaybe<Scalars['Int']>;
  dailyRepayCount_gt?: InputMaybe<Scalars['Int']>;
  dailyRepayCount_lt?: InputMaybe<Scalars['Int']>;
  dailyRepayCount_gte?: InputMaybe<Scalars['Int']>;
  dailyRepayCount_lte?: InputMaybe<Scalars['Int']>;
  dailyRepayCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyRepayCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyLiquidateCount?: InputMaybe<Scalars['Int']>;
  dailyLiquidateCount_not?: InputMaybe<Scalars['Int']>;
  dailyLiquidateCount_gt?: InputMaybe<Scalars['Int']>;
  dailyLiquidateCount_lt?: InputMaybe<Scalars['Int']>;
  dailyLiquidateCount_gte?: InputMaybe<Scalars['Int']>;
  dailyLiquidateCount_lte?: InputMaybe<Scalars['Int']>;
  dailyLiquidateCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyLiquidateCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type UsageMetricsDailySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'dailyActiveUsers'
  | 'cumulativeUniqueUsers'
  | 'dailyTransactionCount'
  | 'dailyDepositCount'
  | 'dailyWithdrawCount'
  | 'dailyBorrowCount'
  | 'dailyRepayCount'
  | 'dailyLiquidateCount'
  | 'blockNumber'
  | 'timestamp';

export type UsageMetricsHourlySnapshot = {
  /**  { # of hours since Unix epoch time }  */
  id: Scalars['ID'];
  /**  Protocol this snapshot is associated with  */
  protocol: LendingProtocol;
  /**  # of unique hourly active users  */
  hourlyActiveUsers: Scalars['Int'];
  /**  # of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int'];
  /**  Total number of transactions occurred in an hour. Transactions include all entities that implement the Event interface.  */
  hourlyTransactionCount: Scalars['Int'];
  /**  Total number of deposits in an hour  */
  hourlyDepositCount: Scalars['Int'];
  /**  Total number of withdrawals in an hour  */
  hourlyWithdrawCount: Scalars['Int'];
  /**  Total number of borrows/mints in an hour  */
  hourlyBorrowCount: Scalars['Int'];
  /**  Total number of repayments/burns in an hour  */
  hourlyRepayCount: Scalars['Int'];
  /**  Total number of liquidations in an hour  */
  hourlyLiquidateCount: Scalars['Int'];
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
};

export type UsageMetricsHourlySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hourlyActiveUsers?: InputMaybe<Scalars['Int']>;
  hourlyActiveUsers_not?: InputMaybe<Scalars['Int']>;
  hourlyActiveUsers_gt?: InputMaybe<Scalars['Int']>;
  hourlyActiveUsers_lt?: InputMaybe<Scalars['Int']>;
  hourlyActiveUsers_gte?: InputMaybe<Scalars['Int']>;
  hourlyActiveUsers_lte?: InputMaybe<Scalars['Int']>;
  hourlyActiveUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyActiveUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyTransactionCount?: InputMaybe<Scalars['Int']>;
  hourlyTransactionCount_not?: InputMaybe<Scalars['Int']>;
  hourlyTransactionCount_gt?: InputMaybe<Scalars['Int']>;
  hourlyTransactionCount_lt?: InputMaybe<Scalars['Int']>;
  hourlyTransactionCount_gte?: InputMaybe<Scalars['Int']>;
  hourlyTransactionCount_lte?: InputMaybe<Scalars['Int']>;
  hourlyTransactionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyTransactionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyDepositCount?: InputMaybe<Scalars['Int']>;
  hourlyDepositCount_not?: InputMaybe<Scalars['Int']>;
  hourlyDepositCount_gt?: InputMaybe<Scalars['Int']>;
  hourlyDepositCount_lt?: InputMaybe<Scalars['Int']>;
  hourlyDepositCount_gte?: InputMaybe<Scalars['Int']>;
  hourlyDepositCount_lte?: InputMaybe<Scalars['Int']>;
  hourlyDepositCount_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyDepositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyWithdrawCount?: InputMaybe<Scalars['Int']>;
  hourlyWithdrawCount_not?: InputMaybe<Scalars['Int']>;
  hourlyWithdrawCount_gt?: InputMaybe<Scalars['Int']>;
  hourlyWithdrawCount_lt?: InputMaybe<Scalars['Int']>;
  hourlyWithdrawCount_gte?: InputMaybe<Scalars['Int']>;
  hourlyWithdrawCount_lte?: InputMaybe<Scalars['Int']>;
  hourlyWithdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyBorrowCount?: InputMaybe<Scalars['Int']>;
  hourlyBorrowCount_not?: InputMaybe<Scalars['Int']>;
  hourlyBorrowCount_gt?: InputMaybe<Scalars['Int']>;
  hourlyBorrowCount_lt?: InputMaybe<Scalars['Int']>;
  hourlyBorrowCount_gte?: InputMaybe<Scalars['Int']>;
  hourlyBorrowCount_lte?: InputMaybe<Scalars['Int']>;
  hourlyBorrowCount_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyBorrowCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyRepayCount?: InputMaybe<Scalars['Int']>;
  hourlyRepayCount_not?: InputMaybe<Scalars['Int']>;
  hourlyRepayCount_gt?: InputMaybe<Scalars['Int']>;
  hourlyRepayCount_lt?: InputMaybe<Scalars['Int']>;
  hourlyRepayCount_gte?: InputMaybe<Scalars['Int']>;
  hourlyRepayCount_lte?: InputMaybe<Scalars['Int']>;
  hourlyRepayCount_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyRepayCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyLiquidateCount?: InputMaybe<Scalars['Int']>;
  hourlyLiquidateCount_not?: InputMaybe<Scalars['Int']>;
  hourlyLiquidateCount_gt?: InputMaybe<Scalars['Int']>;
  hourlyLiquidateCount_lt?: InputMaybe<Scalars['Int']>;
  hourlyLiquidateCount_gte?: InputMaybe<Scalars['Int']>;
  hourlyLiquidateCount_lte?: InputMaybe<Scalars['Int']>;
  hourlyLiquidateCount_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyLiquidateCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type UsageMetricsHourlySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'hourlyActiveUsers'
  | 'cumulativeUniqueUsers'
  | 'hourlyTransactionCount'
  | 'hourlyDepositCount'
  | 'hourlyWithdrawCount'
  | 'hourlyBorrowCount'
  | 'hourlyRepayCount'
  | 'hourlyLiquidateCount'
  | 'blockNumber'
  | 'timestamp';

export type Withdraw = Event & {
  /**  { Transaction hash }-{ Log index } */
  id: Scalars['ID'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: LendingProtocol;
  /**  Address that received tokens  */
  to: Scalars['String'];
  /**  Market that tokens are withdrawn from  */
  from: Scalars['String'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  The market this transaction interacted with  */
  market: Market;
  /**  Token withdrawn  */
  asset: Token;
  /**  Amount of token withdrawn in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of token withdrawn in USD  */
  amountUSD: Scalars['BigDecimal'];
};

export type Withdraw_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Withdraw_orderBy =
  | 'id'
  | 'hash'
  | 'logIndex'
  | 'protocol'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'timestamp'
  | 'market'
  | 'asset'
  | 'amount'
  | 'amountUSD';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

export type _CircularBuffer = {
  id: Scalars['ID'];
  blocks: Array<Scalars['Int']>;
  windowStartIndex: Scalars['Int'];
  nextIndex: Scalars['Int'];
  bufferSize: Scalars['Int'];
  blocksPerDay: Scalars['BigDecimal'];
};

export type _CircularBuffer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blocks?: InputMaybe<Array<Scalars['Int']>>;
  blocks_not?: InputMaybe<Array<Scalars['Int']>>;
  blocks_contains?: InputMaybe<Array<Scalars['Int']>>;
  blocks_contains_nocase?: InputMaybe<Array<Scalars['Int']>>;
  blocks_not_contains?: InputMaybe<Array<Scalars['Int']>>;
  blocks_not_contains_nocase?: InputMaybe<Array<Scalars['Int']>>;
  windowStartIndex?: InputMaybe<Scalars['Int']>;
  windowStartIndex_not?: InputMaybe<Scalars['Int']>;
  windowStartIndex_gt?: InputMaybe<Scalars['Int']>;
  windowStartIndex_lt?: InputMaybe<Scalars['Int']>;
  windowStartIndex_gte?: InputMaybe<Scalars['Int']>;
  windowStartIndex_lte?: InputMaybe<Scalars['Int']>;
  windowStartIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  windowStartIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  nextIndex?: InputMaybe<Scalars['Int']>;
  nextIndex_not?: InputMaybe<Scalars['Int']>;
  nextIndex_gt?: InputMaybe<Scalars['Int']>;
  nextIndex_lt?: InputMaybe<Scalars['Int']>;
  nextIndex_gte?: InputMaybe<Scalars['Int']>;
  nextIndex_lte?: InputMaybe<Scalars['Int']>;
  nextIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  nextIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  bufferSize?: InputMaybe<Scalars['Int']>;
  bufferSize_not?: InputMaybe<Scalars['Int']>;
  bufferSize_gt?: InputMaybe<Scalars['Int']>;
  bufferSize_lt?: InputMaybe<Scalars['Int']>;
  bufferSize_gte?: InputMaybe<Scalars['Int']>;
  bufferSize_lte?: InputMaybe<Scalars['Int']>;
  bufferSize_in?: InputMaybe<Array<Scalars['Int']>>;
  bufferSize_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blocksPerDay?: InputMaybe<Scalars['BigDecimal']>;
  blocksPerDay_not?: InputMaybe<Scalars['BigDecimal']>;
  blocksPerDay_gt?: InputMaybe<Scalars['BigDecimal']>;
  blocksPerDay_lt?: InputMaybe<Scalars['BigDecimal']>;
  blocksPerDay_gte?: InputMaybe<Scalars['BigDecimal']>;
  blocksPerDay_lte?: InputMaybe<Scalars['BigDecimal']>;
  blocksPerDay_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  blocksPerDay_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type _CircularBuffer_orderBy =
  | 'id'
  | 'blocks'
  | 'windowStartIndex'
  | 'nextIndex'
  | 'bufferSize'
  | 'blocksPerDay';

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

    }
    export type QueryCompoundv2Sdk = {
  /** null **/
  token: InContextSdkMethod<Compoundv2Types.Query['token'], Compoundv2Types.QuerytokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Compoundv2Types.Query['tokens'], Compoundv2Types.QuerytokensArgs, MeshContext>,
  /** null **/
  rewardToken: InContextSdkMethod<Compoundv2Types.Query['rewardToken'], Compoundv2Types.QueryrewardTokenArgs, MeshContext>,
  /** null **/
  rewardTokens: InContextSdkMethod<Compoundv2Types.Query['rewardTokens'], Compoundv2Types.QueryrewardTokensArgs, MeshContext>,
  /** null **/
  interestRate: InContextSdkMethod<Compoundv2Types.Query['interestRate'], Compoundv2Types.QueryinterestRateArgs, MeshContext>,
  /** null **/
  interestRates: InContextSdkMethod<Compoundv2Types.Query['interestRates'], Compoundv2Types.QueryinterestRatesArgs, MeshContext>,
  /** null **/
  lendingProtocol: InContextSdkMethod<Compoundv2Types.Query['lendingProtocol'], Compoundv2Types.QuerylendingProtocolArgs, MeshContext>,
  /** null **/
  lendingProtocols: InContextSdkMethod<Compoundv2Types.Query['lendingProtocols'], Compoundv2Types.QuerylendingProtocolsArgs, MeshContext>,
  /** null **/
  usageMetricsDailySnapshot: InContextSdkMethod<Compoundv2Types.Query['usageMetricsDailySnapshot'], Compoundv2Types.QueryusageMetricsDailySnapshotArgs, MeshContext>,
  /** null **/
  usageMetricsDailySnapshots: InContextSdkMethod<Compoundv2Types.Query['usageMetricsDailySnapshots'], Compoundv2Types.QueryusageMetricsDailySnapshotsArgs, MeshContext>,
  /** null **/
  usageMetricsHourlySnapshot: InContextSdkMethod<Compoundv2Types.Query['usageMetricsHourlySnapshot'], Compoundv2Types.QueryusageMetricsHourlySnapshotArgs, MeshContext>,
  /** null **/
  usageMetricsHourlySnapshots: InContextSdkMethod<Compoundv2Types.Query['usageMetricsHourlySnapshots'], Compoundv2Types.QueryusageMetricsHourlySnapshotsArgs, MeshContext>,
  /** null **/
  financialsDailySnapshot: InContextSdkMethod<Compoundv2Types.Query['financialsDailySnapshot'], Compoundv2Types.QueryfinancialsDailySnapshotArgs, MeshContext>,
  /** null **/
  financialsDailySnapshots: InContextSdkMethod<Compoundv2Types.Query['financialsDailySnapshots'], Compoundv2Types.QueryfinancialsDailySnapshotsArgs, MeshContext>,
  /** null **/
  market: InContextSdkMethod<Compoundv2Types.Query['market'], Compoundv2Types.QuerymarketArgs, MeshContext>,
  /** null **/
  markets: InContextSdkMethod<Compoundv2Types.Query['markets'], Compoundv2Types.QuerymarketsArgs, MeshContext>,
  /** null **/
  marketDailySnapshot: InContextSdkMethod<Compoundv2Types.Query['marketDailySnapshot'], Compoundv2Types.QuerymarketDailySnapshotArgs, MeshContext>,
  /** null **/
  marketDailySnapshots: InContextSdkMethod<Compoundv2Types.Query['marketDailySnapshots'], Compoundv2Types.QuerymarketDailySnapshotsArgs, MeshContext>,
  /** null **/
  marketHourlySnapshot: InContextSdkMethod<Compoundv2Types.Query['marketHourlySnapshot'], Compoundv2Types.QuerymarketHourlySnapshotArgs, MeshContext>,
  /** null **/
  marketHourlySnapshots: InContextSdkMethod<Compoundv2Types.Query['marketHourlySnapshots'], Compoundv2Types.QuerymarketHourlySnapshotsArgs, MeshContext>,
  /** null **/
  deposit: InContextSdkMethod<Compoundv2Types.Query['deposit'], Compoundv2Types.QuerydepositArgs, MeshContext>,
  /** null **/
  deposits: InContextSdkMethod<Compoundv2Types.Query['deposits'], Compoundv2Types.QuerydepositsArgs, MeshContext>,
  /** null **/
  withdraw: InContextSdkMethod<Compoundv2Types.Query['withdraw'], Compoundv2Types.QuerywithdrawArgs, MeshContext>,
  /** null **/
  withdraws: InContextSdkMethod<Compoundv2Types.Query['withdraws'], Compoundv2Types.QuerywithdrawsArgs, MeshContext>,
  /** null **/
  borrow: InContextSdkMethod<Compoundv2Types.Query['borrow'], Compoundv2Types.QueryborrowArgs, MeshContext>,
  /** null **/
  borrows: InContextSdkMethod<Compoundv2Types.Query['borrows'], Compoundv2Types.QueryborrowsArgs, MeshContext>,
  /** null **/
  repay: InContextSdkMethod<Compoundv2Types.Query['repay'], Compoundv2Types.QueryrepayArgs, MeshContext>,
  /** null **/
  repays: InContextSdkMethod<Compoundv2Types.Query['repays'], Compoundv2Types.QueryrepaysArgs, MeshContext>,
  /** null **/
  liquidate: InContextSdkMethod<Compoundv2Types.Query['liquidate'], Compoundv2Types.QueryliquidateArgs, MeshContext>,
  /** null **/
  liquidates: InContextSdkMethod<Compoundv2Types.Query['liquidates'], Compoundv2Types.QueryliquidatesArgs, MeshContext>,
  /** null **/
  account: InContextSdkMethod<Compoundv2Types.Query['account'], Compoundv2Types.QueryaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<Compoundv2Types.Query['accounts'], Compoundv2Types.QueryaccountsArgs, MeshContext>,
  /** null **/
  activeAccount: InContextSdkMethod<Compoundv2Types.Query['activeAccount'], Compoundv2Types.QueryactiveAccountArgs, MeshContext>,
  /** null **/
  activeAccounts: InContextSdkMethod<Compoundv2Types.Query['activeAccounts'], Compoundv2Types.QueryactiveAccountsArgs, MeshContext>,
  /** null **/
  circularBuffer: InContextSdkMethod<Compoundv2Types.Query['circularBuffer'], Compoundv2Types.QuerycircularBufferArgs, MeshContext>,
  /** null **/
  circularBuffers: InContextSdkMethod<Compoundv2Types.Query['circularBuffers'], Compoundv2Types.QuerycircularBuffersArgs, MeshContext>,
  /** null **/
  protocol: InContextSdkMethod<Compoundv2Types.Query['protocol'], Compoundv2Types.QueryprotocolArgs, MeshContext>,
  /** null **/
  protocols: InContextSdkMethod<Compoundv2Types.Query['protocols'], Compoundv2Types.QueryprotocolsArgs, MeshContext>,
  /** null **/
  event: InContextSdkMethod<Compoundv2Types.Query['event'], Compoundv2Types.QueryeventArgs, MeshContext>,
  /** null **/
  events: InContextSdkMethod<Compoundv2Types.Query['events'], Compoundv2Types.QueryeventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Compoundv2Types.Query['_meta'], Compoundv2Types.Query_metaArgs, MeshContext>
};

export type MutationCompoundv2Sdk = {

};

export type SubscriptionCompoundv2Sdk = {
  /** null **/
  token: InContextSdkMethod<Compoundv2Types.Subscription['token'], Compoundv2Types.SubscriptiontokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Compoundv2Types.Subscription['tokens'], Compoundv2Types.SubscriptiontokensArgs, MeshContext>,
  /** null **/
  rewardToken: InContextSdkMethod<Compoundv2Types.Subscription['rewardToken'], Compoundv2Types.SubscriptionrewardTokenArgs, MeshContext>,
  /** null **/
  rewardTokens: InContextSdkMethod<Compoundv2Types.Subscription['rewardTokens'], Compoundv2Types.SubscriptionrewardTokensArgs, MeshContext>,
  /** null **/
  interestRate: InContextSdkMethod<Compoundv2Types.Subscription['interestRate'], Compoundv2Types.SubscriptioninterestRateArgs, MeshContext>,
  /** null **/
  interestRates: InContextSdkMethod<Compoundv2Types.Subscription['interestRates'], Compoundv2Types.SubscriptioninterestRatesArgs, MeshContext>,
  /** null **/
  lendingProtocol: InContextSdkMethod<Compoundv2Types.Subscription['lendingProtocol'], Compoundv2Types.SubscriptionlendingProtocolArgs, MeshContext>,
  /** null **/
  lendingProtocols: InContextSdkMethod<Compoundv2Types.Subscription['lendingProtocols'], Compoundv2Types.SubscriptionlendingProtocolsArgs, MeshContext>,
  /** null **/
  usageMetricsDailySnapshot: InContextSdkMethod<Compoundv2Types.Subscription['usageMetricsDailySnapshot'], Compoundv2Types.SubscriptionusageMetricsDailySnapshotArgs, MeshContext>,
  /** null **/
  usageMetricsDailySnapshots: InContextSdkMethod<Compoundv2Types.Subscription['usageMetricsDailySnapshots'], Compoundv2Types.SubscriptionusageMetricsDailySnapshotsArgs, MeshContext>,
  /** null **/
  usageMetricsHourlySnapshot: InContextSdkMethod<Compoundv2Types.Subscription['usageMetricsHourlySnapshot'], Compoundv2Types.SubscriptionusageMetricsHourlySnapshotArgs, MeshContext>,
  /** null **/
  usageMetricsHourlySnapshots: InContextSdkMethod<Compoundv2Types.Subscription['usageMetricsHourlySnapshots'], Compoundv2Types.SubscriptionusageMetricsHourlySnapshotsArgs, MeshContext>,
  /** null **/
  financialsDailySnapshot: InContextSdkMethod<Compoundv2Types.Subscription['financialsDailySnapshot'], Compoundv2Types.SubscriptionfinancialsDailySnapshotArgs, MeshContext>,
  /** null **/
  financialsDailySnapshots: InContextSdkMethod<Compoundv2Types.Subscription['financialsDailySnapshots'], Compoundv2Types.SubscriptionfinancialsDailySnapshotsArgs, MeshContext>,
  /** null **/
  market: InContextSdkMethod<Compoundv2Types.Subscription['market'], Compoundv2Types.SubscriptionmarketArgs, MeshContext>,
  /** null **/
  markets: InContextSdkMethod<Compoundv2Types.Subscription['markets'], Compoundv2Types.SubscriptionmarketsArgs, MeshContext>,
  /** null **/
  marketDailySnapshot: InContextSdkMethod<Compoundv2Types.Subscription['marketDailySnapshot'], Compoundv2Types.SubscriptionmarketDailySnapshotArgs, MeshContext>,
  /** null **/
  marketDailySnapshots: InContextSdkMethod<Compoundv2Types.Subscription['marketDailySnapshots'], Compoundv2Types.SubscriptionmarketDailySnapshotsArgs, MeshContext>,
  /** null **/
  marketHourlySnapshot: InContextSdkMethod<Compoundv2Types.Subscription['marketHourlySnapshot'], Compoundv2Types.SubscriptionmarketHourlySnapshotArgs, MeshContext>,
  /** null **/
  marketHourlySnapshots: InContextSdkMethod<Compoundv2Types.Subscription['marketHourlySnapshots'], Compoundv2Types.SubscriptionmarketHourlySnapshotsArgs, MeshContext>,
  /** null **/
  deposit: InContextSdkMethod<Compoundv2Types.Subscription['deposit'], Compoundv2Types.SubscriptiondepositArgs, MeshContext>,
  /** null **/
  deposits: InContextSdkMethod<Compoundv2Types.Subscription['deposits'], Compoundv2Types.SubscriptiondepositsArgs, MeshContext>,
  /** null **/
  withdraw: InContextSdkMethod<Compoundv2Types.Subscription['withdraw'], Compoundv2Types.SubscriptionwithdrawArgs, MeshContext>,
  /** null **/
  withdraws: InContextSdkMethod<Compoundv2Types.Subscription['withdraws'], Compoundv2Types.SubscriptionwithdrawsArgs, MeshContext>,
  /** null **/
  borrow: InContextSdkMethod<Compoundv2Types.Subscription['borrow'], Compoundv2Types.SubscriptionborrowArgs, MeshContext>,
  /** null **/
  borrows: InContextSdkMethod<Compoundv2Types.Subscription['borrows'], Compoundv2Types.SubscriptionborrowsArgs, MeshContext>,
  /** null **/
  repay: InContextSdkMethod<Compoundv2Types.Subscription['repay'], Compoundv2Types.SubscriptionrepayArgs, MeshContext>,
  /** null **/
  repays: InContextSdkMethod<Compoundv2Types.Subscription['repays'], Compoundv2Types.SubscriptionrepaysArgs, MeshContext>,
  /** null **/
  liquidate: InContextSdkMethod<Compoundv2Types.Subscription['liquidate'], Compoundv2Types.SubscriptionliquidateArgs, MeshContext>,
  /** null **/
  liquidates: InContextSdkMethod<Compoundv2Types.Subscription['liquidates'], Compoundv2Types.SubscriptionliquidatesArgs, MeshContext>,
  /** null **/
  account: InContextSdkMethod<Compoundv2Types.Subscription['account'], Compoundv2Types.SubscriptionaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<Compoundv2Types.Subscription['accounts'], Compoundv2Types.SubscriptionaccountsArgs, MeshContext>,
  /** null **/
  activeAccount: InContextSdkMethod<Compoundv2Types.Subscription['activeAccount'], Compoundv2Types.SubscriptionactiveAccountArgs, MeshContext>,
  /** null **/
  activeAccounts: InContextSdkMethod<Compoundv2Types.Subscription['activeAccounts'], Compoundv2Types.SubscriptionactiveAccountsArgs, MeshContext>,
  /** null **/
  circularBuffer: InContextSdkMethod<Compoundv2Types.Subscription['circularBuffer'], Compoundv2Types.SubscriptioncircularBufferArgs, MeshContext>,
  /** null **/
  circularBuffers: InContextSdkMethod<Compoundv2Types.Subscription['circularBuffers'], Compoundv2Types.SubscriptioncircularBuffersArgs, MeshContext>,
  /** null **/
  protocol: InContextSdkMethod<Compoundv2Types.Subscription['protocol'], Compoundv2Types.SubscriptionprotocolArgs, MeshContext>,
  /** null **/
  protocols: InContextSdkMethod<Compoundv2Types.Subscription['protocols'], Compoundv2Types.SubscriptionprotocolsArgs, MeshContext>,
  /** null **/
  event: InContextSdkMethod<Compoundv2Types.Subscription['event'], Compoundv2Types.SubscriptioneventArgs, MeshContext>,
  /** null **/
  events: InContextSdkMethod<Compoundv2Types.Subscription['events'], Compoundv2Types.SubscriptioneventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Compoundv2Types.Subscription['_meta'], Compoundv2Types.Subscription_metaArgs, MeshContext>
};

export type Compoundv2Context = {
      ["compoundv2"]: { Query: QueryCompoundv2Sdk, Mutation: MutationCompoundv2Sdk, Subscription: SubscriptionCompoundv2Sdk },
      
    };

export type MeshContext = Compoundv2Context & BaseMeshContext;


import { getMesh, ExecuteMeshFn, SubscribeMeshFn } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';

import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/compoundv2/introspectionSchema":
      return import("./sources/compoundv2/introspectionSchema");
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { DefaultLogger } from '@graphql-mesh/utils';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
    } as any)
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const sources = [];
const transforms = [];
const additionalEnvelopPlugins = [];
const compoundv2Transforms = [];
const additionalTypeDefs = [] as any[];
const compoundv2Handler = new GraphqlHandler({
              name: "compoundv2",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/messari/compound-ethereum"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("compoundv2"),
              logger: logger.child("compoundv2"),
              importFn
            });
sources[0] = {
          name: 'compoundv2',
          handler: compoundv2Handler,
          transforms: compoundv2Transforms
        }
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })
const additionalResolvers = [] as any[]

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      
    ];
    },
  };
}

let meshInstance$: Promise<MeshInstance<MeshContext>>;

export function getBuiltGraphClient(): Promise<MeshInstance<MeshContext>> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh<MeshContext>(meshOptions)).then(mesh => {
      const id$ = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        id$.then(id => mesh.pubsub.unsubscribe(id)).catch(err => console.error(err));
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));