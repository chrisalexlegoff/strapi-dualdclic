import Link from "next/link"
import React from "react"
import { useState } from "react"
import LazyImage from "./../lib/lazy-images"
import { useRouter } from "next/router"
import client from "./../lib/apollo-client"
import { gql } from "@apollo/client"

export const Navbar = ({ logo, hamburger }) => {
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)

  const router = useRouter()

  function getLogo(path) {
    let regex = new RegExp("(#)")
    let regexQuery = new RegExp("(\\?)")
    if (regex.test(path)) {
      path = path.split("#")[0]
    } else if (regexQuery.test(path)) {
      path = path.split("?")[0]
    }
    if (path == "/" || path == "/contact") {
      let numberDesktop = 3
      let numberMobile = 5
      let numberHamburger = 2
      return { numberDesktop, numberMobile, numberHamburger }
    } else if (path == "/about" || path == "/demander-un-devis") {
      let numberDesktop = 0
      let numberMobile = 4
      let numberHamburger = 3
      return { numberDesktop, numberMobile, numberHamburger }
    } else if (path == "/nos-prestations") {
      let numberDesktop = 2
      let numberMobile = 1
      let numberHamburger = 1
      return { numberDesktop, numberMobile, numberHamburger }
    } else {
      let numberDesktop = 3
      let numberMobile = 5
      let numberHamburger = 2
      return { numberDesktop, numberMobile, numberHamburger }
    }
  }

  const newLogoDesktop = LazyImage(
    logo.data[getLogo(router.asPath).numberDesktop].attributes,
    "logo dualdclic",
    "lazy"
  )
  const newLogoMobile = LazyImage(
    logo.data[getLogo(router.asPath).numberMobile].attributes,
    "logo dualdclic",
    "lazy",
    "40px"
  )
  const newHamburger = LazyImage(
    hamburger.data[getLogo(router.asPath).numberHamburger].attributes,
    "logo dualdclic",
    "lazy",
    "30px"
  )

  const newCloseMenu = LazyImage(
    hamburger.data[0].attributes,
    "logo dualdclic",
    "lazy"
  )

  const handleClick = () => {
    setActive(!active)
    setOpen(!open)
  }

  const activeClass =
    "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-[#4087FF] font-light items-center justify-center"
  const classNormal =
    "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-[#3F3F3F] font-light items-center justify-center hover:text-[#4087FF]"

  return (
    <nav className="bg-[#FAFAFB]/95 p-3 fixed w-full z-10">
      <div className="max-w-7xl mx-auto flex items-center flex-wrap">
        <Link href="/" className="hidden lg:block">
          <a className="hidden p-2 mr-4 lg:block w-[150px]">{newLogoDesktop}</a>
        </Link>
        <Link href="/" className="block lg:hidden ">
          <a className="block p-2 mr-4 lg:hidden">{newLogoMobile}</a>
        </Link>

        <button
          className=" inline-flex p-3 lg:hidden text-white ml-auto"
          onClick={handleClick}
        >
          {!open ? newHamburger : newCloseMenu}
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/about">
              <a
                className={
                  router.pathname == "/about" ? activeClass : classNormal
                }
              >
                {router.pathname == "/about" ? "{ A propos }" : "A propos"}
              </a>
            </Link>
            <Link href="/nos-prestations">
              <a
                className={
                  router.pathname == "/nos-prestations"
                    ? activeClass
                    : classNormal
                }
              >
                {router.pathname == "/nos-prestations"
                  ? "{ Nos prestations }"
                  : "Nos prestations"}
              </a>
            </Link>
            <Link href="/nos-realisations">
              <a
                className={
                  router.pathname == "/nos-realisations"
                    ? activeClass
                    : classNormal
                }
              >
                {router.pathname == "/nos-realisations"
                  ? "{ Nos réalisations }"
                  : "Nos réalisations"}
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={
                  router.pathname == "/contact" ? activeClass : classNormal
                }
              >
                {router.pathname == "/contact"
                  ? "{ Nous contacter }"
                  : "Nous contacter"}
              </a>
            </Link>
            <Link href="/demander-un-devis">
              <a
                className={
                  router.pathname == "/demander-un-devis"
                    ? activeClass
                    : "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-[#FC5050] font-light items-center justify-center hover:text-[#4087FF]"
                }
              >
                {router.pathname == "/demander-un-devis"
                  ? "{ Demander un devis }"
                  : "Demander un devis"}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Home {
        logo {
          data {
            id
            attributes {
              logo {
                data {
                  attributes {
                    url
                    width
                    height
                  }
                }
              }
            }
          }
        }
        hamburger {
          data {
            id
            attributes {
              hamburger {
                data {
                  attributes {
                    name
                    url
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    `,
  })
  return {
    props: {
      logo: data.logo.data.attributes.logo,
      hamburger: data.hamburger.data.attributes.hamburger,
    },
  }
}
