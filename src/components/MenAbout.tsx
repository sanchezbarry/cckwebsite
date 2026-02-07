import React from 'react';
import { Card, CardContent } from './ui/card';

const MenAbout: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <Card>
            <CardContent>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-6">
      Iron Sharpens Iron

    </h4>
    <p className="leading-7 not-first:mt-6">
      CCK's Men's Ministry are for men of all ages. We aim to navigate through life together, where 'no man is an island'. Through fellowship time over 'makan', sports and many other events, relationship and bonds are built-up.
    </p>

 

        <p className="leading-7 not-first:mt-6">
Our Men's Ministry is also about challenging one another to live out in obedience all that Christ has commanded. We believe that 'iron will sharpen iron' and each one is called to make disciples.
    </p>


    </CardContent>
</Card>
    </div>
  )
}

export default MenAbout;