import icon1 from "./icons/secondary10.png";
import icon2 from "./icons/search.png";
import icon3 from "./icons/compass.png";
import icon4 from "./icons/chat.png";
import icon5 from "./icons/plus.png";
import icon6 from "./icons/pets.png";
import icon7 from "./icons/user.png";
import dots from "./icons/dots.png";

export function Sidebar() {

    return (
        <div className="shadow-2xl h-full flex justify-between flex-col fixed p-1 md:p-2">
            <div className="flex flex-col items-center my-4 gap-4">
                <h1 className="text-2xl font-medium ">VA<span className="text-orange-200 font-semibold">.</span></h1>
                <div>
                    <a href="#"><img className="my-2 mx-0.5 p-1.5 md1:p-3 rounded-lg border-2" src={icon1} alt="icon1"/></a>
                    <a href="#"><img className="my-2 mx-0.5 p-1.5 md1:p-3 rounded-lg border-2" src={icon2} alt="icon1" /></a>
                    <a href="#"><img className="my-2 mx-0.5 p-1.5 md1:p-3 rounded-lg border-2" src={icon3} alt="icon1" /></a>
                    <a href="#"><img className="my-2 mx-0.5 p-1.5 md1:p-3 rounded-lg border-2" src={icon4} alt="icon1" /></a>
                    <a href="#"><img className="my-2 mx-0.5 p-1.5 md1:p-3 rounded-lg border-2" src={icon5} alt="icon1" /></a>
                    <a href="#"><img className="my-2 mx-0.5 p-1.5 md1:p-3 rounded-lg border-2" src={icon6} alt="icon1" /></a>
                    <a href="#"><img className="my-2 mx-0.5 p-1.5 md1:p-3 rounded-lg border-2" src={icon7} alt="icon1" /></a>

                    
                </div>
            </div>
            <img className="my-4 p-1.5 rotate-90" src={dots} alt="icon1" />
        </div>
    );
}