import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center gap-8 p-10">
            <p className="text-5xl text-black font-bold">무료 성격 테스트</p>
            <p className="text-xl text-black">자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
            <div className="flex gap-8">
                <div className="w-1/3 flex flex-col gap-4 bg-white rounded-lg shadow-lg p-8">
                    <p className="text-2xl text-black font-bold">성격 유형 검사</p>
                    <p className="text-base text-black">
                        자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지 알아보세요.
                    </p>
                </div>
                <div className="w-1/3 flex flex-col gap-4 bg-white rounded-lg shadow-lg p-8">
                    <p className="text-2xl text-black font-bold">성격 유형 이해</p>
                    <p className="text-base text-black">
                        다른 사람들이 어떻게 행동하는지 이해하는데 도움을 줄 수 있습니다.
                    </p>
                </div>
                <div className="w-1/3 flex flex-col gap-4 bg-white rounded-lg shadow-lg p-8">
                    <p className="text-2xl text-black font-bold">팀 평가</p>
                    <p className="text-base text-black">
                        팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을 배워보세요.
                    </p>
                </div>
            </div>
            <Button category="box" label="내 성격 알아보러 가기" handleClick={() => navigate('/test')} />
        </div>
    );
}
