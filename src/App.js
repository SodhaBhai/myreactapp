import React from 'react';
import './App.css';
import GoalList from './components/GoalList';

const App = () => {

  const courseGoals = [
    {id: 'cg1' , text: 'Kuldeep'},
    {id: 'cg2' , text: 'Singh'},
    {id: 'cg3' , text: 'Sodha'},
  ];

  return <div>
    <h2>Course Goal</h2>
    <GoalList goals={courseGoals}/>
  </div>;
};

export default App;
