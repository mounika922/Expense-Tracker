export default function SearchBar({search,setSearch}){
  return (
    <input placeholder='Search transactions'
           value={search}
           onChange={e=>setSearch(e.target.value)}/>
  );
}