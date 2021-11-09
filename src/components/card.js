import React from 'react'


function Card(props) {
  console.log(props)
  return (
    <div>
       <a href={props.source}>
           <div className="card">
             <img src={props.img} alt=""/>
             <div className="card-body">
               <h2>{props.title}</h2>
               <p>{props.description}</p>
             </div>
           </div>
          </a>
    </div>
  )
}

export default Card;

// class Card extends React.Component {
//     render() {
//       return(
//          
//       )
//     }
//   }
// export default Card;