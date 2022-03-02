import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getSearchResults } from "../Utils/api-filterjobs";
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';



const SearchResults = (props) => {

const { search } = useLocation(); 
const [searchResults, setSearchResults] = useState([])

console.log(search)

useEffect(() => {
    getSearchResults(search).then((searchFromApi) => {
      setSearchResults(searchFromApi)
    })
  }, [search])

  return (
    <main>
      <SearchBar />
      <h1>Search Results:</h1>
      <ul>
          {searchResults && searchResults.map(results => {
              console.log(results)
              return (
                  <li key={results.task_id}> 
                      <p>Search result: {results.task_name}</p>
                      <p>Skill category: {results.skill_category}</p>
                      <p>Skill subcategory: {results.skill_subcategory}</p>
                      <img src={results.thumbnail_image_url}/>
                      <Link key={results.task_id} to={`/tasks/${results.task_id}`}> See more... </Link>
                    </li>
              )
          })}
      </ul>
    </main>
  )

}


export default SearchResults;