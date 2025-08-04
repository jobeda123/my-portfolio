import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { PROFILE_ALT_TEXT, PROFILE_IMAGE } from '@/constants/user/basicInfo'

function ProfileImage({ className = "", isBadge=false }) {
    if (!PROFILE_IMAGE) {
        return null
    }

    return (
        <div className={cn("relative w-28 h-28 lg:h-32 lg:w-32 mx-auto mb-4", className)}>
            <div className={cn("w-full h-full rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 p-1",{
                'p-0.5': isBadge,
            })}>
                <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image
                        src={PROFILE_IMAGE}
                        alt={PROFILE_ALT_TEXT}
                        fill
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default ProfileImage