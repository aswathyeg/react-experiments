import axios from 'axios';
import { useEffect, useState } from 'react';
export default function PostExample() {
    const [state, setState] = useState({});

    useEffect(() => {
        // POST request using axios inside useEffect React hook
        const article = {
            email_id: 104,

            password: "Active",

        };
        axios.post('http://localhost:8080/sessions', article)
            .then(response => console.log(response))
            .catch(error => console.log(error))


        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [])
    return (
        <div>


        </div>
    )
}