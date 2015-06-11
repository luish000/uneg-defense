var before = null;

states.forEach(function(object) {
    Reveal.addEventListener(object.div,function() {
        console.log(object)
        paint(object.div,object.logo,object.stroke);
    },false)
})


function paint(div,obj,stroke) {
    if (before != null) {
        $(before).lazylinepainter('erase');
    }
    $(div).lazylinepainter( 
        {
            "svgData": obj,
            "strokeWidth": stroke || 2,
            "responsive": true,
            "strokeColor": "#444",
        }).lazylinepainter('paint'); 
    before = div;
}