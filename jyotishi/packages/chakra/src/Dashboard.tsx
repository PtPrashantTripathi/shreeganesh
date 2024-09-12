import * as React from "react";
import LinkButton from "./components/LinkButton";
import { Button, NonIdealState } from "@blueprintjs/core";

const Dashboard: React.FC = () => {
    return (
        <NonIdealState
            icon={"grid"}
            title="No charts"
            description="You have not created any charts yet."
            action={
                <LinkButton to="/create-new">+ Add</LinkButton>
            }
        />
    );
};

export default Dashboard;
