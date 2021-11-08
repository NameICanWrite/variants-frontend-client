import React from 'react'
import './style.sass'

function Tabs({tabs}) {
    const [currentTab, setCurrentTab] = React.useState(tabs[0].title)
    return (
        <div>
            {
                tabs.map(({ title, Content }) => title == currentTab && Content())
            }
            <div className="tab-pane">
                {
                    tabs.map(({ title }) =>
                        <div
                            className={`tab-button${title == currentTab ? ' focus' : ''}`}
                            onClick={() => setCurrentTab(title)}
                        >{title}</div>
                    )
                }
            </div>
        </div>
    )
}

export default Tabs
