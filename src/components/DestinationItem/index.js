import './index.css'

const DestinationItem = props => {
  const {imgUrl, name} = props
  return (
    <div>
      <img src={imgUrl} alt={name} />
      <h1>mosque</h1>
    </div>
  )
}

export default DestinationItem
