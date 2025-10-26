"use client";
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="text-left mb-6">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-slate-600 text-sm">
            Last Updated:{" "}
            <time dateTime="2025-10-25" className="font-medium">
              October 25, 2025
            </time>
          </p>
          <div className="mt-4 w-24 h-1 bg-indigo-500 rounded-full " />
        </header>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8 sm:p-10">
          <section className="space-y-10 text-slate-700 leading-relaxed">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                1. Introduction
              </h2>
              <p>
                Welcome to <strong>Nouvi</strong> (“we,” “us,” “our,” or
                “Company”). We are committed to protecting your privacy and
                ensuring you have a positive experience on our platform. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our app and use our
                services.
              </p>
              <p>
                Please read this Privacy Policy carefully. If you do not agree
                with our policies and practices, please do not use our Services
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                2. Information We Collect
              </h2>
              <h3 className="text-lg font-semibold text-indigo-600 mt-4 mb-2">
                2.1 Information You Provide Directly
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Account Registration:</strong> Name, email, password,
                  profile picture, and business information (for service
                  providers).
                </li>
                <li>
                  <strong>Profile Information:</strong> Service categories,
                  pricing, availability, and location details.
                </li>
                <li>
                  <strong>Booking Information:</strong> Service dates, times,
                  locations, special requests, and booking preferences.
                </li>
                <li>
                  <strong>Payment Information:</strong> Billing address, payment
                  method details (processed securely through Stripe).
                </li>
                <li>
                  <strong>Communication:</strong> Messages, reviews, ratings,
                  feedback, and support inquiries
                </li>
                <li>
                  <strong>Verification Documents:</strong> ID verification,
                  business licenses, and certifications (for service providers).
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-indigo-600 mt-6 mb-2">
                2.2 Information Collected Automatically
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Location Data:</strong> GPS coordinates and location
                  information to help you find nearby service providers.
                </li>
                <li>
                  <strong>Cookies:</strong> Session cookies and persistent
                  cookies to enhance your experience.
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                3. How We Use Your Information
              </h2>
              <p>
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>To create and maintain your account</li>
                <li>To process bookings and payments securely</li>
                <li>To provide customer support and respond to inquiries</li>
                <li>
                  To send booking confirmations, reminders, and notifications
                </li>
                <li>
                  To display relevant service providers based on your location
                  and preferences
                </li>
                <li>
                  To facilitate reviews and ratings for trust and credibility
                </li>
                <li>To prevent fraud and enhance platform security</li>
                <li>To improve our services and user experience</li>
                <li>To comply with legal obligations and regulations</li>
                <li>To send service updates and important announcements</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                4. Data Sharing & Third Parties
              </h2>
              <p className="text-indigo-700 font-medium">
                🔒 Your Privacy is Our Priority
              </p>
              <p>
                <strong>
                  {" "}
                  We do NOT sell or share your personal data with third parties
                  for marketing.{" "}
                </strong>{" "}
                Your information remains confidential and is used solely to
                provide and improve our services.
              </p>

              <h3 className="text-lg font-semibold text-indigo-600 mt-4 mb-2">
                4.1 Limited Exceptions
              </h3>
              <p className="mb-1">
                We may share information only in the following limited
                circumstances:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Service Providers:</strong> With Stripe for secure
                  payment processing (subject to their privacy policies)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law,
                  court order, or government request
                </li>
                <li>
                  <strong>Platform Functionality:</strong> Service provider
                  information (name, rating, availability) is shared with
                  customers to facilitate bookings
                </li>
                <li>
                  <strong>Business Transfers:</strong> In case of merger,
                  acquisition, or sale of assets (with notice to you)
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                5. Payment Security
              </h2>
              <p>
                All payment transactions are processed securely through Stripe,
                a PCI-DSS compliant payment processor. We do not store your
                complete credit card information on our servers. Your payment
                details are encrypted and handled according to industry
                standards.
              </p>
              <p>
                For more information about Stripe&apos;s privacy practices,
                please visit their privacy policy at{" "}
                <a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 underline"
                >
                  stripe.com/privacy
                </a>
                .
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                6. Data Security
              </h2>
              <p>
                We implement comprehensive security measures to protect your
                personal information, including:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>SSL/TLS encryption for data in transit</li>
                <li>Secure password hashing and storage</li>
                <li>Regular security audits</li>
                <li>Access controls & authentication</li>
                <li>Firewalls and intrusion detection</li>
              </ul>
              <p>
                However, no method of transmission over the internet is 100%
                secure. While we strive to protect your information, we cannot
                guarantee absolute security.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                7. Your Privacy Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Access : Request a copy of your data.</li>
                <li>Correction : Update inaccurate information.</li>
                <li>Deletion : Request account removal.</li>
                <li>Opt-Out : Unsubscribe from marketing.</li>
                <li>
                  Data Portability : Request your data in a portable format.
                </li>
              </ul>
              <p>
                To exercise these rights, please contact us at{" "}
                <a
                  href="mailto:mainadmin@nouvi.org"
                  className="text-indigo-600 underline"
                >
                  mainadmin@nouvi.org
                </a>
                .
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                8. Data Retention
              </h2>
              <p>
                We retain your personal information for as long as necessary to
                provide our services and fulfill the purposes outlined in this
                policy. You can request deletion of your account at any time,
                and we will remove your data within 30 days, except where
                retention is required by law.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We will notify you of any material changes
                by posting the updated policy on our app and updating the
                &quot;Last Updated&quot; date. Your continued use of our
                services constitutes your acceptance of the updated policy.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                10. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or our privacy
                practices, please contact us:
              </p>
              <ul className="list-disc list-inside">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:mainadmin@nouvi.org"
                    className="text-indigo-600 underline"
                  >
                    mainadmin@nouvi.org
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a
                    href="tel:+15619083713"
                    className="text-indigo-600 underline"
                  >
                    +1 561 908 3713
                  </a>
                </li>
                <li>
                  Website:{" "}
                  <a
                    href="https://www.nouvi.org"
                    className="text-indigo-600 underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    nouvi.org
                  </a>
                </li>
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-6 text-sm text-slate-500">
              <p>© 2025 Nouvi. All rights reserved.</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
