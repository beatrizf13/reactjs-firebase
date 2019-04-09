import React, { Component } from "react";
import "./App.css";
import Form from "./components/form";
import List from "./components/list";
import firebase from "./firebase";

class App extends Component {
  state = {
    form: {
      name: "",
      comment: ""
    },
    comments: []
  };

  onChangeName = e => {
    const { value } = e.target;
    this.setState({
      form: {
        ...this.state.form,
        name: value
      }
    });
  };

  onChangeComment = e => {
    const { value } = e.target;
    this.setState({
      form: {
        ...this.state.form,
        comment: value
      }
    });
  };

  onSubmit = async e => {
    e.preventDefault();

    const comment = {
      ...this.state.form,
      createAt: new Date().getTime()
    };

    await firebase
      .database()
      .ref("comments")
      .push(comment);

    this.setState({
      form: {
        name: "",
        comment: ""
      }
    });
  };

  onRemove = uid => {
    const commentRef = firebase
      .database()
      .ref("comments")
      .child(uid);

    commentRef.remove();
  };

  onEdit = uid => {
    const commentRef = firebase
      .database()
      .ref(`comments/${uid}`);

      commentRef.update({
        name: "Nome editado",
        "comment" : "Comentário editado"
      })

  }

  componentDidMount() {
    firebase
      .database()
      .ref("comments")
      .on("value", snapshot => {
        const response = snapshot.val();
        const comments = !!response
          ? Object.keys(response).map(uid => ({
              ...response[uid],
              uid
            }))
          : [];

        this.setState({
          comments
        });
      });
  }

  render() {
    const { comments, form } = this.state;
    const { name, comment } = form;

    return (
      <div className="App">
        <Form
          name={name}
          comment={comment}
          onChangeName={this.onChangeName}
          onChangeComment={this.onChangeComment}
          onSubmit={this.onSubmit}
        />
        <br />
        <List comments={comments} onRemove={this.onRemove} onEdit={this.onEdit} />
      </div>
    );
  }
}

export default App;
