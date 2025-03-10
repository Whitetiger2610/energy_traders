import { InputGroup } from "react-bootstrap"
import Form from "react-bootstrap/Form";
import { FaSearch } from "react-icons/fa"
import "./search.css"
import { useContext} from "react";
import { ProductContext } from "../../context/ProductContext";

const Search = () => {

  const {search, setSearch} = useContext(ProductContext);
    
  return (
    <>
    <div className="search">
      <InputGroup className="mb-3 w-50">
      <Form.Control className="search-control" 
        type="text" 
        placeholder="Buscar por nombre..."
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        />
      <InputGroup.Text>
        <FaSearch />
      </InputGroup.Text>
    </InputGroup>
    </div>
    </>
  )
}

export default Search;