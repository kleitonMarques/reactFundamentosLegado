import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './menber'

ReactDOM.render(
    <Family lastName="Silva">
        <Member name="Guilherme" />
        <Member name="Julia" />
    </Family>
, document.getElementById('app'))