
import Link from "next/link"
export function FirstDay() {
  return (
    <>
      <div className="bg-gray-50/90 border-b border-gray-200 dark:border-gray-800">
        <div className="container px-4 md:px-6">
          <header className="flex items-center justify-between h-[60px]">
            <Link className="flex items-center space-x-2 text-xl font-semibold" href="#">
              <span>JS Conf</span>
            </Link>
            <nav className="hidden space-x-4 text-base md:flex">
              <Link
                className="font-medium transition-colors hover:underline hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Schedule
              </Link>
              <Link
                className="font-medium transition-colors hover:underline hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Speakers
              </Link>
              <Link
                className="font-medium transition-colors hover:underline hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Workshops
              </Link>
              <Link
                className="font-medium transition-colors hover:underline hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Venue
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link
                className="font-medium transition-colors hover:underline hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Login
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                href="#"
              >
                Buy Tickets
              </Link>
            </div>
            <button className="md:hidden">
              <MenuIcon className="w-6 h-6" />
              <span className="sr-only">Toggle Menu</span>
            </button>
          </header>
        </div>
      </div>
      <section className="container grid items-center gap-4 px-4 py-12 md:px-6 md:gap-8 lg:py-16 ">
      <div className="flex justify-between">
        <div className="space-y-4 text-left md:space-y-5 lg:grid lg:gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-4xl/relaxed">
                 Introduction to HTML
            </h1>
            
          </div>
        </div>
       
      </div>
    </section>
     
      <div className="bg-gray-900">
        <div className="container grid items-center gap-4 px-4 py-12 md:px-6 md:gap-8 lg:grid-cols-2 lg:py-16">
          <div className="space-y-2 text-center lg:col-start-2 lg:text-right lg:space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-4xl/relaxed lg:text-5xl" style={{color: 'wheat'}}>
              Ready to take your first step into the world of web development?
            </h2>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
              href="https://ribbon-snout-868.notion.site/Introduction-to-Web-Development-HTML-CSS-JavaScript-6bdcf09dff804ed2a1abf555c7986e7e?pvs=4"
            >
             Learn More
            </Link>
          </div>
        </div>
      </div>
      <footer className="bg-gray-50/90 border-t border-gray-200 dark:border-gray-800">
        <div className="container grid items-center gap-8 px-4 py-12 md:grid-cols-2 md:px-6 md:py-16 lg:gap-10">
          <div className="space-y-4">
            <Link className="flex items-center space-x-2 text-xl font-semibold" href="#">
              <span>JS Conf</span>
            </Link>
            <p className="text-sm tracking-tighter/0.05rem text-gray-500 dark:text-gray-400">
              Bringing the world&apos;ms best JavaScript and web development minds together for 3 days of learning,
              connecting, and sharing.
            </p>
          </div>
          <div className="flex items-center justify-end space-x-4 text-center md:space-x-6 md:text-left">
            <div className="space-y-1">
              <Link
                className="font-medium transition-colors hover:underline hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Schedule
              </Link>
              <Link
                className="font-medium transition-colors hover:underline hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Speakers
              </Link>
              <Link
                className="font-medium transition-colors hover:underline hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Workshops
              </Link>
              <Link
                className="font-medium transition-colors hover:underline hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Venue
              </Link>
            </div>
            <div className="space-y-1">
              <Link
                className="font-medium transition-colors hover:underline hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Privacy
              </Link>
              <Link
                className="font-medium transition-colors hover:underline hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
