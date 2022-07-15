function btnClick()
{
    var description = document.querySelector(".description");
    if(document.getElementById("mass").value.length == 0)
    {
        description.innerHTML = "Mass is required";
    }
    else
    {
        var img = document.querySelector(".planet-image");
        var select = document.getElementById("selectPlanet");
        var objectName = select.options[select.selectedIndex].text.toLowerCase(); //Alternativ switch
        img.src = './images/' + objectName.toLowerCase() + '.png';
        description.innerHTML = "The weight of the object on " + objectName + "   " + calcWeight(objectName) + " N";
    }
}

function calcWeight(objectName)
{
    var mass = document.getElementById("mass").value;
    var force;
    switch(objectName.toLowerCase())
    {
        case "mercury":
            force = 3.7;
            break;
        case "venus":
            force = 8.87;
            break;
        case "earth":
            force = 9.8;
            break;
        case "moon":
            force = 1.6;
            break;
        case "mars":
            force = 3.7;
            break;
        case "jupiter":
            force = 24.8;
            break;
        case "saturn":
            force = 10.4;
            break;
        case "uranus":
                force = 8.87;
            break;    
        case "neptune":
            force = 10.15;
            break;
        case "pluto":
            force = 0.66;
            break;      
        }
    var result = mass * force;
    return result;
}