import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <Container className='footer d-flex justify-content-between'>
      <Row>
        <Col>
          	<p className="footer-text">Contact :</p>
				<ul>
					<li>Appelez-moi au 06 95 43 22 28</li>
					<li>Lun-Ven : 9h-18h</li>
				</ul>
        </Col>
        <Col>
			<p className="footer-text">Adresse :</p>
			<p>1, Avenue Louis Lachenal</p>
			<p>91280 Saint Pierre du Perray</p>
        </Col>
        <Col>
			<p className="footer-text">Copyright 2024 <a href="mailto:nirina.velosonina@gmail.com">Nirina VELOSONINA</a></p>
			<div>
				<a href="#linkedin">
					<svg width="24" height="24" viewBox="0 0 448 512" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" stroke="#5B32FF" strokeWidth="1.54633" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</a>
				<a href="#facebook">
					<svg width="24" height="24" viewBox="0 0 448 512" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M27.3702 2.96387H22.9245C20.9594 2.96387 19.0748 3.74451 17.6852 5.13405C16.2957 6.5236 15.515 8.40823 15.515 10.3733V14.819H11.0693V20.7466H15.515V32.6018H21.4426V20.7466H25.8883L27.3702 14.819H21.4426V10.3733C21.4426 9.98032 21.5987 9.6034 21.8766 9.32549C22.1546 9.04758 22.5315 8.89145 22.9245 8.89145H27.3702V2.96387Z" stroke="#5B32FF" strokeWidth="1.54633" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</a>
				<a href="#twitter">
					<svg width="24" height="24" viewBox="0 0 448 512" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M34.6491 4.53834C33.23 5.53933 31.6588 6.30492 29.9959 6.80564C29.1034 5.77944 27.9173 5.0521 26.598 4.72198C25.2786 4.39187 23.8898 4.47491 22.6192 4.95987C21.3486 5.44483 20.2576 6.30832 19.4937 7.43354C18.7298 8.55877 18.33 9.89144 18.3482 11.2513V12.7332C15.744 12.8007 13.1635 12.2232 10.8365 11.0519C8.50953 9.88069 6.50834 8.15214 5.01115 6.02023C5.01115 6.02023 -0.916428 19.3573 12.4206 25.2849C9.36871 27.3565 5.73307 28.3953 2.04736 28.2487C15.3844 35.6582 31.6853 28.2487 31.6853 11.2069C31.6839 10.7941 31.6442 10.3823 31.5667 9.9769C33.0792 8.48536 34.1464 6.60219 34.6491 4.53834V4.53834Z" stroke="#5B32FF" strokeWidth="1.54633" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</a>
			</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;