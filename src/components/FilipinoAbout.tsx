import React from 'react';
import { Card, CardContent } from './ui/card';

const FilipinoAbout: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <Card>
            <CardContent>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-4">
      Who we are


    </h4>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
The goal of the fellowship is to encourage members to develop a strong and intimate relationship with the Lord, to strengthen them for service in the body and to equip them so as to fulfill the purpose of God in their lives.
    </p>

    <div className="text-lg font-semibold mt-6">Join us for our Filipino Fellowship Worship</div>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
Sundays, 12.40pm
Bible Study / Sunday Fellowship & Lunch
    </p>

            <p className="leading-7 [&:not(:first-child)]:mt-6">
All are welcome!

    </p>
    </CardContent>
</Card>
    </div>
  )
}

export default FilipinoAbout;