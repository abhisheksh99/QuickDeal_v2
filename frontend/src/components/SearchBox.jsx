import { useState } from "react";
import {Form,Button} from "react-bootstrap"
import { useParams,useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

const SearchBox = () => {

    const navigate = useNavigate()
    const {keyword: urlKeyword} = useParams()
    const [keyword, setKeyword] = useState(urlKeyword || "")

    const submitHandler = (e) =>{
        e.preventDefault()
        if(keyword.trim()){
            navigate(`/search/${keyword}`)
            setKeyword("")
        }else{
            navigate("/")
        }
    }
  return (
   <Form onSubmit={submitHandler} className="d-flex">
    <Form.Control type="text" name="q" onChange = {(e) => setKeyword(e.target.value)} placeholder="Search Products...." value={keyword} className="mr-sm-2 ml-sm-5">

    </Form.Control>
    <Button type="submit" variant="outline-success" className="p-2 mx-2">
        <IoSearch />
    </Button>

   </Form>
  )
}

export default SearchBox
