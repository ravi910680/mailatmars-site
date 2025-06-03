import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import TemplateBuilder from "@/components/TemplateBuilder"
import Footer from "@/components/Footer"
import CallToAction from "@/components/CallToAction"
import CampaignImproveSection from "@/components/CampaignImprove"
import TargetAudienceSection from "@/components/TargetAudienceSection"
import TrackMetricsSection from "@/components/TrackMetricsSection"
import WhyMailatMarsBetter from "@/components/WhyMailatMarsBetter"


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <TemplateBuilder />
        <CampaignImproveSection />
        <TargetAudienceSection />
        <TrackMetricsSection />
        <WhyMailatMarsBetter />
        
        {/* Additional Features Section */}

        {/* Call to Action Section */}
        
        
        <CallToAction />

        <Footer /> 
        
       
      </main>
    </>
  )
}
