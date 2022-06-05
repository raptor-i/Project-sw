import { useState } from "react"
import React from 'react';

// empty array for itemsid.
let DeleteList = [];

const MassDeleteItems = (ID) =>
{
    // if ID then go.
    if(ID == 0 || ID)
    {
        // DeleteList has same id then delete it.
        if(DeleteList.includes(ID))
        {
            DeleteList = DeleteList.filter(x => x !== ID);
            return;
        }
        // add New ID
        DeleteList.push(ID)
        return console.log(DeleteList);  
    }
    return DeleteList;
}

export default MassDeleteItems;