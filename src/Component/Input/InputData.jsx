import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const elements = [
  {
    name: "Economy",
    type: "Flights",
  },
  {
    name: "Business",
    type: "Flights",
  },
  {
    name: "First Class",
    type: "Flights",
  },
  {
    name: "Premium Economy Class",
    type: "Flights",
  },

  

  {
    name: "--",
    type: "Rail",

  },

  
];

const secondelements = [
  {
    haul: "Domestic, to/from UK",
    type: "Flights",
  },

  {
    haul: "Short-Hole, to/from UK",
    type: "Flights",
  },

  {
    haul: "Long-Hole, to/from UK",
    type: "Flights",
  },

  {
    haul: "International, to/from non-UK",
    type: "Flights",
  },

  {
    haul: "National Rail",
    type: "Rail",
  },

  {
    haul: "International Rail",
    type: "Rail",
  },

  {
    haul: "Light Rail and Tram",
    type: "Rail",
  },

  {
    haul: "London Underground",
    type: "Rail",
  },
];

const InputData = () => {
  // const title = "Flights";
   const [classArray, setClassArray] = useState([])
   const [secondArray, setSecondArray] = useState([]);

  //  const distanceType = (e) => {
  //    //  console.log(e.target.value)
  //    const filter = secondelements.filter(function (secondelements) {
  //      return secondelements.type == e.target.value;
  //    });
  //    setSecondArray(filter);
  //  };

   const handleChange=(e)=>{
//  console.log(e.target.value)
 const filter= elements.filter(function (elements) {
   return elements.type == e.target.value;
 });
   const filter1 = secondelements.filter(function (secondelements) {
       return secondelements.type == e.target.value;
     });
     setSecondArray(filter1);
 setClassArray(filter);
   }

  return (
    <>
      <div className="row pb-3">
        <div className="col-lg-4 inputdata_col_div">
          <div>
            <p className="fs-3 text-success">Input Your Travel Data</p>
            <div>
              <Form>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label className="inputdata_label">
                    Type of Travel
                  </Form.Label>
                  <Form.Select
                    onChange={handleChange}
                    aria-label="Default select example"
                  >
                    <option>Select Travel Type</option>
                    <option value="Rail">Rail</option>
                    <option value="Flights">Flight</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label className="inputdata_label">Class</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option value="1">Select Class</option>
                    {classArray.map((item) => (
                      <option value={item.name}>{item.name}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label className="inputdata_label">
                    Start Location
                  </Form.Label>
                  <Form.Control type="text" placeholder="Location" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label className="inputdata_label">
                    End Location
                  </Form.Label>
                  <Form.Control type="text" placeholder="Location" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label className="inputdata_label">Distance</Form.Label>
                  <Form.Control type="number" placeholder="Enter Distance" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label className="inputdata_label">Date</Form.Label>
                  <Form.Control type="date" placeholder="Date" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label className="inputdata_label">
                    Traveller Name
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label className="inputdata_label">
                    Distance Type
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option value="1">Select Distance Type</option>
                    {secondArray.map((item) => (
                      <option value={item.haul}>{item.haul}</option>
                    ))}

                    
                  </Form.Select>
                </Form.Group>
                <div className="text-center">
                  <Button variant="success" className="px-4" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputData;
