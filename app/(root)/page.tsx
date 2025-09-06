import { Button } from "@/components/ui/button"

const HomePage = () => {
  return ( 
    <>
      <div className='p-6 bg-support'>
        <h1 className='text-3xl text-light app-name'>Albion</h1>
      </div>
        <div className='mt-6 p-6'>
          <Button className='uppercase'>Login</Button>
        </div>
    </>
    
  )
}
 
export default HomePage