
import './App.css';
import Prenavbar from './components/Prenavbar';
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Slider from './components/Slider';
import data from './data/data.json';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct'
import Hotaccessoriesmenu from './components/Hotaccessoriesmenu'
import Hotaccessories from './components/Hotaccessories';
import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos'
import Banner from './components/Banner'
import Footer from './components/Footer';
import NavOptions from './components/NavOptions'
function App() {
  return (
    <Router>
        <Prenavbar/>
        <Navbar/>
        
        <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>

        <Slider start={data.banner.start}/>
        <Offers offer={data.offer}/>
        <Heading text="STAR PRODUCTS"/>
        <StarProduct starProduct={data.starProduct}/>
        <Heading text="HOT ACCESSORIES"/>
       <Hotaccessoriesmenu/>
       <Routes>
       <Route  path='/' element={
         <Hotaccessories music={data.hotAccessories.music} musicCover={data.hotAccessories.music} />
        } />
        <Route  path='/audio' element={
         <Hotaccessories music={data.hotAccessories.music} musicCover={data.hotAccessories.music} />
        } />
         <Route  path='/miphone' element={
         <Hotaccessories music={data.hotAccessories.music} musicCover={data.hotAccessories.music} />
        } />
          <Route  path='/redmiphone' element={
         <Hotaccessories music={data.hotAccessories.music} musicCover={data.hotAccessories.music} />
        } />
          <Route  path='/tv' element={
         <Hotaccessories music={data.hotAccessories.music} musicCover={data.hotAccessories.music} />
        } />
          <Route  path='/laptop' element={
         <Hotaccessories music={data.hotAccessories.music} musicCover={data.hotAccessories.music} />
        } />
          <Route  path='/accessories' element={
         <Hotaccessories music={data.hotAccessories.music} musicCover={data.hotAccessories.music} />
        } />
       <Route  path='/music' element={
         <Hotaccessories music={data.hotAccessories.music} musicCover={data.hotAccessories.music} />
        } />
       <Route  path='/smartDevice' element={
         <Hotaccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessories.smartDevice} />
       }/>
       <Route  path='/home' element={
         <Hotaccessories home={data.hotAccessories.home} homeCover={data.hotAccessories.home} />
       }/>
       <Route  path='/lifeStyle' element={
         <Hotaccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessories.lifeStyle} />
       }/>
       <Route  path='/mobileAccessories' element={
         <Hotaccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessories.mobileAccessories} />
       }/>
       </Routes>
       <Heading text="PRODUCT REVIEW"/>
        <ProductReviews productReviews={data.productReviews} />
       
        <Heading text="VIDEOS" />   
        <Videos videos={data.videos}/>
       <Heading text="IN THE PRESS" />
       <Banner banner={data.banner}/>

       <Footer footer={data.footer}/>
        </Router>
  );
}

export default App;
