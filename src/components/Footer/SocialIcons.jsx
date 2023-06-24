import React from 'react'
import { GrInstagram, GrTwitter, GrLinkedin, GrFacebook } from 'react-icons/gr'

const ICONS = [
    GrInstagram,
    GrTwitter,
    GrLinkedin,
    GrFacebook
]

const SocialIcons = () => {
    return (
        <div className='text-white'>
            {ICONS.map((icon, idx) => {

                const Icon = ICONS[idx]

                return (
                    <span key={icon} className='p-2 cursor-pointer inline-flex items-center rounded-full bg-white text-violet-700 mx-1.5 text-xl hover:translate-y-[-10px] transition duration-200'>
                        <Icon />
                    </span>
                )
            })}
        </div>
    )
}

export default SocialIcons