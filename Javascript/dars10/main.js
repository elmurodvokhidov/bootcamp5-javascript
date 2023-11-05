let obj = {
    id: '',
    age: 28,
    say: function () {
        console.log("Say hello!")
    }
}

let a = Object(function() {
    console.log('hello')
})

console.log(obj.a());