import {useState} from "react";
import bird from "./svg/bird.svg"
import cat from "./svg/cat.svg"
import cow from "./svg/cow.svg"
import dog from "./svg/dog.svg"
import gator from "./svg/gator.svg"
import heart from "./svg/heart.svg"

const animalMap = {
    bird,
    cat,
    cow,
    dog,
    gator
}

function AnimalShow({ type }) {
    const [clicks, setClicks] = useState(0)
    const handleClick = () => {
        setClicks(clicks + 1);
    }

    return (
        <div onClick={handleClick}>
            <img src={animalMap[type]} alt={"animal of type:" + type}/>
            <img
                src={heart}
                alt="heart"
                style={{
                    width: 10 + 10 * clicks + "px",
                }}
            />
        </div>
    )
}

export default AnimalShow;