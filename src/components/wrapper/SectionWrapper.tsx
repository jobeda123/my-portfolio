import React from 'react'

function SectionWrapper({ children, name ="default"}: { children: React.ReactNode, name?: string }) {
  return (
    <section className={`${name}-section w-full max-w-full relative text-gray-900 lg:h-screen h-full lg:overflow-visible overflow-y-auto pb-8 lg:py-8`}>
        {children}
    </section>
  )
}

export default SectionWrapper