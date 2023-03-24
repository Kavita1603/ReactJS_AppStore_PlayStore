import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="list-item">
      <button type="button" onClick={onClickTab} className={tabBtnClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
