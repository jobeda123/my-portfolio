import React from 'react'

function DefaultSection({ sectionId }: { sectionId: string }) {
  return (
    <div className="text-center py-16">
      <h1 className="text-xl lg:text-3xl font-bold text-gray-900 mb-2 lg:mb-3">
        {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)} Section
      </h1>
      <p className="text-gray-600 text-sm lg:text-base">
        This section is coming soon! The component for &quot;{sectionId}&quot; hasn&apos;t been created yet.
      </p>
    </div>
  )
}

export default DefaultSection