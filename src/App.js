import "./App.css";
import Profile from "./Profile/Profile";
function App() {
  const fullName = "Zied Ben Rejeb";
  const bio = `I am a computer technician passionate about the field of information technology, particularly web development, with a capacity for autonomy, a spirit of analysis and initiative, I am always ready to take up new challenges and especially to win !
  Do not hesitate to contact me, I would be delighted to share with you my experience as well as yours!`;
  const profession = `Web Developer`;
  const handleName = () => {
    alert(`Hello ${fullName} !`);
  };
  return (
    <div className="App">
      <Profile
        fullName={fullName}
        bio={bio}
        profession={profession}
        alert={handleName}
      />
    </div>
  );
}

export default App;
