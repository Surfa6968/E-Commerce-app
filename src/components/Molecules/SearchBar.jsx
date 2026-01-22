import { Form, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SearchBar = () => {
       <Form className='d-flex flex-grow mx-3'>
              <InputGroup>
                     <Form.Control type='search' placeholder='Search Products' />
                     <Button variant='outline-primary'>
                            <i className='bi bi-search'></i>
                     </Button>
              </InputGroup>
       </Form>
};

export default SearchBar;