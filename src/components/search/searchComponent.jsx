import { InputGroup } from "react-bootstrap"
import Form from "react-bootstrap/Form";
import { FaSearch } from "react-icons/fa"
import "./search.css"

const Search = () => {
  return (
    <>
    <div className="search">
      <InputGroup className="mb-3 w-50">
      <Form.Control className="search-control" type="text" placeholder="Buscar..." />
      <InputGroup.Text>
        <FaSearch />
      </InputGroup.Text>
    </InputGroup>
    </div>
    </>
  )
}

export default Search;