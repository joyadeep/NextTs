import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

type Props = {}

const RecentActivities = (props: Props) => {
  return (
    <Card className='col-span-4 lg:cols-span-3'>
        <CardHeader>
            <CardTitle className='text-2zl font-bold'>
                Recent Activities
            </CardTitle>
            <CardDescription>
                You have played 7 games.
            </CardDescription>
        </CardHeader>
        <CardContent className='max-h-[580px] overflow-auto'>
            Histories!
            
        </CardContent>
    </Card>
  )
}

export default RecentActivities