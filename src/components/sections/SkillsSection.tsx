import React from 'react'
import { SKILLS_INFO } from '@/constants/user/skillsInfo'

function SkillsSection() {
  // Helper function to get skill proficiency level
  const getSkillColorClass = (skill: string): string => {
    const expert = SKILLS_INFO.proficiency.expert as readonly string[]
    const advanced = SKILLS_INFO.proficiency.advanced as readonly string[]
    const intermediate = SKILLS_INFO.proficiency.intermediate as readonly string[]
    
    if (expert.includes(skill)) {
      return 'bg-green-100 text-green-800'
    } else if (advanced.includes(skill)) {
      return 'bg-purple-100 text-purple-800'
    } else if (intermediate.includes(skill)) {
      return 'bg-yellow-100 text-yellow-800'
    }
    return 'bg-blue-100 text-blue-800'
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          My <span className="text-purple-600">Skills</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A comprehensive overview of my technical skills and expertise
        </p>
      </div>

      <div className="space-y-8">
        {Object.entries(SKILLS_INFO.categories).map(([category, skills]) => (
          <div key={category} className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => {
                const colorClass = getSkillColorClass(skill)

                return (
                  <span
                    key={index}
                    className={`px-3 py-2 rounded-full text-sm font-medium ${colorClass} hover:scale-105 transition-transform cursor-default`}
                  >
                    {skill}
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Proficiency Legend */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Proficiency Levels</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-green-100 border border-green-200 rounded"></span>
            <span className="text-sm text-gray-600">Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-purple-100 border border-purple-200 rounded"></span>
            <span className="text-sm text-gray-600">Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-yellow-100 border border-yellow-200 rounded"></span>
            <span className="text-sm text-gray-600">Intermediate</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-blue-100 border border-blue-200 rounded"></span>
            <span className="text-sm text-gray-600">Familiar</span>
          </div>
        </div>
      </div>

      {/* Skills Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="text-2xl font-bold text-purple-600">{SKILLS_INFO.proficiency.expert.length}</div>
          <div className="text-sm text-gray-600">Expert Skills</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="text-2xl font-bold text-blue-600">{SKILLS_INFO.proficiency.advanced.length}</div>
          <div className="text-sm text-gray-600">Advanced Skills</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="text-2xl font-bold text-green-600">{Object.keys(SKILLS_INFO.categories).length}</div>
          <div className="text-sm text-gray-600">Categories</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="text-2xl font-bold text-orange-600">
            {Object.values(SKILLS_INFO.categories).flat().length}
          </div>
          <div className="text-sm text-gray-600">Total Skills</div>
        </div>
      </div>
    </div>
  )
}

export default SkillsSection
