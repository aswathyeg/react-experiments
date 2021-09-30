import './Animal.css';
import PropTypes from 'prop-types';
export default function AnimalCard({
  
  diet,
  name,
  scientificName,
  size,
  
  
}){
  //const {name}=props;
    return( 
       
      <div className="animal-wrapper">
      <h2>{name}</h2>
      <h3>{scientificName}</h3>
      <h4>{size}kg</h4>
      <div>{diet.join(', ')}</div>

    </div>
    
    )
    
    
  }
  AnimalCard.propTypes = {
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    scientificName: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    name:PropTypes.string.isRequired
  } //to make sure the data type is correct.



