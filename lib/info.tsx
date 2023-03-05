import me from '../app/avatar.jpg';

export const name = '2년차 주니어 프론트엔드 개발자';
export const avatar = me;
export const about = () => {
	return (
		<>
			안녕하세요. <br />
			아직 최고는 아니지만 최고를 향해 한 걸음씩 전진하는 2년차 주니어
			프론트엔드 개발자입니다.
		</>
	);
};
export const bio = () => {
	return (
		<>
			저는 국립 경상대학교 정보통신공학과 학사 졸업 후{' '}
			<b>스마트 빌딩 에너지 관리 IoT 솔루션 기업</b>의 플랫폼서비스 팀에서
			'연구원' 직급으로 재직 중이며, 주요 담당 업무는 아래와 같습니다.
			<div style={{ margin: '1em 0' }} />
			<ul style={{ marginLeft: 10 }}>
				<li style={{ fontWeight: 700 }}>
					- 자사 솔루션 웹 애플리케이션 유지보수
				</li>
				<li style={{ fontWeight: 700 }}>
					- 자사 솔루션 웹 애플리케이션 신규 기능 설계
				</li>
				<li style={{ fontWeight: 700 }}>
					- 자사 솔루션 웹 애플리케이션 신규 기능 개발
				</li>
				<li style={{ fontWeight: 700 }}>
					- 신규 클라이언트 사이트 페이지 구축
				</li>
				<li style={{ fontWeight: 700 }}>- 팀 업무 일정 관리</li>
			</ul>
		</>
	);
};
