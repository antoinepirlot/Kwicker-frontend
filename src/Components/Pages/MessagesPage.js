
import "bootstrap/dist/css/bootstrap.min.css";
/**
 * Render the Messages
 */

const Messages = async () => {
    // Init
    const pageDiv = document.querySelector("#page");
    pageDiv.innerHTML = `
    <div class="messagePageContainer" >
        
        <div class="row" >
            <div class="col-md-2" id="userConvs" >
                <ol class="contacts"> 
                    <div class="contact" > 
                        <li >
                            <p> LePirelot </p>
                        </li>
                    </div>
                    <div class="contact" > 
                        <li >
                            <p> François </p>
                        </li>
                    </div>
                    <div class="contact" > 
                        <li >
                            <p> Souli </p>
                        </li>
                    </div>
                    
                    <div class="contact" > 
                        <li >
                            <p> Guillaume </p>
                        </li>
                    </div>

                </ol>
            </div>
            <div class="col-md-9" id="openedConv">
                <div class="headConv"><p>LePirelot</p> </div>
                <ol class="chat">
                <div align="left">
                    <li class="other">
                      <div align="left" class="msg">
                        <p>LePirelot</p>
                        <p>message other</p>
                        <time>20:18</time>
                      </div>
                    </li>
                </div>
                <div align="right">
                    <li class="self">
                      <div align="right" class="msg">
                        <p>Vivi</p>
                        <p>Message sefl</p>
                        <time>18:09</time>
                      </div>
                    </li>
                </div>
                <div align="left">
                    <li class="other">
                      <div align="left" class="msg">
                        <p>LePirelot</p>
                        <p>message other</p>
                        <time>20:18</time>
                      </div>
                    </li>
                </div>
                <div align="right">
                    <li class="self">
                      <div align="right" class="msg">
                        <p>Vivi</p>
                        <p>Message sefl</p>
                        <time>18:09</time>
                      </div>
                    </li>
                </div>
                <div align="left">
                    <li class="other">
                      <div align="left" class="msg">
                        <p>LePirelot</p>
                        <p>message other</p>
                        <time>20:18</time>
                      </div>
                    </li>
                </div>
                </ol>
            </div>
            <div class="textarea">
                    <svg class="icon" id="sendMessageButton" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>
                    <input id="textarea" type="text" placeholder="Write a message here"> 
            </div>
        </div>
    </div>
    `;

};

export default Messages;