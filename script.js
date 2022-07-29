function display(vehicle) {
    const vehicleInfo = `<h1>${vehicle.brand} ${vehicle.model} ${vehicle.year}</h1>
            <img src="${vehicle.image}">
            <table>
                <tr>
                    <th>Price:</th>
                    <td>${vehicle.price}</td>
                </tr>
                <tr>
                    <th>Brand:</th>
                    <td>${vehicle.brand}</td>
                </tr>
                <tr>
                    <th>Model:</th>
                    <td>${vehicle.model}</td>
                </tr>
                <tr>
                    <th>Year:</th>
                    <td>${vehicle.year}</td>
                </tr>
                <tr>
                    <th>Engine:</th>
                </tr>
                <tr>
                    <th>Type:</th>
                    <td>${vehicle.engine.type}</td>
                </tr>
                <tr>
                    <th>Capacity:</th>
                    <td>${vehicle.engine.capacity}</td>
                </tr>
                <tr>
                    <th>Features:</th>
                    <td>${vehicle.features[0]}<br>${vehicle.features[1]}<br>${vehicle.features[2]}</td>
                </tr>
                <tr>
                    <th>Colour:</th>
                    <td>${vehicle.colour}</td>
                </tr>
            </table>`;
    document.querySelector('.container').innerHTML = vehicleInfo;
}

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        // console.log(xhr.responseText);
        console.log(JSON.parse(xhr.responseText));
        display(JSON.parse(xhr.responseText));
    }
}

xhr.open('GET', 'vehicle.json');
xhr.send();