let btn = document.getElementById("addDiv");
      let x,y;
      const hex = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "C",
        "D",
        "E",
        "F",
      ];

      btn.addEventListener("click", function () {
        let div = document.createElement("div");
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[getRandomNumber()];
        }
        
        // Create random colors
        div.style.backgroundColor=hexColor
        // Random olcude yaranmqi
        div.style.width="200px";
        div.style.height="200px";

        // Random location creation
        x=parseInt(Math.random()*1000);
        y=parseInt(Math.random()*700);
        
       // Assign an absolute position to a random location
        div.style.position="absolute";
        div.style.left=x+"px";
        div.style.top=y+"px";

        // Delete
        div.addEventListener("click",function(){
          div.remove();
        })
        document.body.appendChild(div);
      });
      function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
    }


