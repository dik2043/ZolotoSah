var count;
var cont = document.querySelectorAll('.catalog-salmon__item');
var containers = document.getElementsByClassName('catalog-salmon__item');
var pics;
var number;
var trs;
var spans;


for (count = 0; count < containers.length; count++) {
    containers[count].num = count;
    containers[count].addEventListener("click", function(event) {
        // console.log(this.num);
        number = this.num;
        trs = containers[number].getElementsByClassName('js-tr');
        pics = containers[number].getElementsByTagName('picture');
        spans = containers[number].getElementsByClassName('js-sp');

        // console.log(trs);
        // console.log(spans);
        var index = Array.prototype.indexOf.call(trs, event.target);
        var index2 = Array.prototype.indexOf.call(spans, event.target);
        // console.log(index2);
        
        if (index2 != -1) {
            if (pics[index2].classList.contains('js-show')) {
                console.log('ok');
            } else {
                for (var i = 0; i < pics.length; i++) {
                    pics[i].classList.remove('js-show');
                }
                pics[index2].classList.add('js-show');
            }

            if (trs[index2].classList.contains('js-color')) {
                console.log('ok');
            } else {
                for (var i = 0; i < trs.length; i++) {
                    trs[i].classList.remove('js-color');
                }
                trs[index2].classList.add('js-color');
            }
        } else {
        
            if (pics[index].classList.contains('js-show')) {
                console.log('ok');
            } else {
                for (var i = 0; i < pics.length; i++) {
                    pics[i].classList.remove('js-show');
                }
                pics[index].classList.add('js-show');
            }
    
            if (trs[index].classList.contains('js-color')) {
                console.log('ok');
            } else {
                for (var i = 0; i < trs.length; i++) {
                    trs[i].classList.remove('js-color');
                }
                trs[index].classList.add('js-color');
            }
        }
    }, false);
}