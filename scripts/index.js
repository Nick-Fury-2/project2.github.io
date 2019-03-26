function func() {
    const xhr = new XMLHttpRequest();
    document.getElementById('fm').addEventListener("submit", function (event) {
        event.preventDefault();
        const params = {
            first_name: document.getElementById('first_name').value,
            last_name: document.getElementById('last_name').value,
            email_id: document.getElementById('email_id').value,
            pass_word: document.getElementById('pass_word').value,
            confirm_pass_word: document.getElementById('confirm_pass_word').value
        };
        console.log(params);
        xhr.open('POST', 'http://localhost:8080/api/v1/signup');
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xhr.send(JSON.stringify(params));
        console.log(params);
        xhr.onreadystatechange = function(){
            if(xhr.status ===200 &&  xhr.readyState===4){
                window.location="G:\\New folder (3)\\Project\\html\\home.html";
            }
        };

    });
}

