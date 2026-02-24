import React from 'react';

const Calendar: React.FC = () => {
  return (
    <>
    <div className="pt-24 pb-12 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
    <iframe className="w-full h-128" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FSingapore&title=CCK%20Events&showPrint=0&showTitle=0&src=OGMzYjI5MzA4YmIyZjU4YjNiMWE0MTlhZjBmZWE2ODQ1MDIyYjEwOWE4OWY2NmYwZDczMTY0YTY2ZTdjZWVkMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uc2luZ2Fwb3JlI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23d81b60&color=%230b8043"  width="800" height="600"></iframe>
    
    <p className="text-center mt-4">Need to add an event to our calendar? Contact our admin.</p>
    </div>
    </>
  )
}

export default Calendar;