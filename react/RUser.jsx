import React, { useState } from "react";
import User from "../svg/User.jsx";

const RUser = () => {


	const [showAuth, setShowAuth] = useState(false);
	const autOff = () => {
		setShowAuth(!showAuth);
	};

	const [showLog, setShowLog] = useState(false);
	const logOff = () => {
		setShowLog(!showLog);
	};


	return (
		<div className="rUser">
			<User 	onClick={() => autOff()}	 />

			{showAuth && (
				<div className="Authorization">
					<div style={{top: showLog ? "7% ": "12%",}} className="Login" onClick={() => logOff()}>Login or</div>
					<div style={{top: showLog ? "7% ": "12%",}} className="Registration" onClick={() => logOff()}>Registration</div>
					<input
						style={{top: showLog ? "30% ": "35%",}}
						className="Email"
						type="Email"
						placeholder="&nbsp;Email"
					/>
					<input
						style={{top: showLog ? "50% ": "55%",}}
						className="Password"
						type="Password"
						placeholder="&nbsp;Password"
					/>
					{showLog && (
						<input
							className="REpassword"
							type="password"
							placeholder="Repeat password"
						/>
					)}
					<div style={{top: showLog ? "90% ": "75%",}} className={"ButtonL"}>{showLog ? "Registration" : "Login"}</div>

				</div>
			)}
		</div>
	);
};

export default RUser;