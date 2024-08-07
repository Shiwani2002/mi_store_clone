import React from 'react'
import HotItemCard from './HotItemCard';
import '../styles/Hotaccessories.css'
const Hotaccessories = ({music,musicCover,smartDevice,smartDeviceCover,home,homeCover,lifeStyle,lifeStyleCover,mobileAccessories,mobileAccessoriesCover}) => {
  return (
    <div  className="HotAccessories">

    <div>
     <img src="https://www.bajajmall.in/content/dam/emistoremarketplace/index/20-03-24/4/summer-sale-9-pages-changes/mi-bp/slider/MIBP_Slider_3_MOB_xiaomi13pro256gbstorageceramicwhite12gbramsmartphone_PDP_B2B.jpg" alt="Cover" />
  </div>
  

  {/* -----------2nd */}
  <div>
  {music && music.map((item,index)=>(
   <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
         
  ))}
  {smartDevice && smartDevice.map((item,index)=>(
   <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
         
  ))}
  {home && home.map((item,index)=>(
   <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
         
  ))}

  {lifeStyle && lifeStyle.map((item,index)=>(
   <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
         
  ))}

  {mobileAccessories && mobileAccessories.map((item,index)=>(
   <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
         
  ))}

<HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />

  </div>

</div>
  )
}

export default Hotaccessories