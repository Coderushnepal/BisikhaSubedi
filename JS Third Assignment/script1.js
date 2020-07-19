const btn = document.getElementById('btn');
const frame = document.getElementById('frame');

const height = frame.clientHeight;
const width = frame.clientWidth;

const margin = window.innerHeight - height;

btn.onclick = function(e) {
        var newCircle = document.createElement('div');
        newCircle.classList.add('circle');
        newCircle.style.top = margin + Math.random() * height + 'px';
        // console.log('top value' , newCircle.style.top);
        newCircle.style.left = Math.random() * width + 'px';
        frame.appendChild(newCircle);

        var interval;
        var direction = 1;

        newCircle.addEventListener("click" , function() {
            interval = setInterval(function(){
                var currentTop = newCircle.style.top;
                var nextTop = parseInt(currentTop) + 10 * direction;
                // console.log("Next Top" , nextTop)
                newCircle.style.top = nextTop + "px";

                if( nextTop >= height || nextTop <= 100 ) {
                    direction *= -1;
                }
            }, 10000/60)
        });
        var btn = document.getElementById("btn");
        btn.addEventListener("click" , function(){
            clearInterval(interval);
        })
    };

// ball.addEventListener("click", function () {
//   interval = setInterval(function () {
//     var currentTop = ball.style.top;
//     var nextTop = parseInt(currentTop) + 10 * direction;
//     ball.style.top = nextTop + "px";
//     if (nextTop >= 750 || nextTop <= 100) {
//       direction *= -1;
//     }
//   }, 10000 / 60);
// });
// var btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   clearInterval(interval);
// });

