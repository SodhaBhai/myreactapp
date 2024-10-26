import React, { useState } from 'react';
import './App.css';
import GoalList from './components/GoalLists/GoalList';
import NewGoal from './components/NewGoals/NewGoal';
const App = () => {
   const [courseGoals,setCourseGoals] = useState([
      {id: 'cg1' , text: 'Kuldeep'},
      {id: 'cg2' , text: 'Singh'},
      {id: 'cg3' , text: 'Sodha'},
    ]);

  const addNewGoalHandler = newGoal =>{
   setCourseGoals(courseGoals.concat(newGoal))
   //if our state depends on prev state than go with bellow logic
   //setCourseGoals(courseGoals => courseGoals.concat(newGoal))
  }

  return (
    <div className="course-goals">
      <h2>Course Goal</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={courseGoals}/>
    </div>
  );
};

export default App;
