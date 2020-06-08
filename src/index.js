import React, { useState } from 'react'

const LoadingSpin = () => (
    <div>Loading...</div>
)

const useLoading = () => {
    const [loadingState, setLoadingState] = useState(false)
    const LoadingComponent = () => (
        loadingState
            ? <LoadingSpin />
            : null
    )
    return {
        loadingState,
        setLoadingState,
        LoadingComponent
    }
}

export default useLoading
