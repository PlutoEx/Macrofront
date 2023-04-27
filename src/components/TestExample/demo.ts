type Data = {
    id: number,
    checked: boolean,
    children: Data[]
}


const setChecked = (data: Data, id: number) => {
    if(data.id === id) {
        data.checked = true
    } else {
        data.children.forEach((childData: Data) => {
            setChecked(childData, id)
        })
    }
}

export default setChecked