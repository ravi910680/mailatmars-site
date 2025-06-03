"use client"

import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"


export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 px-6 bg-white">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-12">Effective Date: June 3, 2025</p>

          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
            <p>
              Mailatmars Technologies LLP (“Company,” “we,” “us,” or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>

            <h2>1. Information We Collect</h2>
            <ul>
              <li><strong>Personal Data:</strong> Name, email, phone number, payment info, business details</li>
              <li><strong>Automatically Collected:</strong> IP, browser/device info, cookies, usage logs</li>
              <li><strong>Service Data:</strong> Campaign activity, analytics, support tickets</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To operate and maintain the Services</li>
              <li>To provide support and process transactions</li>
              <li>To personalize your experience</li>
              <li>To send important updates and marketing communications (you can opt out)</li>
            </ul>

            <h2>3. Legal Basis for Processing (GDPR)</h2>
            <p>We process your data based on consent, contract fulfillment, legal compliance, and legitimate interest.</p>

            <h2>4. Data Sharing</h2>
            <p>We share data with trusted providers for hosting, payments, analytics, and legal compliance. We never sell your data.</p>

            <h2>5. International Data Transfers</h2>
            <p>Your information may be stored and processed in India, the US, or other jurisdictions. By using our services, you consent to this transfer.</p>

            <h2>6. Data Retention</h2>
            <p>We retain your data only as long as necessary for service provision or legal obligations.</p>

            <h2>7. Data Security</h2>
            <p>We use encryption, access control, and industry-standard safeguards. No system is 100% secure.</p>

            <h2>8. Your Rights</h2>
            <p>You may access, correct, delete, or limit use of your data. To do so, email <a href="mailto:sanket@mailatmars.com">sanket@mailatmars.com</a>.</p>

            <h2>9. Cookies</h2>
            <p>We use cookies for analytics and personalization. You can manage preferences in your browser or via our banner.</p>

            <h2>10. Children’s Privacy</h2>
            <p>We do not knowingly collect data from users under 18. If we learn we have, we will delete it promptly.</p>

            <h2>11. Changes to This Policy</h2>
            <p>We may update this policy. If we make significant changes, we will notify you via email or prominent notice.</p>

            <h2>12. Contact Us</h2>
            <p>
              Mailatmars Technologies LLP<br />
              1262 Sainagar Medankarwadi Chakan, Pune, Maharashtra 410501, India<br />
              Email: <a href="mailto:sanket@mailatmars.com">sanket@mailatmars.com</a><br />
              Phone: <a href="tel:+917016992938">(+91) 70169 92938</a>
            </p>
          </div>
        </section>

       
      </main>
      <Footer />
    </>
  )
}
