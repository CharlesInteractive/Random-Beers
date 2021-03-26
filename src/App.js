import {useState, useEffect} from 'react';
import BeerInfo from './components/BeerInfo';

function App() {
  const [beer, setBeer] = useState(),
        [error, setError] = useState(null),
        [isLoaded, setIsLoaded] = useState(false),
        [getUpdate, setGetUpdate] = useState(false)
  
  const getBeerData = () => {
    fetch('https://api.punkapi.com/v2/beers/random', {method: "GET"})
      .then( response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.statusText)
        }
      })
      .then( result => {
        console.log(result[0])
        setBeer(result[0])
        setIsLoaded(true)
      })
      .catch((error) => {
        setError(error)
        setIsLoaded(true)
      });
  }

  useEffect(()=>{
    getBeerData()
  },[getUpdate])  

  const updateBeer = () => {
    setIsLoaded(false)
    setGetUpdate(!getUpdate);
  }

  return (
    <div className="app bg-cover bg-no-repeat bg-center bg-fixed" style={{backgroundImage: `URL(img/bg.jpg)`}}>
      <main className="p-2 min-h-screen mx-auto pt-20 max-w-screen-lg">
        <img className="m-auto w-175 block" src="/img/logo.png" alt="logo" />
        <h2 className="text-center">Random Beer Generator</h2>
        <button className="bg-gray-900 hover:bg-gray-600 text-white py-2 px-4 rounded mx-auto block uppercase mt-5 mb-5 transition-colors" onClick={updateBeer}>Get A New Beer</button>
        {(isLoaded) ? (
          <>
            {(error) ? (
                <h3 className="text-center mt-5">Fuck, Error: {error.message}</h3>
            ) : (
                <BeerInfo beer={beer} />
            )}
          </>
        ) : (
          <h3 className="text-center mt-5">Loading Beer</h3>
        )}
        
      </main>
      <footer className="bg-gray-900 p-5">
        <p className="text-white text-center"><em>This site was created as a React JS study project using <strong><a href="https://punkapi.com/">Punk API</a></strong> and is no way affiliated with BrewDog</em></p>
      </footer>
    </div>
  );
}

export default App;
