import {useState} from "react"
import Stopwatch from "./Stopwatch"

export default function Display() {

const [element, setElement] = useState('')
const [elementArray, setElementArray] = useState([])

const save = () => {
    elementArray.push(element)
    setElementArray(elementArray)
    console.log(elementArray)
}
const displayToggle = () => {
    const elements = document.getElementById('displayInfo')
    if(elements.style.display === 'none'){
        return elements.style.display = 'block'
    }
    return elements.style.display = 'none'
}

return (
    <div>
        <div>
            <input type="number" value={element} onChange={e => setElement(e.target.value)}/>
            <button onClick={save}>Add</button>
            <button onClick={displayToggle}>Display</button>
            <div id="displayInfo">
                {elementArray.map((item, index) => (
                    <div key={index}>
                        Element {index} = {item}
                    </div>
                ))}
            </div>
        </div>
        <Stopwatch/>
    </div>
)
}
