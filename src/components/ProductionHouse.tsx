import disney from './../assets/images/disney.png'
import marvel from './../assets/images/marvel.png'
import nationlG from './../assets/images/nationalG.png'
import pixar from './../assets/images/pixar.png'
import starwar from './../assets/images/starwar.png'
import marvelV from './../assets/videos/marvel.mp4'
import disneyV from './../assets/videos/disney.mp4'
import nationlGV from './../assets/videos/national-geographic.mp4'
import startwarV from './../assets/videos/star-wars.mp4'
import pixarV from './../assets/videos/pixar.mp4'

const ProductionHouse = () => {
    const prodHouseList = [
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:1,
            image:marvel,
            video:marvelV
        },
        {
            id:1,
            image:nationlG,
            video:nationlGV
        },
        {
            id:1,
            image:pixar,
            video:pixarV
        },
        {
            id:1,
            image:starwar,
            video:startwarV
        },
    ]
  return (
    <div className='flex absolute gap-[30px] p-2 px-5 md:px-16'>
      {prodHouseList.map((item)=>(
        <div className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-gray-800'>
            <video src={item.video} autoPlay loop playsInline className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50'/>
            <img src={item.image} className='w-full z-[1]' />
        </div>
      ))}
    </div>
  )
}

export default ProductionHouse
