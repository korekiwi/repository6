const gallery = document.querySelector('.gallery');
const nickname = document.querySelector('#nickname');
const mtext = document.querySelector('#mtext');
const btn = document.querySelector('button');

function doDate() {
    let newDate = new Date;
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    if (month < 10) {
        month = '0' + String(month);
    }
    let year = newDate.getFullYear();
    let hour = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    if (minutes < 10) {
        minutes = '0' + String(minutes);
    }
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }
    return `${hour}:${minutes}:${seconds} ${date}.${month}.${year}`
}

console.log(doDate())

btn.addEventListener('click', () => {
    if (nickname.value == '' || mtext.value == '') {
        alert('Fill all forms');
    }
    else {
        let message = document.createElement('div');
        message.classList = 'message';
        message.innerHTML = `<table>
                    <tr>
                        <td class="first">${nickname.value}</td>
                        <td>${doDate()}</td>
                    </tr>
                    <tr>
                        <td colspan="2">${mtext.value}</td>
                    </tr>
                </table>`
        gallery.appendChild(message);
    }
})