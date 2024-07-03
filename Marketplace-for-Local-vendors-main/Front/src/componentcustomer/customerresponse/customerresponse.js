import React from 'react'

const Customerresponse = (props) => {
    const{responses }= props;
    console.log(responses)
  return (
    <div>
      {responses.map((item) => (
        <div key={item._id}>
          <h2>reply: {item.reply}</h2>
         
        </div>
      ))}
    </div>
  )
}

export default Customerresponse

