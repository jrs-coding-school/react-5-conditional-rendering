import React from 'react'

export default function ConditionalElements() {


    return (
        <div>
            {true && <p>shown if true - 8</p>}
            {false && <p>show if true - 9</p>}

            {true || <p>shown if false - 11</p>}
            {false || <p>show if false - 12</p>}

            {true
                ? <p>shown if true - 15</p>
                : <p>shown if false - 16</p>
            }
            {false
                ? <p>shown if true - 19</p>
                : <p>shown if false - 20</p>
            }
        </div>
    )
}
