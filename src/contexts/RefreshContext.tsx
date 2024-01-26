import { FAST_INTERVAL, SLOW_INTERVAL, FASTEST_INTERVAL, TEN_SECOND_INTERVAL } from 'config/constants'
import React, { useState, useEffect } from 'react'

const RefreshContext = React.createContext({ slow: 0, fast: 0, fastest: 0, tenSecond: 0 })

// This context maintain 2 counters that can be used as a dependencies on other hooks to force a periodic refresh
const RefreshContextProvider = ({ children }) => {
    const [slow, setSlow] = useState(0)
    const [fast, setFast] = useState(0)
    const [fastest, setFastest] = useState(0)
    const [tenSecond, setTenSecond] = useState(0)

    useEffect(() => {
        const interval = setInterval(async () => {
            setFast((prev) => prev + 1)
        }, FAST_INTERVAL)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const interval = setInterval(async () => {
            setFastest((prev) => prev + 1)
        }, FASTEST_INTERVAL)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const interval = setInterval(async () => {
            setSlow((prev) => prev + 1)
        }, SLOW_INTERVAL)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const interval = setInterval(async () => {
            setTenSecond((prev) => prev + 1)
        }, TEN_SECOND_INTERVAL)
        return () => clearInterval(interval)
    }, [])

    return <RefreshContext.Provider value={{ slow, fast, fastest, tenSecond }}>{children}</RefreshContext.Provider>
}

export { RefreshContext, RefreshContextProvider }
