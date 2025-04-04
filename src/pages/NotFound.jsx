import { Link } from 'react-router-dom'
import Ads from '../Components/Ads'
import Chatbot from "../Components/Chatbot";



export default function Example() {
  return (
    <>
      <Ads />
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-6xl lg:text-9xl font-bold text-companyRed">404</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/" className="rounded-md bg-companyRed px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-companyRed">
            Go back home
            </Link>
            <a href="#" className="text-sm font-semibold text-companyGrey">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <Chatbot />
      </main>
    </>
  )
}