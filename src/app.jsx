import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  onIncrement = (habit) => {
    console.log(`onIncrement ${habit.name}`);
    const habits = this.state.habits.map((item) => {
      if (habit.id == item.id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  onDecrement = (habit) => {
    console.log(`onDecrement ${habit.name}`);
    const habits = this.state.habits.map((item) => {
      if (item.id == habit.id) {
        const count = item.count - 1;
        return { ...item, count: count > 0 ? count : 0 };
      }
      return item;
    });
    this.setState({ habits });
  };

  onDelete = (habit) => {
    console.log(`onDelete ${habit.name}`);
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  onAdd = (name) => {
    const item = {
      id: Date.now(),
      name: name,
      count: 0,
    };
    const habits = [...this.state.habits, item];
    this.setState({ habits });
  };

  onReset = () => {
    const habits = this.state.habits.map((item) => {
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }
      return item;
    });
    this.setState({ habits });
  };
  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
          onDelete={this.onDelete}
          onAdd={this.onAdd}
          onReset={this.onReset}
        />
      </>
    );
  }
}

export default App;
