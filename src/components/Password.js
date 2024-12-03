import React, { useState } from 'react';
import { Lock } from './Lock';
import { Eyeball } from './Eyeball';

const Password = () => {
    const [isPasswordShowing, setIsPasswordShowing] = useState(false); //return pair of values

    const togglePassword = () => {
        setIsPasswordShowing(!isPasswordShowing);
    }

    return (
    <div className={`faux-box ${isPasswordShowing ? 'show-password' : 'hide-password'}`}>
        <Lock />
        { isPasswordShowing ?
            (<input type="text" name="password" className='password' />) //if password will show, true

            :

            (<input type="password" name="password" className='password' />) //false

        }

        <button onClick={togglePassword} className='toggle'>
            <Eyeball />
        </button>
    </div>
  )
}

export { Password }
