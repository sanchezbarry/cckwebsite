import React from 'react';
import { Card, CardContent } from './ui/card';

const DataDeletion: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <Card>
            <CardContent>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-6">
      Data Deletion Instructions

    </h4>
    <p className="leading-7 not-first:mt-6">
      Chapel Of Christ The King – Singapore
Last Updated: 29/01/2026

Chapel Of Christ The King respects your privacy and is committed to protecting your personal data.

If you have interacted with our website, applications, or services (including through Facebook or other Meta platforms) and wish to request the deletion of your personal data, you may do so by following the instructions below.
    </p>

    <div className="text-lg font-semibold mt-6">How to Request Data Deletion</div>

        <p className="leading-7 not-first:mt-6">
To request the deletion of your personal data, please contact us via email:

📧 Email: administrator@cck.org.sg

In your email, please include:

Your full name
The email address or identifier you used to interact with us
A clear statement that you are requesting deletion of your personal data
</p>


  <div className="text-lg font-semibold mt-6">What Happens Next</div>
            <p className="leading-7 not-first:mt-6">
Upon receiving your request:

We will verify your identity where necessary
We will delete or anonymise your personal data from our records, unless retention is required by law or legitimate church operational needs
We will respond to your request within a reasonable timeframe
    </p>

      <div className="text-lg font-semibold mt-6">Questions</div>
            <p className="leading-7 not-first:mt-6">
We may use your personal data to:

If you have any questions about this process or how your data is handled, please contact us at the same email address above.

    </p>

  
    </CardContent>
</Card>
    </div>
  )
}

export default DataDeletion;