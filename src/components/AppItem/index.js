import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-details">
      <img className="app-image-details" src={imageUrl} alt={appName} />
      <p className="app-name-details">{appName}</p>
    </li>
  )
}

export default AppItem
