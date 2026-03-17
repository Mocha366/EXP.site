import Image from "next/image"
import Link from "next/link"
import { Twitter, Instagram, Github } from "lucide-react"

const socialLinks = [
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "GitHub", href: "#", icon: Github },
]

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Activities", href: "#activities" },
  { name: "Join", href: "#join" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image
              src="/images/exp-logo.svg"
              alt="EXP. Logo"
              width={100}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-background/70 text-sm text-center md:text-left">
              Experience Point Circle<br />
              プログラミングサークル
            </p>
          </div>

          <nav className="flex gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} EXP. - Experience Point Circle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
