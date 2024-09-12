import React from "react";
import { Button } from "@blueprintjs/core";
import { withRouter, RouteComponentProps } from "react-router";

type Props = RouteComponentProps<{}> & {
    to: string,
    onClick?: Function
};

const LinkButton = (props: Props) => {
    const {
        history,
        to,
        onClick,
        // ⬆ filtering out props that `button` doesn’t know what to do with.
        ...rest
    } = props;
    return (
        <Button
            {...rest} // `children` is just another prop!
            onClick={(event: React.SyntheticEvent) => {
                onClick && onClick(event);
                history.push(to);
            }}
        />
    );
};

export default withRouter(LinkButton);