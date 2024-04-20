import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((currentText) => currentText + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Sanat Jon</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>

      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              nihil, nisi quos atque nostrum sed magnam ipsam cum perspiciatis,
              cumque omnis placeat eius praesentium beatae ipsa labore enim,
              ipsum deleniti.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message owner">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              nihil, nisi quos atque nostrum sed magnam ipsam cum perspiciatis,
              cumque omnis placeat eius praesentium beatae ipsa labore enim,
              ipsum deleniti.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              nihil, nisi quos atque nostrum sed magnam ipsam cum perspiciatis,
              cumque omnis placeat eius praesentium beatae ipsa labore enim,
              ipsum deleniti.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message owner">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              nihil, nisi quos atque nostrum sed magnam ipsam cum perspiciatis,
              cumque omnis placeat eius praesentium beatae ipsa labore enim,
              ipsum deleniti.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              nihil, nisi quos atque nostrum sed magnam ipsam cum perspiciatis,
              cumque omnis placeat eius praesentium beatae ipsa labore enim,
              ipsum deleniti.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message owner">
          <div className="texts">
            <img src="" alt="Img user can send" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              nihil, nisi quos atque nostrum sed magnam ipsam cum perspiciatis,
              cumque omnis placeat eius praesentium beatae ipsa labore enim,
              ipsum deleniti.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((currentState) => !currentState)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
