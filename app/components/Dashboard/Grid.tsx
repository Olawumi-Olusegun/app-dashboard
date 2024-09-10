import React from 'react'
import StatsCard from './StatsCard'
import ActivityGraph from './ActivityGraph'
import UsageRadar from './UsageRadar'
import RecentTransactions from './RecentTransactions'

const Grid = () => {
    return (
        <div className='px-4 grid grid-cols-12 gap-3'>
            <StatsCard />
            <ActivityGraph />
            <UsageRadar />
            <RecentTransactions />
        </div>
    )
}

export default Grid