import ApiModule from "../Components/Modules/ApiModule";

function createSendMessageButton() {
    return`<textarea id="textarea" type="text" placeholder="Write a message here" minlength="1"> </textarea>
                        <button id="postMessageButton" class="submit-msg-btn">
                            <svg class="icon" id="sendMessageButton" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>
                        </button>`;
}

/**
 * Create the feature to send a message when clicking on send image
 */
function createSendMessageFeature (user , other) {
    const sendMessageButton = document.getElementById("sendMessageButton");
    sendMessageButton.addEventListener("click", async (e) => {
        const textArea = document.getElementById("textarea");
        const body = {
            id_sender: user.id_user,
            id_recipient: other.id_user,
            message: textArea.value
        };
        textArea.value = "";
        await ApiModule.sendMessage(body);
        const messages = await ApiModule.getMessages(user.id_user, other.id_user);
    });
}

export default createSendMessageButton;