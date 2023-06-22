import '../styles/MyNav.scss';
export default function MyNav() {
	return (
		<div className="mynav-body">
			<div className="my-list">
				<button>내가 만든 유니버스</button>
				<button>내가 참여한 유니버스</button>
				<button>찜한 유니버스</button>
				<button>프로필관리</button>
				<button>멤버쉽관리</button>
			</div>
			<div className="my-info">
				<div className="info-left">
					<div className="my-img"></div>
					<div className="my-name">000님 안녕하세요:)</div>
					<div className="my-dept">00학과 00학번</div>
					<button className="my-membership">멤버쉽 혜택 보기</button>
				</div>
				<div className="info-right">
					<div className="my-part">
						<div className="part-title">누적 참여 유니버스</div>
						<div className="part-cnt">10</div>
					</div>
					<div className="my-report">
						<div className="report-title">누적 신고 횟수</div>
						<div className="report-cnt">00</div>
					</div>
				</div>
			</div>
			<div className="my-group">
				<div className="group-title">What's up?</div>
				<div className="group-br"></div>
				<div className="group-button">
					<button>친구 만들기</button>
					<button>스터디</button>
					<button>취미모임</button>
					<button>밥 같이 먹기</button>
				</div>
			</div>
		</div>
	);
}
