import { useState } from 'react';
import Planner from './Planner';

const Home = () => {
    const [plan, setPlan] = useState("");
    const [hours, setHours] = useState(0);
    const [added, setAdded] = useState(() => {
        const storedTask = localStorage.getItem('tasks');
        return storedTask ? JSON.parse(storedTask) : [];
    });

    const handleAdd = () => {
        const newTask = { plan, hours };
        const updatedTask = [...added, newTask];
        setAdded(updatedTask);
        localStorage.setItem('tasks', JSON.stringify(updatedTask));
        setPlan("");
        setHours(0);
    }

    return (
        <>
            <div className="w-full justify-center  flex flex-col gap-3 items-center">
                <p className="text-3xl font-semibold">Education Planner</p>
                <div className='flex gap-2 items-center justify-center '>
                    <input className="w-[40%] border p-2  rounded-lg text-justify" type="text" value={plan} placeholder='submit task' onChange={(e) => setPlan(e.target.value)}></input>
                    <input className="w-[10%] border p-2  rounded-lg text-center" type="number" value={hours} placeholder='submit task' onChange={(e) => setHours(parseInt(e.target.value))}></input>
                    <button className='p-2 bg-orange-600 text-white rounded-lg' onClick={handleAdd}>
                        Add
                    </button>
                </div>
                <div className='w-[80%] flex flex-col gap-2 justify-content'>
                    {added.length > 0 && <Planner added={added} />}
                </div>
            </div>
        </>
    )
}
export default Home;