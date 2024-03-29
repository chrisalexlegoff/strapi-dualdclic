import React from "react"
import Link from "next/link"
import LazyImage from "./../../lib/lazy-images"

const Methodologie = ({ methodologie, mission }) => {
  const imageDeco = LazyImage(
    methodologie.images.data[1].attributes,
    "Image de décoration mission prestation",
    "lazy",
    "",
    "",
    "lg:ml-10 w-3/4 mx-auto lg:w-auto lg:mx-0"
  )
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(80, 80, 80, 0.4), rgba(80, 80, 80, 0.4)),url(${
            process.env.NEXT_PUBLIC_API_URL +
            methodologie.images.data[0].attributes.url
          })`,
          backgroundPosition: "50%",
          backgroundSize: "cover",
        }}
        className="pt-20"
      >
        <div id="methodologie" className="grid max-w-9xl mx-auto text-center">
          <div
            className="mx-auto row-start-1 uppercase"
            dangerouslySetInnerHTML={{ __html: methodologie.titre2 }}
          ></div>
          <div className="h-[2px] bg-white mx-auto mt-6 w-1/12 row-start-2"></div>

          <div className="row-start-3 mx-auto py-16">
            <div
              className="mb-6 mx-auto"
              dangerouslySetInnerHTML={{ __html: methodologie.paragraphe }}
            ></div>
            <div
              className="mx-auto"
              dangerouslySetInnerHTML={{ __html: methodologie.paragrapheBis }}
            ></div>
          </div>
          <div className="row-start-4 w-full lg:w-3/4 mx-auto">
            <Link href="/demander-un-devis">
              <a>
                <button className="group hover:bg-rouge-orange h-20 w-3/4 lg:w-1/2 block rounded-lg border-2 border-blanc hover:border-rouge-orange mx-auto">
                  <span
                    dangerouslySetInnerHTML={{ __html: methodologie.button }}
                    className=" text-blanc group-hover:text-white"
                  />
                </button>
              </a>
            </Link>
          </div>
          <div className="h-20 grid grid-cols-2 lg:divide-x-2 lg:divide-white">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="methodologie-board mx-auto max-w-9xl hidden lg:block">
        <div className="h-20 grid grid-cols-2 divide-x-2 divide-vert">
          <div></div>
          <div></div>
        </div>
        {methodologie.board.map((item, index) =>
          index % 2 === 0 ? (
            <div key={item.id} className="mx-auto grid grid-cols-2">
              <div className="flex items-center col-start-2">
                {LazyImage(
                  item.icons.data[0].attributes,
                  `"icon-${index}`,
                  "lazy",
                  "40px",
                  undefined,
                  "-translate-x-1/2 h-[30px]"
                )}

                <div
                  className="uppercase"
                  dangerouslySetInnerHTML={{ __html: item.titre }}
                ></div>
              </div>
              <div className="flex divide-x-2 divide-vert col-span-2 h-[450px]">
                <div className="w-1/2">
                  <div
                    className="h-[300px] w-[300px] rounded-xl ml-auto mr-10 mt-6"
                    style={{
                      backgroundImage: `url(${
                        process.env.NEXT_PUBLIC_API_URL +
                        item.bg.data.attributes.url
                      })
                    `,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
                <div className="w-1/2 pl-6 pt-6 pr-40">
                  <div
                    className="p-6 bg-fond-gris rounded-xl"
                    dangerouslySetInnerHTML={{ __html: item.paragraphe }}
                  ></div>
                </div>
              </div>
            </div>
          ) : (
            <div key={item.id} className="mx-auto grid grid-cols-2">
              <div className="flex items-center justify-end">
                <div
                  className="uppercase"
                  dangerouslySetInnerHTML={{ __html: item.titre }}
                ></div>
                {LazyImage(
                  item.icons.data[0].attributes,
                  `"icon-${index}`,
                  "lazy",
                  "42px",
                  undefined,
                  "translate-x-1/2 h-[30px]"
                )}
              </div>
              <div className="flex divide-x-2 divide-vert col-span-2 h-[450px]">
                <div className="w-1/2 pr-6 pt-6 pl-40">
                  <div
                    className="p-6 bg-fond-gris rounded-xl"
                    dangerouslySetInnerHTML={{ __html: item.paragraphe }}
                  ></div>
                </div>

                <div className="w-1/2">
                  <div
                    className="h-[300px] w-[300px] rounded-xl mr-auto ml-10 mt-6"
                    style={{
                      backgroundImage: `url(${
                        process.env.NEXT_PUBLIC_API_URL +
                        item.bg.data.attributes.url
                      })
                    `,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="methodologie-board mx-auto max-w-9xl block lg:hidden pt-20">
        {methodologie.board.map((item, index) => (
          <div key={item.id} className="mx-auto">
            <div className="flex items-center justify-center mx-auto w-2/3">
              <div className="w-max">
                {LazyImage(
                  item.icons.data[0].attributes,
                  `"icon-${index}`,
                  "lazy",
                  "30px",
                  undefined,
                  "h-[30px] w-[30px]"
                )}
              </div>
              <div
                className="uppercase pl-4"
                dangerouslySetInnerHTML={{ __html: item.titre }}
              ></div>
            </div>
            <div
              className="min-h-[300px] h-auto w-3/4 rounded-xl mx-auto"
              style={{
                backgroundImage: `url(${
                  process.env.NEXT_PUBLIC_API_URL + item.bg.data.attributes.url
                })
                    `,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="flex items-center bg-prestation-methodologie-card-mobile h-full min-h-[300px] my-16">
                {" "}
                <div
                  className="p-10 text-center mx-auto"
                  dangerouslySetInnerHTML={{ __html: item.paragraphe }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="projet mx-auto max-w-9xl grid lg:grid-cols-2 lg:divide-x-2 lg:divide-vert justify-items-center lg:justify-items-stretch pt-10 lg:pt-0">
        <div className="flex lg:items-end flex-col lg:h-full items-center lg:justify-center pb-10 w-3/4 lg:w-full">
          <div
            className="uppercase text-center lg:text-right lg:w-2/3 w-3/4 lg:pr-10"
            dangerouslySetInnerHTML={{ __html: mission.titre2bis }}
          ></div>
          <div
            className="text-center lg:text-right w-3/4 lg:pr-10 my-10"
            dangerouslySetInnerHTML={{ __html: mission.paragraphe }}
          ></div>
          <div className="mt-10 lg:mt-0 w-full">
            <Link href="/demander-un-devis">
              <a>
                <button className="group bg-rouge-orange hover:bg-blanc h-20 md:w-1/2 w-full block rounded-lg border-2 border-blanc hover:border-rouge-orange mx-auto lg:mr-10">
                  <span
                    dangerouslySetInnerHTML={{ __html: mission.button }}
                    className=" text-blanc group-hover:text-rouge-orange"
                  />
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className="pb-10 flex lg:items-center lg:justify-start">
          {imageDeco}
        </div>
      </div>
    </>
  )
}

export default Methodologie
