import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex flex-col space-y-8 justify-center items-center'>
      <nav className="w-full bg-white flex flex-row justify-center py-4">
        <h1 className="font-bold text-2xl w-1/3">
          Breathe Code Photo Feed
        </h1>
      </nav>

      {/* post 1 */}
      <div className="flex flex-col rounded-md w-1/3 bg-white">
        <div className="flex flex-row py-2 px-4 justify-between">
          <h1 className="font-bold">
            My First photo
          </h1>
          <p className="text-gray-300">
            2/5
          </p>
        </div>
        <Image 
          className="w-full h-[28rem]" 
          src={'/cats.jpg'} 
          alt={''}
          height={100}
          width={500}
        />
        <div className="p-4">
          I hope you like cats! This is a multi line comment for testing purposes. I am learning to code with <strong>#BreatheCode</strong>
        </div>
      </div>

      {/* post 1 */}
      <div className="flex flex-col rounded-md w-1/3 bg-white">
        <div className="flex flex-row py-2 px-4 justify-between">
          <h1 className="font-bold">
            I think you need more cats
          </h1>
          <p className="text-gray-300">
            2/5
          </p>
        </div>
        <Image 
          className="w-full h-[28rem]" 
          src={'/cats-2.jpg'} 
          alt={''}
          height={100}
          width={500}
        />
        <div className="p-4">
          Did I say i like cats? <strong>#BreatheCode</strong>
        </div>
      </div>

      {/* post 1 */}
      <div className="flex flex-col rounded-md w-1/3 bg-white">
        <div className="flex flex-row py-2 px-4 justify-between">
          <h1 className="font-bold">
            Tteokbokki
          </h1>
          <p className="text-gray-300">
            2/5
          </p>
        </div>
        <Image 
          className="w-full h-[28rem]" 
          src={'/food.jpg'} 
          alt={''}
          height={100}
          width={500}
        />
        <div className="p-4">
          I also like korean food <strong>#BreatheCode</strong>
        </div>
      </div>


    </main>
  )
}
