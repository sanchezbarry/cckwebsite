import React from 'react';
import { Card, CardContent } from './ui/card';

const MissionAbout: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <Card>
            <CardContent>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-6">
      Opportunities to disciple the nations



    </h4>
    <p className="leading-7 not-first:mt-6">
At CCK, we want to see more people having the opportunity to do missions


    </p>

    <div className="text-lg font-semibold mt-6">Be a Blessing
</div>

        <p className="leading-7 not-first:mt-6">
We want to be a blessing to SMPS where God has placed us.
    </p>


    </CardContent>
</Card>
    </div>
  )
}

export default MissionAbout;