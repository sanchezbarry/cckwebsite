import React from 'react';
import { Card, CardContent } from './ui/card';

const ChaplaincyAbout: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <Card>
            <CardContent>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-4">
      Who we are


    </h4>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
The Chaplaincy partners St Margaret's Primary School and is committed to nurturing the spiritual well-being and growth of Christian pupils as well as those who are interested in the Christian faith.  We believe the key to developing sound moral values and character in the young in a fast-changing world is to know and hold onto a God-centered worldview.

    </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
The Chaplaincy to St Margaret’s Primary School exists to provide spiritual care and education to the girls.
We are involved in the:

Chapel programme
Recess ministry
P5/6 camps
Assist with the Girl’s Brigade programme and camps
Please get in touch with us if you should have any questions or need any spiritual support.
    </p>

            <p className="leading-7 [&:not(:first-child)]:mt-6">
All are welcome!

    </p>
    </CardContent>
</Card>
    </div>
  )
}

export default ChaplaincyAbout;