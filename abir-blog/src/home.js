import {useState} from 'react';
const Home = () => {
    // let name = "Abir Hasan"
const [name, setName] = useState('Abir');
    const ClickAgain = () =>{
          setName('Abir Hasan');
    }
const [age, setAge] = useState('None')
const ageTwo = () => {
    setAge(23);
    console.log(setAge);
}
return(
    <div className="Home">
   <h2>Home Page</h2>
   <p>{name}</p>
   <p>{age}</p>
   <button onClick={ageTwo}>Age</button>
   <button onClick={ClickAgain}>Click</button>
    </div>
)
}
export default Home;