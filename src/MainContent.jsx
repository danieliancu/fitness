import React, {useContext} from 'react'
import { AppContext } from './components/AppContext';
import fitnessData from './components/fitness.json'
import "./App.css"

export default function MainContent() {
    const {theme, language} = useContext(AppContext)
    const fitnessTypes = fitnessData.fitness_types[language] || fitnessData.fitness_types.en
    const headline = fitnessData.headline[language]

    
    return (
        <div className={`main ${theme}`}>
            <div className="container">
                <h1>{headline}</h1>
            {Object.entries(fitnessTypes).map(([key, item])=>(
                <div key={key}>
                    <h2>{key}</h2>
                    <p>{item}</p>
                </div>
            ))}
            </div>
        </div>
    );
}
