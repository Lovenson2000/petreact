import dogIcon from "./navIcons/Bone.png";
import catIcon from "./navIcons/Cat.png";
import pigIcon from "./navIcons/pigIcon.png";

//Passing the activeNavItem and handleNavClick props from the parent component(Home.js)
export function Navbar({ activeNavItem, handleNavClick }) {

    //Creating the navBar dynamically 
    const navItems = [
        { id: "all", text: "All", icon: dogIcon },
        { id: "dogs", text: "Dogs", icon: dogIcon },
        { id: "cats", text: "Cats", icon: catIcon },
        { id: "pigs", text: "Pigs", icon: pigIcon },
    ];

    return (
        <div className="flex flex-col md:flex-row my-4 py-3 w-full justify-center md:justify-around items-center gap-4 rounded-lg shadow-xl">
            {navItems.map((item) => (

                <div
                    key={item.id}
                    className={`flex cursor-pointer border-2 items-center justify-center gap-4 rounded-md py-3 px-12 lg:px-14 ${activeNavItem === item.id ? "bg-orange-200" : ""
                        }`}

                    onClick={()=> handleNavClick(item.id)}>

                    <img src={item.icon} alt={item.text} />
                    <h1>{item.text}</h1>

                </div>
            ))}

        </div>
    );
}