import React, {useRef, useState} from 'react'

export default function Stopwatch(){
    const [time, setTime] = useState(0)
    const countRef = useRef(null)

    const timeStart = () => {
        countRef.current = setInterval(() => {
            setTime((time) => time + 1)
        }, 1)
    }

    const timeStop = () => {
        clearInterval(countRef.current)
        setTime(0)
    }

    const format = () => {
        const seconds = `0${time}`.slice(-2)
        const getSeconds = `0${(seconds % 60)}`.slice(-2)
        const minutes = `${Math.floor(time / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(time / 3600)}`.slice(-2)

        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }
    const formatMilisec = () => {
        const getMiliSeconds = `00${(time % 6000)}`.slice(-3)
        return `${getMiliSeconds}`
    }

    return(
        <div className="flex flex-col">
            <div className="flex flex-col bg-gray-300 ring-2 ring-black rounded-xl w-1/3 mx-auto">
            <div className="text-7xl text-center">{format()}</div>
            <div className="text-lg transform translate-x-12 md:translate-x-36 text-center">{formatMilisec()}</div>
            </div>
            <div className="flex mx-auto gap-x-24 pt-6">
                <button onClick={timeStart} className="bg-green-500 ring-2 ring-green-700 px-8 py-4 rounded-xl text-3xl focus:outline-none">
                    Start
                </button>
                <button onClick={timeStop} className="bg-red-500 ring-2 ring-red-700 px-8 py-4 rounded-xl text-3xl focus:outline-none">
                    Clear
                </button>
            </div>
        </div>
    )
}
