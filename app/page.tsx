"use client";
import React from "react";

export default function PrivacyPolicyPage() {
  const lastUpdatedDate = new Date().toLocaleDateString(); // Gets today's date

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
            <time dateTime={lastUpdatedDate} className="font-medium">
              {lastUpdatedDate}
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
                These General Terms and Conditions ("GTC") govern the use of the Waïzé mobile application, an advertisement platform available in Gabon.
              </p>
              <p>
                For any questions or complaints, please contact us at: <strong>waize@tech-center.com</strong>
              </p>
              <p>
                By accessing the application, you willingly accept these GTC. If you disagree with any part of the provisions, please do not use the application.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                2. Definitions
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Application:</strong> Waïzé, the mobile advertisement platform.</li>
                <li><strong>User:</strong> Anyone accessing the application, whether registered or not.</li>
                <li><strong>Seller:</strong> A user posting an advertisement to sell a product or service.</li>
                <li><strong>Buyer:</strong> A user consulting or responding to an advertisement.</li>
                <li><strong>Account:</strong> A personal profile created to manage ads and interactions.</li>
                <li><strong>Advertisement:</strong> Content posted by a user (text, images, videos, etc.) related to a product or service.</li>
                <li><strong>Content:</strong> All the information, data, and media posted by users.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                3. Access and Registration
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Access to the application is free via compatible smartphones.</li>
                <li>Registration is mandatory to post or respond to an advertisement.</li>
                <li>The user agrees to provide accurate and up-to-date information.</li>
                <li>Only one account is allowed per individual or entity, unless prior authorization is given.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                4. Use of Service
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Advertisements must be clear, legal, and related to products or services available in Gabon.</li>
                <li>It is strictly prohibited to post:
                  <ul className="list-inside space-y-1">
                    <li>Discriminatory, violent, or offensive content.</li>
                    <li>False or misleading advertisements.</li>
                    <li>Content infringing on the rights of a third party (photos, trademarks, etc.).</li>
                  </ul>
                </li>
                <li>Each advertisement must relate to a unique product or service.</li>
                <li>Interactions between users must remain respectful and free of harassment.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                5. Role and Responsibility of Waïzé
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Waïzé acts as an intermediary between users.</li>
                <li>The platform does not guarantee the truthfulness of the advertisements or the quality of the products offered.</li>
                <li>In case of a dispute between users, Waïzé's responsibility will not be engaged.</li>
                <li>Each user is solely responsible for their advertisements and transactions.</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                6. Moderation and Sanctions
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Waïzé reserves the right to remove any advertisement that does not comply with the GTC.</li>
                <li>Suspend or delete a user account in the case of repeated or severe non-compliance.</li>
                <li>Temporarily block access to certain features in the event of a report.</li>
                <li>No compensation will be provided for the deletion of a user account or content.</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                7. Personal Data
              </h2>
              <p>
                Waïzé collects data (email address, phone number, location, etc.) necessary for providing the service. This data is used for technical, commercial, or security purposes, in compliance with Gabonese law.
              </p>
              <p>
                The user may request access, correction, or deletion of their data by writing to: <strong>waize@tech-center.com</strong>
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                8. Data Sharing & Third Parties
              </h2>
              <p className="text-indigo-700 font-medium">
                🔒 Your Privacy is Our Priority
              </p>
              <p>
                We do NOT sell or share your personal data with third parties for marketing or any other purposes.
              </p>
              <h3 className="text-lg font-semibold text-indigo-600 mt-4 mb-2">
                8.1 Limited Exceptions
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Legal Requirements:</strong> If required by law, court order, or government request.</li>
              </ul>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                9. Contact Us
              </h2>
              <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
              <ul className="list-disc list-inside">
                <li>Email: <strong>waize@tech-center.com</strong></li>
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-6 text-sm text-slate-500">
              <p>© 2025 Waïzé. All rights reserved.</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
