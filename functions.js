function LoadJson() 
{
    fetch('./DID1_Docent.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();  
        })
        .then(data => console.log(data))  
        .catch(error => console.error('Failed to fetch data:', error)); 
}