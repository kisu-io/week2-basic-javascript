function changeText() {
    const node = document.getElementById('change-text')
    node.innerHTML = "already changed"
}
setTimeout(changeText, 3000)

let count = 0

function changeCount() {
    const node = document.getElementById('change-count')
    count += 1
    node.innerHTML = count
}

setInterval(changeCount, 1000);

setInterval(() => {
    const CSS_COLOR_NAMES = [
        "AliceBlue",
        "AntiqueWhite",
        "Aqua",
        "Aquamarine",
        "Azure",
        "Beige",
        "Bisque",
        "Black",
        "BlanchedAlmond",
        "Blue",
        "BlueViolet",
        "Brown",
        "BurlyWood",
        "CadetBlue",
        "Chartreuse",
        "Chocolate",
        "Coral",
        "CornflowerBlue",
        "Cornsilk",
        "Crimson",
        "Cyan",
        "DarkBlue",
        "DarkCyan",
        "DarkGoldenRod",
        "DarkGray",
        "DarkGrey",
        "DarkGreen",
        "DarkKhaki",
        "DarkMagenta",
        "DarkOliveGreen",
        "DarkOrange",
        "DarkOrchid",
        "DarkRed",
        "DarkSalmon",
        "DarkSeaGreen",
        "DarkSlateBlue",
        "DarkSlateGray",
        "DarkSlateGrey",
        "DarkTurquoise",
        "DarkViolet",
        "DeepPink",
        "DeepSkyBlue",
        "DimGray",
        "DimGrey",
        "DodgerBlue",
        "FireBrick",
        "FloralWhite",
        "ForestGreen",
        "Fuchsia",
        "Gainsboro",
        "GhostWhite",
        "Gold",
        "GoldenRod",
        "Gray",
        "Grey",
        "Green",
        "GreenYellow",
        "HoneyDew",
        "HotPink",
        "IndianRed",
        "Indigo",
        "Ivory",
        "Khaki",
        "Lavender",
        "LavenderBlush",
        "LawnGreen",
        "LemonChiffon",
        "LightBlue",
        "LightCoral",
        "LightCyan",
        "LightGoldenRodYellow",
        "LightGray",
        "LightGrey",
        "LightGreen",
        "LightPink",
        "LightSalmon",
        "LightSeaGreen",
        "LightSkyBlue",
        "LightSlateGray",
        "LightSlateGrey",
        "LightSteelBlue",
        "LightYellow",
        "Lime",
        "LimeGreen",
        "Linen",
        "Magenta",
        "Maroon",
        "MediumAquaMarine",
        "MediumBlue",
        "MediumOrchid",
        "MediumPurple",
        "MediumSeaGreen",
        "MediumSlateBlue",
        "MediumSpringGreen",
        "MediumTurquoise",
        "MediumVioletRed",
        "MidnightBlue",
        "MintCream",
        "MistyRose",
        "Moccasin",
        "NavajoWhite",
        "Navy",
        "OldLace",
        "Olive",
        "OliveDrab",
        "Orange",
        "OrangeRed",
        "Orchid",
        "PaleGoldenRod",
        "PaleGreen",
        "PaleTurquoise",
        "PaleVioletRed",
        "PapayaWhip",
        "PeachPuff",
        "Peru",
        "Pink",
        "Plum",
        "PowderBlue",
        "Purple",
        "RebeccaPurple",
        "Red",
        "RosyBrown",
        "RoyalBlue",
        "SaddleBrown",
        "Salmon",
        "SandyBrown",
        "SeaGreen",
        "SeaShell",
        "Sienna",
        "Silver",
        "SkyBlue",
        "SlateBlue",
        "SlateGray",
        "SlateGrey",
        "Snow",
        "SpringGreen",
        "SteelBlue",
        "Tan",
        "Teal",
        "Thistle",
        "Tomato",
        "Turquoise",
        "Violet",
        "Wheat",
        "White",
        "WhiteSmoke",
        "Yellow",
        "YellowGreen",
    ];

    const random = Math.floor(Math.random() * CSS_COLOR_NAMES.length);
    document.getElementById("change-color").style.backgroundColor =
        CSS_COLOR_NAMES[random];
    document.getElementById("change-color").innerHTML = CSS_COLOR_NAMES[random];
}, 3000);


let clickCount = 0
const click = document.getElementById('change-click')
click.addEventListener("click", function() {
    clickCount += 1
    click.innerHTML = clickCount
})


let hoverCount = 0
const hover = document.getElementById('change-hover')
hover.addEventListener("mouseover", function() {
    hoverCount += 1
    hover.innerHTML = hoverCount
})


let lovesMe = 0;
let loveMeToggle = document.getElementById('change-he-loves-me');
loveMeToggle.addEventListener("click", function() {
    lovesMe += 1;
    if (lovesMe % 2) {
        loveMeToggle.innerHTML = "He Loves Me";
    } else {
        loveMeToggle.innerHTML = "He Loves Me Not"
    }
});

document.getElementById("change-to-current-date").addEventListener("click", function() {
    const d = new Date();
    document.getElementById("change-to-current-date").innerHTML = d;
})

function report() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById("change-to-current-width").innerHTML = "Width: " + width;
    document.getElementById("change-to-current-height").innerHTML = "Height: " + height;
}
window.onresize = report;

let listLength = 1;
document.getElementById("add-list-item").addEventListener("click", () => {
    listLength++
    let newList = document.createElement("li");
    let node = document.createTextNode(`This is a new list ${listLength}`);
    newList.appendChild(node);

    let element = document.getElementById("add-list-item");
    element.appendChild(newList);
});

document.getElementById("change-to-url").addEventListener("click", () => {
    const url = window.location;
    document.getElementById("change-to-url").innerHTML = url;
});

document.getElementById("change-coderscript").addEventListener("click", () => {
    var i = 0;
    var txt = "I know Coderscript! And also some Javascript...";

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("change-coderscript").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter()
});

document.getElementById('signin-button').addEventListener('click', () => {
    document.getElementById('signin-form').style.display = "none";
    document.getElementById('signout-form').style.display = "block";
})
document.getElementById('signout-button').addEventListener('click', () => {
    document.getElementById('signin-form').style.display = "block";
    document.getElementById('signout-form').style.display = "none";
})

const magic8 = document.getElementById('magi8')
const yes = ["Yes!", "Sure!", "Of course!"];
const no = ["No way!", "Never!", "Not a chance!"];

function getRandomItem() {
    return items[Math.floor(Math.random() * items.length)];
}