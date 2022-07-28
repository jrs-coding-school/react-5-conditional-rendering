import React from 'react'

export default function ConditionalText() {
    return (
        <div>
            <p>
                true && 'secret' - The secret: {true && 'secret'}
            </p>
            <p>
                false && 'secret' - The secret: {false && 'secret'}
            </p>
            <p>
                true || 'default' - The value: {3 || 'default'}
            </p>
            <p>
                false || 'default' - The value: {0 || 'undefined'}
            </p>

            <p className={myState == 'on' && 'underline'}>
                true ? : - {true ? 'true' : 'false'}
            </p>
            <p>
                false ? : - {false ? 'true' : 'false'}
            </p>
        </div>
    )
}
