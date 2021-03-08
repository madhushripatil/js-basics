let circle = {
    radius: 2,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area);
circle.radius = 5;

console.log(circle.area);

// cannot set this property as it is read only
circle.area = 100;
console.log(circle.area);