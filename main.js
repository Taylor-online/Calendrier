const calendarButton = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".container");
const calendarPopup = document.querySelector(".popup");
var btnClose = document.getElementById('btnClose');
const calendarDays = 24;

const openDoor = (path, event) => {
    event.target.parentNode.style.backgroundImage = `url(${path})`;
    event.target.style.opacity = "0";
    event.target.style.backgroundColor = "#0058ca";

}

function popup(img) {
	w=open("",'image','weigth=toolbar=no,scrollbars=no,resizable=yes, width=510, height=210');	
	w.document.write("<HTML><BODY onblur=\"window.close();\"><IMG src='"+img+"'>");
	w.document.write("</BODY></HTML>");
    w.document.close();
   
}

const createCalendar = () => {
    for(let i = 0; i  < calendarDays; i++) {
        const calendarDoor = document.createElement("div");
        const calendarDoorText = document.createElement("div");

        calendarDoor.classList.add("image")
        calendarDoor.style.gridArea = "door" + (i + 1);
        calendarContainer.appendChild(calendarDoor);


        calendarDoorText.classList.add("text");
        calendarDoorText.innerHTML = i + 1;
        calendarDoor.appendChild(calendarDoorText);

        courseNumber = i + 1;
        let coursePath = `./image/courses-${courseNumber}.jpg`;

        
        calendarDoorText.addEventListener("click", openDoor.bind(null,  coursePath));
        calendarDoorText.addEventListener("click", openMoadl.bind(null,  coursePath));
        btnClose.addEventListener('click',closeModal);       
    } 
}

calendarButton.addEventListener("click", createCalendar);


