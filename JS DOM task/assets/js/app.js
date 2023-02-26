let nums = [12,5,24,35,8,47]

function asc(arr){
    for(i = 0; i < arr.length; i++){
        for(j = i+1; j <arr.length; j++){
            if(arr[i]>arr[j]){
                let swap = arr[i]
                arr[i] = arr[j]
                arr[j] = swap
            }
        }
    }
    console.log(arr); 
}
asc(nums)

function desc(arr){
    for(i = 0; i < arr.length; i++){
        for(j = i+1; j < arr.length; j++){
            if(arr[i]<arr[j]){
                let swap = arr[i]
                arr[i] = arr[j]
                arr[j] = swap
            }
        }
    }
    console.log(arr); 
}
desc(nums)



let btn = document.getElementById('btn');
btn.onclick = function(){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let email = document.getElementById('email').value

    let first_letter = username.charAt(0)

    if (/[A-Z]/.test(first_letter) && /^[A-Za-z][A-Za-z0-9_]{6,}$/.test(username)) {
        alert('Success')
    }
    else{
        alert("You have entered an invalid username!")
    }

    if(/^[A-Za-z]\w{6,10}$/.test(password)){
        alert("success")
    }
    else{
        alert("You have entered an invalid password!")
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
        alert("Success")
        return (true)
    }
    else{
        alert("You have entered an invalid email address!")
        return (false)
    }    
}