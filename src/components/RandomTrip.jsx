import React from 'react'
import Kilometros from './Kilometres/Kilometros'
import Roulette from './Food/Roulette'
import LeerFuncional from './Read/Read'
import Budget from './Budget/Budget'
import Radical from './ExperienciaRadical/Radical'
import ToInfo from './ToInfo/ToInfo'
import Separator from './Separator/Separator'
import SeparatorTwo from './Separator/SeparatorTwo'


export default function RandomTrip() {
  return (
    <div>
        <Kilometros />
        <Separator />
        <Roulette />
        <SeparatorTwo />
        <LeerFuncional />
        <Separator />
        <Budget />
        <SeparatorTwo />
        <ToInfo />
        {/* <Radical /> */}
    </div>
  )
}
