const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)) 

const HomePage = async () => {
  await delay(2000)

  return ( 
   <div>Albion</div>
    
  )
}
 
export default HomePage