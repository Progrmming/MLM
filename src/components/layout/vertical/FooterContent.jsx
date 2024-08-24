'use client'

// Next Imports
import Link from 'next/link'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

const FooterContent = () => {
  // Hooks
  const { isBreakpointReached } = useVerticalNav()

  return (
    <div
      className={classnames(verticalLayoutClasses.footerContent, 'flex items-center justify-between flex-wrap gap-4')}
    >
      <p>
        <span>{`© ${new Date().getFullYear()}, Made with `}</span>
        <span>{`❤️`}</span>
        <span>{` by `}</span>
        <Link href={{pathname:'https://themeselection.com'}}  className='text-primary'>
          ThemeSelection
        </Link>
      </p>
      {!isBreakpointReached && (
        <div className='flex items-center gap-4'>
          <Link href={{pathname:'https://themeselection.com/license'}}  className='text-primary'>
            License
          </Link>
          <Link href={{pathname:'https://themeselection.com'}}  className='text-primary'>
            More Themes
          </Link>
          <Link href={{pathname:process.env.NEXT_PUBLIC_DOCS_URL}}  className='text-primary'>
            Documentation
          </Link>
          <Link
            href={{pathname: `https://github.com/themeselection/${process.env.NEXT_PUBLIC_REPO_NAME}/issues`}}
            className='text-primary'
          >
            Support
          </Link>
        </div>
      )}
    </div>
  )
}

export default FooterContent
