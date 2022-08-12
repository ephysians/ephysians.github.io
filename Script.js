/*                                     THE JAVSCERIPT LOGIC HAS FOUR FUNCTION AS SEEN (Output, Clear, Delete & Calculate)
                    ------------------------------------------------------------------------------------------------------------------- */





let $result = document.getElementById("out-put");           // Variable declearation with "$result" representing out-put of any operation 



function display(num)                                       // "SCREEN-OUTPUT" function enables output of any item with function name "display"  on the screen
{
    $result.value += num
}




function Clear()                                            // "CLEAR" function, clears the entire screen of any inpute when you press the "CLR" button.
{
    $result.value = "";
}




function del() {                                            //"DELETE" function, allows you to delete items on the screen one at a time when you press the "DEL" button
    $result.value =
        $result.value.slice(0, -1)
}




function Calculate() {                                      //"CALCULATING" function, carries out number operation and displays the value
    try {
        $result.value = eval($result.value)
    } catch (error) {
        alert("invalid input")
    }

}