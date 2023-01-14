import React from 'react'
import "../styles/product.css"
import Form from 'react-bootstrap/Form';

function Products() {
  return (
    <div className='outer'>
        <div className='leftbox'>
            <div className="filter">
                Product Type
                <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label="bed"
          />
           <Form.Check 
            type={type}
            id={`default-${type}`}
            label="sofa"
          />
        </div>
      ))}
    </Form>
            </div>
            <div className="filter">
                Range
                {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label="affordable"
          />
           <Form.Check 
            type={type}
            id={`default-${type}`}
            label="medium"
          />
           <Form.Check 
            type={type}
            id={`default-${type}`}
            label="luxury"
          />
        </div>
      ))}
            </div>
        </div>
        <div className='rightbox'>

        </div>
    </div>
  )
}

export default Products