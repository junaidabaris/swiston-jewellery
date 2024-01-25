import React from 'react'

const LeftBannarIconImage = ({image,description,heading}) => {
  return (
    <>
     <div className=" container-fluid">
            <div className="row">
              <div className="col-4"><img src={image} alt="" /></div>

              <div className="col-8  headingIcon">
                <h2>{heading}</h2>
                <p>{description}</p>
              </div>
            </div>
            </div>
    </>
  )
}

export default LeftBannarIconImage