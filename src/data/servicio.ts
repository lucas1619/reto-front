const getMenuData = async () => {
    const response = await fetch('../../servicio.json', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
    );
    const data = await response.json();
    return data;
}


export {
    getMenuData
}