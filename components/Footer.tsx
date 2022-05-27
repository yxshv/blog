import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { SiDiscord } from  'react-icons/si'
import { HiMail } from 'react-icons/hi'

const Footer = () => {
  return (
    <div
        className="flex items-center flex-col gap-5"
    >
        Thanks for reading my blog!
        <div className="flex justify-center text-4xl gap-3">
            <Link href="https://github.com/kekda-py/">
                <a target="_blank">
                    <BsGithub />
                </a>
            </Link>
            <Link href="https://discord.com/users/753845980507537478/">
                <a target="_blank">
                    <SiDiscord />
                </a>
            </Link>
            <Link href="mailto:yashverma30115@gmail.com">
                <a>
                    <HiMail />
                </a>
            </Link>
        </div>
    </div>
  )
}

export default Footer