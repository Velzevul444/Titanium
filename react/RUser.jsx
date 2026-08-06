import React, { useState } from "react";

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
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="User"
				onClick={() => autOff()}
			>
				<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
				<circle cx="12" cy="7" r="4" />
			</svg>

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