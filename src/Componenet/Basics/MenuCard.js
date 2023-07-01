import React from 'react'

const MenuCard = ({ menuData }) => {
  return (
    <>
    <section className='main-card--cointainer'>
      
      {menuData.map((curEle)=>{
        const { id,name,category,image,description} = curEle;
        return(
          <>
          <div className="card-container" key={id}>
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">{id}
            </span>
            <span className="card-author subtle" >{name}
            </span>
            <h2 className='card-title'>{name}</h2>
            <span className="card-description subtle">{description}
              In the last 20 years we have Just asked 2 minutes of your time”. The Brand which clearly comes to mind on first recall is Maggi Noodles. Maggi Noodles is manufactured by Nestle under instant noodles portfolio.
            </span>
            <div className="card-read">Read</div>

          </div>
          <img src={curEle.image} alt="images"   className='card-media'></img>
          <span className="card-tag subtle">Order Now</span>

        </div>
      </div>
      </>
        )
      })}
      </section>
      
    </>
  )
}

export default MenuCard