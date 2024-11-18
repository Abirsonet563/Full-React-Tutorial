const Home = () => {
    const handleClick = (e) => {
        console.log('hi',e);
      }
    const handleClickAgain = (name, e) => {
        console.log(`Hi ${name}`, e.target)
    }  
return(
    <div className="Home">
   <h2>Home Page</h2>
   <button onClick={handleClick}>Click</button>
   <button onClick={(e)=>
    handleClickAgain('Abir', e)}>Click Me</button>
    </div>
)
}
export default Home;