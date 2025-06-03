"use client"

import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"


export default function LegalPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20  bg-white">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Legal Terms & Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-12">
            Last updated: June 3, 2025
          </p>

          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
            <h2>Agreement to Our Legal Terms</h2>
            <p>
              We are Mailatmars Technologies LLP (Company,we, us,our), a company registered in India at 1262 Sainagar Medankarwadi Chakan, Pune, Maharashtra 410501.
            </p>
            <p>
              We operate the website <a href="https://mailatmars.com" className="text-[#6c3cbe]">https://mailatmars.com</a> and any related products or services that refer to these legal terms (the Services).
            </p>
            <p>
              These Legal Terms constitute a legally binding agreement between you and Mailatmars Technologies LLP. By accessing or using our Services, you agree to these terms.
              If you do not agree, you must discontinue use of our Services immediately.
            </p>

            <h2>1. Our Services</h2>
            <p>
              We provide a SaaS-based email marketing software solution to help increase ROI and conversions with attractive designs and easy-to-use campaign scheduling tools.
              Services are intended for users who are at least 18 years old.
            </p>

            <h2>2. Intellectual Property Rights</h2>
            <p>
              We own or license all intellectual property rights in our Services. You may access the Services for personal or internal business use only.
              Commercial exploitation is prohibited without written permission.
            </p>

            <h2>3. User Representations</h2>
            <p>
              By using the Services, you agree that all information you provide is accurate and that your use will not violate any applicable law or regulation.
            </p>

            <h2>4. Registration and Subscriptions</h2>
            <ul>
              <li>You may need to register and maintain accurate account information.</li>
              <li>Subscriptions auto-renew unless canceled before the renewal date.</li>
              <li>We offer a 30-day free trial. Afterward, a paid subscription is required.</li>
              <li>All payments are non-refundable and billed in USD.</li>
            </ul>

            <h2>5. Prohibited Activities</h2>
            <p>
              You agree not to use the Services in a way that is unlawful, abusive, or infringes on others rights. This includes uploading malicious code, impersonating users, sending spam, or scraping data.
            </p>

            <h2>6. Data, Privacy & Support</h2>
            <p>
              By using our Services, you consent to our data practices outlined in our <a href="/company/privacy" className="text-[#6c3cbe]">Privacy Policy</a>.
              We offer Email & Chat Support across all plans. Premium users also receive WhatsApp and Call support.
            </p>

            <h2>7. Governing Law & Arbitration</h2>
            <p>
              These terms are governed by Indian law. Disputes will be resolved via arbitration seated in Pune, India, under the European Arbitration Chamber.
            </p>

            <h2>8. Termination</h2>
            <p>
              We may suspend or terminate your access at our discretion if you violate these terms or applicable laws.
            </p>

            <h2>Contact Us</h2>
            <p>
              Mailatmars Technologies LLP<br />
              1262 Sainagar Medankarwadi Chakan, Pune, Maharashtra 410501, India<br />
              Phone: <a href="tel:+917016992938" className="text-[#6c3cbe]">(+91) 70169 92938</a><br />
              Email: <a href="mailto:sanket@mailatmars.com" className="text-[#6c3cbe]">sanket@mailatmars.com</a>
            </p>
          </div>
        </section>

        
      </main>
      <Footer />
    </>
  )
}
