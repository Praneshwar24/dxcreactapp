import React, { useContext } from 'react'        //importing context hook
import { BatchContext, UserContext } from '../../App'

function ComponentE() {
    const user = useContext(UserContext)
    const batch = useContext(BatchContext)
    return (
        <div>
            Component E -- {user} is from {batch}
        </div>
    )
}

export default ComponentE
