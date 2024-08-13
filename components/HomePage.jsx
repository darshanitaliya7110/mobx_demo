"use client"

import { useStores } from '@/stores'
import { observer } from 'mobx-react-lite'
import React from 'react'

const HomePage = () => {
    const { counterStore } = useStores()

    return (
        <div>
            <h1>Count: {counterStore.count}</h1>
            <button onClick={() => counterStore.setCount("inc")}>Increment</button>
            <button onClick={() => counterStore.setCount("dec")}>Decrement</button>
        </div>
    )
}

export default observer(HomePage)
