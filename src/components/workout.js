import React from "react"
import classes from "./workout.module.css"

const Workout = ({ workout, date }) => {

    const exercise = workout.slice(1).map((w, i) => {
        return (
            <div className={classes.Exercise} key={i}>
                <p>Exercise: <span>{w.exercise}</span></p>
                <p>Reps: <span>{w.reps}</span></p>
            </div>
        )
    })
    return (
        <div className={classes.Workout}>
            <h3>{date}</h3>
            {exercise}
        </div>
    )
}

export default Workout;