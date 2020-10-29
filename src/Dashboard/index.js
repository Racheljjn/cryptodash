import React from 'react'
import Page from '../Shared/Page'
import CoinSpotlight from './CoinSpotlight'
import PriceGrid from './PriceGrid'
import PriceChart from './PriceChart'



export default function () {
 return <Page name="dashboard">
  <PriceGrid/>
  <CoinSpotlight/>
  <PriceChart/>
 </Page>
}