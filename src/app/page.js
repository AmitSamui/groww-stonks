"use client"
import Image from 'next/image'
import styles from './page.module.css'
import SearchBar from '@/Components/SearchBar/SearchBar'
import { useState } from 'react'

export default function Home() {
  const [query, setQuery] = useState("");

  const handleSearchQuery = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className={`${styles.search_container}`}>
     
     <input
        className={`${styles.searchbar_input}`}
        type="text"
        placeholder="Search Stocks..."
        value={query}
        onChange={handleSearchQuery}
      />

<QueryResponse />


    </div>
  )
}

const QueryResponse = () => {
  return (
    <div> query response</div>
  )
}
