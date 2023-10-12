import React from 'react';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'ATEF ORF',
        bio: 'Lorem ipsum dolor sit amet.',
        imgSrc: '1.jpg',
        profession: 'HAKER'
      },
      show: false,
      intervalId: null,
      timeSinceMount: 0
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1
      }));
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeSinceMount } = this.state;

    const styles = {
      container: {
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      },
      button: {
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        marginTop: '10px',
      },
      profile: {
        display: show ? 'block' : 'none',
      },
      image: {
        maxWidth: '100%',
      },
    };

    return (
      <div style={styles.container}>
        <button style={styles.button} onClick={this.toggleShow}>
          Toggle Profile
        </button>
        <div style={styles.profile}>
          <h1>{fullName}</h1>
          <p>{bio}</p>
          <img src={imgSrc} alt={fullName} style={styles.image} />
          <p>Profession: {profession}</p>
        </div>
        <p>Time since mount: {timeSinceMount}s</p>
      </div>
    );
  }
}

export default App;
