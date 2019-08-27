window.onload = start;

var line1_class = document.getElementsByClassName("line1");
var line2_class = document.getElementsByClassName("line2");
var line3_class = document.getElementsByClassName("line3");
var line4_class = document.getElementsByClassName("line4");
var line5_class = document.getElementsByClassName("line5");
var line6_class = document.getElementsByClassName("line6");

//! FUNCTION start()
function start() {

    // array of 16 balls img
    var tab_ball = [
        '<img src="img/1.png">',
        '<img src="img/2.png">',
        '<img src="img/3.png">',
        '<img src="img/4.png">',
        '<img src="img/1.png">',
        '<img src="img/2.png">',
        '<img src="img/3.png">',
        '<img src="img/4.png">',
        '<img src="img/1.png">',
        '<img src="img/2.png">',
        '<img src="img/3.png">',
        '<img src="img/4.png">',
        '<img src="img/1.png">',
        '<img src="img/2.png">',
        '<img src="img/3.png">',
        '<img src="img/4.png">',
    ];

    //? dodaje bgcolor i losowy ball do .line2
    for (i = 0; i < line2_class.length; i++) {

        let random = Math.floor(Math.random() * tab_ball.length);

        if (i === 1) {
            line2_class[i].style.backgroundColor = "darkblue";
            line2_class[i].innerHTML = tab_ball[random];
            tab_ball.splice(random,1);
        }
        else if (i === 2) {
            line2_class[i].style.backgroundColor = "purple";
            line2_class[i].innerHTML = tab_ball[random];
            tab_ball.splice(random,1);
        }
        else if (i === 3) {
            line2_class[i].style.backgroundColor = "darkcyan";
            line2_class[i].innerHTML = tab_ball[random];
            tab_ball.splice(random,1);
        }
        else if (i === 4) {
            line2_class[i].style.backgroundColor = "yellow";
            line2_class[i].innerHTML = tab_ball[random];
            tab_ball.splice(random,1);
        }
    }

    //? dodaje bgcolor i losowy ball do .line3
    for (i = 0; i < line2_class.length; i++) {

        let random = Math.floor(Math.random() * tab_ball.length);

        if (i === 1) {
            line3_class[i].style.backgroundColor = "darkblue";
            line3_class[i].innerHTML = tab_ball[random];
            tab_ball.splice(random,1);
        }
        else if (i === 2) {
            line3_class[i].style.backgroundColor = "purple";
            line3_class[i].innerHTML = tab_ball[random];
            tab_ball.splice(random,1);
        }
        else if (i === 3) {
            line3_class[i].style.backgroundColor = "darkcyan";
            line3_class[i].innerHTML = tab_ball[random];
            tab_ball.splice(random,1);
        }
        else if (i === 4) {
            line3_class[i].style.backgroundColor = "yellow";
            line3_class[i].innerHTML = tab_ball[random];
            tab_ball.splice(random,1);
        }
    }

    //? dodaje bgcolor i losowy ball do .line4
    for (i = 0; i < line2_class.length; i++) {

        let random = Math.floor(Math.random() * tab_ball.length);

        if (i === 1) {
            line4_class[i].style.backgroundColor = "darkblue";
            line4_class[i].innerHTML = tab_ball[random];
            tab_ball.splice(random,1);
        }
        else if (i === 2) {
            line4_class[i].style.backgroundColor = "purple";
            line4_class[i].innerHTML = tab_ball[random];
            tab_ball.splice(random,1);
        }
        else if (i === 3) {
            line4_class[i].style.backgroundColor = "darkcyan";
            line4_class[i].innerHTML = tab_ball[random];
            tab_ball.splice(random,1);
        }
        else if (i === 4) {
            line4_class[i].style.backgroundColor = "yellow";
            line4_class[i].innerHTML = tab_ball[random];
            tab_ball.splice(random,1);
        }
    }

    //? dodaje bgcolor i losowy ball do .line5
    for (i = 0; i < line2_class.length; i++) {

        let random = Math.floor(Math.random() * tab_ball.length);

        if (i === 1) {
            line5_class[i].style.backgroundColor = "darkblue";
            line5_class[i].innerHTML = tab_ball[random];
            tab_ball.splice(random,1);
        }
        else if (i === 2) {
            line5_class[i].style.backgroundColor = "purple";
            line5_class[i].innerHTML = tab_ball[random];
            tab_ball.splice(random,1);
        }
        else if (i === 3) {
            line5_class[i].style.backgroundColor = "darkcyan";
            line5_class[i].innerHTML = tab_ball[random];
            tab_ball.splice(random,1);
        }
        else if (i === 4) {
            line5_class[i].style.backgroundColor = "yellow";
            line5_class[i].innerHTML = tab_ball[random];
            tab_ball.splice(random,1);
        }
    }

} // end start()

//! FUNCTION click_arrow()
function click_arrow(line_num, arrow_num, arrow_way) {
    console.log("@@@@clickarrow()@@@@");
    console.log("line_num:", line_num);
    console.log("arrow_num:", arrow_num);
    console.log("arrow_way:", arrow_way);

    //TODO UP arrow
    //* if click 1st UP arrow
    if (line_num === 1 && arrow_num === 1 && arrow_way === "up") {

        // wez atrybut src od img (box$ = img/$.png)
        let line2_box = line2_class[1].firstChild.getAttribute("src");
        let line3_box = line3_class[1].firstChild.getAttribute("src");
        let line4_box = line4_class[1].firstChild.getAttribute("src");
        let line5_box = line5_class[1].firstChild.getAttribute("src");

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line2_box = '<' + line2_box + '">';
        //TODO zamienia line$_box (string) na array
        line2_box = line2_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line2_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line2_box = line2_box.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line3_box = '<' + line3_box + '">';
        //TODO zamienia line$_box (string) na array
        line3_box = line3_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line3_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line3_box = line3_box.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line4_box = '<' + line4_box + '">';
        //TODO zamienia line$_box (string) na array
        line4_box = line4_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line4_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line4_box = line4_box.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line5_box = '<' + line5_box + '">';
        //TODO zamienia line$_box (string) na array
        line5_box = line5_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line5_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line5_box = line5_box.join('');

        //TODO dodaj <img src="img/$.png"> do divow
        line2_class[1].innerHTML = line3_box;
        line3_class[1].innerHTML = line4_box;
        line4_class[1].innerHTML = line5_box;
        line5_class[1].innerHTML = line2_box;

        //! sprawdz wszystkie kulki
        check_result();

        return true;
    }
    //* if click 2nd UP arrow
    else if (line_num === 1 && arrow_num === 2 && arrow_way === "up") {

        // wez atrybut src od img (box$ = img/$.png)
        let line2_box = line2_class[2].firstChild.getAttribute("src");
        let line3_box = line3_class[2].firstChild.getAttribute("src");
        let line4_box = line4_class[2].firstChild.getAttribute("src");
        let line5_box = line5_class[2].firstChild.getAttribute("src");

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line2_box = '<' + line2_box + '">';
        //TODO zamienia line$_box (string) na array
        line2_box = line2_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line2_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line2_box = line2_box.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line3_box = '<' + line3_box + '">';
        //TODO zamienia line$_box (string) na array
        line3_box = line3_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line3_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line3_box = line3_box.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line4_box = '<' + line4_box + '">';
        //TODO zamienia line$_box (string) na array
        line4_box = line4_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line4_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line4_box = line4_box.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line5_box = '<' + line5_box + '">';
        //TODO zamienia line$_box (string) na array
        line5_box = line5_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line5_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line5_box = line5_box.join('');

        //TODO dodaj <img src="img/$.png"> do divow
        line2_class[2].innerHTML = line3_box;
        line3_class[2].innerHTML = line4_box;
        line4_class[2].innerHTML = line5_box;
        line5_class[2].innerHTML = line2_box;

        //! sprawdz wszystkie kulki
        check_result();

        return true;
    }
    //* if click 3rd UP arrow
    else if (line_num === 1 && arrow_num === 3 && arrow_way === "up") {

        // wez atrybut src od img (box$ = img/$.png)
        let line2_box = line2_class[3].firstChild.getAttribute("src");
        let line3_box = line3_class[3].firstChild.getAttribute("src");
        let line4_box = line4_class[3].firstChild.getAttribute("src");
        let line5_box = line5_class[3].firstChild.getAttribute("src");

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line2_box = '<' + line2_box + '">';
        //TODO zamienia line$_box (string) na array
        line2_box = line2_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line2_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line2_box = line2_box.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line3_box = '<' + line3_box + '">';
        //TODO zamienia line$_box (string) na array
        line3_box = line3_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line3_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line3_box = line3_box.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line4_box = '<' + line4_box + '">';
        //TODO zamienia line$_box (string) na array
        line4_box = line4_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line4_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line4_box = line4_box.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line5_box = '<' + line5_box + '">';
        //TODO zamienia line$_box (string) na array
        line5_box = line5_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line5_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line5_box = line5_box.join('');

        //TODO dodaj <img src="img/$.png"> do divow
        line2_class[3].innerHTML = line3_box;
        line3_class[3].innerHTML = line4_box;
        line4_class[3].innerHTML = line5_box;
        line5_class[3].innerHTML = line2_box;

        //! sprawdz wszystkie kulki
        check_result();

        return true;
    }
    //* if click 4th UP arrow
    else if (line_num === 1 && arrow_num === 4 && arrow_way === "up") {

        // wez atrybut src od img (box$ = img/$.png)
        let line2_box = line2_class[4].firstChild.getAttribute("src");
        let line3_box = line3_class[4].firstChild.getAttribute("src");
        let line4_box = line4_class[4].firstChild.getAttribute("src");
        let line5_box = line5_class[4].firstChild.getAttribute("src");

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line2_box = '<' + line2_box + '">';
        //TODO zamienia line$_box (string) na array
        line2_box = line2_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line2_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line2_box = line2_box.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line3_box = '<' + line3_box + '">';
        //TODO zamienia line$_box (string) na array
        line3_box = line3_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line3_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line3_box = line3_box.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line4_box = '<' + line4_box + '">';
        //TODO zamienia line$_box (string) na array
        line4_box = line4_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line4_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line4_box = line4_box.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line5_box = '<' + line5_box + '">';
        //TODO zamienia line$_box (string) na array
        line5_box = line5_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line5_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line5_box = line5_box.join('');

        //TODO dodaj <img src="img/$.png"> do divow
        line2_class[4].innerHTML = line3_box;
        line3_class[4].innerHTML = line4_box;
        line4_class[4].innerHTML = line5_box;
        line5_class[4].innerHTML = line2_box;

        //! sprawdz wszystkie kulki
        check_result();

        return true;
    }
    //TODO DOWN arrow
    //* if click 1st DOWN arrow
    else if (line_num === 6 && arrow_num === 1 && arrow_way === "down") {

        // wez atrybut src od img (box$ = img/$.png)
        let line2_box = line2_class[1].firstChild.getAttribute("src");
        let line3_box = line3_class[1].firstChild.getAttribute("src");
        let line4_box = line4_class[1].firstChild.getAttribute("src");
        let line5_box = line5_class[1].firstChild.getAttribute("src");

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line2_box = '<' + line2_box + '">';
        //TODO zamienia line$_box (string) na array
        line2_box = line2_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line2_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line2_box = line2_box.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line3_box = '<' + line3_box + '">';
        //TODO zamienia line$_box (string) na array
        line3_box = line3_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line3_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line3_box = line3_box.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line4_box = '<' + line4_box + '">';
        //TODO zamienia line$_box (string) na array
        line4_box = line4_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line4_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line4_box = line4_box.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line5_box = '<' + line5_box + '">';
        //TODO zamienia line$_box (string) na array
        line5_box = line5_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line5_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line5_box = line5_box.join('');

        //TODO dodaj <img src="img/$.png"> do divow
        line2_class[1].innerHTML = line5_box;
        line3_class[1].innerHTML = line2_box;
        line4_class[1].innerHTML = line3_box;
        line5_class[1].innerHTML = line4_box;

        //! sprawdz wszystkie kulki
        check_result();

        return true;
    }
    //* if click 2nd DOWN arrow
    else if (line_num === 6 && arrow_num === 2 && arrow_way === "down") {

        // wez atrybut src od img (box$ = img/$.png)
        let line2_box = line2_class[2].firstChild.getAttribute("src");
        let line3_box = line3_class[2].firstChild.getAttribute("src");
        let line4_box = line4_class[2].firstChild.getAttribute("src");
        let line5_box = line5_class[2].firstChild.getAttribute("src");

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line2_box = '<' + line2_box + '">';
        //TODO zamienia line$_box (string) na array
        line2_box = line2_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line2_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line2_box = line2_box.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line3_box = '<' + line3_box + '">';
        //TODO zamienia line$_box (string) na array
        line3_box = line3_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line3_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line3_box = line3_box.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line4_box = '<' + line4_box + '">';
        //TODO zamienia line$_box (string) na array
        line4_box = line4_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line4_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line4_box = line4_box.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line5_box = '<' + line5_box + '">';
        //TODO zamienia line$_box (string) na array
        line5_box = line5_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line5_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line5_box = line5_box.join('');

        //TODO dodaj <img src="img/$.png"> do divow
        line2_class[2].innerHTML = line5_box;
        line3_class[2].innerHTML = line2_box;
        line4_class[2].innerHTML = line3_box;
        line5_class[2].innerHTML = line4_box;

        //! sprawdz wszystkie kulki
        check_result();

        return true;
    }
    //* if click 3rd DOWN arrow
    else if (line_num === 6 && arrow_num === 3 && arrow_way === "down") {

        // wez atrybut src od img (box$ = img/$.png)
        let line2_box = line2_class[3].firstChild.getAttribute("src");
        let line3_box = line3_class[3].firstChild.getAttribute("src");
        let line4_box = line4_class[3].firstChild.getAttribute("src");
        let line5_box = line5_class[3].firstChild.getAttribute("src");

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line2_box = '<' + line2_box + '">';
        //TODO zamienia line$_box (string) na array
        line2_box = line2_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line2_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line2_box = line2_box.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line3_box = '<' + line3_box + '">';
        //TODO zamienia line$_box (string) na array
        line3_box = line3_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line3_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line3_box = line3_box.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line4_box = '<' + line4_box + '">';
        //TODO zamienia line$_box (string) na array
        line4_box = line4_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line4_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line4_box = line4_box.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line5_box = '<' + line5_box + '">';
        //TODO zamienia line$_box (string) na array
        line5_box = line5_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line5_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line5_box = line5_box.join('');

        //TODO dodaj <img src="img/$.png"> do divow
        line2_class[3].innerHTML = line5_box;
        line3_class[3].innerHTML = line2_box;
        line4_class[3].innerHTML = line3_box;
        line5_class[3].innerHTML = line4_box;

        //! sprawdz wszystkie kulki
        check_result();

        return true;
    }
    //* if click 4th DOWN arrow
    else if (line_num === 6 && arrow_num === 4 && arrow_way === "down") {

        // wez atrybut src od img (box$ = img/$.png)
        let line2_box = line2_class[4].firstChild.getAttribute("src");
        let line3_box = line3_class[4].firstChild.getAttribute("src");
        let line4_box = line4_class[4].firstChild.getAttribute("src");
        let line5_box = line5_class[4].firstChild.getAttribute("src");

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line2_box = '<' + line2_box + '">';
        //TODO zamienia line$_box (string) na array
        line2_box = line2_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line2_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line2_box = line2_box.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line3_box = '<' + line3_box + '">';
        //TODO zamienia line$_box (string) na array
        line3_box = line3_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line3_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line3_box = line3_box.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line4_box = '<' + line4_box + '">';
        //TODO zamienia line$_box (string) na array
        line4_box = line4_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line4_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line4_box = line4_box.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line5_box = '<' + line5_box + '">';
        //TODO zamienia line$_box (string) na array
        line5_box = line5_box.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line5_box.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line5_box = line5_box.join('');

        //TODO dodaj <img src="img/$.png"> do divow
        line2_class[4].innerHTML = line5_box;
        line3_class[4].innerHTML = line2_box;
        line4_class[4].innerHTML = line3_box;
        line5_class[4].innerHTML = line4_box;

        //! sprawdz wszystkie kulki
        check_result();

        return true;
    }
    //TODO LEFT arrow
    //* if click 1st LEFT arrow
    else if (line_num === 2 && arrow_num === 1 && arrow_way === "left") {

        // wez atrybut src od img (box$ = img/$.png)
        let line2_box1 = line2_class[1].firstChild.getAttribute("src");
        let line2_box2 = line2_class[2].firstChild.getAttribute("src");
        let line2_box3 = line2_class[3].firstChild.getAttribute("src");
        let line2_box4 = line2_class[4].firstChild.getAttribute("src");

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line2_box1 = '<' + line2_box1 + '">';
        //TODO zamienia line$_box (string) na array
        line2_box1 = line2_box1.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line2_box1.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line2_box1 = line2_box1.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line2_box2 = '<' + line2_box2 + '">';
        //TODO zamienia line$_box (string) na array
        line2_box2 = line2_box2.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line2_box2.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line2_box2 = line2_box2.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line2_box3 = '<' + line2_box3 + '">';
        //TODO zamienia line$_box (string) na array
        line2_box3 = line2_box3.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line2_box3.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line2_box3 = line2_box3.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line2_box4 = '<' + line2_box4 + '">';
        //TODO zamienia line$_box (string) na array
        line2_box4 = line2_box4.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line2_box4.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line2_box4 = line2_box4.join('');

        //TODO dodaj <img src="img/$.png"> do divow
        line2_class[1].innerHTML = line2_box2;
        line2_class[2].innerHTML = line2_box3;
        line2_class[3].innerHTML = line2_box4;
        line2_class[4].innerHTML = line2_box1;

        //! sprawdz wszystkie kulki
        check_result();

        return true;
    }
    //* if click 2nd LEFT arrow
    else if (line_num === 3 && arrow_num === 1 && arrow_way === "left") {

        // wez atrybut src od img (box$ = img/$.png)
        let line3_box1 = line3_class[1].firstChild.getAttribute("src");
        let line3_box2 = line3_class[2].firstChild.getAttribute("src");
        let line3_box3 = line3_class[3].firstChild.getAttribute("src");
        let line3_box4 = line3_class[4].firstChild.getAttribute("src");

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line3_box1 = '<' + line3_box1 + '">';
        //TODO zamienia line$_box (string) na array
        line3_box1 = line3_box1.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line3_box1.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line3_box1 = line3_box1.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line3_box2 = '<' + line3_box2 + '">';
        //TODO zamienia line$_box (string) na array
        line3_box2 = line3_box2.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line3_box2.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line3_box2 = line3_box2.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line3_box3 = '<' + line3_box3 + '">';
        //TODO zamienia line$_box (string) na array
        line3_box3 = line3_box3.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line3_box3.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line3_box3 = line3_box3.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line3_box4 = '<' + line3_box4 + '">';
        //TODO zamienia line$_box (string) na array
        line3_box4 = line3_box4.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line3_box4.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line3_box4 = line3_box4.join('');

        //TODO dodaj <img src="img/$.png"> do divow
        line3_class[1].innerHTML = line3_box2;
        line3_class[2].innerHTML = line3_box3;
        line3_class[3].innerHTML = line3_box4;
        line3_class[4].innerHTML = line3_box1;

        //! sprawdz wszystkie kulki
        check_result();

        return true;
    }
    //* if click 3rd LEFT arrow
    else if (line_num === 4 && arrow_num === 1 && arrow_way === "left") {

        // wez atrybut src od img (box$ = img/$.png)
        let line4_box1 = line4_class[1].firstChild.getAttribute("src");
        let line4_box2 = line4_class[2].firstChild.getAttribute("src");
        let line4_box3 = line4_class[3].firstChild.getAttribute("src");
        let line4_box4 = line4_class[4].firstChild.getAttribute("src");

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line4_box1 = '<' + line4_box1 + '">';
        //TODO zamienia line$_box (string) na array
        line4_box1 = line4_box1.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line4_box1.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line4_box1 = line4_box1.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line4_box2 = '<' + line4_box2 + '">';
        //TODO zamienia line$_box (string) na array
        line4_box2 = line4_box2.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line4_box2.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line4_box2 = line4_box2.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line4_box3 = '<' + line4_box3 + '">';
        //TODO zamienia line$_box (string) na array
        line4_box3 = line4_box3.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line4_box3.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line4_box3 = line4_box3.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line4_box4 = '<' + line4_box4 + '">';
        //TODO zamienia line$_box (string) na array
        line4_box4 = line4_box4.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line4_box4.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line4_box4 = line4_box4.join('');

        //TODO dodaj <img src="img/$.png"> do divow
        line4_class[1].innerHTML = line4_box2;
        line4_class[2].innerHTML = line4_box3;
        line4_class[3].innerHTML = line4_box4;
        line4_class[4].innerHTML = line4_box1;

        //! sprawdz wszystkie kulki
        check_result();

        return true;
    }
    //* if click 4th LEFT arrow
    else if (line_num === 5 && arrow_num === 1 && arrow_way === "left") {

        // wez atrybut src od img (box$ = img/$.png)
        let line5_box1 = line5_class[1].firstChild.getAttribute("src");
        let line5_box2 = line5_class[2].firstChild.getAttribute("src");
        let line5_box3 = line5_class[3].firstChild.getAttribute("src");
        let line5_box4 = line5_class[4].firstChild.getAttribute("src");

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line5_box1 = '<' + line5_box1 + '">';
        //TODO zamienia line$_box (string) na array
        line5_box1 = line5_box1.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line5_box1.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line5_box1 = line5_box1.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line5_box2 = '<' + line5_box2 + '">';
        //TODO zamienia line$_box (string) na array
        line5_box2 = line5_box2.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line5_box2.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line5_box2 = line5_box2.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line5_box3 = '<' + line5_box3 + '">';
        //TODO zamienia line$_box (string) na array
        line5_box3 = line5_box3.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line5_box3.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line5_box3 = line5_box3.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line5_box4 = '<' + line5_box4 + '">';
        //TODO zamienia line$_box (string) na array
        line5_box4 = line5_box4.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line5_box4.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line5_box4 = line5_box4.join('');

        //TODO dodaj <img src="img/$.png"> do divow
        line5_class[1].innerHTML = line5_box2;
        line5_class[2].innerHTML = line5_box3;
        line5_class[3].innerHTML = line5_box4;
        line5_class[4].innerHTML = line5_box1;

        //! sprawdz wszystkie kulki
        check_result();

        return true;
    }
    //TODO RIGHT arrow
    //* if click 1st RIGHT arrow
    else if (line_num === 2 && arrow_num === 2 && arrow_way === "right") {

        // wez atrybut src od img (box$ = img/$.png)
        let line2_box1 = line2_class[1].firstChild.getAttribute("src");
        let line2_box2 = line2_class[2].firstChild.getAttribute("src");
        let line2_box3 = line2_class[3].firstChild.getAttribute("src");
        let line2_box4 = line2_class[4].firstChild.getAttribute("src");

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line2_box1 = '<' + line2_box1 + '">';
        //TODO zamienia line$_box (string) na array
        line2_box1 = line2_box1.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line2_box1.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line2_box1 = line2_box1.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line2_box2 = '<' + line2_box2 + '">';
        //TODO zamienia line$_box (string) na array
        line2_box2 = line2_box2.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line2_box2.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line2_box2 = line2_box2.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line2_box3 = '<' + line2_box3 + '">';
        //TODO zamienia line$_box (string) na array
        line2_box3 = line2_box3.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line2_box3.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line2_box3 = line2_box3.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line2_box4 = '<' + line2_box4 + '">';
        //TODO zamienia line$_box (string) na array
        line2_box4 = line2_box4.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line2_box4.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line2_box4 = line2_box4.join('');

        //TODO dodaj <img src="img/$.png"> do divow
        line2_class[1].innerHTML = line2_box4;
        line2_class[2].innerHTML = line2_box1;
        line2_class[3].innerHTML = line2_box2;
        line2_class[4].innerHTML = line2_box3;

        //! sprawdz wszystkie kulki
        check_result();

        return true;
    }
    //* if click 2nd RIGHT arrow
    else if (line_num === 3 && arrow_num === 2 && arrow_way === "right") {

        // wez atrybut src od img (box$ = img/$.png)
        let line3_box1 = line3_class[1].firstChild.getAttribute("src");
        let line3_box2 = line3_class[2].firstChild.getAttribute("src");
        let line3_box3 = line3_class[3].firstChild.getAttribute("src");
        let line3_box4 = line3_class[4].firstChild.getAttribute("src");

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line3_box1 = '<' + line3_box1 + '">';
        //TODO zamienia line$_box (string) na array
        line3_box1 = line3_box1.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line3_box1.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line3_box1 = line3_box1.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line3_box2 = '<' + line3_box2 + '">';
        //TODO zamienia line$_box (string) na array
        line3_box2 = line3_box2.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line3_box2.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line3_box2 = line3_box2.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line3_box3 = '<' + line3_box3 + '">';
        //TODO zamienia line$_box (string) na array
        line3_box3 = line3_box3.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line3_box3.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line3_box3 = line3_box3.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line3_box4 = '<' + line3_box4 + '">';
        //TODO zamienia line$_box (string) na array
        line3_box4 = line3_box4.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line3_box4.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line3_box4 = line3_box4.join('');

        //TODO dodaj <img src="img/$.png"> do divow
        line3_class[1].innerHTML = line3_box4;
        line3_class[2].innerHTML = line3_box1;
        line3_class[3].innerHTML = line3_box2;
        line3_class[4].innerHTML = line3_box3;

        //! sprawdz wszystkie kulki
        check_result();

        return true;
    }
    //* if click 3rd RIGHT arrow
    else if (line_num === 4 && arrow_num === 2 && arrow_way === "right") {

        // wez atrybut src od img (box$ = img/$.png)
        let line4_box1 = line4_class[1].firstChild.getAttribute("src");
        let line4_box2 = line4_class[2].firstChild.getAttribute("src");
        let line4_box3 = line4_class[3].firstChild.getAttribute("src");
        let line4_box4 = line4_class[4].firstChild.getAttribute("src");

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line4_box1 = '<' + line4_box1 + '">';
        //TODO zamienia line$_box (string) na array
        line4_box1 = line4_box1.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line4_box1.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line4_box1 = line4_box1.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line4_box2 = '<' + line4_box2 + '">';
        //TODO zamienia line$_box (string) na array
        line4_box2 = line4_box2.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line4_box2.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line4_box2 = line4_box2.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line4_box3 = '<' + line4_box3 + '">';
        //TODO zamienia line$_box (string) na array
        line4_box3 = line4_box3.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line4_box3.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line4_box3 = line4_box3.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line4_box4 = '<' + line4_box4 + '">';
        //TODO zamienia line$_box (string) na array
        line4_box4 = line4_box4.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line4_box4.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line4_box4 = line4_box4.join('');

        //TODO dodaj <img src="img/$.png"> do divow
        line4_class[1].innerHTML = line4_box4;
        line4_class[2].innerHTML = line4_box1;
        line4_class[3].innerHTML = line4_box2;
        line4_class[4].innerHTML = line4_box3;

        //! sprawdz wszystkie kulki
        check_result();

        return true;
    }
    //* if click 3rd RIGHT arrow
    else if (line_num === 5 && arrow_num === 2 && arrow_way === "right") {

        // wez atrybut src od img (box$ = img/$.png)
        let line5_box1 = line5_class[1].firstChild.getAttribute("src");
        let line5_box2 = line5_class[2].firstChild.getAttribute("src");
        let line5_box3 = line5_class[3].firstChild.getAttribute("src");
        let line5_box4 = line5_class[4].firstChild.getAttribute("src");

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line5_box1 = '<' + line5_box1 + '">';
        //TODO zamienia line$_box (string) na array
        line5_box1 = line5_box1.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line5_box1.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line5_box1 = line5_box1.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line5_box2 = '<' + line5_box2 + '">';
        //TODO zamienia line$_box (string) na array
        line5_box2 = line5_box2.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line5_box2.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line5_box2 = line5_box2.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line5_box3 = '<' + line5_box3 + '">';
        //TODO zamienia line$_box (string) na array
        line5_box3 = line5_box3.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line5_box3.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line5_box3 = line5_box3.join('');

        //TODO dodaj strzalki (line$_box = <img/$.png">)
        line5_box4 = '<' + line5_box4 + '">';
        //TODO zamienia line$_box (string) na array
        line5_box4 = line5_box4.split("");
        //TODO dodaj od '<img' + ' src="img' + '/$.png">'
        line5_box4.splice(4, 0, ' src="img');
        //TODO zwraca array jako string usuwając commas (przecinki)
        line5_box4 = line5_box4.join('');

        //TODO dodaj <img src="img/$.png"> do divow
        line5_class[1].innerHTML = line5_box4;
        line5_class[2].innerHTML = line5_box1;
        line5_class[3].innerHTML = line5_box2;
        line5_class[4].innerHTML = line5_box3;

        //! sprawdz wszystkie kulki
        check_result();

        return true;
    }

} // end click_arrow()

//! FUNCTION check_result() - sprawdza czy wszystkie kolory pasują
function check_result() {

    //* if wszystkie kulki pasuja = wygrales, else = nie wygrales
    if (
        (line2_class[1].firstChild.getAttribute("src") === 'img/1.png') &&
        (line3_class[1].firstChild.getAttribute("src") === 'img/1.png') &&
        (line4_class[1].firstChild.getAttribute("src") === 'img/1.png') &&
        (line5_class[1].firstChild.getAttribute("src") === 'img/1.png') &&
        (line2_class[2].firstChild.getAttribute("src") === 'img/2.png') &&
        (line3_class[2].firstChild.getAttribute("src") === 'img/2.png') &&
        (line4_class[2].firstChild.getAttribute("src") === 'img/2.png') &&
        (line5_class[2].firstChild.getAttribute("src") === 'img/2.png') &&
        (line2_class[3].firstChild.getAttribute("src") === 'img/3.png') &&
        (line3_class[3].firstChild.getAttribute("src") === 'img/3.png') &&
        (line4_class[3].firstChild.getAttribute("src") === 'img/3.png') &&
        (line5_class[3].firstChild.getAttribute("src") === 'img/3.png') &&
        (line2_class[4].firstChild.getAttribute("src") === 'img/4.png') &&
        (line3_class[4].firstChild.getAttribute("src") === 'img/4.png') &&
        (line4_class[4].firstChild.getAttribute("src") === 'img/4.png') &&
        (line5_class[4].firstChild.getAttribute("src") === 'img/4.png')
    ) {
        document.getElementById("game").innerHTML = "GRATULACJE! ZJEDZ KOLACJE";
        console.log("WYGRALES!");

        return true;
    }
    else {
        console.log("NIE WYGRALES");

        return false;
    }
} // end check_result()