let messagesURL = 'http://10.185.1.218:3000/messages'
let messages = [];
let newMessage;


document.addEventListener('DOMContentLoaded', mainFunction)

function mainFunction() {
        fetch(messagesURL).then(function(response){
        return response.json()
    }).then(function(result){
        messages = result
        document.getElementById("messages").innerHTML = ""
        messages.forEach((message) => {
            newMessage = new Message(message.content)
            document.getElementById("messages").append(newMessage.li)
        })
    })
    let form = document.getElementById("message_form")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        let MessageInput = document.getElementById("message_input")
        newMessage = new Message(MessageInput.value)
        document.getElementById("messages").append(newMessage.li)
        fetch(messagesURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'content': newMessage.content
            })
        })
    })
}