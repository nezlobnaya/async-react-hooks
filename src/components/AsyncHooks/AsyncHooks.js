import React, { useState, useEffect } from 'react'

// function useGiphy(query) {
//     const [results, setResults] = useState([]);
//     const [loading, setLoading] = useState(false);
  
//     useEffect(() => {
//       async function fetchData() {
//         try {
//           setLoading(true);
//           const response = await fetch(
//             `https://api.giphy.com/v1/gifs/search?api_key=ySGo48L37OkJ0cGH1zAfrGr8yobgFMQt&q=${query}&limit=10&offset=0&rating=G&lang=en`
//           );
//           const json = await response.json();
//           console.log(json)
//           setResults(
//             json.data.map(item => {
//               return item.images.preview.mp4;
//             })
//           );
//         } finally {
//           setLoading(false);
//         }
//       }
  
//       if (query !== '') {
//         fetchData();
//       }
//     }, [query]);
  
//     return [results, loading];
//   }

export default function AsyncHooks() {
    const[search, setSearch] = useState('')
    const[query, setQuery] = useState('');
    const[results, setResults] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const response =await fetch(`https://api.giphy.com/v1/gifs/search?api_key=h4xr6xtNatRT8P3sn1rJ2R41o1k1Sbcg&q=cookie&limit=25&offset=0&rating=G&lang=en`)
                const json = await response.json()
                console.log({ json })
                setResults(
                    json.data.map(i => {
                        return i.images.preview.mp4
                    })
                )
            } catch (error) {}
        }
        if(query !=='') {
            fetchData()
        }
    }, [query])
   
    return (
        <div>
            <h1>Async React Hooks</h1>
            <form onSubmit={e => {
                e.preventDefault()
                setQuery(search)
            }}>
                <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder='Search for Gifs!' />
                    <button type='submit' >Search</button>
            </form>
            <br />
            {results.map(i => (
                <video  autoPlay loop key={i} src={i} />
            ))}
        </div>
    )
}