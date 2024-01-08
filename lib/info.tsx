import me from '../app/avatar.jpg';

export const name = '3년차 주니어 프론트엔드 개발자';
export const avatar = me;
export const about = () => {
  return (
    <>
      안녕하세요 🙂 <br />
      동료들과 <b>함께</b> 목표 달성하는 것에 큰 성취감을 느끼고 <b>계획적</b>으로 일하는 것을 즐기는 <br />
      3년 차 Junior Front-End 개발자 <strong>이진우</strong> 라고 합니다. <br />
      저는 <b>비흡연자</b>이며 <b>축구⚽️</b> | <b>음악🎤</b> | <b>여행✈️</b> 등의 취미를 통해 적절한 스트레스 관리를 하며, 
      건강한 개발 일을 해나가고 있습니다.
      <br />
      <b>커피</b>를 아주 좋아합니다 ☕️
    </>
  );
};
export const bio = () => {
  return (
    <>
      저는 국립 경상대학교 정보통신공학과 학사 졸업 후 <b>스마트 빌딩 에너지 관리 IoT 솔루션 기업</b>의 SW 팀에서{' '}
      <b>'연구원'</b> 직급으로 근무 중이며, 주로 아래와 같은 업무들을 담당하고 있습니다.
      <div style={{ margin: '1em 0' }} />
      <ul style={{ marginLeft: 10 }}>
        <li style={{ fontWeight: 700 }}> 💡 자사 솔루션 웹 애플리케이션 웹 유지보수</li>
        <li style={{ fontWeight: 700 }}> 💡 자사 솔루션 웹 애플리케이션 신규 기능 설계</li>
        <li style={{ fontWeight: 700 }}> 💡 자사 솔루션 웹 애플리케이션 신규 기능 개발</li>
        <li style={{ fontWeight: 700 }}> 💡 신규 클라이언트 사이트 페이지 구축</li>
        <li style={{ fontWeight: 700 }}> 💡 팀 업무 관리 리더 </li>
        <li style={{ fontWeight: 700 }}> 💡 프론트엔드 코어 리더 </li>
        <li style={{ fontWeight: 700 }}> 💡 프론트엔드 코드 리뷰 리더 </li>
      </ul>
    </>
  );
};
