import * as React from "react";
import { Item, Input, Icon, Form } from "native-base";
import Login from "../../stories/screens/Login";

export interface Props {
	navigation: any;
}
export interface State {}
export default class LoginContainer extends React.Component<Props, State> {
	render() {
		const form = (
			<Form>
				<Item>
					<Icon active name="person" />
					<Input placeholder="Email" keyboardType="email-address" />
				</Item>
				<Item>
					<Icon active name="unlock" />
					<Input placeholder="Password" secureTextEntry />
				</Item>
			</Form>
		);
		return <Login loginForm={form} onLogin={() => this.props.navigation.navigate("Drawer")} />;
	}
}
