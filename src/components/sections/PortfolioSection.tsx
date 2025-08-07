'use client'

import SectionHeader from "../core/typography/SectionHeader"
import PortfolioList from "../portfolio/PortfolioList"
import SectionWrapper from "../wrapper/SectionWrapper"
import { PORTFOLIO_INFO } from "@/constants/user/portfolioInfo"


export default function PortfolioSection() {

  return (
   <SectionWrapper name="portfolio">
      <div className="space-y-8 w-full mx-auto pb-0 lg:pb-8">
        <SectionHeader
          blackText="My"
          coloredText="Portfolio"
          subtitle={PORTFOLIO_INFO.subTitle}
        />

        <PortfolioList />
      </div>
    </SectionWrapper>
  )
}
