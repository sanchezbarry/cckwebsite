import React from 'react';
import { Card, CardContent } from './ui/card';

const PrivacyText: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <Card>
            <CardContent>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-6">
      Privacy Policy

    </h4>
    <p className="leading-7 not-first:mt-6">
      Chapel Of Christ The King – Singapore
Effective Date: 29/01/2026
Contact: administrator@cck.org.sg
    </p>

    <div className="text-lg font-semibold mt-6">1. Introduction</div>

        <p className="leading-7 not-first:mt-6">
Chapel Of Christ The King (“we”, “us” or “the Church”) respects your privacy and is committed to safeguarding your personal data. This Privacy Policy explains how we collect, use, disclose, retain and transfer your personal information, and your rights in relation to that information, including when you interact with us through our website, mobile applications, events, or when using Facebook/Meta tools such as Facebook Login, Facebook Pixel, or social plugins.    </p>
  <div className="text-lg font-semibold mt-6">2. Personal Data We Collect</div>
            <p className="leading-7 not-first:mt-6">
We may collect personal information that you voluntarily provide, such as:

Contact information: name, email address, postal address, phone number
Demographic information: age range, gender (if voluntarily provided)
Church engagement data: event registrations, ministry group participation
Online identifiers: IP address, cookies, pixels (including Meta/Facebook Pixel)
Social media credentials: when you authenticate using Facebook Login
We do not collect personal information that is unnecessary for our ministries or services.
    </p>

      <div className="text-lg font-semibold mt-6">3. How We Use Personal Data</div>
            <p className="leading-7 not-first:mt-6">
We may use your personal data to:

Provide, operate and improve our services and events
Communicate with you (updates, newsletters, event reminders)
Process registrations or donations
Understand usage patterns via analytics tools including Meta tools
Comply with legal obligations

    </p>

          <div className="text-lg font-semibold mt-6">4. Sharing Data With Third Parties</div>
            <p className="leading-7 not-first:mt-6">
We may share your information with:

Service providers (e.g., database hosts, event management providers)
Meta Platforms (Facebook/Instagram) to support analytics and advertising when you interact with our site or apps [e.g., through Facebook Pixel]. Meta may process it according to its own privacy policy.
Legal authorities where required by law
We do not sell your personal data to third parties.

    </p>


              <div className="text-lg font-semibold mt-6">5. Meta / Facebook Tools & Data</div>
            <p className="leading-7 not-first:mt-6">
We may use Meta (Facebook) business tools such as:

Facebook Login — to simplify authentication
Facebook Pixel or Conversions API — to support analytics and ad measurement
These tools may collect browser/device information and share it with Meta. Data processed by Meta may be used by Meta according to their own privacy policy. Users may manage or opt out of personalised ads via Meta settings.
    </p>

                  <div className="text-lg font-semibold mt-6">6. Cookies and Tracking</div>
            <p className="leading-7 not-first:mt-6">
We use cookies and similar tracking technologies to:

Analyse usage patterns
Personalise content
Support Facebook/Meta analytics
Users may control cookie settings through their browser or device settings.
    </p>

                      <div className="text-lg font-semibold mt-6">7. Data Retention</div>
            <p className="leading-7 not-first:mt-6">
We retain personal data only for as long as needed to fulfil the purposes described in this policy or as required by law.
    </p>


                          <div className="text-lg font-semibold mt-6">8. Your Rights</div>
            <p className="leading-7 not-first:mt-6">
Depending on applicable laws (e.g., GDPR/PDPA), you may have rights to:

Access, update or delete your personal data
Object to processing
Withdraw consent
To exercise your rights, please contact us at the details above.
    </p>


                              <div className="text-lg font-semibold mt-6">9. Security</div>
            <p className="leading-7 not-first:mt-6">
We use reasonable technical and organisational measures to protect your data.


    </p>


                                  <div className="text-lg font-semibold mt-6">10. Changes to This Policy
</div>
            <p className="leading-7 not-first:mt-6">
We may update this policy periodically. The latest version is posted on our website with the effective date.




    </p>
    </CardContent>
</Card>
    </div>
  )
}

export default PrivacyText;