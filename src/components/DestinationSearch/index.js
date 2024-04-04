import './index.css'
import DestinationItem from '../DestinationItem'

const DestinationSearch = props => {
  const {destinationsList} = props
  destinationsList.forEach(eachItem => {
    ;<DestinationItem imgUrl={eachItem.imgUrl} name={eachItem.name} />
  })
}

export default DestinationSearch
