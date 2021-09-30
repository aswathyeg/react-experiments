import './Animal.css';
import PropTypes from 'prop-types';
import Card from '../components/Card/Card';

export default function AnimalCard({
  name, size, ...props 
  
}){
  //const {name}=props;
    return( 
       
      <Card title="Animal">
      <h3>{name}</h3>
      <div>{size}kg</div>
      {/* <AnimalDetails
        {...props}
      /> */}
    </Card>
    
    )
    
    
  }
  AnimalCard.propTypes = {
    name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  } //to make sure the data type is correct.



