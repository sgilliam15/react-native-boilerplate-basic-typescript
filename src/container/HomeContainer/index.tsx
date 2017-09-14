import * as React from "react";
import Home from "../../stories/screens/Home";
export interface Props {
	navigation: any;
}
export interface State {}
export default class HomeContainer extends React.Component<Props, State> {
	render() {
		const data = [
			"React Native Starter Kit",
			"React Navigation",
			"NativeBase Easy Grid",
			"NativeBase",
			"CodePush",
			"Redux",
		];
		return <Home navigation={this.props.navigation} list={data} />;
	}
}
