import dots from "./dots.png";

export function Pet({pets}) {

    return (
        <div className="relative p-4 my-4 flex w-full justify-center items-center rounded-lg shadow-xl">
            <h1 className="absolute top-4 left-4">Pets<span className="text-gray-400">({pets.length})</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-4">
                {pets.map((pet) => (      // Creating multiple pet cards dynymically
                    <PetCard pet={pet} key={pet.id}/>
                ))}           
            </div>        
        </div>
    );
}

//Creating single pet card Component 

function PetCard({pet}) {

    return (

        <div className="shadow-xl sm2:w-64 sm3:w-72 md1:w-80 lg:w-72 rounded-md">
            <div className="relative">
                <img className="w-full overflow-hidden rounded-sm" src={pet.source} alt="dog"/>
                <img className="absolute top-3 rotate-90 right-2" src={dots} alt="dots"/>
            </div>

            <div className="w-full">
                <div className="w-full py-2 px-2 flex justify-between border-b-2 border-orange-100">
                    <h2 className="font-bold">{pet.name}</h2>
                    <h2 className="text-gray-400">{pet.sign}</h2>
                </div>

                <div className="flex py-2 px-2 justify-between">
                    <h2 className="text-gray-400">Gender:</h2>
                    <h2 className="font-bold">{pet.gender}</h2>
                </div>

                <div className="flex py-2 px-2  justify-between">
                    <h2 className="text-gray-400">Age:</h2>
                    <h2 className="font-bold">{pet.age}</h2>
                </div>

                <div className="flex py-2 px-2  justify-between">
                    <h2 className="text-gray-400">Weight</h2>
                    <h2 className="font-bold">{pet.weight}</h2>
                </div>
            </div>

        </div>
    );

}