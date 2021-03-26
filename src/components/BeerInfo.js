import React from 'react'

const SRMColor = (value) => {
    let rValue = Math.round(value)
    switch(rValue) {
        case 0:
            return '#ffffff';
        case 1:
            return '#FFE699';
        case 2:
            return '#FFE699';
        case 3:
            return '#FFE699';
        case 4:
            return '#FFE699';
        case 5:
            return '#FFE699';
        case 6:
            return '#FFE699';
        case 7:
            return '#FFE699';
        case 8:
            return '#FFE699';
        case 9:
            return '#FFE699';
        case 10:
            return '#DE7C00';
        case 11:
            return '#D77200';
        case 12:
            return '#CF6900';
        case 13:
            return '#CB6200';
        case 14:
            return '#C35900';
        case 15:
            return '#BB5100';
        case 16:
            return '#B54C00';
        case 17:
            return '#B04500';
        case 18:
            return '#A63E00';
        case 19:
            return '#A13700';
        case 20:
            return '#9B3200';
        case 21:
            return '#952D00';
        case 22:
            return '#8E2900';
        case 23:
            return '#882300';
        case 24:
            return '#821E00';
        case 25:
            return '#7B1A00';
        case 26:
            return '#771900';
        case 27:
            return '#701400';
        case 28:
            return '#6A0E00';
        case 29:
            return '#660D00';
        case 30:
            return '#5E0B00';
        case 31:
            return '#5A0A02';
        case 32:
            return '#560A05';
        case 33:
            return '#520907';
        case 34:
            return '#4C0505';
        case 35:
            return '#470606';
        case 36:
            return '#440607';
        case 37:
            return '#3F0708';
        case 38:
            return '#3B0607';
        case 39:
            return '#3A070B';
        case 40:
            return '#36080A';
      default:
        return '#000000';
    }
}

function BeerInfo(props) {
    return (
        
        <div className="flex md:flex-row flex-col">
            <div className="md:w-8/12 w-full md:p-14 p-2">
                <h3>{props.beer.name}</h3>
                <p className="mb-5"><strong><em>"{props.beer.tagline}"</em></strong></p>
                <p><strong>First Brewed:</strong> {props.beer.first_brewed}</p>
                <p><strong>ABV (Alcohol by Volume):</strong> {props.beer.abv}%</p>
                <p><strong>IBU (International Bitterness Units):</strong> {props.beer.ibu} IBU</p>
                <p><strong>EBC (European Brewery Convention):</strong> {props.beer.ebc}</p>
                <p><strong>SRM (Standard Reference Method):</strong> {props.beer.srm}</p>
                <p className="flex items-center"><strong>Colour:</strong> <span className="inline-block ml-2 border-2 border-solid border-gray-800" style={{width: `50px`, height: `50px`, backgroundColor: SRMColor(props.beer.srm)}}></span></p>
                <p><strong>Description:</strong> {props.beer.description}</p>
                <p><strong>Food Pairings: </strong></p>
                <ul className="list-disc ml-5">
                    {props.beer.food_pairing.map((food, index) => (
                        <li key={index}>{food}</li>
                    ))}
                </ul>
            </div>
            <div className="md:w-4/12 w-full flex justify-center items-center">
                {(props.beer.image_url != null) ? (
                    <img src={props.beer.image_url} alt={`${props.beer.name}`}/>
                ) : (
                    <p className="text-center"><em>Image not available</em></p>
                )}
            </div>
        </div>
    )
}

export default BeerInfo
