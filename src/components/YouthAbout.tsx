import React from 'react';
import { Card, CardContent } from './ui/card';

const YouthAbout: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <Card>
            <CardContent>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-6">
      BEING MOULDED & NURTURED TOGETHER

    </h4>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      In the youth ministry of Chapel of Christ the King, we have fellowship and meet regularly to bond and grow in Christ.

We are challenged to live out our Christian values of Faith, Hope and Love in our lives.
    </p>

    <div className="text-lg font-semibold mt-6">Our Mission</div>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
:: Love God with all our heart, soul, mind and strength (Deut 6:5)
    </p>

            <p className="leading-7 [&:not(:first-child)]:mt-6">
:: Love the body of Christ through fellowship, discipleship and service (1 Cor 12:27; Eph 1-13; Gal 5:13)

    </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
:: Love others by sharing the gospel and our lives (Matt 5:14-16; 29:18-20)

    </p>
    </CardContent>
</Card>
    </div>
  )
}

export default YouthAbout;