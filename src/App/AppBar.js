import React from 'react'
import styled , {css} from 'styled-components'
import {AppContext} from './AppProvider'

const Logo = styled.div`
font-size:1.6em
`
const Bar = styled.div`
display:grid;
grid-template-columns:180px auto 100px 100px

`
const ControlButtonElem = styled.div`
cursor:pointer;
padding:10px;
${props=>props.active && css`
border:solid 2px white;
`}
`

function toProperCase (lower){
 return lower.charAt(0).toUpperCase() + lower.substr(1)
}
const ControlButton = ({name})=>{
 
 return (
  <AppContext.Consumer>
   {({page,setPage})=>(
  <ControlButtonElem 
  onClick={()=>{
   setPage(name)}}
  active={page === name}>
   {toProperCase(name)}
   </ControlButtonElem>
   )}
  </AppContext.Consumer>
 )

}


export default function(){
 return <Bar>
  <Logo>CryptoDashboard</Logo>
  <div/>
  <ControlButton name="dashboard"/>
  <ControlButton name="settings"/>
 </Bar>

}