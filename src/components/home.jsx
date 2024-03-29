
import Link from "next/link"
import { AvatarModal} from './ThreedModel'
export function HomePage() {
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
              Introduction to Web Application Development
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              A comprehensive session to kickstart your journey into web development.
            </p>
          </div>
        </div>
        <AvatarModal />
      </div>
    </section>
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container grid items-center gap-4 px-4 py-12 md:px-6 md:gap-8 lg:py-16">
          <div className="space-y-2 text-center md:space-y-5 md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Session Details</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Introduction to Web Application Development
              </h3>
              <div className="space-y-2 text-gray-500 md:text-base/relaxed lg:text-sm/relaxed dark:text-gray-400">
                <div className="space-y-1.5">
                  <p className="font-semibold">Overview:</p>
                  <ul className="list-disc list-inside">
                    <li>Brief history of web development.</li>
                    <li>Explanation of client-side vs server-side development.</li>
                  </ul>
                </div>
                <div className="space-y-1.5">
                  <p className="font-semibold">Components of a Web Application:</p>
                  <ul className="list-disc list-inside">
                    <li>Frontend: HTML, CSS, JavaScript.</li>
                    <li>Backend: Node.js, databases.</li>
                  </ul>
                </div>
                <div className="space-y-1.5">
                  <p className="font-semibold">Importance of Web Development:</p>
                  <ul className="list-disc list-inside">
                    <li>Exploring the vast opportunities in the field.</li>
                    <li>Growth potential and market demand.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Basics of HTML and CSS</h3>
                <div className="space-y-2 text-gray-500 md:text-base/relaxed lg:text-sm/relaxed dark:text-gray-400">
                  <div className="space-y-1.5">
                    <p className="font-semibold">HTML Fundamentals:</p>
                    <ul className="list-disc list-inside">
                      <li>Structure of an HTML document.</li>
                      <li>Tags, attributes, and elements.</li>
                      <li>
                        {`Commonly used tags: <div>, <p>, <h1>,
                                          <a>, etc.`}
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-1.5">
                    <p className="font-semibold">CSS Fundamentals:</p>
                    <ul className="list-disc list-inside">
                      <li>Introduction to Cascading Style Sheets.</li>
                      <li>Basic syntax: selectors, properties, values.</li>
                      <li>Applying styles: inline, internal, external CSS.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Hands-on Practice</h3>
                <p className="text-gray-500 md:text-base/relaxed lg:text-sm/relaxed dark:text-gray-400">
                  In this interactive session, you will get hands-on experience with creating a simple web page using
                  HTML and CSS. Our instructors will guide you through the process, and by the end of the session,
                  you&apos;ll have built your own webpage from scratch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="container grid items-center gap-4 px-4 py-12 md:px-6 md:gap-8 lg:py-16">
        <div className="space-y-4 text-center md:space-y-5 md:text-left lg:grid lg:gap-8 lg:grid-cols-[1fr_500px] lg:items-center lg:space-y-0">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Basics of HTML and CSS</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Join us for a deep dive into the world of web development. Whether you&apos;re a complete beginner or looking
              to expand your skills, this session will provide you with the knowledge and tools you need to create
              stunning websites.
            </p>
          </div>
          <div className="flex justify-center items-center gap-4 min-[400px]:justify-end">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
              href="#"
            >
              Join Session
            </Link>
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
              href="#"
            >
              Buy Tickets
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
