// Asseting variables    
const user = {
  name: 'Gregório Francisco',
  avatarUrl: 'https://avatars.githubusercontent.com/u/70094172?v=4',
}
const comment = 'Just a comment';
const date = new Date().toDateString();

//Running function


function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  );
}

ReactDOM.render(
  <Comment author={user} text={comment} date={date} />,
  document.getElementById('root')
);