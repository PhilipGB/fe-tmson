import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getSearchResults } from "../Utils/api";


const SearchResults = (props) => {

const { search } = useLocation(); 
const [searchResults, setSearchResults] = useState([])


useEffect(() => {
    getSearchResults(search).then((searchFromApi) => {
      setSearchResults(searchFromApi)
    })
  }, [search])

  console.log(searchResults.results)

  return (
    <main>
      <h1>Search Results:</h1>
      <ul>
          {searchResults.results.map(results => {
              console.log(results)
              return (
                  <li> 
                      <p>Search result: {results.task_name}</p>
                      <p>Skill category: {results.skill_category}</p>
                      <p>Skill subcategory: {results.skill_subcategory}</p>
                      <img src={results.thumbnail_image_url}/>
                      <p> See more.... link here to job description page</p>
                    </li>
              )
          })}
      </ul>
    </main>
  )

}


export default SearchResults;