import { useEffect, useState } from "react";

const useToolsParts = (toolsId) => {
    const [tools, setTools] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/toolsParts/${toolsId}`)
        .then(res => res.json())
        .then(data => setTools(data))
    }, [toolsId])
    return [tools, setTools]
};

export default useToolsParts;