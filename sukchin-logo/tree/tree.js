var Branch = function() {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.x = canvas.width /2;
    this.y = canvas.height;
    this.radius = 10;
    this.angle = Math.PI / 2;

    this.fillStyle = "#000";
    this.shadowColor = "#000";
    this.shadowBlur = 2;

    this.speed = width/500;
    this.generation = 0;
    this.distance = 0;
};

Branch.prototype = {
    
    process: function() {
        // draw a circle
        this.draw();
        // extend the branch
        this.iterate();
        this.split();
        this.die();
    },

    draw: function() {
        var context = this.context;
        context.save();
        context.fillStyle = this.fillStyle;
        context.shadowColor = this.shadowColor;
        context.shadowBlur = this.shadowBlur;
        context.beginPath();
        context.moveTo(this.x, this.y);
        // produce image using circle
        context.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);
        context.closePath();
        context.fill();
        context.restore();
    },

    iterate: function() {
        var deltaX = this.speed * Math.cos(this.angle);
        var deltaY = - this.speed * Math.sin(this.angle);

        // control the height of expansion using speed
        this.x += deltaX;
        this.y += deltaY;
        // reduce half of the radius based on current
        this.radius *= (0.99 - this.generation/250);

        // calculate distance
         var deltaDistance = Math.sqrt(Math.pow(deltaX,2) + Math.pow(deltaY,2));

        // distance= current branch length
        this.distance += deltaDistance;

        // control speed to prevent empty space btw circle
        if (this.speed > this.radius * 2){
            this.speed = this.radius * 2;
        }

        // Bend or turn during random no. in btw（-0.1, 0.1)
        this.angle += Math.random()/5 - 1/5/2;
    },

    split: function() {
        var splitChance = 0;
        // brach split when acheive 1/5 of the height
        if (this.generation == 1)
            splitChance = this.distance / height - 0.2;
        // smaller branch
        else if (this.generation < 3)
            splitChance = this.distance / height - 0.1;

        if (Math.random() < splitChance) {
            // produce n branch
            var n = 2 + Math.round(Math.random()*3);
            for (var i = 0; i < n; i++) {
                var branch = new Branch();
                branch.x = this.x;
                branch.y = this.y;
                branch.angle = this.angle;
                branch.radius = this.radius * 0.9;
                branch.generation++;
                branch.fillStyle =this.fillStyle;

                // add branch into group
                branches.add(branch);
            }
            // remove parent branch
            branches.remove(this);
        }
    },

    die: function() {
        if (this.radius < 0.5) {
            branches.remove(this);
        }
    }
};

var BranchCollection = function() {
    this.branches = [];
    this.canvas = canvas;
}

BranchCollection.prototype = {
    add: function(branch) {
        this.branches.push(branch);
    },

    
    process: function() {
        for (var b in this.branches) {
            this.branches[b].process();
        }
    },

    remove: function(branch) {
        for (var  b in this.branches)
            if (this.branches[b] === branch)
                this.branches.splice(b, 1);
    } 
}

var width = window.innerWidth;
var height = window.innerHeight;
var canvas = document.getElementById("canvastree");
canvas.width = width;
canvas.height = height;

// set the initial amount
var n = 2 + Math.random() * 3;

// initialize the radius
var initialRadius = width / 50;

// assign new variable
branches = new BranchCollection();

for (var i = 0; i < n; i++) {
    branch = new Branch();
    // based on the center of canvas, width of initialRadius for left and right
    // calculate the x-coordinate using i
    branch.x = width/2 - initialRadius + i * 2 * initialRadius / n;
    branch.radius = initialRadius;

    // add new branch
    branches.add(branch);
}

var interval = setInterval(function() {
    // process all element
    branches.process();
    if (branches.branches.length == 0) {
        clearInterval(interval);
    }

}, 30);
