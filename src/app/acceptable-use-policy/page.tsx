"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"


export default function AcceptableUsePolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 px-6 bg-white">
        <section className="max-w-5xl mx-auto prose prose-sm sm:prose lg:prose-lg">
          <h1>Acceptable Use Policy</h1>
          <p><strong>Effective Date:</strong> June 3, 2025</p>

          <h2>1. PROHIBITED USES</h2>
          <p>You may not use our Services to engage in any activity that is illegal, harmful, or interferes with others use of the Services. Prohibited activities include, but are not limited to:</p>
          <ul>
            <li>Sending unsolicited bulk emails (spam), chain letters, or other mass messaging.</li>
            <li>Using the Services to transmit illegal, harmful, or offensive content (including hate speech, harassment, threats, or defamation).</li>
            <li>Uploading or distributing viruses, malware, spyware, or other harmful software.</li>
            <li>Attempting to gain unauthorized access to systems, data, passwords, or other accounts.</li>
            <li>Hosting or sharing content that violates copyright, trademark, or other proprietary rights.</li>
            <li>Interfering with or disrupting the integrity or performance of the Services.</li>
            <li>Operating any service that competes with Mailatmars using its infrastructure.</li>
          </ul>

          <h2>2. EMAIL MARKETING COMPLIANCE</h2>
          <p>You agree to comply with all applicable laws and regulations regarding email marketing, including:</p>
          <ul>
            <li>CAN-SPAM Act (USA)</li>
            <li>GDPR and ePrivacy Directive (EU)</li>
            <li>Indias IT Act and applicable data protection laws</li>
            <li>Ensuring recipients have opted-in to receive marketing emails</li>
            <li>Providing recipients with a clear and working unsubscribe mechanism</li>
            <li>Honoring unsubscribe requests promptly</li>
          </ul>

          <h2>3. SECURITY PRACTICES</h2>
          <p>You must not use the Services to:</p>
          <ul>
            <li>Circumvent security controls or exploit vulnerabilities</li>
            <li>Launch denial of service attacks or probe, scan, or test the vulnerability of any system</li>
            <li>Use compromised or fake credentials to access the Services</li>
          </ul>

          <h2>4. RESOURCE ABUSE</h2>
          <p>You may not:</p>
          <ul>
            <li>Use excessive bandwidth or storage that disrupts the Services for other users</li>
            <li>Create multiple accounts to bypass plan limits</li>
            <li>Resell or sub-license access to the Services without our written permission</li>
          </ul>

          <h2>5. ENFORCEMENT AND REPORTING</h2>
          <p>We reserve the right to investigate any violation of this Policy and to take appropriate action, which may include:</p>
          <ul>
            <li>Suspending or terminating your account without notice</li>
            <li>Removing content that violates this Policy</li>
            <li>Reporting violations to law enforcement when necessary</li>
          </ul>
          <p>To report a violation of this Policy, please contact: <a href="mailto:abuse@mailatmars.com">abuse@mailatmars.com</a></p>

          <h2>6. MODIFICATIONS</h2>
          <p>We may update this Acceptable Use Policy at any time. If we make material changes, we will notify users via email or our website. Your continued use of the Services after such modifications constitutes your acceptance of the new terms.</p>

          <h2>7. CONTACT INFORMATION</h2>
          <p>
            Mailatmars Technologies LLP<br />
            1262 Sainagar Medankarwadi Chakan, Pune, Maharashtra 410501, India<br />
            Email: <a href="mailto:support@mailatmars.com">support@mailatmars.com</a><br />
            Phone: <a href="tel:+917016992938">(+91) 70169 92938</a>
          </p>
        </section>
       
      </main>
      <Footer />
    </>
  )
}
