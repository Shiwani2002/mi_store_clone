import React from 'react'
import "../styles/Prenavbar.css"
const cart=<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
const Prenavbar = () => {
  return (
    <div className='prenav'>
      <div>
        <a href='https://www.mi.com/in/'>MI INDIA</a><span>|</span>
        <a href='https://www.mi.com/in/discover/'>GET MI STORE APP</a><span>|</span>
        <a href='https://www.mi.com/in/support/'>ONLINE HELP</a><span>|</span>
        <a href='https://www.mi.com/in/store/'>RETAIL STORE ~</a>
      </div>
      <div>
      <a href='https://account.xiaomi.com/fe/service/login/password?_locale=en_IN&checkSafePhone=false&sid=i18n_in_pc_pro&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fstore.mi.com%25252Fin%25252Flogin%25252Fcallback%25253Ffollowup%25253Dhttps%2525253A%2525252F%2525252Fwww.mi.com%2525252Fin%2525252F%252526sign%25253DYWY1OGE5MmVkNWU0OWVmN2E1ZTUzNzhiOTY2OGVkMDU5ZDljNGRkNQ%25252C%25252C%2526sid%253Di18n_in_pc_pro%2526_locale%253Den_IN%2526checkSafePhone%253Dfalse&callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%252F%26sign%3DYWY1OGE5MmVkNWU0OWVmN2E1ZTUzNzhiOTY2OGVkMDU5ZDljNGRkNQ%2C%2C&_sign=y2X%2BJ2N3%2Fvyraa65wFdQfKWnXao%3D&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&showActiveX=false&theme=&needTheme=false&bizDeviceType='>SIGN IN</a><span>|</span>
        <a href='https://in.account.xiaomi.com/fe/service/register?bizDeviceType=&theme=&needTheme=false&showActiveX=false&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&_locale=en_IN&checkSafePhone=false&_sign=y2X%2BJ2N3%2Fvyraa65wFdQfKWnXao%3D&source=&region=IN&sid=i18n_in_pc_pro&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fstore.mi.com%25252Fin%25252Flogin%25252Fcallback%25253Ffollowup%25253Dhttps%2525253A%2525252F%2525252Fwww.mi.com%2525252Fin%2525252F%252526sign%25253DYWY1OGE5MmVkNWU0OWVmN2E1ZTUzNzhiOTY2OGVkMDU5ZDljNGRkNQ%25252C%25252C%2526sid%253Di18n_in_pc_pro&callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%252F%26sign%3DYWY1OGE5MmVkNWU0OWVmN2E1ZTUzNzhiOTY2OGVkMDU5ZDljNGRkNQ%2C%2C&_uRegion=IN'>SIGN UP</a><span>|</span>
        <a href='https://store.mi.com/in/cart'>{cart} CART(0)</a>
      </div>
    </div>
  )
}

export default Prenavbar