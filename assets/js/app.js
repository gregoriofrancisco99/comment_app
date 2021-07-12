    const user = {
      name: 'Gregório Francisco',
      avatarUrl: 'https://avatars.githubusercontent.com/u/70094172?v=4',
    }

    function Comment(props) {
      return (
        <div className="Comment">
          <div className="UserInfo">
            <img className="Avatar"
              src={props.author.avatarUrl}
              alt={props.author.name}
            />
            <div className="UserInfo-name">
              {props.author.name}
            </div>
          </div>
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
      <Comment author={user} text={'Just a comment'} date={new Date().toDateString()} />,
      document.getElementById('root')
    );