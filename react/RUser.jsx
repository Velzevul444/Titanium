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
					<div className="Login" onClick={() => logOff()}>Login or</div>
					<div className="Registration" onClick={() => logOff()}>Registration</div>
					<input
						className="Email"
						type="Email"
						placeholder="&nbsp;Email"
					/>
					<input
						className="Password"
						type="Password"
						placeholder="&nbsp;Password"
					/>
					<button className={"ButtonL"}>Login</button>

				</div>
			)}
		</div>
	);
};

export default RUser;