import React from 'react'

function Markup({handle, target}) {
    return (
        <div>
            <fieldset className="main-fieldset" style={{fontSize: 17, paddingLeft: 25}}>
                <label>
                    <span style={{marginLeft: '30px'}}>name</span>
                    <br />
                    <input type="text" style={{marginTop: 10, width: 130, height: 25}}
                        onChange={(e) => handle.name(e.target.value)}
                    />
                </label>
                <label style={{marginTop: 30}}>
                    <span>id:</span><span>{target.markup.id}</span>
                </label>
            </fieldset>
        </div>
    )
}

export default Markup
