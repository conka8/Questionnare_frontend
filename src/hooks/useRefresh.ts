import { useContext } from 'react'
import { RefreshContext } from 'contexts/RefreshContext'

const useRefresh = () => {
    const { fast, slow, fastest, tenSecond } = useContext(RefreshContext)
    return { fastRefresh: fast, slowRefresh: slow, fastestRefresh: fastest, tenSecondRefresh: tenSecond }
}

export default useRefresh
