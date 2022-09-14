import React from "react"

const IntroPresentation = ({ introPresentation }) => {
  return (
    <div className="bg-[#41EAD4] text-white text-center pb-16 xl:pb-40 pt-20">
      <div className="max-w-9xl mx-auto grid items-center text-center  grid-auto-row">
        <div className="mx-auto">
          <div
            className="text-center uppercase w-3/4 lg:w-2/3 mx-auto mb-12"
            dangerouslySetInnerHTML={{ __html: introPresentation.titre3 }}
          ></div>
          <div className="h-[2px] bg-[#FC5050] w-1/3 mx-auto mt-6"></div>
        </div>
        <div
          className="mx-auto text-[#FC5050] lg:my-12 my-6"
          dangerouslySetInnerHTML={{ __html: introPresentation.titre4 }}
        ></div>
        <div
          className="mx-auto lg:w-2/3 xl:w-1/2 w-3/4 text-left my-6"
          dangerouslySetInnerHTML={{ __html: introPresentation.paragraphe }}
        ></div>
        <div
          className="mx-auto uppercase w-3/4 my-10"
          dangerouslySetInnerHTML={{ __html: introPresentation.titre4bis }}
        ></div>
        <div
          className="mx-auto"
          dangerouslySetInnerHTML={{ __html: introPresentation.titre5 }}
        ></div>
      </div>
    </div>
  )
}

export default IntroPresentation
