function opr(choice)
{
    
    num_1 = parseFloat(document.getElementById("num_1").value)
    num_2 = parseFloat(document.getElementById("num_2").value)

    switch(choice)
    {

        case "add":
            document.getElementById("res").value = num_1 + num_2
            break

        case "sub":
            document.getElementById("res").value = num_1 - num_2
            break

        case "mul":
            document.getElementById("res").value = num_1 * num_2
            break

        case "div":

            if(num_2 === 0)
            {
                document.getElementById("res").value = "Not Defined"
            }

            else
            {
                document.getElementById("res").value = num_1 / num_2
            }
            
            break
    }
}

function reset_(){
    document.getElementById("num_1").value = ""
    document.getElementById("num_2").value = ""
    document.getElementById("res").value = ""
}