import { CONTACT_INFO } from '@/constants/user'
import React from 'react'

function DownloadButton() {
    return (
        <a
            href={CONTACT_INFO.cv}
            download
            className="w-full mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg transition-all duration-300 hover:border-white/40 flex items-center justify-center space-x-2 cursor-pointer text-center"
        >
            <span>Download CV</span>
        </a>
    )
}

export default DownloadButton