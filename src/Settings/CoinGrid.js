import { filter } from 'lodash'
import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../App/AppProvider'
import {Tile} from '../Shared/Tile'
import {SelectableTile} from '../Shared/Tile'
import CoinTile from './CoinTile'

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap:15px;
  margin-top:40px
`
function getLowerSectionCoins(coinList, filteredCoins){
 return (filteredCoins && Object.keys(filteredCoins)) || 
 Object.keys(coinList).slice(0, 100)

}
function getCoin(coinList, topSection, favorites, filteredCoins){
 return topSection ? favorites : getLowerSectionCoins(coinList, filteredCoins)

}

export default function ({topSection, favorites}) {
  return <AppContext.Consumer>
      {({ coinList, favorites, filteredCoins }) => (<CoinGridStyled>
          {getCoin(coinList, topSection, favorites, filteredCoins).map(coinKey => {
            return <CoinTile key={coinKey} topSection={topSection} coinKey={coinKey}/>
          })
          }
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  




}
