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

    for (const letter of username) {
        if (letter == first_letter.toUpperCase()) {
            alert('Success')
        }
    }


    
}

// var character = 'aDdbgfbmyn';
// var first_letter = character.charAt(0)
// console.log(first_letter);

// for (const letter of character) {
//     if (letter == first_letter.toUpperCase()) {
//         console.log(letter);
//     }
//     if (letter == first_letter.toLowerCase()){
//      console.log(letter);
//     }
// }

// var character = '5';
// function isUpperCase(){
//     if (character == character.toUpperCase()) {
//         alert ('upper case true');
//     }
//     if (character == character.toLowerCase()){
//         alert ('lower case true');
//     }
// }
// isUpperCase(character)