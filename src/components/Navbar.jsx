import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import { Link } from 'react-router-dom'
import NameEntry from './NameEntry'


function Navbar() {

  const [buttonAppear, setButtonAppear] = useState(true)
  const location = useLocation()
  
  useEffect(() => {
    const playerName = localStorage.getItem('name');
    if (playerName) {
      setButtonAppear(true)
    } else {
      setButtonAppear(false)
    }
  });

  
  
  const navigation = [
    { name: 'Home', href: '/', current: true, visible: true },
    { name: 'Explore', href: '/explore', current: false, visible: buttonAppear },
    { name: 'Scores', href: '/scoreList', current: false, visible: buttonAppear },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  navigation.forEach((item) => {
    item.current = item.href === location.pathname
  })
  
  return (
    <Disclosure as="nav" id="navigation" className="bg-cyan-600 shadow-lg shadow-cyan-700">
      {({ open }) => (
        <>
          <div className="mx-2 max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 bg-cyan-500 hover:bg-cyan-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => item.visible && (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-cyan-500 text-cyan-50' : 'bg-cyan-600 text-cyan-50 hover:bg-cyan-500',
                          'rounded-md px-3 py-2 w-36 text-center text-lg font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => item.visible &&  (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    item.current ? 'bg-cyan-800 text-cyan-50' : 'text-cyan-300 hover:bg-cyan-700 hover:text-cyan-50',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )

}

export default Navbar;