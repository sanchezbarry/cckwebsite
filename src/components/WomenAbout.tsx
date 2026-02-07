import React from 'react';
import { Card, CardContent } from './ui/card';

const WomenAbout: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <Card>
            <CardContent>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-6">
      Fellowship


    </h4>
    <p className="leading-7 not-first:mt-6">
      We organise events, outings, retreats and training to build fellowship and to be able to minister to ladies, within and outside CCK.


    </p>

    <div className="text-lg font-semibold mt-6">Ministry</div>

        <p className="leading-7 not-first:mt-6">
Ministering to ladies within and outside of CCK, we aim to fulfil Jesus' command to 'Go and make disciples'
    </p>


    </CardContent>
</Card>
    </div>
  )
}

export default WomenAbout;