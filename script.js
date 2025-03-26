var arr = [
    {
        team:'CSK',
        primary:'yellow',
        secondary:'green',
        image:'https://tse4.mm.bing.net/th?id=OIP.eFmYWS9A3XUuhpgkkKqYGgHaEK&pid=Api&P=0&h=180'
    },
    {
        team:'RCB',
        primary:'red',
        secondary:'black',
         image:'https://tse2.mm.bing.net/th?id=OIP.yHq3CW2NG3Lw_3JrjaBLzAHaEK&pid=Api&P=0&h=180'
    },
    {
        team:'MI',
        primary:'blue',
        secondary:'gold',
        image:'https://www.worldatlas.com/r/w1200/upload/d3/7b/68/untitled-design-394.jpg'
    },
    {
        team:'KKR',
        primary:'purple',
        secondary:'gold',
        image:'https://tse4.mm.bing.net/th?id=OIP.XaZ2wbUMg054YIBfmttPvQHaEK&pid=Api&P=0&h=180'
    },
    {
        team:'SRH',
        primary:'orange',
        secondary:'black',
        image:'https://tse2.mm.bing.net/th?id=OIP.VrjVrWDquwFeO1hibyZhJAHaEK&pid=Api&P=0&h=180'
    }
]

var btn = document.querySelector('button')
var h1 = document.querySelector('h1')

btn.addEventListener('click',function(){
    var num = Math.floor(Math.random()*arr.length)

    var winner = arr[num]

    h1.innerHTML = winner.team
    h1.style.backgroundImage = `url(${winner.image})`
    h1.style.backgroundColor = winner.primary
})