import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useChatStore } from "../../lib/chatStore";
import { auth, db } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";
import "./detail.css";
import { useState } from "react";

const Detail = () => {
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } =
    useChatStore();
  const { currentUser } = useUserStore();
  const [isChatSettingsExpanded, setChatSettingsExpanded] = useState(false);
  const [isPrivacyExpanded, setPrivacyExpanded] = useState(false);
  const [isSharedPhotosExpanded, setSharedPhotosExpanded] = useState(false);
  const [isSharedFilesExpanded, setSharedFilesExpanded] = useState(false);

  const handleBlock = async () => {
    if (!user) return;

    const userDocRef = doc(db, "users", currentUser.id);

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="detail">
      <div className="user">
        <img src={user?.avatar || ".avatar.png"} alt="" />
        <h2>{user?.username}</h2>
        {/* <p>Lorem ipsum dolor, sit amet.</p> */}
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img
              src={isChatSettingsExpanded ? "./arrowDown.png" : "./arrowUp.png"}
              alt=""
              onClick={() => setChatSettingsExpanded(!isChatSettingsExpanded)}
            />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img
              src={isPrivacyExpanded ? "./arrowDown.png" : "./arrowUp.png"}
              alt=""
              onClick={() => setPrivacyExpanded(!isPrivacyExpanded)}
            />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img
              src={isSharedPhotosExpanded ? "./arrowDown.png" : "./arrowUp.png"}
              alt=""
              onClick={() => setSharedPhotosExpanded(!isSharedPhotosExpanded)}
            />
          </div>
          {isSharedPhotosExpanded && (
            <div className="photos">
              <div className="photoItem">
                <div className="photoDetail">
                  <img src="" alt="photo img" />
                  <span>photo_2024_2.pg</span>
                </div>
                <img src="./download.png" alt="" className="icon" />
              </div>
            </div>
          )}
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img
              src={isSharedFilesExpanded ? "./arrowDown.png" : "./arrowUp.png"}
              alt=""
              onClick={() => setSharedFilesExpanded(!isSharedFilesExpanded)}
            />
          </div>
        </div>
      </div>
      <button onClick={handleBlock}>
        {isCurrentUserBlocked
          ? "You are Blocked!"
          : isReceiverBlocked
          ? "User blocked"
          : "Block User"}
      </button>
      <button className="logout" onClick={() => auth.signOut()}>
        Logout
      </button>
    </div>
  );
};

export default Detail;
