import React,{useState} from "react";
function Databinding(){
    const [data,setData] = useState(
        {
            name:"Mohan",
            age: 25
        }
    )
    const handleChange = (event)=>{
        let value = event.target.value;
        setData({
            ...data,name:value
        });
    }
    return (
        <div>
            <h2>Databinding</h2>
            <h4>
                One way Binding:{data.name}-{data.age}
            </h4>
            <div>
                <input type="text" value={data.name} onChange={handleChange}></input>
                <input type="text" value={data.age}></input>
            </div>
        </div>
    )
}
export default Databinding;