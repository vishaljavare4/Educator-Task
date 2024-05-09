import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useState, useEffect } from 'react';

const Planner = ({ added }) => {
    const [Added, setAdded] = useState(added);

    useEffect(() => {
        setAdded(added);
    }, [added]);

    const handleAdd = (idx) => {
        const updatedTask = [...Added];
        updatedTask[idx].hours++;
        setAdded(updatedTask);
        localStorage.setItem('tasks', JSON.stringify(updatedTask));
    }

    const handleSub = (idx) => {
        const updatedTask = [...Added];
        const hours = updatedTask[idx].hours;
        if (hours < 1) {
            return;
        }
        updatedTask[idx].hours--;
        setAdded(updatedTask);
        localStorage.setItem('tasks', JSON.stringify(updatedTask));
    }

    return (
        <>
            {
                Added.map((ele, index) => (
                    <div key={index} className="flex  gap-2 items-center ">
                        <p className="w-[80%]">{ele.plan}</p>

                        <div>
                            <FaPlusCircle className="text-green-500" onClick={() => handleAdd(index)} />
                        </div>
                        <p className="w-24">{ele.hours} hours</p>
                        <div>
                            <FaMinusCircle className="text-rose-500" onClick={() => handleSub(index)} />
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Planner;