import { FC } from 'react'

type FooterProps = {
  //
}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className="flex h-[160px] w-full items-center justify-center border-t border-white/60 bg-[#FFBFA3]">
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <p>Copyright &copy; 2025 Roland Estropia Jr.</p>
        <p>All Rights Reserved</p>
        <div className="flex gap-2">
          <a
            className="link hover-transition"
            href="https://github.com/restropiajr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="link hover-transition"
            href="https://www.linkedin.com/in/restropiajr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="link hover-transition"
            href="https://restropiajr.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  )
}
