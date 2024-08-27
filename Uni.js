import React, { useState, useEffect } from 'react';

function Uni(props) {
  const [universities, setUniversities] = useState([]);
  const [loading , setLoading] = useState(false)
  
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  // Fetch data when the component mounts
  useEffect(() => {
      setLoading(true)  
    const fetchData = async () => {
        let url = `http://universities.hipolabs.com/search?country=${props.country.charAt(0).toUpperCase() + props.country.slice(1)}`;
        await delay(5)
        let getData = await fetch(url);
        let parsedData = await getData.json();
      setUniversities(parsedData);
      setLoading(false);
    };
  document.body.style.backgroundColor = "black"
  document.body.style.color = "white"
    fetchData();
  }, [props.country]); // Empty dependency array to run only once on mount

  return (
    <>

      {loading && <img src='https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_256.gif'></img>}
      {!loading && universities.map((element, index) => {
        return (
          <div
            key={index}
            className='w-60 h-44 bg-green-900 text-black  shadow-md shadow-gray-600 border-solid  text-center mr-6 mb-6 flex flex-col items-center justify-around'
          >
            <h1 className='bg-white text-black p-1  w-full'>{element.country}</h1>
            <h1 className='font-bold text-white'>{element.name}</h1>
            <a className='text-blue-400' target='_blank' href={element["web_pages"]}>{element["web_pages"]}</a>
            <h1 className='text-white'>{element.domains}</h1>
          </div>
        );
      })}
    </>
  );
}

export default Uni;
