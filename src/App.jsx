import "./App.css";
import Projects from './Projects.jsx'
import Current from "./Current.jsx";

function App() {
	return (
		<>
			<div className='page'>
				<div className="titleBox">
					<div className="titleBoxContent">
						<div className="name">Edward Sorrie</div>
						<div className="titleRole">
							Electronic and Computer Engineering Graduate
						</div>
						<div className="titleLocation">
							United Kingdom
						</div>
					</div>
				</div>
				<div className="ContactBox sticky">
					<div className="gitImage">
						<a href="https://github.com/esorrie/">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="35"
								height="35"
								viewBox="0 0 35 35"
								fill="none"
								>
								<g clip-path="url(#clip0_10_230)">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M17.5145 0C7.8317 0 0 7.8872 0 17.6446C0 25.4527 5.01824 31.985 11.9759 34.3708C12.8544 34.5486 13.1647 33.9869 13.1647 33.5284C13.1647 33.1071 13.1359 31.7129 13.1359 30.2498C8.26456 31.2796 7.25269 28.1611 7.25269 28.1611C6.4664 26.1203 5.30938 25.5869 5.30938 25.5869C3.71287 24.5097 5.4224 24.5097 5.4224 24.5097C7.19295 24.626 8.12345 26.3208 8.12345 26.3208C9.68508 29.0186 12.2058 28.2472 13.2176 27.7887C13.3626 26.6267 13.8301 25.8553 14.3266 25.4145C10.4369 24.9932 6.35121 23.4874 6.35121 16.7119C6.35121 14.7817 7.04818 13.204 8.15222 11.9705C7.9783 11.5492 7.36516 9.7271 8.32443 7.3031C8.32443 7.3031 9.80136 6.8353 13.1071 9.1139C14.5697 8.7275 16.0599 8.5308 17.5145 8.529C18.9691 8.529 20.5019 8.7343 21.9645 9.1139C25.2703 6.8353 26.7472 7.3031 26.7472 7.3031C27.7065 9.7271 27.093 11.5492 26.9194 11.9705C28.0532 13.204 28.7214 14.7817 28.7214 16.7119C28.7214 23.4874 24.6364 24.9644 20.7179 25.4145C21.3406 25.9681 21.8755 27.0243 21.8755 28.6877C21.8755 31.0451 21.8468 32.9379 21.8468 33.528C21.8468 33.9869 22.1574 34.5486 23.0356 34.3712C30.0078 31.9846 34.9999 25.4527 34.9999 17.6446C35.0286 7.8872 27.172 0 17.5145 0Z"
										fill="white"
										/>
								</g>
								<defs>
									<clipPath id="clip0_10_230">
										<rect width="35" height="35" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</a>
					</div>
					<div className="profileImage">
						<a href="https://www.linkedin.com/in/edward-sorrie">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="35"
								height="35"
								viewBox="0 0 35 35"
								fill="none"
								>
								<g clip-path="url(#clip0_10_228)">
									<path
										d="M32.4092 0H2.58398C1.15527 0 0 1.12793 0 2.52246V32.4707C0 33.8652 1.15527 35 2.58398 35H32.4092C33.8379 35 35 33.8652 35 32.4775V2.52246C35 1.12793 33.8379 0 32.4092 0ZM10.3838 29.8252H5.18848V13.1182H10.3838V29.8252ZM7.78613 10.8418C6.11816 10.8418 4.77148 9.49512 4.77148 7.83398C4.77148 6.17285 6.11816 4.82617 7.78613 4.82617C9.44727 4.82617 10.7939 6.17285 10.7939 7.83398C10.7939 9.48828 9.44727 10.8418 7.78613 10.8418ZM29.8252 29.8252H24.6367V21.7041C24.6367 19.7695 24.6025 17.2744 21.9365 17.2744C19.2363 17.2744 18.8262 19.3867 18.8262 21.5674V29.8252H13.6445V13.1182H18.6211V15.4014H18.6895C19.3799 14.0889 21.0752 12.7012 23.5977 12.7012C28.8545 12.7012 29.8252 16.1602 29.8252 20.6582V29.8252Z"
										fill="white"
										/>
								</g>
									<defs>
									<clipPath id="clip0_10_228">
										<rect width="35" height="35" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</a>
					</div>
				</div>
				<Current />
				<Projects />
			</div>
		</>
	);
}

export default App;


// TODO: Apply responsive css
// Contact box animation (load from bottom?)