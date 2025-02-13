javascript:void((function(){
    var canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.zIndex = 9999;
    document.body.appendChild(canvas);

    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    var drawing = false;

    canvas.addEventListener('mousedown', function(e) {
        drawing = true;
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    });

    canvas.addEventListener('mousemove', function(e) {
        if (drawing) {
            ctx.lineTo(e.clientX, e.clientY);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(e.clientX, e.clientY, ctx.lineWidth / 2, 0, Math.PI * 2);
            ctx.fillStyle = ctx.strokeStyle;
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(e.clientX, e.clientY);
        }
    });

    canvas.addEventListener('mouseup', function() {
        drawing = false;
    });

    canvas.addEventListener('mouseleave', function() {
        drawing = false;
    });

    var clearButton = document.createElement('button');
    clearButton.innerText = 'Clear Drawing';
    clearButton.style.position = 'fixed';
    clearButton.style.top = '10px';
    clearButton.style.right = '10px';
    clearButton.style.zIndex = 10000;
    clearButton.addEventListener('click', function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
    document.body.appendChild(clearButton);

    var colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.value = '#ff0000';
    colorPicker.style.position = 'fixed';
    colorPicker.style.top = '50px';
    colorPicker.style.right = '10px';
    colorPicker.style.zIndex = 10000;
    colorPicker.addEventListener('input', function() {
        ctx.strokeStyle = colorPicker.value;
        ctx.fillStyle = colorPicker.value;
    });
    document.body.appendChild(colorPicker);

    var sizeInput = document.createElement('input');
    sizeInput.type = 'range';
    sizeInput.min = 1;
    sizeInput.max = 200;
    sizeInput.value = 5;
    sizeInput.style.position = 'fixed';
    sizeInput.style.top = '90px';
    sizeInput.style.right = '10px';
    sizeInput.style.zIndex = 10000;
    sizeInput.addEventListener('input', function() {
        ctx.lineWidth = sizeInput.value;
    });
    document.body.appendChild(sizeInput);
})());
