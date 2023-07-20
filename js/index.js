

let userId = document.getElementById("userId");
let userName = document.getElementById("userName");
let userAddress = document.getElementById("userAddress");
let userphone = document.getElementById("userphone");
let userMobile = document.getElementById("userMobile");
let useremail = document.getElementById("useremail");
let complain = document.getElementById("complain");
let Addbtn = document.getElementById("Addbtn");
let updatebtn = document.getElementById("updatebtn");

let userData = "";
let Data = [];

if (localStorage.getItem('localData') != null) {
    Data = JSON.parse(localStorage.getItem('localData'))
    displayData(Data)
}
function addData() {

    if (validateData() == true) {
        let userData = {
            userId: userId.value,
            userName: userName.value,
            userAddress: userAddress.value,
            userphone: userphone.value,
            userMobile: userMobile.value,
            useremail: useremail.value,
            complain: complain.value
        }

        Data.push(userData);
        clearData();
        localStorage.setItem('localData', JSON.stringify(Data))
        displayData(Data)
    }
    else {
        alert('userId is invalid')
    }
}

function searchItem(item) {
    matchData = []
    for (let i = 0; i < Data.length; i++) {
        if (Data[i].userName.includes(item) == true) {
            console.log(Data[i]);
            matchData.push(Data[i])
        }
    }
    console.log(matchData);
    displayData(matchData)
}

function clearData() {
    userId.value = "";
    userName.value = "";
    userAddress.value = "";
    userphone.value = "";
    userMobile.value = "";
    useremail.value = "";
    complain.value = "";
}

function displayData(Data) {
    let cartoona = ``;
    for (let i = 0; i < Data.length; i++) {
        cartoona += `<tr>
        <td>${Data[i].userId}</td>
        <td>${Data[i].userName}</td>
        <td>${Data[i].userAddress}</td>
        <td>${Data[i].userphone}</td>
        <td>${Data[i].userMobile}</td>
        <td>${Data[i].complain}</td>
        <td><button type="button" class="btn btn-success" onclick="updateData(${i})"> Update</button></td>
        <td><button type="button" class="btn btn-danger"  onclick="deleteData(${i})"> Delete</button></td>
        </tr>`

    }
    document.getElementById('demo').innerHTML = cartoona

}
// function displayData(Data) {
//     document.getElementById('demo').innerHTML = ''; // Clear the existing content

//     for (let i = 0; i < Data.length; i++) {
//       document.getElementById('demo').innerHTML +=
//         `<td>${Data[i].userId}</td>
//         <td>${Data[i].userName}</td>
//         <td>${Data[i].userAddress}</td>
//         <td>${Data[i].userphone}</td>
//         <td>${Data[i].userMobile}</td>
//         <td>${Data[i].complain}</td>
//         <td><button type="button" class="btn btn-success"> Update</button></td>
//         <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})"> Delete</button></td>
//         <td><button type="button" class="btn btn-primary"> Edit</button></td>`;
//     }
//   }
function deleteData(useIndex) {
    Data.splice(useIndex, 1);
    localStorage.setItem('localData', JSON.stringify(Data))
    displayData(Data);
}
function updateData(i) {
    Addbtn.classList.replace("d-block", "d-none");
    updatebtn.classList.replace("d-none", "d-block");
    userId.value = Data[i].userId
    userName.value = Data[i].userName
    userAddress.value = Data[i].userAddress
    userphone.value = Data[i].userphone
    userMobile.value = Data[i].userName
    complain.value = Data[i].complain

    if (Data[i].userName !== null) {
        // Data.push(Data[i].userName)
        Addbtn.classList.replace("d-none", "d-block");
        updatebtn.classList.replace("d-block", "d-none");
        console.log(Data);
    }
}

function validateData() {
    let regex = /^[0-9]{1,}$/
    regex.test(userId.value)
    return regex.test(userId.value)

}