import { Navbar } from "../navbar/Navbar";
import { Pet } from "./Pet";
import { useState } from "react";
import { dogs, cats, pigs, all } from "../../utils/data";

export function Home() {

    const [activeNavItem, setActiveNavITem] = useState("all");
    const [pets, setPets] = useState(all);

    function handleNavClick(itemId) {
        setActiveNavITem(itemId);
        
        // Displayed pets based on the clicked item in the nav
        if (itemId === "all") {
            setPets(all);
        } else if (itemId === "dogs") {
            setPets(dogs);
        } else if (itemId === "cats") {
            setPets(cats);
        } else if (itemId === "pigs") {
            setPets(pigs);
        }
    };

    return(
        <div className="w-full ml-16 mr-3 md1:ml-24 md1:mr-12 md:ml-24 md:mr-12 lg:ml-36 lg:mr-24">
            < Navbar activeNavItem={activeNavItem} handleNavClick={handleNavClick} />
            <Pet pets={pets} />        
        </div>
    );
}