import React from "react"
import {SubComponent} from './sub-component';

export const App: React.FC = () => {
    return (
        <div>
            <h1>Hello React!</h1>
    <SubComponent name="My Counter for TypeScript"/>
</div>
    )    
}